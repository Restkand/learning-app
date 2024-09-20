import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    CredentialsProvider({
      type: 'credentials',
      name: 'Credentials',
      credentials: {
        name: { label: 'Username', type: 'text' }, // Gunakan 'name' sebagai username
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.name) {
          throw new Error('Username is required');
        }
      
        // Cari user berdasarkan kolom 'name'
        const user = await prisma.user.findFirst({
          where: { name: credentials.name as string },
        });
      
        // Verifikasi password
        if (user && credentials.password === user.password) {
          // Konversi id menjadi string
          return { id: String(user.id), name: user.name, email: user.email };
        } else {
          throw new Error('Invalid credentials');
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  secret: process.env.NEXTAUTH_SECRET,
});

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
        if (!credentials) {
          throw new Error('No credentials provided');
        }

        if (!credentials.name) {
          throw new Error('Username is required');
        }

        // Cari user berdasarkan kolom 'name'
        const user = await prisma.user.findFirst({
          where: { name: credentials.name },
        });

        if (user && credentials.password === user.password) {
          return { id: user.id.toString(), name: user.name, email: user.email };
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
  
  callbacks: {
    async jwt({ token, user }) {
      // Jika user ada, tambahkan info user ke dalam token
      if (user) {
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      // Ambil informasi dari token dan tambahkan ke session
      if (session.user) {
        session.user.name = token.name
        session.user.email = token.email
      }
      return session;
    },
  },
});

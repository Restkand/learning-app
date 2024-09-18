import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  // Jika tidak ada token dan tidak berada di halaman login, redirect ke halaman login
  if (!token && pathname !== "/auth/login") {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  // Jika ada token, lanjutkan ke permintaan berikutnya
  return NextResponse.next();
}

// Konfigurasi untuk menentukan rute yang menggunakan middleware
export const config = {
  matcher: ['/'], // Sesuaikan dengan rute yang perlu dilindungi
};

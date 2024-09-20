import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import '../globals.css';
import Image from 'next/image';
import Link from 'next/link';
import LoginImgL from '../assets/img/login-office.jpeg';
import LoginImgD from '../assets/img/login-office-dark.jpeg';
import { Input } from "@/components/ui/input"


export default function LoginPage() {
  const [name, setName] = useState(""); // Menggunakan 'name' bukan 'email'
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Set dark mode jika ada di local storage
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      name,  
      password,
    });

    // console.log(res);

    if (res && res.ok) {
      router.push("/");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-950">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-900">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
          <Image
            aria-hidden="true"
            className="object-cover w-full h-full dark:hidden"
            src={LoginImgD}
            alt="Office"
            layout="responsive"
            width={200}
            height={100}
          />
          <Image
            aria-hidden="true"
            className="hidden object-cover w-full h-full dark:block"
            src={LoginImgD}
            alt="Office"
            layout="responsive"
            width={300}
            height={200}
          />
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Login
              </h1>
              <form onSubmit={handleSubmit}>
                <label className="block text-sm">
                  <span className="text-gray-700 dark:text-gray-400">Name</span> 
                  <Input
                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700 dark:text-gray-400">Password</span>
                  <Input
                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    placeholder="***************"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>

                <button
                  type="submit"
                  className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                >
                  Log in
                </button>
              </form>

              <hr className="my-8" />

              <button
                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  {/* Github SVG */}
                </svg>
                Github
              </button>
              <button
                className="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  {/* Twitter SVG */}
                </svg>
                Twitter
              </button>

              <p className="mt-4">
              <Link 
                  href="/auth/forgot-password" 
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                >
                  Forgot your password?
                </Link>
              </p>
              <p className="mt-1">
              <Link 
                  href="/auth/create-account" 
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                >
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

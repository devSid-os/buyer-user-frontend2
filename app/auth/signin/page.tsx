// app/auth/signin/page.tsx
"use client";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import Image from "next/image";

const Signin = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Sign In</h2>

        <form className="space-y-4 mb-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 text-gray-600 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 text-gray-600 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-200"
          >
            Sign In
          </button>
        </form>

        <div className="relative flex items-center justify-center mb-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <div className="flex-shrink mx-4 text-gray-500">Or</div>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="text-center text-gray-500 mb-4">continue with</div>

        <button
          onClick={signInWithGoogle}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-200"
        >
          <Image 
            src="/google.svg" 
            alt="Google" 
            width={20} 
            height={20}
            className="w-5 h-5"
          />
          <span className="text-gray-700">Sign in with Google</span>
        </button>

        <div className="mt-6 text-center">
          <Link 
            href="#" 
            className="text-blue-500 hover:underline"
          >
            Forgot your password?
          </Link>
          <p className="mt-4 text-gray-600">
            Don't have an account?{" "}
            <Link 
              href="/auth/signup" 
              className="text-blue-500 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
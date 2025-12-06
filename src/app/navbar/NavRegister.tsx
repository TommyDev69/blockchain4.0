'use client'

import Link from 'next/link';

export default function NavRegister() {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-full md:w-[25%]">
      
      {/* Sign Up Button */}
      <Link href="/navbar/SignUpProcess">
        <button className="w-full md:w-auto rounded-lg border-2 border-purple-500
          bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3
          hover:scale-105 transition-transform duration-200"
        >
          <p className="text-white text-sm md:text-base font-extrabold uppercase text-center">
            Sign Up
          </p>
        </button>
      </Link>

      {/* Sign In Button */}
      <Link href="/navbar/SignInProcess">
        <button className="w-full md:w-auto rounded-lg border-2 border-purple-500
          bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3
          hover:scale-105 transition-transform duration-200"
        >
          <p className="text-white text-sm md:text-base font-extrabold uppercase text-center">
            Sign In
          </p>
        </button>
      </Link>

    </div>
  );
}

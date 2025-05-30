"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { CircularProgress } from "@mui/material";

export default function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loadingProvider, setLoadingProvider] = useState("");

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/"); // Redirect authenticated users to /chat
    }
  }, [status, router]);

  const handleOAuthLogin = async (provider) => {
    setLoadingProvider(provider);
    await signIn(provider, { callbackUrl: "/chat" });
    setLoadingProvider("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="relative bg-white p-8 sm:p-12 rounded-2xl shadow-xl w-full max-w-lg border border-gray-200">
        <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6 sm:mb-8">
          Welcome Back!
        </h2>
        <p className="text-center text-gray-600 text-lg mb-8 sm:mb-10 max-w-xs mx-auto">
          Sign in to continue your journey with ProviderTest.
        </p>

        {/* Google Login Button */}
        <button
          onClick={() => handleOAuthLogin("google")}
          className={`w-full flex items-center justify-center gap-3 px-6 py-4 text-lg font-semibold rounded-xl shadow-sm transition-all duration-300 ease-in-out mb-5 border border-gray-300
            ${loadingProvider === "google" ? "bg-gray-100 text-gray-500 cursor-not-allowed" : "text-gray-700 hover:bg-gray-50"}
          `}
          disabled={!!loadingProvider}
        >
          {loadingProvider === "google" ? (
            <>
              <CircularProgress size={24} color="inherit" />
              <span className="ml-2">Signing in...</span>
            </>
          ) : (
            <>
              <FaGoogle className="text-2xl" style={{ color: "#EA4335" }} />
              <span>Sign in with Google</span>
            </>
          )}
        </button>

        {/* GitHub Login Button */}
        <button
          onClick={() => handleOAuthLogin("github")}
          className={`w-full flex items-center justify-center gap-3 px-6 py-4 text-lg font-semibold rounded-xl shadow-sm transition-all duration-300 ease-in-out border border-gray-300
            ${loadingProvider === "github" ? "bg-gray-100 text-gray-500 cursor-not-allowed" : "text-gray-700 hover:bg-gray-50"}
          `}
          disabled={!!loadingProvider}
        >
          {loadingProvider === "github" ? (
            <>
              <CircularProgress size={24} color="inherit" />
              <span className="ml-2">Signing in...</span>
            </>
          ) : (
            <>
              <FaGithub className="text-2xl text-gray-800" />
              <span>Sign in with GitHub</span>
            </>
          )}
        </button>

        <div className="relative flex items-center justify-center my-8">
          <div className="absolute inset-x-0 h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
          <span className="relative z-10 bg-white px-4 text-gray-400 font-medium tracking-wide">
            or
          </span>
        </div>
        <p className="text-center text-gray-500 text-sm">
          Having trouble?{" "}
          <a
            href="#"
            className="text-indigo-600 hover:underline font-semibold transition-colors duration-200"
          >
            Contact Support
          </a>
        </p>
      </div>
    </div>
  );
}
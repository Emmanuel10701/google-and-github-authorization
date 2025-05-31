"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import {
  FaKey,
  FaGitAlt,
  FaGoogle,
  FaCloud,
  FaRocket,
  FaBug,
  FaTools,
  FaCheckCircle,
  FaStar,
  FaLightbulb,
  FaHeadset,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import { CircularProgress } from "@mui/material";

export default function LandingPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (status === "loading") return;
    if (!session) router.push("/login");
  }, [session, status, router]);

  const handleLoginRedirect = () => {
    setLoading(true);
    router.push("/login");
  };

  const handleLogout = () => {
    signOut({ callbackUrl: "/login" });
  };

  // Helper to get provider name from session
  const getProviderName = () => {
    if (!session) return null;
    if (session.user?.email?.includes("gmail.com")) return "Google";
    if (session.user?.login || session.user?.email?.includes("github.com")) return "GitHub";
    return "OAuth Provider";
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-800">
        <CircularProgress size={60} className="text-white" />
      </div>
    );
  }

  if (!session) return null;

  // User info card
  const providerName = getProviderName();
  const user = session.user;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top User Card */}
    

      {/* Header */}
      <header className="bg-indigo-800 text-white py-5 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-extrabold">ProviderTest</h1>
          <nav>
            <ul className="flex space-x-6 text-lg">
              <li>
                <a href="#features" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:underline">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:underline">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#get-started" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#footer" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>




        <div className="bg-white shadow-md rounded-b-2xl px-4 py-4 sm:px-8 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-gray-200">
        <div className="flex items-center gap-4">
          {user?.image ? (
            <img
              src={user.image}
              alt="User avatar"
              className="w-14 h-14 rounded-full border"
            />
          ) : (
            <FaUserCircle className="w-14 h-14 text-gray-400" />
          )}
          <div>
            <div className="font-bold text-lg sm:text-xl text-gray-800 flex items-center gap-2">
              {user?.name || user?.email || "User"}
              <span className="text-xs sm:text-sm px-2 py-1 bg-indigo-100 text-indigo-700 rounded ml-2">
                {providerName}
              </span>
            </div>
            <div className="text-gray-500 text-sm">{user?.email}</div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition text-sm font-semibold"
          >
            <FaSignOutAlt /> Logout
          </button>
          <button
            onClick={handleLoginRedirect}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition text-sm font-semibold"
          >
            Integrate Another Provider
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <main className="flex-grow bg-gray-100">
        <div className="container mx-auto text-center py-10 px-3 sm:py-16 sm:px-6">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Effortless Testing for OAuth & API Providers
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Streamline your integration testing with platforms like Google and GitHub.
            Ensure robust and secure connections with our specialized tools.
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleLoginRedirect}
              className="bg-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-indigo-700 flex items-center justify-center transition-all duration-300 shadow-md"
              disabled={loading}
            >
              {loading ? (
                <>
                  <CircularProgress size={24} color="inherit" />
                  <span className="ml-2">Processing...</span>
                </>
              ) : (
                "Get Started"
              )}
            </button>
          </div>
        </div>

        {/* Features Section */}
        <section id="features" className="container mx-auto py-10 sm:py-16 px-3 sm:px-6">
          <h3 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-10 text-gray-900">Key Capabilities</h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8">
            <div className="p-4 sm:p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <FaKey size={28} className="text-indigo-600 mb-2 sm:mb-4" />
              <h4 className="text-base sm:text-xl font-semibold">Secure Authentication Flows</h4>
              <p className="text-gray-600 mt-2 sm:mt-3 text-xs sm:text-base">
                Verify OAuth 2.0 and OpenID Connect implementations with ease.
              </p>
            </div>
            <div className="p-4 sm:p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <FaGitAlt size={28} className="text-gray-700 mb-2 sm:mb-4" />
              <h4 className="text-base sm:text-xl font-semibold">GitHub Integration Testing</h4>
              <p className="text-gray-600 mt-2 sm:mt-3 text-xs sm:text-base">
                Test your GitHub API interactions and webhook configurations.
              </p>
            </div>
            <div className="p-4 sm:p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <FaGoogle size={28} className="text-red-500 mb-2 sm:mb-4" />
              <h4 className="text-base sm:text-xl font-semibold">Google API Verification</h4>
              <p className="text-gray-600 mt-2 sm:mt-3 text-xs sm:text-base">
                Ensure your Google Workspace and other API integrations work flawlessly.
              </p>
            </div>
            <div className="p-4 sm:p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <FaCloud size={28} className="text-blue-600 mb-2 sm:mb-4" />
              <h4 className="text-base sm:text-xl font-semibold">Cloud Provider Compatibility</h4>
              <p className="text-gray-600 mt-2 sm:mt-3 text-xs sm:text-base">
                Test integrations across various cloud platforms and services.
              </p>
            </div>
            <div className="p-4 sm:p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <FaRocket size={28} className="text-purple-600 mb-2 sm:mb-4" />
              <h4 className="text-base sm:text-xl font-semibold">Rapid Test Deployment</h4>
              <p className="text-gray-600 mt-2 sm:mt-3 text-xs sm:text-base">
                Quickly set up and run tests for your provider integrations.
              </p>
            </div>
            <div className="p-4 sm:p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <FaBug size={28} className="text-orange-600 mb-2 sm:mb-4" />
              <h4 className="text-base sm:text-xl font-semibold">Detailed Error Reporting</h4>
              <p className="text-gray-600 mt-2 sm:mt-3 text-xs sm:text-base">
                Pinpoint integration issues with comprehensive error logs and insights.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="container mx-auto py-10 sm:py-16 px-3 sm:px-6 bg-white rounded-xl shadow-lg mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">How It Works</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-100 p-4 sm:p-6 rounded-full mb-4 sm:mb-6">
                <FaTools size={32} className="text-indigo-600" />
              </div>
              <h4 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-3">1. Configure Your Test</h4>
              <p className="text-gray-700 text-xs sm:text-base">
                Easily set up your testing scenarios for Google, GitHub, or any other OAuth/API provider. No complex coding required.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-4 sm:p-6 rounded-full mb-4 sm:mb-6">
                <FaCheckCircle size={32} className="text-green-600" />
              </div>
              <h4 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-3">2. Run Tests Automatically</h4>
              <p className="text-gray-700 text-xs sm:text-base">
                Initiate automated tests that simulate real-world interactions and flows. Get instant feedback on success or failure.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-yellow-100 p-4 sm:p-6 rounded-full mb-4 sm:mb-6">
                <FaLightbulb size={32} className="text-yellow-600" />
              </div>
              <h4 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-3">3. Analyze Results & Optimize</h4>
              <p className="text-gray-700 text-xs sm:text-base">
                Receive detailed reports, identify bottlenecks, and get actionable insights to optimize your integrations.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-gray-100 py-10 sm:py-16 px-3 sm:px-6">
          <div className="container mx-auto text-center">
            <h3 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">What Our Users Say</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-4 sm:p-8 bg-white rounded-xl shadow-lg flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
                <FaStar size={20} className="text-yellow-500 mb-2 sm:mb-4" />
                <p className="italic text-gray-700 mb-2 sm:mb-4 text-xs sm:text-base">
                  "ProviderTest has drastically cut down our integration testing time. It's an indispensable tool for our development workflow!"
                </p>
                <p className="font-semibold text-gray-800 text-xs sm:text-base">- Jane Doe, Lead Developer at TechCorp</p>
              </div>
              <div className="p-4 sm:p-8 bg-white rounded-xl shadow-lg flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
                <FaStar size={20} className="text-yellow-500 mb-2 sm:mb-4" />
                <p className="italic text-gray-700 mb-2 sm:mb-4 text-xs sm:text-base">
                  "The detailed error reporting helped us fix a critical bug in our Google OAuth flow. Highly recommend!"
                </p>
                <p className="font-semibold text-gray-800 text-xs sm:text-base">- John Smith, CTO of InnovateX</p>
              </div>
              <div className="p-4 sm:p-8 bg-white rounded-xl shadow-lg flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
                <FaStar size={20} className="text-yellow-500 mb-2 sm:mb-4" />
                <p className="italic text-gray-700 mb-2 sm:mb-4 text-xs sm:text-base">
                  "Setting up tests for GitHub webhooks was never easier. ProviderTest made it a breeze to ensure everything works as expected."
                </p>
                <p className="font-semibold text-gray-800 text-xs sm:text-base">- Alice Brown, DevOps Engineer at CodeFlow</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action / Pricing Tease Section */}
        <section id="get-started" className="bg-indigo-700 text-white py-10 sm:py-16 px-3 sm:px-6 text-center">
          <div className="container mx-auto">
            <h3 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">Ready to Supercharge Your Integrations?</h3>
            <p className="text-base sm:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto">
              Choose a plan that fits your testing needs, from individual projects to enterprise-level solutions.
            </p>
            <button
              onClick={handleLoginRedirect}
              className="bg-white text-indigo-700 px-6 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-xl font-semibold hover:bg-gray-200 transition-all duration-300 shadow-lg"
              disabled={loading}
            >
              {loading ? (
                <>
                  <CircularProgress size={24} color="inherit" />
                  <span className="ml-2">Loading...</span>
                </>
              ) : (
                "Explore Plans"
              )}
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className="bg-gray-900 text-white py-6 sm:py-8">
        <div className="container mx-auto text-center">
          <p className="text-base sm:text-lg font-light">
            &copy; {new Date().getFullYear()} ProviderTest. All rights reserved.
          </p>
          <div className="text-xs sm:text-sm mt-2">
            <a href="#privacy-policy" className="hover:underline mx-2">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#terms-of-service" className="hover:underline mx-2">
              Terms of Service
            </a>{" "}
            |{" "}
            <a href="#support" className="hover:underline mx-2 flex items-center justify-center">
              <FaHeadset className="inline-block mr-1" /> Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
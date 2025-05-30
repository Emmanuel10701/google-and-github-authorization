"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react"; // Import useSession
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
} from "react-icons/fa";
import { CircularProgress } from "@mui/material";

export default function LandingPage() {
  const router = useRouter();
  const { data: session, status } = useSession(); // Get session data and status
  const [loading, setLoading] = useState(false);

  // Effect to check authentication status
  useEffect(() => {
    // If session status is "loading", do nothing yet
    if (status === "loading") return;

    // If there's no session (user is not logged in), redirect to login
    if (!session) {
      router.push("/login");
    }
    // No else here; if session exists, the component will render normally
  }, [session, status, router]); // Depend on session, status, and router for effect re-run

  const handleLoginRedirect = () => {
    setLoading(true);
    // In this protected page scenario, this button might change its function
    // For now, it still redirects to /login, but typically, authenticated users
    // would access different features here.
    alert("Redirecting to login/dashboard...");
    setTimeout(() => {
      router.push("/login"); // Or a dashboard page for logged-in users
    }, 2000);
  };

  // Show a loading state or nothing while authentication status is being determined
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-800">
        <CircularProgress size={60} className="text-white" />
      </div>
    );
  }

  // If there's no session after loading, this component won't render
  // because the useEffect already pushed to /login.
  // This part only renders if session exists.
  if (!session) {
      // This return should technically not be reached if the push happens fast,
      // but it's a fallback or for very slow redirects.
      return null;
  }


  // --- Rest of your existing LandingPage component code (only rendered if session exists) ---
  return (
    <div className="flex flex-col min-h-screen">
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

      {/* Hero Section */}
      <main className="flex-grow bg-gray-100">
        <div className="container mx-auto text-center py-24 px-6">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Effortless Testing for OAuth & API Providers
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Streamline your integration testing with platforms like Google and GitHub.
            Ensure robust and secure connections with our specialized tools.
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleLoginRedirect}
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 flex items-center justify-center transition-all duration-300 shadow-md"
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
        <section id="features" className="container mx-auto py-20 px-6">
          <h3 className="text-4xl font-bold text-center mb-10 text-gray-900">Key Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <FaKey size={40} className="text-indigo-600 mb-4" />
              <h4 className="text-xl font-semibold">Secure Authentication Flows</h4>
              <p className="text-gray-600 mt-3">
                Verify OAuth 2.0 and OpenID Connect implementations with ease.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <FaGitAlt size={40} className="text-gray-700 mb-4" />
              <h4 className="text-xl font-semibold">GitHub Integration Testing</h4>
              <p className="text-gray-600 mt-3">
                Test your GitHub API interactions and webhook configurations.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <FaGoogle size={40} className="text-red-500 mb-4" />
              <h4 className="text-xl font-semibold">Google API Verification</h4>
              <p className="text-gray-600 mt-3">
                Ensure your Google Workspace and other API integrations work flawlessly.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <FaCloud size={40} className="text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold">Cloud Provider Compatibility</h4>
              <p className="text-gray-600 mt-3">
                Test integrations across various cloud platforms and services.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <FaRocket size={40} className="text-purple-600 mb-4" />
              <h4 className="text-xl font-semibold">Rapid Test Deployment</h4>
              <p className="text-gray-600 mt-3">
                Quickly set up and run tests for your provider integrations.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <FaBug size={40} className="text-orange-600 mb-4" />
              <h4 className="text-xl font-semibold">Detailed Error Reporting</h4>
              <p className="text-gray-600 mt-3">
                Pinpoint integration issues with comprehensive error logs and insights.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="container mx-auto py-20 px-6 bg-white rounded-xl shadow-lg mb-12">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-100 p-6 rounded-full mb-6">
                <FaTools size={50} className="text-indigo-600" />
              </div>
              <h4 className="text-2xl font-semibold mb-3">1. Configure Your Test</h4>
              <p className="text-gray-700">
                Easily set up your testing scenarios for Google, GitHub, or any other OAuth/API provider. No complex coding required.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-6 rounded-full mb-6">
                <FaCheckCircle size={50} className="text-green-600" />
              </div>
              <h4 className="text-2xl font-semibold mb-3">2. Run Tests Automatically</h4>
              <p className="text-gray-700">
                Initiate automated tests that simulate real-world interactions and flows. Get instant feedback on success or failure.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-yellow-100 p-6 rounded-full mb-6">
                <FaLightbulb size={50} className="text-yellow-600" />
              </div>
              <h4 className="text-2xl font-semibold mb-3">3. Analyze Results & Optimize</h4>
              <p className="text-gray-700">
                Receive detailed reports, identify bottlenecks, and get actionable insights to optimize your integrations.
              </p>
            </div >
          </div >
        </section >

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-gray-100 py-20 px-6">
          <div className="container mx-auto text-center">
            <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">What Our Users Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-xl shadow-lg flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
                <FaStar size={24} className="text-yellow-500 mb-4" />
                <p className="italic text-gray-700 mb-4">
                  "ProviderTest has drastically cut down our integration testing time. It's an indispensable tool for our development workflow!"
                </p>
                <p className="font-semibold text-gray-800">- Jane Doe, Lead Developer at TechCorp</p>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-lg flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
                <FaStar size={24} className="text-yellow-500 mb-4" />
                <p className="italic text-gray-700 mb-4">
                  "The detailed error reporting helped us fix a critical bug in our Google OAuth flow. Highly recommend!"
                </p>
                <p className="font-semibold text-gray-800">- John Smith, CTO of InnovateX</p>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-lg flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
                <FaStar size={24} className="text-yellow-500 mb-4" />
                <p className="italic text-gray-700 mb-4">
                  "Setting up tests for GitHub webhooks was never easier. ProviderTest made it a breeze to ensure everything works as expected."
                </p>
                <p className="font-semibold text-gray-800">- Alice Brown, DevOps Engineer at CodeFlow</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action / Pricing Tease Section */}
        <section id="get-started" className="bg-indigo-700 text-white py-20 px-6 text-center">
          <div className="container mx-auto">
            <h3 className="text-4xl font-bold mb-6">Ready to Supercharge Your Integrations?</h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Choose a plan that fits your testing needs, from individual projects to enterprise-level solutions.
            </p>
            <button
              onClick={handleLoginRedirect} // Can link to a /pricing page or directly to login
              className="bg-white text-indigo-700 px-10 py-4 rounded-lg text-xl font-semibold hover:bg-gray-200 transition-all duration-300 shadow-lg"
              disabled={loading}
            >
              {loading ? (
                <>
                  <CircularProgress size={28} color="inherit" />
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
      <footer id="footer" className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-lg font-light">
            &copy; {new Date().getFullYear()} ProviderTest. All rights reserved.
          </p>
          <div className="text-sm mt-2">
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
    </div >
  );
}
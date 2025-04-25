
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="text-primary hover:underline">
          Go back to the homepage
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;

import React from "react";
import { Link } from "react-router-dom";
import { Home, AlertCircle } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4 text-center">
      <div className="animate-bounce mb-8">
        <AlertCircle size={120} className="text-error" />
      </div>
      <h1 className="text-9xl font-black text-base-content/10 absolute select-none">
        404
      </h1>
      <div className="relative z-10">
        <h2 className="text-5xl font-extrabold mb-4">Page Not Found</h2>
        <p className="text-lg opacity-70 mb-12 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved to
          another universe.
        </p>
        <Link
          to="/"
          className="btn btn-primary btn-lg gap-2 shadow-xl hover:scale-105 transition-transform"
        >
          <Home size={24} /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

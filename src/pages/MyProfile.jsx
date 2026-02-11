import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Mail, User, UserCircle, Edit2, Settings } from "lucide-react";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="pb-16 max-w-2xl mx-auto px-4">
      {/* Cover Section */}
      <div
        className="relative h-48 bg-gradient-to-r from-primary to-secondary rounded-3xl mb-16 shadow-lg"
        data-aos="fade-down"
      >
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
          <div className="avatar">
            <div className="w-32 h-32 rounded-full ring ring-base-100 ring-offset-base-100 ring-offset-4 shadow-xl">
              <img src={user?.photoURL} alt={user?.displayName} />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-3xl md:text-4xl font-black text-white drop-shadow-lg opacity-80 uppercase tracking-widest px-4 text-center">
            Welcome, {user?.displayName}!
          </h1>
        </div>
      </div>

      {/* Profile Card */}
      <div
        className="bg-base-100 rounded-3xl shadow-xl p-8 border border-base-200"
        data-aos="fade-up"
      >
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-base-200">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <UserCircle className="text-primary" /> Profile Details
          </h2>
          <Link to="/update-profile" className="btn btn-primary btn-sm gap-2">
            <Edit2 size={16} /> Update Info
          </Link>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold uppercase tracking-wider opacity-50">
              Full Name
            </span>
            <div className="flex items-center gap-3 text-lg font-medium p-3 bg-base-200 rounded-xl">
              <User size={20} className="text-primary" />
              {user?.displayName}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold uppercase tracking-wider opacity-50">
              Email Address
            </span>
            <div className="flex items-center gap-3 text-lg font-medium p-3 bg-base-200 rounded-xl">
              <Mail size={20} className="text-primary" />
              {user?.email}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold uppercase tracking-wider opacity-50">
              Account Status
            </span>
            <div className="flex items-center gap-3 text-lg font-medium p-3 bg-base-200 rounded-xl">
              <span className="badge badge-success badge-sm">
                Verified Account
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-primary/10 rounded-2xl flex items-center gap-4 text-primary">
          <Settings className="animate-spin-slow" />
          <p className="text-sm font-medium">
            Want to manage more settings? Head over to the developer dashboard
            for advanced options.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

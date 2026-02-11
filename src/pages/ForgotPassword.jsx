import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Mail, Key, Send, ArrowLeft } from "lucide-react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "../utils/firebase.config";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const auth = getAuth(app);

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please provide an email address.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent!");
        // Redirect to gmail and logout as per requirement
        window.open("https://mail.google.com", "_blank");
        logOut().then(() => {
          navigate("/login");
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div
        className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-200"
        data-aos="zoom-in"
      >
        <div className="card-body">
          <div className="flex items-center gap-2 mb-6">
            <button
              onClick={() => navigate(-1)}
              className="btn btn-ghost btn-circle btn-sm"
            >
              <ArrowLeft size={18} />
            </button>
            <h2 className="text-2xl font-bold">Reset Password</h2>
          </div>

          <p className="text-sm opacity-70 mb-8">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>

          <form onSubmit={handleReset} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">EmailAddress</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                  className="input input-bordered w-full pl-10"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50"
                  size={18}
                />
              </div>
            </div>

            <div className="form-control mt-8">
              <button className="btn btn-primary w-full gap-2 font-bold shadow-lg">
                <Send size={18} /> Send Reset Link
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

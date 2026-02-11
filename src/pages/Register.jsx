import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Link as LinkIcon,
  Lock,
  Eye,
  EyeOff,
  UserPlus,
} from "lucide-react";
import toast from "react-hot-toast";

const Register = () => {
  const { createNewUser, updateUserProfile, setUser, signInWithGoogle } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    // Validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must have at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must have at least one lowercase letter.");
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...result.user, displayName: name, photoURL: photo });
            toast.success("Account Created Successfully!");
            navigate("/");
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success("Login Successful with Google!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div
        className="card w-full max-w-lg bg-base-100 shadow-2xl border border-base-200"
        data-aos="fade-up"
      >
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-6">
            Create Account
          </h2>
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Full Name</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="input input-bordered w-full pl-10"
                  required
                />
                <User
                  className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50"
                  size={18}
                />
              </div>
            </div>
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
                />
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50"
                  size={18}
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="photo"
                  placeholder="https://example.com/photo.jpg"
                  className="input input-bordered w-full pl-10"
                  required
                />
                <LinkIcon
                  className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50"
                  size={18}
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="******"
                  className="input input-bordered w-full pl-10"
                  required
                />
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50"
                  size={18}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {error && (
                <p className="text-error text-xs mt-1 font-medium">{error}</p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full gap-2">
                <UserPlus size={20} /> Register
              </button>
            </div>
          </form>

          <div className="divider text-sm opacity-50 uppercase mt-8">OR</div>

          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full gap-2 border-base-300"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-5"
            />
            Register with Google
          </button>

          <p className="text-center mt-6 text-sm">
            Already have an account?
            <Link to="/login" className="link link-primary font-bold ml-1">
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

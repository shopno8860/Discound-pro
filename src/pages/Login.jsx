import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail, Lock, LogIn, Github, Chrome } from "lucide-react";
import toast from "react-hot-toast";

const Login = () => {
  const { userLogin, signInWithGoogle, setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("Login Successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success("Login Successful with Google!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div
        className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-200"
        data-aos="zoom-in"
      >
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-6">Welcome Back!</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="******"
                  className="input input-bordered w-full pl-10"
                  required
                />
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50"
                  size={18}
                />
              </div>
              <label className="label">
                <Link
                  to="/forgot-password"
                  state={{ email }}
                  className="label-text-alt link link-hover text-primary"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full gap-2">
                <LogIn size={20} /> Login
              </button>
            </div>
          </form>

          <div className="divider text-sm opacity-50 uppercase mt-8">OR</div>

          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full gap-2 hover:bg-base-200 hover:text-base-content border-base-300"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-5"
            />
            Sign in with Google
          </button>

          <p className="text-center mt-6 text-sm">
            Don't have an account?
            <Link to="/register" className="link link-primary font-bold ml-1">
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

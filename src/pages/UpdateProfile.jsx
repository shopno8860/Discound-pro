import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { User, Image, Save, ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const { user, updateUserProfile, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    updateUserProfile({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("Profile Updated Successfully!");
        navigate("/my-profile");
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
            <h2 className="text-2xl font-bold">Update Profile</h2>
          </div>

          <form onSubmit={handleUpdate} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Display Name</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
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
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="photo"
                  defaultValue={user?.photoURL}
                  className="input input-bordered w-full pl-10"
                  required
                />
                <Image
                  className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50"
                  size={18}
                />
              </div>
            </div>

            <div className="form-control mt-8">
              <button className="btn btn-primary w-full gap-2 font-bold shadow-lg">
                <Save size={20} /> Update Information
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;

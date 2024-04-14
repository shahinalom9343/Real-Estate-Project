import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UpdatePro = () => {
  const { user, updateUserProfile, createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(user);

  // update the user
  const updateUser = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoURL = form.get("photoURL");
    console.log(name, photoURL);
    createUser(name, photoURL).then(() => {
      updateUserProfile(user.displayName, user.photoURL).then(() => {
        navigate(location?.state || "/");
      });
      toast("updated successfully");
    });
  };
  return (
    <div>
      <Helmet>
        <title>Axis | Update Profile</title>
      </Helmet>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col">
          <div className="card shrink-0 shadow-2xl bg-base-100 ">
            <form className="card-body" onSubmit={updateUser}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name:</span>
                </label>
                <input
                  type="text"
                  placeholder="Update your name"
                  defaultValue={user.displayName}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email:</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  defaultValue={user.email}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL:</span>
                </label>
                <input
                  type="text"
                  defaultValue={user.photoURL}
                  placeholder="Update your photoURL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default UpdatePro;

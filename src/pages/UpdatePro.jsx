import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const UpdatePro = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  //   console.log(user);
  const updateUser = () => {
    updateUserProfile(user.displayName, user.photoURL).then(() => {
      navigate(location?.state ? location.state : "/");
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
                  placeholder={user.displayName}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email:</span>
                </label>
                <input
                  type="email"
                  placeholder={user.email}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL:</span>
                </label>
                <input
                  type="text"
                  placeholder={user.photoURL}
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
    </div>
  );
};

export default UpdatePro;

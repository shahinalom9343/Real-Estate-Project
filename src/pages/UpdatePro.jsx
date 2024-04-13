import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";

const UpdatePro = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <Helmet>
        <title>Axis | Update Profile</title>
      </Helmet>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col">
          <div className="card shrink-0 shadow-2xl bg-base-100 ">
            <form className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name:</span>
                </label>
                <input type="text" className="input input-bordered" />
                <span>{user.displayName}</span>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email:</span>
                </label>
                <input type="email" className="input input-bordered" />
                <span>{user.email}</span>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL:</span>
                </label>
                <input type="text" className="input input-bordered" />
                <span>{user.photoURL}</span>
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

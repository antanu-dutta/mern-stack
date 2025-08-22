import React, { useContext, useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../utils/helper";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATH } from "../../utils/apiPaths";
import { UserContext } from "../../context/UserContext";

const Signup = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { updateUser } = useContext(UserContext);

  const [error, setError] = useState(null);

  //   handle sign up form
  const handleSignup = async (e) => {
    e.preventDefault();

    if (!fullName) {
      setError("Please enter your name");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please Enter a valid email address");
      return;
    }
    if (!password) {
      setError("Please enter a strong password");
      return;
    }
    setError("");
    try {
      const response = await axiosInstance.post(API_PATH.AUTH.REGISTER, {
        fullName,
        email,
        password,
      });
      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again later");
      }
    }
  };

  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Join us today by entering you details below
        </p>

        <form onSubmit={handleSignup}>
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <Input
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              label="Full Name"
              placeholder="Antanu Dutta"
              type="text"
            />

            {/* Email */}
            <Input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email"
              placeholder="john@example.com"
              type="email"
            />
            <div className="col-span-2">
              {/* Password */}
              <Input
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                label="Password"
                placeholder="Enter your password"
                type={"password"}
              />

              {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
              <button type="submit" className="btn-primary">
                SiGNUP
              </button>

              <p className="text-[13px text-slate-800 mt-3]">
                Already have an account ?{" "}
                <Link
                  to={"/login"}
                  className="text-primary font-medium underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Signup;

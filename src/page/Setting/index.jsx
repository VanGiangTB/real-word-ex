import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout, putUserInfo } from "../../features/auth/authSlice";
import "./style.css";
import { getUserInfoRequest } from "../../features/auth/authSlice";
import { useFormik } from "formik";

export default function Setting() {
  const history = useHistory();
  const dispatch = useDispatch();
  const userStore = useSelector((state) => state.auth.user);
  const [userFrom, setUserForm] = useState(userStore);

  const formik = useFormik({
    initialValues: {
      email: userFrom.email,
      username: userFrom.username,
      password: "",
      image: userFrom.image,
      bio: userFrom.bio,
    },
    onSubmit: (values) => {
        const params = {
            user: clean(values)
        }
        dispatch(putUserInfo(params))
        history.push('/user')
    },
  });

  useEffect(() => {
    const username = localStorage.getItem("username");
    dispatch(getUserInfoRequest({ id: username }));
  }, []);

  const clean = (obj) => {
    for (var propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "") {
        delete obj[propName];
      }
    }
    return obj
  }

  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };

  const handleUpdate = () => {};
  return (
    <div className="flex justify-center items-center">
      <form className="w-1/2 mt-6" onSubmit={formik.handleSubmit} >
        <h2 className="text-center mb-3 text-4xl">Your Feed</h2>
        <input
          id="image"
          name="image"
          type="url"
          className="input-field"
          placeholder="URL of profile picture"
          value={formik.values.image}
          onChange={formik.handleChange}
        />
        <input
          id="username"
          name="username"
          type="text"
          className="input-field"
          placeholder="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        <textarea
          id="bio"
          name="bio"
          rows="6"
          type="text"
          placeholder="Short bio bio you "
          className="input-field"
          value={formik.values.bio}
          onChange={formik.handleChange}
        />
        <input
          id="email"
          name="email"
          type="text"
          className="input-field"
          placeholder="gmail"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <input
          id="password"
          type="password"
          className="input-field"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <div className="text-right  ">
          <button
            onClick={handleUpdate}
            type="submit"
            className="rounded-md border text-white border-secondary bg-secondary hover:bg-secondary-hover hover:border-secondary-hover text-lg py-2 px-5"
          >
            Update Setting
          </button>
        </div>
        <div className=" border-b-2 mt-5 "></div>

        <div className="mt-6">
          <button
            type="submit"
            onClick={handleLogout}
            className="border-primary border text-primary rounded-md text-lg py-2 px-5 hover:bg-primary-hover hover:text-white "
          >
            or click here to logout
          </button>
        </div>

      </form>
       
    </div>
  );
}
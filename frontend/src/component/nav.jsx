import HomeIcon from "@heroicons/react/24/solid/HomeIcon";

import { Link } from "react-router-dom";
import { authTest, signOut } from "../utils/reqs";

import { useEffect, useState } from "react";

const Nav = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const checkauth = async () => {
      const res = await authTest();

      if (res.type == "success") {
        setIsAuth(true);
        setUserId(res.message);
        localStorage.setItem("_idSender", res.message);
      }
    };

    return () => checkauth();
  }, []);

  const logoutHandler = async () => {
    await signOut();
    localStorage.removeItem("_idSender");
    window.location.replace("/");
  };

  return (
    <nav className="bg-indigo-500 text-white">
      <ul className="flex flex-row items-center gap-2 p-2">
        <li>
          <img className="w-12" src="/logo.png" alt="Logo" />
        </li>
        <li>
          <Link to={"/"}>
            <HomeIcon className="h-6 w-6" />
          </Link>
        </li>
        {isAuth && (
          <li>
            <Link to={"/users"}>Users</Link>
          </li>
        )}
        {!isAuth && (
          <li>
            <Link to={"/signup"}>Sign Up</Link>
          </li>
        )}
        {!isAuth && (
          <li>
            <Link to={"/signin"}>Sign In</Link>
          </li>
        )}
        {isAuth && (
          <li>
            <Link to={`/user/${userId}`}>My Profile</Link>
          </li>
        )}
        {isAuth && (
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;

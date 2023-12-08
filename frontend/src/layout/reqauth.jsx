import PropTypes from "prop-types";
import { reqLogin, reqRegister } from "../utils/reqs";
import { useRef, useState } from "react";

const Reqauth = (props) => {
  const [isWarn, setIsWarn] = useState(null);
  const isLogin = props.isLogin;
  const emaiRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const confPasswordRef = useRef(null);

  const formHandler = async (e) => {
    e.preventDefault();
    const email = emaiRef.current.value;
    const password = passwordRef.current.value;

    if (isLogin) {
      await reqLogin({ email, password }).then((res) => {
        setIsWarn(res);
        setTimeout(() => setIsWarn(null), 2000);
        if (res.type == "success") window.location.replace("/");
      });
    } else {
      const name = usernameRef.current.value;
      const confPw = confPasswordRef.current.value;

      if (confPw !== password) {
        setIsWarn({ type: "error", message: "Password does not match." });
        setTimeout(() => setIsWarn(null), 2000);
      }

      await reqRegister({ name, email, password }).then((res) => {
        setIsWarn(res);
        setTimeout(() => setIsWarn(null), 2000);
        if (res.type == "success") window.location.replace("/");
      });
    }
  };

  return (
    <div className="h-full flex justify-center items-center">
      <form
        onSubmit={formHandler}
        className="flex flex-wrap flex-row max-w-md w-full m-auto gap-2"
      >
        <div className="w-full">
          {isWarn && (
            <span
              className={`text-xs font-light ${
                isWarn.type == "error" ? "text-pink-600" : "text-teal-600"
              }`}
            >
              {isWarn.message}
            </span>
          )}
        </div>
        <input
          ref={emaiRef}
          className="outline-none border rounded-md p-2"
          type="text"
          placeholder="Email"
        />
        {!isLogin && (
          <input
            ref={usernameRef}
            className="outline-none border rounded-md p-2"
            type="text"
            placeholder="Username"
          />
        )}
        <input
          ref={passwordRef}
          className="outline-none border rounded-md p-2"
          type="password"
          placeholder="Password"
        />
        {!isLogin && (
          <input
            ref={confPasswordRef}
            className="outline-none border rounded-md p-2"
            type="password"
            placeholder="Confirm Password"
          />
        )}
        <button className="border w-full rounded-md p-2 bg-indigo-500 hover:bg-indigo-600 text-white ">
          Submit
        </button>
      </form>
    </div>
  );
};

Reqauth.propTypes = { isLogin: PropTypes.bool };

export default Reqauth;

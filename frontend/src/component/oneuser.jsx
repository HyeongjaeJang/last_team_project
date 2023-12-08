import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { string } from "prop-types";
import { Link } from "react-router-dom";

import { socket } from "../utils/socketmsg";

function Oneuser(props) {
  const clickHandler = () => {
    const parti = [localStorage.getItem("_idSender"), props.rid];
    socket.emit("chatroom", {
      participants: parti.sort(),
    });
  };

  return (
    <Link
      onClick={clickHandler}
      to={"/conv"}
      className="border p-2 rounded-md flex flex-row items-center justify-between hover:bg-indigo-600 hover:text-white cursor-pointer"
    >
      <div>{props.name}</div>
      <div>
        <ArrowRightIcon className="w-4 h-4" />
      </div>
    </Link>
  );
}

Oneuser.propTypes = { name: string, rid: string };

export default Oneuser;

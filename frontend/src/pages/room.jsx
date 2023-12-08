import { useEffect, useRef, useState } from "react";
import MessageBox from "../layout/messageBox";
import Withnav from "../layout/withnav";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { socket } from "../utils/socketmsg";
import { reqAllMsgs } from "../utils/reqs";

const Room = () => {
  const msgRef = useRef(null);
  const [roomChats, setRoomChats] = useState([]);
  const [roomInfo, setRoomInfo] = useState();

  useEffect(() => {
    const checkRoom = async (res) => {
      if (res._id) {
        setRoomInfo(res);
        await reqAllMsgs(res._id).then((res) => setRoomChats(res.message));
      }
    };

    const checkChat = async () => {
      if (roomInfo._id !== undefined) {
        await reqAllMsgs(roomInfo._id).then((res) => setRoomChats(res.message));
      }
    };

    socket.on("chatroom", checkRoom);
    socket.on("chat", checkChat);

    return () => {
      socket.off("chatroom", checkRoom);
    };
  });

  const sendMessageHandler = async () => {
    const msg = msgRef.current.value;
    msgRef.current.value = "";

    socket.emit("chat", {
      chatRoomId: roomInfo._id,
      message: msg,
      senderId: localStorage.getItem("_idSender"),
    });
  };

  return (
    <Withnav>
      <div className="h-full w-full relative flex flex-col justify-center  max-w-md m-auto p-2">
        <div className="flex-1 sticky">
          <MessageBox chats={roomChats} />
        </div>
        <div className="flex flex-row justify-between gap-2">
          <input
            ref={msgRef}
            className="p-1 rounded-md outline-none border shadow-lg border-indigo-700 w-full"
            type="text"
            placeholder="Text something!"
          />
          <button
            onClick={sendMessageHandler}
            className=" bg-indigo-600 w-10 h-10 flex items-center justify-center hover:bg-indigo-700 rounded-md"
          >
            <ArrowUpIcon className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </Withnav>
  );
};

export default Room;

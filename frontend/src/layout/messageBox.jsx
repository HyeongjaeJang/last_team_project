import { array } from "prop-types";
import Chat from "../component/chat";

function MessageBox({ chats }) {
  return (
    <div className=" max-h-full h-full flex flex-col overflow-auto">
      {chats.map((el, idx) => (
        <Chat
          key={idx}
          isSender={el.senderId === localStorage.getItem("_idSender")}
          text={el.message}
        />
      ))}
    </div>
  );
}

MessageBox.propTypes = { chats: array };

export default MessageBox;

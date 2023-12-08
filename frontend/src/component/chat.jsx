import PropTypes from "prop-types";

function Chat(props) {
  return (
    <div
      className={`my-2 flex flex-wrap ${
        props.isSender ? "justify-end" : "justify-start"
      }`}
    >
      <span className="border px-4 py-2 rounded-lg bg-indigo-400 text-white font-light">
        {props.text}
      </span>
    </div>
  );
}

Chat.propTypes = { text: PropTypes.string, isSender: PropTypes.bool };

export default Chat;

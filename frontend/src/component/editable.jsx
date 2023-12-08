import PropType from "prop-types";

function Editable(props) {
  return (
    <div>
      <span>{props.title}: </span>
      {!props.isEdit ? (
        <span className=" p-2">{props.val}</span>
      ) : (
        <input
          onChange={props.updateHandler}
          className="outline-none border p-2 rounded-md max-w-[10rem] w-full"
          defaultValue={props.val}
          type="text"
        />
      )}
    </div>
  );
}

Editable.propTypes = {
  title: PropType.string,
  val: PropType.string,
  isEdit: PropType.bool,
  updateHandler: PropType.func,
};

export default Editable;

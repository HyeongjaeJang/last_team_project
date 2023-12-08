import PropTypes from "prop-types";
import Nav from "../component/nav";

function Withnav(props) {
  return (
    <div className="h-[100dvh] flex flex-col">
      <Nav />
      <div className="flex-1">{props.children}</div>
    </div>
  );
}

Withnav.propTypes = { children: PropTypes.element };

export default Withnav;

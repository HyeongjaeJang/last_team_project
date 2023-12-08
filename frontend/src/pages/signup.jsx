import Reqauth from "../layout/reqauth";
import Withnav from "../layout/withnav";

const Signup = () => {
  return (
    <Withnav>
      <Reqauth isLogin={false} />
    </Withnav>
  );
};

export default Signup;

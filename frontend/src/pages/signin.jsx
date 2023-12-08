import Reqauth from "../layout/reqauth";
import Withnav from "../layout/withnav";

const Signin = () => {
  return (
    <Withnav>
      <Reqauth isLogin />
    </Withnav>
  );
};

export default Signin;

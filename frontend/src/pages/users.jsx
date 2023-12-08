import { useEffect, useState } from "react";
import Oneuser from "../component/oneuser";
import Withnav from "../layout/withnav";
import { reqAllUsers } from "../utils/reqs";

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const allu = async () => {
      const res = await reqAllUsers();

      if (res.type == "success") setAllUsers(res.message);
    };

    return () => allu();
  }, []);

  return (
    <Withnav>
      <div className="flex flex-col max-w-sm w-full m-auto gap-2 p-2">
        {allUsers.map((el, idx) => {
          if (el._id !== localStorage.getItem("_idSender")) {
            return <Oneuser rid={el._id} name={el.name} key={idx} />;
          }
        })}
      </div>
    </Withnav>
  );
};

export default Users;

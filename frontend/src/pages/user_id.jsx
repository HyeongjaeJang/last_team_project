import { useCallback, useEffect, useState } from "react";
import Editable from "../component/editable";
import Withnav from "../layout/withnav";
import { PencilIcon, ArrowSmallUpIcon } from "@heroicons/react/24/solid";
import { useParams } from "react-router-dom";
import { reqProfile, updateUser } from "../utils/reqs";

const Userid = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [userData, setUserData] = useState(null);
  const [nameChange, setNameChange] = useState("");
  const { id } = useParams();

  const editToggle = useCallback(() => {
    setIsEdit(!isEdit);
  }, [isEdit]);

  useEffect(() => {
    const checkauth = async () => {
      const res = await reqProfile(id);
      setUserData(res);
    };

    return () => checkauth();
  }, [id]);

  const updateHandler = async () => {
    await updateUser(id, { name: nameChange });
  };

  const changeNameHandler = (e) => {
    setNameChange(e.target.value);
  };

  return (
    <Withnav>
      <div className="max-w-sm w-full m-auto h-full flex justify-center items-center">
        <div className="flex gap-1 flex-col">
          <div className="flex justify-end gap-2">
            <PencilIcon
              onClick={editToggle}
              className="w-8 h-8 border rounded-full p-1 hover:bg-black hover:text-white cursor-pointer"
            />
            {isEdit && (
              <ArrowSmallUpIcon
                onClick={updateHandler}
                className="w-8 h-8 border rounded-full p-1 hover:bg-indigo-600 hover:text-white cursor-pointer"
              />
            )}
          </div>
          {!!userData && (
            <Editable
              updateHandler={changeNameHandler}
              title={"Username"}
              val={userData.message["name"]}
              isEdit={isEdit}
            />
          )}
          {userData && <div>Email: {userData.message["email"]}</div>}
        </div>
      </div>
    </Withnav>
  );
};

export default Userid;

import axios from "axios";

export const reqLogin = async ({ email, password }) => {
  const res = await axios.post(
    "http://localhost:4444/auth/signin",
    {
      email,
      password,
    },
    { withCredentials: true, headers: { "Access-Control-Allow-Origin": "*" } }
  );

  return res.data;
};

export const reqRegister = async ({ name, email, password }) => {
  const res = await axios.post("http://localhost:4444/auth/signup", {
    name,
    email,
    password,
  });

  return res.data;
};

export const authTest = async () => {
  const res = await axios.get("http://localhost:4444/auth/test", {
    withCredentials: true,
  });

  return res.data;
};
export const signOut = async () => {
  const res = await axios.get("http://localhost:4444/auth/signout", {
    withCredentials: true,
  });

  return res.data;
};

export const reqProfile = async (uid) => {
  const res = await axios.get(`http://localhost:4444/api/users/${uid}`, {
    withCredentials: true,
  });

  return res.data;
};

export const updateUser = async (uid, pl) => {
  const res = await axios.put(`http://localhost:4444/api/users/${uid}`, pl, {
    withCredentials: true,
  });

  return res.data;
};
export const reqAllUsers = async () => {
  const res = await axios.get(`http://localhost:4444/api/users`, {
    withCredentials: true,
  });

  return res.data;
};

export const reqAllMsgs = async (rid) => {
  const res = await axios.post(
    `http://localhost:4444/api/msg`,
    { roomId: rid },
    {
      withCredentials: true,
    }
  );

  return res.data;
};

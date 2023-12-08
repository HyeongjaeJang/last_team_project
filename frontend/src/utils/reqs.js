import axios from "axios";

export const reqLogin = async ({ email, password }) => {
  const res = await axios.post(
    "https://two29webdevelopment-teamproject.onrender.com/auth/signin",
    {
      email,
      password,
    },
    { withCredentials: true, headers: { "Access-Control-Allow-Origin": "*" } }
  );

  return res.data;
};

export const reqRegister = async ({ name, email, password }) => {
  const res = await axios.post(
    "https://two29webdevelopment-teamproject.onrender.com/auth/signup",
    {
      name,
      email,
      password,
    }
  );

  return res.data;
};

export const authTest = async () => {
  const res = await axios.get(
    "https://two29webdevelopment-teamproject.onrender.com/auth/test",
    {
      withCredentials: true,
    }
  );

  return res.data;
};
export const signOut = async () => {
  const res = await axios.get(
    "https://two29webdevelopment-teamproject.onrender.com/auth/signout",
    {
      withCredentials: true,
    }
  );

  return res.data;
};

export const reqProfile = async (uid) => {
  const res = await axios.get(
    `https://two29webdevelopment-teamproject.onrender.com/api/users/${uid}`,
    {
      withCredentials: true,
    }
  );

  return res.data;
};

export const updateUser = async (uid, pl) => {
  const res = await axios.put(
    `https://two29webdevelopment-teamproject.onrender.com/api/users/${uid}`,
    pl,
    {
      withCredentials: true,
    }
  );

  return res.data;
};
export const reqAllUsers = async () => {
  const res = await axios.get(
    `https://two29webdevelopment-teamproject.onrender.com/api/users`,
    {
      withCredentials: true,
    }
  );

  return res.data;
};

export const reqAllMsgs = async (rid) => {
  const res = await axios.post(
    `https://two29webdevelopment-teamproject.onrender.com/api/msg`,
    { roomId: rid },
    {
      withCredentials: true,
    }
  );

  return res.data;
};

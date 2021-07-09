import axios from "axios";

export async function createUser(user) {
  try {
    // console.log(user);
    const data = {
      email: user.email,
      first_name: user.given_name || user.name,
      last_name: user.family_name,
      username: user.email,
    };
    const config = {
      method: "post", // get or create user
      url: "/create_user",
      data: data,
    };
    const response = await axios(config); // send request using axios
    // console.log(response);
    return response.data.id;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function addUser(user, roomID) {
  try {
    // console.log(user);
    const data = {
      userData: {
        email: user.email,
        first_name: user.given_name || user.name,
        last_name: user.family_name,
        username: user.email,
      },
      roomID: roomID
    };
    const config = {
      method: "post",
      url: "/add_user",
      data: data,
    };
    const response = await axios(config);
    // console.log(response);
    return response.data.id;
  } catch (error) {
    console.log(error);
    return null;
  }
}

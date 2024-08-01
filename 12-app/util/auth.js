import axios from "axios";

const API_KEY = "AIzaSyBo2fEi3ObpzdS9KmvRUpKNoXLLrv4GZz8";

export async function createUser(email, password) {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response.data.error.message || "Could not authenticate you!"
    );
  }
}

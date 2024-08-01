import axios from "axios";

import { API_KEY } from "../API_KEY";

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

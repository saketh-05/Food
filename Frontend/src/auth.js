import {jwtDecode} from "jwt-decode";
// Description: This file contains the functions to handle user authentication.

export async function initializeApp() {
  const token = localStorage.getItem("token");
  //&& /^[A-Za-z0-9-_=]+\.([A-Za-z0-9-_=]+\.?)+$/.test(token)
  if (token) {
    //const publicKey = new TextEncoder().encode("my_secret");
    try {
      // Verify the token using jose
      const payload = jwtDecode(token);
      // Check expiration
      const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
      if (payload.exp && payload.exp < currentTime) {
        console.log("Token expired. Redirecting to login...");
        localStorage.removeItem("token");
        if (localStorage.getItem("userData")) {
          localStorage.removeItem("userData");
        }
        return { message: "Invalid" }; // Redirect to login page
      } else {
        console.log("Token is valid. User is logged in.");
        // Proceed with user session
        return { message: "Protected" }; // Proceed with user session
      }
    } catch (error) {
      console.error("Invalid token. Redirecting to login...", error);
      localStorage.removeItem("token");
      return { message: "Invalid" }; // Redirect to login page
    }
  } else {
    console.log(
      "No token found or invalid token format. Redirecting to login..."
    );
    return { message: "Invalid" }; // Redirect to login page
  }
}

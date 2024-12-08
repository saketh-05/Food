import { jwtVerify } from 'jose';

export async function initializeApp() {
  const token = localStorage.getItem('token');
  
  if (token && /^[A-Za-z0-9-_=]+\.([A-Za-z0-9-_=]+\.?)+$/.test(token)) {
    try {
      // Define your secret key for token verification
      const secret = new TextEncoder().encode('user_token'); // Replace with your actual secret key
      
      // Verify the token using jose
      const { payload } = await jwtVerify(token, secret);

      // Check expiration
      const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
      if (payload.exp && payload.exp < currentTime) {
        console.log("Token expired. Redirecting to login...");
        localStorage.removeItem('token');
        return { message: "Invalid" }; // Redirect to login page
      } else {
        console.log("Token is valid. User is logged in.");
        // Proceed with user session
        const response = "Protected";
        return response; // Proceed with user session
      }
    } catch (error) {
      console.error("Invalid token. Redirecting to login...", error);
      localStorage.removeItem('token');
      return { message: "Invalid" }; // Redirect to login page
    }
  } else {
    console.log("No token found or invalid token format. Redirecting to login...");
    return { message: "Invalid" }; // Redirect to login page
  }
}

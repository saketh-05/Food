import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const GoogleSignIn = ({ onSuccess, onError }) => {
  const clientID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  return (
    <GoogleOAuthProvider clientId={clientID}>
      <GoogleLogin
        onSuccess={onSuccess}
        onError={onError}
        text="signin_with"
        shape="pill"
        size="large"
        theme="outline"
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleSignIn;

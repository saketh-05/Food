import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const GoogleSignIn = ({ onSuccess, onError }) => {
  return (
    <GoogleOAuthProvider clientId="144426393112-j1ds0509pi70kkcrm44kufa4hmjsi37r.apps.googleusercontent.com">
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

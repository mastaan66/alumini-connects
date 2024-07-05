// components/OAuthLogin.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const OAuthLogin = () => {
  const router = useRouter();

  useEffect(() => {
    const { code, state } = router.query;

    if (code && state) {
      // Handle OAuth callback here
      console.log('OAuth Callback:', { code, state });

      // Redirect to dashboard or home page after successful authentication
      router.push('/');
    }
  }, [router]);

  const handleLogin = () => {
    // Replace with your OAuth endpoint and client ID
    const oauthEndpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
    const clientId = '395670180629-725c27aoj7hgj8ttfd9fjbird21e0ji2.apps.googleusercontent.com';
    const redirectUri = `${window.location.origin}/api/auth/callback`; // Replace with your callback URL

    const params = {
      response_type: 'code',
      client_id: clientId,
      redirect_uri: redirectUri,
      scope: 'profile email', // Adjust scopes as per your requirements
      state: 'random_state_string', // Optional, for CSRF protection
    };

    const urlParams = new URLSearchParams(params).toString();
    const authUrl = `${oauthEndpoint}?${urlParams}`;

    window.location.href = authUrl;
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="p-8 max-w-md w-full shadow-lg rounded-lg bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center text-black ">Connect</h2>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
          onClick={handleLogin}
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default OAuthLogin;

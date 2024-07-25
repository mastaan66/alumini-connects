// pages/api/auth/callback.js

export default function handler(req, res) {
    const { code, state } = req.query;
  
    // Handle OAuth callback logic here
    console.log('OAuth Callback:', { code, state });
  
    // Redirect to frontend route
    res.redirect('http://localhost:3002/'); // Replace with your desired redirect route
  }
  
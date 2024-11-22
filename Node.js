const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

app.use(bodyParser.json());

// Endpoint to handle Instagram login
app.get('/auth/instagram/callback', async (req, res) => {
    const { code } = req.query;
    const clientId = 'YOUR_INSTAGRAM_CLIENT_ID';
    const clientSecret = 'YOUR_INSTAGRAM_CLIENT_SECRET';
    const redirectUri = 'YOUR_REDIRECT_URI';

    try {
        // Exchange the authorization code for an access token
        const response = await axios.post(`https://api.instagram.com/oauth/access_token`, null, {
            params: {
                client_id: clientId,
                client_secret: clientSecret,
                grant_type: 'authorization_code',
                redirect_uri: redirectUri,
                code: code
            }
        });
        const userInfo = response.data; // Contains user info and access token
        // Handle user login here
        res.status(200).json({ message: 'Instagram login successful', userInfo });
    } catch (error) {
        res.status(400).json({ message: 'Instagram login failed', error });
    }
});

// Endpoint to handle LinkedIn login
app.get('/auth/linkedin/callback', async (req, res) => {
    const { code } = req.query;
    const clientId = 'YOUR_LINKEDIN_CLIENT_ID';
    const clientSecret = 'YOUR_LINKEDIN_CLIENT_SECRET';
    const redirectUri = 'YOUR_REDIRECT_URI';

    try {
        // Exchange the authorization code for an access token
        const tokenResponse = await axios.post(`https://www.linkedin.com/oauth/v2/accessToken`, null, {
            params: {
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: redirectUri,
                client_id: clientId,
                client_secret: clientSecret
            }
        });

        const accessToken = tokenResponse.data.access_token;

        // Now fetch the user profile
        const userResponse = await axios.get('https://api.linkedin.com/v2/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        const userInfo = userResponse.data; // Contains user info
        res.status(200).json({ message: 'LinkedIn login successful', userInfo });
    } catch (error) {
        res.status(400).json({ message: 'LinkedIn login failed', error });
    }
});

// Endpoint to handle Gmail login
app.get('/auth/gmail/callback', async (req, res) => {
    const { code } = req.query;
    const clientId = 'YOUR_GMAIL_CLIENT_ID';
    const clientSecret = 'YOUR_GMAIL_CLIENT_SECRET';
    const redirectUri = 'YOUR_REDIRECT_URI';

    try {
        // Exchange the authorization code for an access token
        const tokenResponse = await axios.post(`https://oauth2.googleapis.com/token`, null, {
            params: {
                code: code,
                client_id: clientId,
                client_secret: clientSecret,
                redirect_uri: redirectUri,
                grant_type: 'authorization_code'
            }
        });

        const accessToken = tokenResponse.data.access_token;

        // Now fetch the user profile
        const userResponse = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        const userInfo = userResponse.data; // Contains user info
        res.status(200).json({ message: 'Gmail login successful', userInfo });
    } catch (error) {
        res.status(400).json({ message: 'Gmail login failed', error });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

import fetch from 'node-fetch';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;
const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

app.get('/weather', async (req, res) => {
    const city = req.query.city;

    if (!city) {
        return res.status(400).json({ error: 'City is required' });
    }

    try {
        const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

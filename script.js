const getWeather = async (city) => {
    try {
        const response = await fetch(`http://localhost:3000/weather?city=${city}`);
        const data = await response.json();
        console.log(data); // Display the weather data
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};

// Example usage
getWeather('Nairobi');

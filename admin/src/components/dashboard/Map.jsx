import React, { memo, useRef, useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// Placeholder for darkMap; replace with your actual map theme styles
const darkMap = [
    {
        elementType: 'geometry',
        stylers: [{ color: '#242f3e' }]
    },
    {
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#242f3e' }]
    },
    {
        elementType: 'labels.text.fill',
        stylers: [{ color: '#746855' }]
    },
    // Add more styling rules as needed
];

const libraries = ["places"];

const MapView = (props) => {
    const mapRef = useRef(null);
    const [theme, setTheme] = useState('light'); // Default theme is light
    const styles = theme === 'dark' ? darkMap : [];
    const [position, setPosition] = useState({
        lat: 13.078339,
        lng: 80.180592
    });

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyACWjzUJ1XziqSuWycOTNorOmfe2swDIc', // Use environment variables in production
        libraries
    });

    useEffect(() => {
        // Simple toggle between light and dark for demonstration
        const toggleTheme = () => {
            setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
        };

        // Example: Toggle theme every 5 seconds
        const themeInterval = setInterval(toggleTheme, 5000);

        return () => clearInterval(themeInterval); // Cleanup interval on component unmount
    }, []);

    function handleLoad(map) {
        mapRef.current = map;
    }

    function handleCenter() {
        if (!mapRef.current) return;
        const newPos = mapRef.current.getCenter().toJSON();
        setPosition(newPos);
    }

    return (
        <div className="w-full h-full rounded-xl overflow-hidden">
            {isLoaded ? (
                <GoogleMap
                    zoom={15}
                    options={{
                        styles
                    }}
                    onDragEnd={handleCenter}
                    onLoad={handleLoad}
                    center={position}
                    mapContainerClassName="map-container"
                    {...props}
                >
                    {props.children}
                </GoogleMap>
            ) : (
                <div className='w-full h-full flex items-center justify-center'>
                    <div>Loading...</div>
                </div>
            )}
        </div>
    );
}

export default memo(MapView);

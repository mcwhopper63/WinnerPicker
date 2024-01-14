import React, { useState, useEffect } from 'react';
import eventData from '../data/events.json';
import fightData from '../data/fights.json';
import fighterData from '../data/fighters.json';
import EventComponent from '../components/EventComponent';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    const [events, setEvents] = useState([]);
    const [fights, setFights] = useState([]);
    const [fighters, setFighters] = useState([]);
    const [selections, setSelections] = useState({});

    useEffect(() => {
        // Simulate fetching data
        setEvents([eventData]); // Assuming eventData is an object, not an array
        setFights(fightData);
        setFighters(fighterData);
    }, []);

    const handleSelection = (fightOrder, fighterLastName) => {
        setSelections((prevSelections) => ({
            ...prevSelections,
            [fightOrder]: fighterLastName,
        }));
    };

    const handleSubmit = () => {
        // Here, you would typically send the selections to the backend.
        // For simulation purposes, we'll just log the selections to the console
        console.log('User selections:', selections);

        // After submitting, we'll navigate to the Results Page
        // You'll need to setup and use the navigate function from React Router
        navigate('/results', { state: { selections, events, fighters } });
    };

    return (
        <div>
            <header>{/* Header Content Here */}</header>
            <main>
                {events.map((event) => (
                    <EventComponent
                        key={event.name}
                        event={event}
                        fights={fights}
                        fighters={fighters}
                        onSelection={handleSelection}
                    />
                ))}
                <button onClick={handleSubmit}>Generate Results</button>
            </main>
        </div>
    );
};

export default LandingPage;

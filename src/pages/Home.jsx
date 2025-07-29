import { useEffect, useState } from 'react';
import { getRides } from '../api';
import banner from '../Assests/rapidobanner.jpg';
import './Home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [rides, setRides] = useState([]);
  const navigate = useNavigate(); // ✅ move this here (outside JSX)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getRides();
        setRides(res.data);
      } catch (err) {
        console.error('Failed to fetch rides:', err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        <img src={banner} alt="Rapido Hero" className="hero-image" />
        <div className="hero-content">
          <h1>Book Your Bike Taxi Instantly</h1>
          <p>Fast • Safe • Affordable</p>
          <button className="btn btn-warning" onClick={() => navigate('/book')}>
            Book a Ride
          </button>
        </div>
      </div>

      {/* Rides List */}
      <div className="ride-section">
        <h2>Available Rides</h2>
        {rides.length === 0 ? (
          <p>Loading rides...</p>
        ) : (
          rides.map((ride, idx) => (
            <div key={idx} className="ride-card">
              <p>📍 {ride.pickup} ➡️ {ride.drop}</p>
              <p>📞 {ride.phone}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

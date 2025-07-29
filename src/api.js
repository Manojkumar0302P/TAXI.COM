import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const bookRide = (rideData) => API.post('/rides/book', rideData);
export const getRides = () => API.get('/rides');

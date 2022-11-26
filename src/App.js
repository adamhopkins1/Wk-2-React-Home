import { Routes,Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import './App.css';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';
import {useEffect} from 'react-redux';
import {useDispatch} from 'react-redux';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { PARTNERS } from '../../app/shared/PARTNERS';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';


const dispatch = useDispatch();

useEffect(() => {
    dispatch(fetchCampsites());
}, [dispatch]);

useEffect(() => {
    dispatch(fetchCampsites());
    dispatch(fetchPartners());
}, [dispatch]);

useEffect(() => {
    dispatch(fetchCampsites());
    dispatch(fetchPartners());
    dispatch(fetchPromotions());
}, [dispatch]);

useEffect(() => {
    dispatch(fetchCampsites());
    dispatch(fetchPartners());
    dispatch(fetchPromotions());
    dispatch(fetchComments());
}, [dispatch]);


function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/'  element={<HomePage />} />
                <Route path='contact'  element={<ContactPage />} />
                <Route path='directory' element={<CampsitesDirectoryPage />} />
                <Route path='about' element={<AboutPage/>} />
                <Route
                    path='directory/:campsiteId'
                    element={<CampsiteDetailPage/>}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
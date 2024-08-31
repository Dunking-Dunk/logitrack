import React, { useEffect } from 'react';
import Header from '@/components/global/Header';
import Sidebar from '@/components/global/sidebar/index';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Bus from './bus/Index'
// import Header from '../components/Header';
// import { Routes, Route } from 'react-router-dom';

// import Vehicle from './Vehicle/Index';
// import User from './User/Index';
// import Place from './Place/Index'
// import Shipping from './Shipping/Index'

// import { useDispatch } from 'react-redux';
// import { getAllUsers } from '../store/reducer/UserReducer';
// import { getAllPlaces, getAllRailroute } from '../store/reducer/PlaceReducer';
// import { getAllVehicle, getAllWagons } from '../store/reducer/VehicleReducer';
// import { getAllShipments, getAllSubShipments } from '../store/reducer/ShipmentReducer';
// import { getAllLogs } from '../store/reducer/LogReducer';

const Main = () => {
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getAllUsers())
    //     dispatch(getAllPlaces())
    //     dispatch(getAllRailroute())
    //     dispatch(getAllVehicle())
    //     dispatch(getAllShipments())
    //     dispatch(getAllLogs())
    //     dispatch(getAllWagons())
    // }, [])

    return (
        <div className='flex flex-row'>
            <Sidebar />
            <div className='flex flex-col w-full h-full'>
                <Header />
                <div className='mx-4'>
                    <Routes>
                        <Route element={<Dashboard />} path='/' />
                        <Route element={<Bus />} path='/bus/*' />
                    </Routes>
                </div>
            </div>
        </div >
    )
}

export default Main
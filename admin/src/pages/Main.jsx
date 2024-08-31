import React, { useEffect } from 'react';
import Header from '@/components/global/Header';
import Sidebar from '@/components/global/sidebar/index';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllBus } from '@/store/reducer/BusReducer';

import Dashboard from './Dashboard';
import Bus from './bus/Index'
import Stop from './stop/Index'

const Main = () => {
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(getAllBus())
    }, [])

    return (
        <div className='flex flex-row'>
            <Sidebar />
            <div className='flex flex-col w-full h-full'>
                <Header />
                <div className='mx-4'>
                    <Routes>
                        <Route element={<Dashboard />} path='/' />
                        <Route element={<Bus />} path='/bus/*' />
                        <Route element={<Stop/>} path="/stop/*"/>
                    </Routes>
                </div>
            </div>
        </div >
    )
}

export default Main
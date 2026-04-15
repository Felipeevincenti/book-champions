// Importaciones generales
import React from 'react'

// Importaciones de components
import Login from './components/auth/login/Login'
import Dashboard from './components/dashboard/Dashboard';
import { Route, Routes, BrowserRouter } from 'react-router';


export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

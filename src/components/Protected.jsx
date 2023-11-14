import React from 'react'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../Context/AuthContext'

export const Protected = ({ children }) => {
    const { user } = useContext(Context);

    if (!user) {
        return <Navigate to='/signup' replace />
    } else {
        return children;
    }
}


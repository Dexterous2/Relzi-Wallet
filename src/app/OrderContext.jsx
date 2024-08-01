"use client"
import { addData } from '@/redux/feature/order';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orderQuery, setOrderQuery] = useState([]);

    const dispatch = useDispatch()

    const updateOrderQuery = (query) => {
        setOrderQuery(query);
    };

    useEffect(() => {
        dispatch(addData(orderQuery));
    }, []);

    return (
        <OrderContext.Provider value={{ orderQuery, updateOrderQuery }}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrder = () => {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
};
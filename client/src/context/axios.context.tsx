// src/context/AxiosContext.tsx
import React, { createContext, ReactNode, useContext } from 'react';
import axiosInstance from '@/axios.setup';

const AxiosContext = createContext(axiosInstance);

export const AxiosProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <AxiosContext.Provider
            value={axiosInstance}>
            {children}
        </AxiosContext.Provider>
    );
};

export const useAxios = () => {
    return useContext(AxiosContext);
};

import { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosConfig } from '@/axios.setup';
import IAuthProfile from '@/types/AuthProfile.type';


export const useCheckIsAuthProfileAssociated = (userId: string) => {
    const [isCompleted, setIsCompleted] = useState<boolean | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [authProfile, setAuthProfile] = useState<IAuthProfile>();
    const axiosInstance = axios.create(axiosConfig);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.post(
                    '/auth/isCompleted',
                    { id: userId }
                );
                console.log(response);
                // check if completed : and save the authProfila payload :
                if (response.data.isCompleted) {
                    // start saving ... 
                    const autProfile: IAuthProfile = response.data.profile as IAuthProfile;
                    setAuthProfile(autProfile);
                    // add to the local storage :
                    const asStr: string = JSON.stringify(autProfile);
                    localStorage.setItem("AutProfile", asStr);
                }
                setIsCompleted(response.data.isCompleted); // Adjust based on your API response structure
            } catch (error) {
                console.error('Error checking auth profile association:', error);
                setError('An error occurred while checking profile association.'); // User-friendly error message
            }
        };

        if (userId) {
            // Only fetch data if userId is available
            fetchData();
        }
    }, [userId]); // Dependency array: refetch on userId change

    return { isCompleted, error, authProfile };
};

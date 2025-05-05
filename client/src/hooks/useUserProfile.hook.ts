import { useState, useEffect } from 'react';
import { PassageUserInfo } from "@passageidentity/passage-elements/passage-user"; // Adjust the import path
import extractUserInfo, { getUserProfileInfo } from './getLocalUserInfo.hook'; // Adjust the import path

interface UseUserProfileResult {
    userProfile: any | null;
    loading: boolean;
    error: string | null;
}

const useUserProfile = (): UseUserProfileResult => {
    const [userProfile, setUserProfile] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any | null>(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const userInfo: PassageUserInfo = extractUserInfo();
                const profile = await getUserProfileInfo(userInfo.id);
                setUserProfile(profile);
            } catch (err) {
                console.error(err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    return { userProfile, loading, error };
};

export default useUserProfile;

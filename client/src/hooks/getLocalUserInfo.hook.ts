import { PassageUserInfo } from "@passageidentity/passage-elements/passage-user";
import AuthFacade from "@/facade/auth.facade";
//import { AxiosResponse } from "axios";
//import { useEffect } from "react";

const extractUserInfo = (): PassageUserInfo => {
    const userInfo: string | null = localStorage.getItem("UserInfo");
    if (!userInfo) {
        return {} as PassageUserInfo;
    }
    return JSON.parse(userInfo) as PassageUserInfo;
};


//user returned is the passage user information 
// some retrive data method need the local user information registred into our database not the passage user id 
// make a serializer to load all needed data to work with api calls ( facad )
export const getUserProfileInfo = async (passageUserId: string) => {

    try {
        const authProviderFacade = new AuthFacade(); // Create AuthFacade instance

        const completedResponse = await authProviderFacade.checkIsAuthProfileAssociated(passageUserId);
        if (!completedResponse) {
            return { message: "null" };
        }
        const status = completedResponse.status;

        // Check for successful response status and associated profile completion
        if (status !== 201 || !completedResponse.data.completed) {
            // Handle incomplete or non-existent profile cases
            const message = status !== 201 ? "Not found" : "No profile associated, please complete your profile...";
            return { message, response: completedResponse }; // Return error details
        }

        const profile = completedResponse.data.profile;
        console.log(profile);
        return { message: "Profile found", profile }; // Return profile data
    } catch (error) {
        console.error("Error in getUserProfileInfo: ", error);
        return { message: "An error occurred", error }; // Return generic error information
    }
};




export default extractUserInfo;
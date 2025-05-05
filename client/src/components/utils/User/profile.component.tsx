




import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { ImGithub, ImGoogle } from "react-icons/im";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import nodata component , we most update it to be an error component :
import NoDataComponent from "../noData.component";
import nodDataProps from "@/types/noData.type";
import { useToast } from "@/components/ui/use-toast"

import { PassageUserInfo } from '@passageidentity/passage-elements/passage-user';
import { useState } from "react";





function ProfileComponent() {
  const [isInreadOnly, setIsInreadOnly] = useState<boolean>(true);
  // try to parse a user profile from local storage : 
  const userLocalString: string | null = localStorage.getItem("UserInfo");
  if (!userLocalString) {
    const props: nodDataProps = {
      message: "User Profile not found",
      description: "client side faild to retrive the authentificated user data , to fix later ...."
    }
    //console.log(" User profile not found ");
    return <NoDataComponent {...props} />;
  }
  const profiledata: PassageUserInfo = JSON.parse(userLocalString);
  const [UserInfo, SetUserInfo] = useState<PassageUserInfo>(profiledata);
  // setup toaster :
  const { toast } = useToast();

  // const emailAddressesChanged = (event:React.ChangeEvent):void =>{
  //   event.preventDefault();
  //   // update the statte :
  //   SetUserInfo({...UserInfo, email: event.target.value});
  //   return;
  // }

  const editProfile = (e: React.MouseEvent) => {
    e.preventDefault();
    //console.log("click ");
    setIsInreadOnly(false);
    toast({
      title: "This action will be added soon",
      description: "Hey there , for now you cannot update your profile information thanks",
    });
    return;
  }
  // extract profile data from profile object :

  if (profiledata) {
    return (
      <Card className="w-[550px]  bg-transparent border-none shadow-sm">
        <CardHeader>
          <CardTitle>Your Profile
            {profiledata.status === 'active' ? (<span>🔋</span>) : (<span>💤</span>)}
          </CardTitle>
          <CardDescription className="text-sm
            text-blue-600
            "> {UserInfo.id}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-5 mb-3">
              {/** Email field :  */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email
                  {UserInfo.email_verified ? (<span>✔️</span>) : (<span>❌</span>)}
                </Label>
                <Input id="email"
                  placeholder="your online address email"
                  readOnly={isInreadOnly}
                  value={UserInfo.email}
                //onChange={ emailAddressesChanged }
                />
              </div>
              {/** phone field :  */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">Phone
                  {profiledata.phone_verified ? (<span>✔️</span>) : (<span>❌</span>)}
                </Label>
                <Input id="phone"
                  readOnly={isInreadOnly}
                  placeholder="your phone number"
                  value={profiledata.phone}
                />
              </div>
            </div>
            {/**     User Meta data section  */}
            {
              UserInfo.user_metadata ? (
                <div className="grid w-full items-center gap-5">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="phone">User Name </Label>
                    <Input id="userName"
                      placeholder="your user name"
                      readOnly={isInreadOnly}
                      value={UserInfo.user_metadata["user-name"]}
                    />
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="phone">User Phone</Label>
                    <Input id="phone"
                      placeholder="your phone number"
                      readOnly={isInreadOnly}
                      value={UserInfo.user_metadata["phone"] || ""}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="phone">Full Name</Label>
                    <Input id="name"
                      placeholder="user full name"
                      readOnly={isInreadOnly}
                      value={UserInfo.user_metadata['full-name'] || ''}
                    />
                  </div>
                </div>
              ) : (
                <> No meta data set to this user profile : </>
              )
            }
            {/* Socail conexion section  */}
            {
              profiledata.social_connections ? (
                <div className="mt-3">
                  <Label> Social Connection : </Label>
                  <div className=" flex justify-center gap-5 py-5" id="socialConnections">
                    <ImGithub className=" size-6 text-blue-600 cursor-pointer" />
                    <ImGoogle className=" size-6 text-red-600 cursore-pointer" />
                  </div>
                </div>
              ) : (
                <> No social_connections </>
              )
            }
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant={"destructive"}
            size={"sm"}
            //disabled={false}
            //className=" cursor-not-allowed"
            onClick={(e) => editProfile(e)}
          >Edit Profile
          </Button>
        </CardFooter>
      </Card>
    )
  }
}

export default ProfileComponent;
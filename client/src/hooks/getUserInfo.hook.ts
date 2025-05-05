import { PassageUser, PassageUserInfo } from "@passageidentity/passage-elements/passage-user";
import { NavigateFunction } from "react-router-dom";





const get_user_info = async(
    userTarget: PassageUser,
    pagesNavigator: NavigateFunction
    ):Promise<PassageUserInfo|null> => {
    try {
      const userInfo:PassageUserInfo =  await userTarget.userInfo() as PassageUserInfo;
      if (!userInfo) return null;
     return userInfo;
    }catch (err) {
      pagesNavigator("/");
      return null;
    }
};
export default get_user_info;


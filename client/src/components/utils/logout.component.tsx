import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { PassageUser } from '@passageidentity/passage-elements/passage-user';



function LogoutComponent() {
  const auth_token: string | null = localStorage.getItem("psg_auth_token");
  if (!auth_token) return;
  const user = new PassageUser(auth_token);
  const pageNavigator = useNavigate();
  const logoutProducer = (userTarget: PassageUser): void => {
    userTarget.signOut().then(
      () => {
        console.log("User has been signed out ");
        console.log(localStorage);
        localStorage.clear();
        pageNavigator("/");
        return;
      }
    ).catch((error: Error) => {
      console.log("logout ", error);
      return;
    }
    );
  }
  return (
    <Button variant={"destructive"} size={"sm"}
      onClick={() => logoutProducer(user)}
    > Logout
    </Button>
  )
}
export default LogoutComponent;
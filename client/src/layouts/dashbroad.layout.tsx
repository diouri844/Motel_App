import LayoutProps from "@/types/layoutprops.type";
import SidebarComponent from "@/components/utils/sidebar.component";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "@/components/utils/header.component";
import { useEffect } from "react";
import LogoutComponent from "@/components/utils/logout.component";
import { PassageProvider } from "@passageidentity/passage-react";
import { Toaster } from "@/components/ui/toaster";
// setup clerck provider : 
const publishableKey: string = import.meta.env.VITE_PASSAGE_APP_ID;

if (!publishableKey) {
  throw new Error(" Invalid publishable key");
}

const DashbroadLayout: React.FC<LayoutProps> = ({ children }) => {
  const pagesNavigator = useNavigate();
  useEffect(() => {
    // default constructor
    try {
      const authToken: string | null = localStorage.getItem("psg_auth_token");
      if (!authToken || authToken === null || authToken === "") {
        // User not logged in, redirect to signIn
        pagesNavigator("/singIn");
        return;
      }

      //console.log(authToken);
    } catch (error) {
      console.log(error);
      pagesNavigator("/singIn");
      return;
    }

  }, [pagesNavigator]
  );

  return (
    <PassageProvider appId={publishableKey}>
      <div className="grid h-screen w-full overflow-hidden lg:grid-cols-[220px_1fr]  
              bg-[#FCF6F5] text-[#990011]">
        <SidebarComponent />
        <div className="flex flex-col border-l border-r h-[40px] mt-3 mb-[2%]">
          <HeaderComponent SingoutComponent={<LogoutComponent />} />
          {children}
        </div>
        <Toaster />
      </div>
    </PassageProvider>
  );
}

export default DashbroadLayout;
import React from "react";
//import { ClerkProvider} from "@clerk/clerk-react";
import NavComponent from "@/components/utils/nav.component";
import LayoutProps from "@/types/layoutprops.type";
import { PassageProvider } from "@passageidentity/passage-react";

const publishableKey:string = import.meta.env.VITE_PASSAGE_APP_ID;

if( !publishableKey ){
  throw new Error (" Invalid publishable key");
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    //<ClerkProvider publishableKey={publishableKey}>
      <PassageProvider  appId={ publishableKey }>
      <div 
      className="container">
        <NavComponent />
        <main >
          {children}
        </main>
      </div>
      </PassageProvider>
    //</ClerkProvider>
  );
};

export default Layout;

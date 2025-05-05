
import { Package2Icon } from "@/components/icons/package.icon";




function HeaderComponent( {SingoutComponent}:{SingoutComponent:React.ReactElement} ) {

  return (
    <header className="flex h-10 lg:h-[60px] items-center gap-2 ml-[250px] 
            w-[500px] text-[#990011] font-sans px-4 text-sm">
            <a className="lg:hidden" href="#">
              <Package2Icon className="h-6 w-6" />
              <span className="sr-only">Home</span>
            </a>
            <div className="flex-1">
              <h1 className="font-semibold text-lg">Services Panel</h1>
            </div>
            {SingoutComponent  }
        </header>
    )
}

export default HeaderComponent
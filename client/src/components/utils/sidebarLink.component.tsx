//import HomeIcon from "@/components/icons/home.icon";
import ILink from "@/types/sideLink.type";

function SidebarLinkComponent(children:ILink) {
  return (
    <a
        className="flex items-center gap-3
        hover:rounded-lg hover:bg-gray-200
        focus:rounded-lg focus:bg-gray-200
        px-3 py-2 text-gray-900  transition-all 
        hover:text-gray-900 dark:bg-gray-800 
        dark:text-gray-50 dark:hover:text-gray-50"
        href={ children.path }
        >
            { children.children }
              {/*<HomeIcon className="h-4 w-4 text-[#888888]" /> */}
            { children.label }
        </a>
  )
}

export default SidebarLinkComponent;
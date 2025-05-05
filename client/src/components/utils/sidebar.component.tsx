import get_link_list from "@/Providers/link.provider";
import {  Package2Icon} from "@/components/icons/package.icon";
import ILink from "@/types/sideLink.type";
import SidebarLinkComponent from "@/components/utils/sidebarLink.component";


function SidebarComponent() {
    const linkList:ILink[] = get_link_list();
    return (
        <div className="flex flex-col gap-2">
            <div className="flex h-[40px] items-center px-4 py-7 w-full ">
                <a className="flex items-center gap-2 font-semibold" href="#">
                    <Package2Icon className="h-6 w-6 text-[12px] text-[#2baae0]" />
                    <span className="font-sans text-[#888888]">BizBoost</span>
                </a>
            </div>
            <div className="flex-1 mt-[2%]">
                <nav className="grid gap-2 items-start px-4 text-sm text-[12px]">
                    {
                        linkList.map(
                            (item:ILink )=> (
                                <SidebarLinkComponent {...item} key={ item.index} />
                            )
                        )
                    }
                </nav>
            </div>
        </div>
    );
}

export default SidebarComponent
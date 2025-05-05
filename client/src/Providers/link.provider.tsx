import ArchiveIcon from "@/components/icons/archive.icon";
import CurrencyIcon from "@/components/icons/currency.icon";
import HomeIcon from "@/components/icons/home.icon";
import { PackageIcon } from "@/components/icons/package.icon";
import SettingsIcon from "@/components/icons/setting.icon";
import UserIcon from "@/components/icons/user.icon";
import ILink from "@/types/sideLink.type";




function get_link_list(): ILink[] {
    let links: ILink[] = [
        {
            path: "/Dashboard",
            label: "Home",
            children: <HomeIcon className="h-4 w-4 text-[#888888]" />,
            index: 0
        },
        {
            path: "/",
            label: "Services",
            children: <PackageIcon className="h-4 w-4 text-[#888888]" />,
            index: 1
        },
        {
            path: "/bizz-crm-service",
            label: "Biz-CRM",
            children: <UserIcon className="h-4 w-4 text-[#888888]" />,
            index: 2
        },
        {
            path: "/bizz-inventory-service",
            label: "Biz-Inventory",
            children: <ArchiveIcon className="h-4 w-4 text-[#888888]" />,
            index: 3
        },
        {
            path: "/",
            label: "Biz-Financial",
            children: <CurrencyIcon className="h-4 w-4 text-[#888888]" />,
            index: 4
        },
        {
            path: "/",
            label: "Settings",
            children: <SettingsIcon className="h-4 w-4 text-[#888888]" />,
            index: 5
        }
    ];
    return links;
}

export default get_link_list;
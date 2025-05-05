import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PackageIcon } from "@/components/icons/package.icon";
import UsersIcon from "@/components/icons/users.icon";
import ShoppingCartIcon from "@/components/icons/shopping.icon";
import BoxIcon from "@/components/icons/box.icon";
import BriefcaseIcon from "@/components/icons/briefcase.icon";
import { CiExport } from "react-icons/ci";
import SettingsIcon from "@/components/icons/setting.icon";
import InventoryItem from "@/types/inventory.type";
import { OpenInNewWindowIcon, PlusIcon } from "@radix-ui/react-icons";
import { MdProductionQuantityLimits } from "react-icons/md";



const InventoryActionMenu: React.FC<InventoryItem> = (props: InventoryItem) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <span>
                    <SettingsIcon className="h-4 w-4 cursor-pointer 
                     hover:rotate-180 transition-all duration-200 
                     hover:text-red-700" />
                </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
                <DropdownMenuLabel className="text-red-700/70 font-extralight flex justify-start text-sm">
                    <PackageIcon className="mr-2 h-5 w-5 text-red-700/70 font-extralight" />
                    {props.name}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <OpenInNewWindowIcon className="mr-2 h-5 w-5 text-red-700 font-extralight" />
                        <a href={"/my-inventory/details/" + props.id}
                            className="text-sm  font-extralight">Open </a>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <UsersIcon className="mr-2 h-5 w-5 font-extralight" />
                        <a href={"/my-inventory/customers/" + props.id} className="font-extralight">Customers</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <MdProductionQuantityLimits className="mr-2 h-5 w-5 font-extralight" />
                        <a href={"/my-inventory/products/" + props.id} className="font-extralight">Products</a>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <ShoppingCartIcon className="mr-2 h-5 w-5 font-extralight" />
                        <span className="font-extralight">Sales</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <BoxIcon className="mr-2 h-5 w-5 font-extralight" />
                        <a href={"/my-inventory/stocks/" + props.id} className="font-extralight">
                            Stock
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <BriefcaseIcon className="mr-2 h-5 w-5 font-extralight" />
                        <span className="font-extralight">Vendors</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <CiExport className="mr-2 h-5 w-5 font-extralight" />
                        <span className="font-extralight">Export</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <PlusIcon className="mr-2 h-4 w-4 font-extralight" />
                        <span className="font-extralight">More...</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default InventoryActionMenu;
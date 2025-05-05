
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

import UsersIcon from "@/components/icons/users.icon";
import ShoppingCartIcon from "@/components/icons/shopping.icon";
import BriefcaseIcon from "@/components/icons/briefcase.icon";
import { PackageIcon } from "@/components/icons/package.icon";
import BoxIcon from "@/components/icons/box.icon";
import SettingsIcon from "@/components/icons/setting.icon";
import { MdProductionQuantityLimits } from "react-icons/md";


type inventoryHeaderProps = {
    id: string
};

const InventoryHeaderComponent: React.FC<inventoryHeaderProps> = (props: inventoryHeaderProps) => {
    const id: string = props.id as string;
    return (
        <header className="px-4 md:px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-5">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a
                                href="/bizz-inventory-service"
                                className="flex justify-between space-x-1 
                                hover:opacity-70
                                transition-all duration-150
                                ">
                                <PackageIcon className="h-5 w-5" />
                                <span className="text-sm">Inventory</span></a>
                        </TooltipTrigger>
                        <TooltipContent>Inventory</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a href={"/my-inventory/customers/" + id}
                                className="flex justify-between space-x-1 hover:opacity-70
                                transition-all duration-150"
                            >
                                <UsersIcon className="h-5 w-5" />
                                <span className="text-sm">Customers</span>
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>Customers</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a href={"/my-inventory/products/" + id}
                                className="flex justify-between space-x-1 hover:opacity-70
                                transition-all duration-150"
                            >
                                <MdProductionQuantityLimits className="h-5 w-5" />
                                <span className="text-sm">Products</span>
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>Products</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a href="/" className="flex justify-between space-x-1 hover:opacity-70
                                transition-all duration-150">
                                <ShoppingCartIcon className="h-5 w-5" />
                                <span className="text-sm">Sales</span>
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>Sales</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a href={"/my-inventory/stocks/" + id}
                                className="flex justify-between space-x-1 hover:opacity-70
                                transition-all duration-150">
                                <BoxIcon className="h-5 w-5" />
                                <span className="text-sm">Stock</span>
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>Stock</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a href="/" className="flex justify-between space-x-1 hover:opacity-70
                                transition-all duration-150">
                                <BriefcaseIcon className="h-5 w-5" />
                                <span className="text-sm">Vendors</span>
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>Vendors</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a href="/" className="flex justify-between space-x-1 hover:opacity-70
                                transition-all duration-150">
                                <SettingsIcon className="h-5 w-5" />
                                <span className="text-sm">Settings</span>
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>Inventory Settings</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                    Export
                </Button>
                <Button variant="outline" size="sm">
                    Import
                </Button>
            </div>
        </header >
    )
};

export default InventoryHeaderComponent;
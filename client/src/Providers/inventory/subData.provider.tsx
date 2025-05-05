import SubComponentProps from "@/types/inventorySubData.type";
import UsersIcon from "@/components/icons/users.icon";
import ShoppingCartIcon from "@/components/icons/shopping.icon";
import DollarSignIcon from "@/components/icons/dollarSign.icon";
import LayersIcon from "@/components/icons/layers.icon";
import BriefcaseIcon from "@/components/icons/briefcase.icon";
import { PackageIcon } from "@/components/icons/package.icon";





export const subDataProps: SubComponentProps[] = [
    {
        identifier: "totalCustomers",
        description: "Total number of customers :",
        icon: <UsersIcon />
    },
    {
        identifier: "totalProcuts",
        description: "Total number of products :",
        icon: <ShoppingCartIcon />
    },
    {
        identifier: "totalSales",
        description: "Total sales revenue :",
        icon: <DollarSignIcon />
    }
];

export const subDataPartTwo: SubComponentProps[] = [
    {
        identifier: "totalStocks",
        description: "Total number of items in stock :",
        icon: <LayersIcon />,
        comment: "+2% from last month"
    },
    {
        identifier: "totalVendors",
        description: "Total number of vendors :",
        icon: <BriefcaseIcon />
    },
    {
        identifier: "totalInventory",
        description: "Total value of inventory :",
        icon: <PackageIcon />,
        comment: "+13% for last year"
    }

];
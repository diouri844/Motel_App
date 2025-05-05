import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import CustomerItem from "@/types/Customer.type"
import { CiExport, CiTrash } from "react-icons/ci"

import EditCustomerComponent from "@/components/utils/Customer/editCustomer.component";
// import { useRef } from "react";




const CustomerActionMenu: React.FC<CustomerItem> = (props: CustomerItem) => {
    const customer: CustomerItem = props;
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                {customer.firstName + " " + customer.lastName}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <EditCustomerComponent {...customer} />
                <DropdownMenuItem className="cursor-pointer">
                    <CiTrash /> Delete</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                    <CiExport /> Export</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


export default CustomerActionMenu;

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { useParams } from "react-router-dom"
import DashbroadLayout from "@/layouts/dashbroad.layout"
import InventoryHeaderComponent from "@/components/utils/Inventory/inventoryHeader.component";
import CustomerDetailsCard from "@/components/utils/Customer/customerCardDetails.component";
import CustomerSaleList from "@/components/utils/Sale/saleList.component";
import CustomerItem from "@/types/Customer.type"
import { useSelector } from "react-redux"
import { retriveInventoryCustomerList } from "@/hooks/loadInventoryCustomer.hook"
import CustomerOrderList from "../Order/orderList.component";


export default function CustomerDetailsPage() {
    const customerId: string = useParams().id as string;
    const inventoryId: string = useParams().inventoryId as string;
    retriveInventoryCustomerList(inventoryId);
    const customerStoreDetails: any = useSelector((state: any) => state.customer);
    const customerTarget: CustomerItem = customerStoreDetails.customerData.filter(
        (item: CustomerItem) => item.id === customerId
    )[0];

    //console.log(customerTarget);
    const inevntoryProps = {
        id: inventoryId
    };
    return (
        <DashbroadLayout>
            <div className="flex flex-col min-h-[850px] overflow-y-auto">
                <InventoryHeaderComponent {...inevntoryProps} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-8 lg:p-10">
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        {/** Setup Customer details card component : */}
                        <CustomerDetailsCard  {...customerTarget} />
                    </div>
                    <div className="col-span-1 md:col-span-2 lg:col-span-2">
                        <Card className="bg-transparent shadow-none border-l-4
                        border-r-0
                        border-t-0
                        border-b-0
                        rounded-sm
                        border-[#dbeaf2]">
                            <CardHeader>
                                <CardTitle>Inventory Details</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>SKU</TableHead>
                                            <TableHead>Product</TableHead>
                                            <TableHead>Quantity</TableHead>
                                            <TableHead>Description</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>ABC123</TableCell>
                                            <TableCell>Acme Widgets</TableCell>
                                            <TableCell>25</TableCell>
                                            <TableCell>High-quality widgets for all your needs.</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>XYZ456</TableCell>
                                            <TableCell>Deluxe Gadgets</TableCell>
                                            <TableCell>12</TableCell>
                                            <TableCell>Premium gadgets with advanced features.</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>PQR789</TableCell>
                                            <TableCell>Fancy Doohickeys</TableCell>
                                            <TableCell>8</TableCell>
                                            <TableCell>Unique doohickeys for the discerning customer.</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-span-1 md:col-span-2 lg:col-span-3">
                        {/** Setup a customer panel for a quick acces to all action like > Add new Order , 
                         * 
                         * move exesting order to be a sale 
                         * and quick update customer details 
                         * 
                         */}
                    </div>
                    <div className="col-span-1 md:col-span-2 lg:col-span-3">
                    </div>
                    {/* Customer Sale List history  component */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-3">
                        <CustomerSaleList {...customerTarget} />
                    </div>
                    {/* Customer Order List hystory  component */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-3">
                        <CustomerOrderList {...customerTarget} />
                    </div>
                </div>
            </div>
        </DashbroadLayout>
    )
}

function FilterIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
    )
}


function ListOrderedIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="10" x2="21" y1="6" y2="6" />
            <line x1="10" x2="21" y1="12" y2="12" />
            <line x1="10" x2="21" y1="18" y2="18" />
            <path d="M4 6h1v4" />
            <path d="M4 10h2" />
            <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
        </svg>
    )
}
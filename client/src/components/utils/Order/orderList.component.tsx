import CustomerItem from "@/types/Customer.type";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import NoDataComponent from "../noData.component";
import CreateOrderForm from "@/components/utils/Order/addOrder.component";
import { retriveCustomerOrderList } from "@/hooks/Order/loadCustomerOrder.hooks";







const CustomerOrderList: React.FC<CustomerItem> = (props: CustomerItem) => {
    const OrderList: any[] = [];
    const { error, noData } = retriveCustomerOrderList(props.id);
    if (error) {
        console.error(error);
    }
    return (
        <Card className="bg-transparent border-none shadow-none">
            <CardHeader>
                <CardTitle>Order List</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Order #</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Tracking</TableHead>
                            <TableHead>Fulfillment</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            OrderList.length > 0 && !noData ? (
                                <>
                                    <TableRow>
                                        <TableCell>
                                            <Link href="#" className="font-medium" prefetch={false}>
                                                #12345
                                            </Link>
                                        </TableCell>
                                        <TableCell>2023-06-01</TableCell>
                                        <TableCell>
                                            <Badge variant="secondary">Fulfilled</Badge>
                                        </TableCell>
                                        <TableCell>
                                            <a href="/" className="text-blue-600 underline" prefetch={false}>
                                                1Z999AA1234567890
                                            </a>
                                        </TableCell>
                                        <TableCell>Delivered</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Link href="#" className="font-medium" prefetch={false}>
                                                #12346
                                            </Link>
                                        </TableCell>
                                        <TableCell>2023-05-15</TableCell>
                                        <TableCell>
                                            <Badge variant="outline">Pending</Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Link href="#" className="text-blue-600 underline" prefetch={false}>
                                                1Z999AA1234567891
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                </>
                            ) : (
                                <div>
                                    <NoDataComponent {
                                        ...{
                                            message: "No Order yet !",
                                            description: "we can t find any order history for this customer"
                                        }
                                    } />
                                    <CreateOrderForm  {...props} />
                                </div>
                            )
                        }

                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};


export default CustomerOrderList;
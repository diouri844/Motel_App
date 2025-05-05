
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import CustomerItem from "@/types/Customer.type";
import NoDataComponent from "../noData.component";
import CreateSaleFromOrderForm from "@/components/utils/Sale/addSale.component";





const CustomerSaleList: React.FC<CustomerItem> = (props: CustomerItem) => {
    console.log("Customer id : ", props.id);
    // call hooks to retrive all customer sales : 
    const SaleList: any[] = [];
    return (
        <Card className="bg-transparent shadow-none border-0">
            <CardHeader>
                <CardTitle>Sales List</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Order #</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Total</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            SaleList.length > 0 ? (
                                <>
                                    <TableRow>
                                        <TableCell>
                                            <Link href="#" className="font-medium" prefetch={false}>
                                                #12345
                                            </Link>
                                        </TableCell>
                                        <TableCell>2023-06-01</TableCell>
                                        <TableCell>$250.00</TableCell>
                                        <TableCell>
                                            <Badge variant="secondary">Fulfilled</Badge>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Link href="#" className="font-medium" prefetch={false}>
                                                #12346
                                            </Link>
                                        </TableCell>
                                        <TableCell>2023-05-15</TableCell>
                                        <TableCell>$150.00</TableCell>
                                        <TableCell>
                                            <Badge variant="outline">Pending</Badge>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Link href="#" className="font-medium" prefetch={false}>
                                                #12347
                                            </Link>
                                        </TableCell>
                                        <TableCell>2023-04-30</TableCell>
                                        <TableCell>$350.00</TableCell>
                                        <TableCell>
                                            <Badge variant="secondary">Fulfilled</Badge>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Link href="#" className="font-medium" prefetch={false}>
                                                #12348
                                            </Link>
                                        </TableCell>
                                        <TableCell>2023-04-01</TableCell>
                                        <TableCell>$450.00</TableCell>
                                        <TableCell>
                                            <Badge variant="secondary">Fulfilled</Badge>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Link href="#" className="font-medium" prefetch={false}>
                                                #12349
                                            </Link>
                                        </TableCell>
                                        <TableCell>2023-03-15</TableCell>
                                        <TableCell>$550.00</TableCell>
                                        <TableCell>
                                            <Badge variant="secondary">Fulfilled</Badge>
                                        </TableCell>
                                    </TableRow>
                                </>
                            ) : (
                                <div className="">
                                    <NoDataComponent  {...{
                                        message: "No Sale yet !",
                                        description: "we can t find any sale history for this customer"
                                    }
                                    } />
                                    <CreateSaleFromOrderForm />
                                </div>

                            )
                        }
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}



export default CustomerSaleList;
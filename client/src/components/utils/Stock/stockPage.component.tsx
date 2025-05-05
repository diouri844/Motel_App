import DashbroadLayout from "@/layouts/dashbroad.layout";
import InventoryHeaderComponent from "@/components/utils/Inventory/inventoryHeader.component";
import { DollarSignIcon, MoreHorizontal, Trash } from "lucide-react";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"


import { Input } from "@/components/ui/input"
import {
    DropdownMenu, DropdownMenuTrigger, DropdownMenuContent
    , DropdownMenuSeparator,
    DropdownMenuLabel,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import UsersIcon from "@/components/icons/users.icon";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { useParams } from "react-router-dom";






const StockItemPage: React.FC<any> = (props: any) => {
    // extract the inventory id and the stock target id from the url :
    const { inventoryId, id } = useParams();
    console.log(inventoryId, id);
    const filteredProducts: any[] = [];
    // time to get the product for the stock id : 

    return (
        <DashbroadLayout>
            <div className="flex flex-col h-full">
                <header>
                    <InventoryHeaderComponent {...props} />
                    <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
                        <h1 className="text-2xl font-bold">Stock Details</h1>
                        <div className="flex items-center gap-4">
                            <Input
                                type="text"
                                placeholder="Search customers..."
                                className="max-w-md"
                            />
                        </div>
                    </div>
                </header>
                <main className="flex-1 p-4 md:p-6">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        <Card className=" text-gray-700 my-3 bg-transparent
                            border-l-0
                            border-r-0
                            border-t-0
                            border-b-4
                            rounded-sm
                            border-[#ffc265]
                            shadow-none
                            ">
                            <CardHeader>
                                <CardTitle>Total Products</CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-between">
                                <div className="text-4xl font-bold">{0}</div>
                                <UsersIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                            </CardContent>
                        </Card>
                        <Card className=" text-gray-700 my-3 bg-transparent
                            border-l-0
                            border-r-0
                            border-t-0
                            border-b-4
                            rounded-sm
                            border-[#ffc265]
                            shadow-none
                            ">
                            <CardHeader>
                                <CardTitle>Total Value</CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-between">
                                <div className="text-4xl font-bold">{0}</div>
                                <DollarSignIcon
                                    className="w-8 h-8 text-gray-500 dark:text-gray-400 cursor-pointer"
                                />
                            </CardContent>
                        </Card>
                        <Card className=" text-gray-700 my-3 bg-transparent
                            border-l-0
                            border-r-0
                            border-t-0
                            border-b-4
                            rounded-sm
                            border-[#ffc265]
                            shadow-none
                            ">
                            <CardHeader>
                                <CardTitle>Total Quantity</CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-between">
                                <div className="text-4xl font-bold">{0}</div>
                                <MdOutlineProductionQuantityLimits className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                            </CardContent>
                        </Card>
                    </div>
                    <div className="border rounded-lg">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Category</TableHead>
                                    <TableHead>Quantity</TableHead>
                                    <TableHead>Price</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredProducts.map((product) => (
                                    <TableRow key={product.id}>
                                        <TableCell>{product.name}</TableCell>
                                        <TableCell>{product.category}</TableCell>
                                        <TableCell>{product.quantity}</TableCell>
                                        <TableCell>${product.price.toFixed(2)}</TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                                        <span className="sr-only">Open menu</span>
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuItem>Edit product</DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem>
                                                        <Trash className="mr-2 h-4 w-4" />
                                                        <span>Delete</span>
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </main>
            </div >
        </DashbroadLayout >
    )
}


export default StockItemPage;

import { useState } from "react"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup,
    DropdownMenuRadioItem, DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import DashbroadLayout from "@/layouts/dashbroad.layout"
import { useParams } from "react-router-dom"
import InventoryHeaderComponent from "@/components/utils/Inventory/inventoryHeader.component";
import CreateCustomerForm from "@/components/utils/Customer/addCustomer.component";


import ListOrderedIcon from "@/components/icons/listOrder.icon";
import UserCheckIcon from "@/components/icons/userCheck.icon";
import UserPlusIcon from "@/components/icons/userPlus.icon";
import UsersIcon from "@/components/icons/users.icon"
import { useSelector } from "react-redux"
import { retriveInventoryCustomerList } from "@/hooks/loadInventoryCustomer.hook"
import CustomerItem from "@/types/Customer.type"
import EditCustomerComponent from "@/components/utils/Customer/editCustomer.component";
import NoDataComponent from "../noData.component"


export default function InventoryCustomers() {
    const id: string = useParams().id as string;
    const inventoryProp = { id };
    const [searchTerm, setSearchTerm] = useState("")
    const [sortColumn, setSortColumn] = useState("name")
    const [sortDirection, setSortDirection] = useState("asc")
    const [currentPage, setCurrentPage] = useState(1)
    const [customersPerPage, setCustomersPerPage] = useState(10)
    const { noData } = retriveInventoryCustomerList(id);
    const noCustomerYet: boolean = noData === true;


    const toNextPage = (event: React.MouseEvent) => {
        event.preventDefault;
        setCurrentPage(old => old + 1);
    };
    const toPrevPage = (event: React.MouseEvent) => {
        event.preventDefault;
        setCurrentPage(old => old - 1);
    };
    const customerStoreDetails: any = useSelector((state: any) => state.customer);
    const customers: CustomerItem[] = customerStoreDetails.customerData;
    const filteredCustomers = customers.filter((customer: CustomerItem) =>
        customer.firstName.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    const sortedCustomers = filteredCustomers.sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1
        if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1
        return 0
    })
    const indexOfLastCustomer = currentPage * customersPerPage
    const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage
    const currentCustomers = sortedCustomers.slice(indexOfFirstCustomer, indexOfLastCustomer)
    const totalCustomers = customers.length
    const totalNextAllowedActions: number = totalCustomers % 10 === 0 ? Math.floor(totalCustomers / 10) : Math.floor(totalCustomers / 10) + 1;
    const newCustomers = customerStoreDetails.newAddedCustomers;
    const activeCustomers = 0;

    return (
        <DashbroadLayout>
            <div className="flex flex-col h-full">
                <header>
                    <InventoryHeaderComponent {...inventoryProp} />
                    <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
                        <h1 className="text-2xl font-bold">Customer Dashboard</h1>
                        <div className="flex items-center gap-4">
                            <Input
                                type="text"
                                placeholder="Search customers..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="max-w-md"
                            />
                            <CreateCustomerForm />
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="flex items-center gap-2">
                                        <ListOrderedIcon className="w-4 h-4" />
                                        <span>
                                            Sort by {sortColumn} ({sortDirection})
                                        </span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" sideOffset={8}>
                                    <DropdownMenuRadioGroup value={sortColumn} onValueChange={(value) => setSortColumn(value)}>
                                        <DropdownMenuRadioItem value="name">Full-Name</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="email">Email</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="location">Address</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="signupDate">Creation Date</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="status">Status</DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuRadioGroup value={sortDirection} onValueChange={(value) => setSortDirection(value)}>
                                        <DropdownMenuRadioItem value="asc">Ascending</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="desc">Descending</DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </header>
                {
                    noCustomerYet ? (
                        <NoDataComponent
                            message="No Customer Yet"
                            description={"To create new Customer please click the button on the top left"}
                        />
                    ) : (
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
                                        <CardTitle>Total Customers</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex items-center justify-between">
                                        <div className="text-4xl font-bold">{totalCustomers}</div>
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
                                        <CardTitle>New Customers</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex items-center justify-between">
                                        <div className="text-4xl font-bold">{newCustomers}</div>
                                        <UserPlusIcon
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
                                        <CardTitle>Active Customers</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex items-center justify-between">
                                        <div className="text-4xl font-bold">{activeCustomers}</div>
                                        <UserCheckIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="container mx-auto">
                                <Card className=" bg-transparent shadow-none border-none h-[400px] overflow-y-auto">
                                    <CardHeader>
                                        <CardTitle>Customer List</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Table className="">
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="cursor-pointer" onClick={() => setSortColumn("name")}>
                                                        Name{" "}
                                                        {sortColumn === "name" && (
                                                            <span className="ml-2">{sortDirection === "asc" ? "\u2191" : "\u2193"}</span>
                                                        )}
                                                    </TableHead>
                                                    <TableHead className="cursor-pointer" onClick={() => setSortColumn("email")}>
                                                        Email{" "}
                                                        {sortColumn === "email" && (
                                                            <span className="ml-2">{sortDirection === "asc" ? "\u2191" : "\u2193"}</span>
                                                        )}
                                                    </TableHead>
                                                    <TableHead className="cursor-pointer" onClick={() => setSortColumn("location")}>
                                                        Location{" "}
                                                        {sortColumn === "location" && (
                                                            <span className="ml-2">{sortDirection === "asc" ? "\u2191" : "\u2193"}</span>
                                                        )}
                                                    </TableHead>
                                                    <TableHead className="cursor-pointer" onClick={() => setSortColumn("signupDate")}>
                                                        Signup Date{" "}
                                                        {sortColumn === "signupDate" && (
                                                            <span className="ml-2">{sortDirection === "asc" ? "\u2191" : "\u2193"}</span>
                                                        )}
                                                    </TableHead>
                                                    <TableHead className="cursor-pointer" onClick={() => setSortColumn("status")}>
                                                        Status{" "}
                                                        {sortColumn === "status" && (
                                                            <span className="ml-2">{sortDirection === "asc" ? "\u2191" : "\u2193"}</span>
                                                        )}
                                                    </TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {currentCustomers.map((customer: CustomerItem) => (
                                                    <TableRow
                                                        key={customer.id}>
                                                        <TableCell>
                                                            <EditCustomerComponent {...customer} />
                                                        </TableCell>
                                                        <TableCell>{customer.email}</TableCell>
                                                        <TableCell>{customer.address}</TableCell>
                                                        <TableCell>{new Date(customer.createdAt).toLocaleString()}</TableCell>
                                                        <TableCell>
                                                            <span
                                                                className={`px-2 py-1 rounded-full text-xs font-medium ${true
                                                                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                                                                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                                                                    }`}
                                                            >
                                                                {customer.postalCode}
                                                            </span>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                    <CardFooter className="flex justify-center">
                                        <Pagination>
                                            <PaginationContent>
                                                {
                                                    currentPage > 1 && (
                                                        <PaginationItem>

                                                            <PaginationPrevious
                                                                className="cursor-pointer"
                                                                onClick={toPrevPage} />
                                                        </PaginationItem>
                                                    )
                                                }
                                                <PaginationItem>
                                                    <PaginationLink
                                                        className="text-blue-600"
                                                        href="#">{currentPage}</PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationEllipsis />
                                                </PaginationItem>
                                                {
                                                    currentPage < totalNextAllowedActions && (
                                                        <PaginationItem>
                                                            <PaginationNext
                                                                className="cursor-pointer"
                                                                onClick={toNextPage} />
                                                        </PaginationItem>
                                                    )
                                                }

                                            </PaginationContent>
                                        </Pagination>
                                    </CardFooter>
                                </Card>
                            </div>
                        </main>
                    )
                }

            </div>
        </DashbroadLayout>
    )
}
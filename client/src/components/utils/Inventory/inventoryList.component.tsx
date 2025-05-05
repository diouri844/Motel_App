//import LoadingComponent from "@/components/utils/loading.component";
import NoDataComponent from "@/components/utils/noData.component";
import { useSelector } from 'react-redux';
import { SetStateAction, useEffect, useState } from "react";
import InventoryItem from "@/types/inventory.type";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import InventoryItemCard from "@/components/utils/Inventory/inventoryItem.component";
import InventoryPlusComponent from "@/components/utils/Inventory/inventoryPlus.component";
import ListOrderedIcon from "@/components/icons/listOrder.icon";
import { Button } from "@/components/ui/button";



const InventoryListComponent: React.FC = () => {
    const [noData, setNoData] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [dataToDisplay, setDataToDisplay] = useState<InventoryItem[]>([]);
    const [sortColumn, setSortColumn] = useState("name");
    const [sortDirection, setSortDirection] = useState("asc");
    const searchQuery = useSelector((state: any) => state.inventory.searchQuery);
    const inventoryData: InventoryItem[] = useSelector((state: any) => state.inventory.inventoryData);
    const totalInventorys: number = inventoryData.length;
    const itemsPerPage: number = 6;
    const totalNextAllowedActions: number = totalInventorys % itemsPerPage === 0 ? Math.floor(totalInventorys / itemsPerPage) : Math.floor(totalInventorys / itemsPerPage) + 1;
    const inSearch: boolean = searchQuery !== "";
    let sortStr: string = "Sort by " + String(sortColumn) + " (" + String(sortDirection) + " )";


    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        if (inSearch) {
            const filteredData = inventoryData.filter((item: InventoryItem) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            const currentData = filteredData.slice(startIndex, endIndex);

            setDataToDisplay(currentData);
            setNoData(currentData.length === 0);
            return;
        }
        const currentData = inventoryData.slice(startIndex, endIndex);
        setDataToDisplay(currentData);
        setNoData(currentData.length === 0);
    }, [inventoryData, searchQuery, currentPage, itemsPerPage]);

    const toNextPage = (event: React.MouseEvent) => {
        event.preventDefault;
        setCurrentPage(old => old + 1);
    };
    const toPrevPage = (event: React.MouseEvent) => {
        event.preventDefault;
        setCurrentPage(old => old - 1);
    };
    const handleColumnChange = (value: SetStateAction<string>) => {
        console.log(value);
        setSortColumn(value);
        return;
    }

    const handleSortChange = (value: SetStateAction<string>) => {
        console.log(value);
        setSortDirection(value);
    };



    return (
        <>
            <div className="grid gap-4 w-[700px] mx-[4%]">
                {
                    noData ? (
                        <NoDataComponent message={"No Inventory Founded "} />
                    ) : (
                        <main className="flex-1 bg-background p-6 md:p-8 lg:p-10">
                            {/* add order option menu */}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant={"ghost"} size={"sm"} className="flex items-center gap-2 my-4 p-3
                                    outline-none hover:outline-none focus:outline-none">
                                        <ListOrderedIcon className="w-4 h-4" />
                                        <span>
                                            {sortStr}
                                        </span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" sideOffset={8} className="bg-gray-50">
                                    <DropdownMenuRadioGroup value={sortColumn} onValueChange={handleColumnChange}>
                                        <DropdownMenuRadioItem value="name" className="cursor-pointer">name</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="date" className="cursor-pointer">Creation Date</DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuRadioGroup value={sortDirection} onValueChange={handleSortChange}>
                                        <DropdownMenuRadioItem value="asc" className="cursor-pointer">Ascending</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="desc" className="cursor-pointer">Descending</DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <div className="max-w-6xl mx-auto">
                                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                                    {
                                        dataToDisplay.map(
                                            (inventory: InventoryItem) => (
                                                <InventoryItemCard {...inventory} key={inventory.id} />
                                            )
                                        )
                                    }
                                    {
                                        (!inSearch && currentPage === totalNextAllowedActions && dataToDisplay.length < itemsPerPage) && <InventoryPlusComponent />
                                    }

                                </div>
                                <div className="mt-9 flex justify-center">
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
                                </div>
                            </div>
                        </main>
                    )
                }
            </div>

        </>
    );
};

export default InventoryListComponent;

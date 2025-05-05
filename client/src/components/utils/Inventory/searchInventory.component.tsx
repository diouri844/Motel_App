import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { clearSearchQuery, setInventoryData } from "@/stores/Inventory/inventory.actions";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
//import { useToast } from "@/components/ui/use-toast";
import AddInventoryComponent from "@/components/utils/Inventory/addInventory.component";
import InventoryItem from "@/types/inventory.type";





interface SearchInventoryProps {
    onSearch: (searchQuery: string) => void;
}


function SearchInventoryComponent(
    { onSearch }: SearchInventoryProps
) {
    // setup query search state : 
    const [searchQueryInput, setSearchQueryInput] = useState<string>("");
    const dispatch = useDispatch();
    const inventoryData: InventoryItem[] = useSelector((state: any) => state.inventory.inventoryData);
    // const { toast } = useToast();
    const children: React.ReactNode = (
        <Button
            size="sm">Add new Inventory</Button>
    );


    const handleSearchChange = (event: React.ChangeEvent): void => {
        setSearchQueryInput(event.target.value);
        // check if the current search value is empty :
        if (event.target.value === "") {
            dispatch(clearSearchQuery());
            dispatch(setInventoryData(inventoryData));
            return;
        }
        handleSearch();
        return;
    };

    // handle enter event :
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // check if the key if entr :
        if (event.key == "Enter") {
            handleSearch();
        }
    }

    const handleSearch = () => {
        // search if search query not empyt :
        if (searchQueryInput === "" || searchQueryInput.trim().length == 0) {
            dispatch(clearSearchQuery());
            return;
        }
        // Call the onSearch callback when search is triggered
        onSearch(searchQueryInput);
        return;
    };

    return (
        <div className="flex gap-1  flex-row justify-between">
            <div className="max-w-[400px]">
                <div className="relative">
                    <Input
                        onKeyDown={handleKeyDown}
                        value={searchQueryInput}
                        onChange={handleSearchChange}
                        className="pl-8 w-full md:w-[200px] lg:w-[250px]"
                        placeholder="Search for an Inventory" type="search" />
                </div>
            </div>
            <div className="flex shrink-0 items-start gap-2">
                <Button
                    onClick={handleSearch}
                    className="rounded-full" size="icon"
                    variant="link">
                    <CiSearch className="w-4 h-4" />
                    <span className="sr-only">Search</span>
                </Button>
                <AddInventoryComponent {...children} />
            </div>
        </div>
    )
}

export default SearchInventoryComponent;
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { clearSearchQuery } from "@/stores/CRM/crm.actions";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { useToast } from "@/components/ui/use-toast";
import AddCrmComponent from "./addCrm.component";




interface SearchCrmProps {
    onSearch: (searchQuery: string) => void;
}


function SearchCrmComponent(
    { onSearch }: SearchCrmProps
) {
    // setup query search state : 
    const [searchQueryInput, setSearchQueryInput] = useState<string>("");
    const dispatch = useDispatch();
    const { toast } = useToast();

    const handleSearchChange = (event: React.ChangeEvent): void => {
        setSearchQueryInput(event.target.value);
        // check if the current search value is empty :
        if (event.target.value === "") {
            dispatch(clearSearchQuery());
        }
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
        if (searchQueryInput === "") {
            // call a toat provider
            toast({
                variant: "destructive",
                description: "please enter a valid search query"
            });
            return;
        }
        // Call the onSearch callback when search is triggered

        onSearch(searchQueryInput);
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
                        placeholder="Search for a CRM" type="search" />
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
                <AddCrmComponent />
            </div>
        </div>
    )
}

export default SearchCrmComponent;
import CRMFacade from "@/facade/crm.facade";

import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import ListOrderedIcon from "@/components/icons/listOrder.icon";

import { useSelector } from 'react-redux';
import { SetStateAction, useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import LoadingComponent from "@/components/utils/loading.component";
import NoDataComponent from "@/components/utils/noData.component";
import { Button } from "@/components/ui/button";







const CrmListComponent: React.FC = () => {
  const facade = new CRMFacade();
  const [noData, setNoData] = useState<boolean>(true);
  const [sortColumn, setSortColumn] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");

  //setup use effect test to check if axios instance can work as expected :
  useEffect(
    () => {
      const pingService = async () => {
        const pingResponse: AxiosResponse = await facade.pingCRmService("Ping");
        //check status
        if (pingResponse.status !== 200) {
          throw new Error("Failed to ping backend 😕");
        }
      }
      pingService();
    }, []
  );
  const handleColumnChange = (value: SetStateAction<string>) => {
    console.log(value);
    setSortColumn(value);
    return;
  }

  const handleSortChange = (value: SetStateAction<string>) => {
    console.log(value);
    setSortDirection(value);
  };


  // check if the query is empty or not : 
  const searchQuery = useSelector(
    (state: any) => state.crm.searchQuery
  );
  const inSearch: boolean = searchQuery !== '';
  let sortStr: string = "Sort by " + String(sortColumn) + " (" + String(sortDirection) + " )";

  if (inSearch) {
    return (
      <LoadingComponent />
    );
  }
  return (
    <>
      <div className="grid gap-4 w-[700px] mx-[4%]" >
        {
          noData ? (
            <NoDataComponent message={"No CRM Founded "} />
          ) : (
            <main className="flex-1 bg-background p-6 md:p-8 lg:p-10">
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
            </main>
          )
        }
      </div>
    </>
  );
};

export default CrmListComponent;

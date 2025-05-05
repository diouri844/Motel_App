import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { CiEdit } from "react-icons/ci";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import StockFacade from "@/facade/stock.facade";
import StockItem from "@/types/Stock.type";
import UpdateStockDto from "@/types/dto/StockDto/updateStock.dto";
import { AxiosResponse } from "axios";
import { useToast } from "@/components/ui/use-toast";
import { editStock } from "@/stores/Stock/stock.action";
import { useDispatch } from "react-redux";
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";


const EditStockComponent: React.FC<StockItem> = (props: StockItem) => {
    const [stockName, setStockName] = useState<string>(props.name as string);
    const stockManager = new StockFacade();
    const { toast } = useToast();
    const dispatch = useDispatch();



    function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        //console.log(event);
        console.log(stockName);
        // call stockManager api : 
        const payload: UpdateStockDto = {
            name: stockName
        };
        // send request : 
        stockManager.updateStockById(props.id, payload)
            .then(
                (response: AxiosResponse) => {
                    //console.log("Updated : ", response.data.data);
                    // stock updated time to trigger a dispatch actions : 
                    const updatedStock: StockItem = response.data.data;
                    dispatch(editStock(updatedStock, props.id));
                    toast({
                        title: "Stock Updated",
                        description: response.data.message
                    });
                    return;
                }
            ).catch(
                error => {
                    console.log("Failed updating stock record : ", error);
                    toast({
                        title: "Error",
                        description: "Failed to update this stock ",
                        variant: "destructive"
                    });
                    return;
                }
            );
    }

    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>): void {
        event.preventDefault();
        setStockName(event.target.value);
        return;
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="secondary" size="sm">
                    <CiEdit className=" h-4 w-4 mx-2" />
                    Update
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Stock :  </DialogTitle>
                    <DialogDescription className="text-sm">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger className="flex gap-2">
                                    {props.id}
                                    <span>
                                        <OpenInNewWindowIcon
                                            className="w-4 h-4 cursor-pointer text-blue-600"
                                        />
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Open Stock page </p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                    </DialogDescription>
                </DialogHeader>
                <form
                    onSubmit={handleSubmit}
                    className="grid gap-4">
                    {/** Stock related inventory reference   */}
                    <div className="grid gap-2">
                        <Label>Inventory Ref : </Label>
                        <Input
                            id="invenotryRef"
                            className=" cursor-not-allowed"
                            value={props.inventoryId as string}
                            readOnly
                        />
                    </div>
                    {/** Stock Name  */}
                    <div className="grid gap-2">
                        <Label>Stock Name : </Label>
                        <Input
                            id="customerRef"
                            placeholder="Enter customer reference"
                            value={stockName}
                            onChange={handleNameChange}
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full"
                        variant={"destructive"}
                    >
                        <CiEdit className="h-5 w-5 mx-2" />
                        Update details
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}


export default EditStockComponent;
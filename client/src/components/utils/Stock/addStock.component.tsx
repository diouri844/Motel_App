import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import StockFacade from "@/facade/stock.facade";
import { AxiosResponse } from "axios";
import { useToast } from "@/components/ui/use-toast";
import { useDispatch } from "react-redux";
import { addStock } from "@/stores/Stock/stock.action";


const CreateStockForm: React.FC<{ id: string }> = (props: { id: string }) => {
    const { toast } = useToast();
    const dispatch = useDispatch();
    const [stockName, setStockName] = useState<string>("");
    const stockManager = new StockFacade();

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        // set the new name value :
        setStockName(e.target.value);
        return;
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        //console.log("Sending : ", stockName);
        stockManager.createNewStock(
            {
                inventoryId: props.id,
                name: stockName
            }
        ).then(
            (response: AxiosResponse) => {
                const data = response.data.data;
                //console.log(data);
                dispatch(addStock(data));
                // dispatch local storage trigger to add new stock : 
                toast({
                    description: "New Stock added Successfully 💪"
                });
            }
        ).catch(
            error => {
                console.log(error);
                toast(
                    {
                        variant: "destructive",
                        description: "Failed to create new stock 😓"
                    }
                )
            }
        ).finally(
            () => {
                setStockName("");
                return;
            }
        )

        return;
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    size={"sm"}
                >
                    <PlusIcon className="h-3 w-3 mx-1" />
                    Create Stock
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add New Stock </DialogTitle>
                    <DialogDescription>Create a new Stock .</DialogDescription>
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
                            value={props.id}
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
                        <PlusIcon className="h-5 w-5 mx-2" />
                        Create
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
export default CreateStockForm;
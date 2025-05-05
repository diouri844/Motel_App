import StockItem from "@/types/Stock.type";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { CiTrash } from "react-icons/ci";
import { useRef, useState } from "react";
import { CheckCircledIcon, ExclamationTriangleIcon } from "@radix-ui/react-icons";


const DeleteStockComponent: React.FC<StockItem> = (props: StockItem) => {
    const stockName: string = props.name;
    const targetName = useRef(null);
    const [isValide, setIsValide] = useState<boolean>(false);
    const { toast } = useToast();

    const deleteStock = (event: React.MouseEvent) => {
        event.preventDefault();
        toast(
            {
                description: "this action will be added soon",
                variant: "destructive"
            }
        );
        return;
    }
    const handleNameChange = (event: React.ChangeEvent) => {
        event.preventDefault;
        setIsValide(event.target.value === stockName);
        return;
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="destructive" size="sm">
                    <CiTrash className="h-4 w-4 mx-2" />
                    Delete
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-md text-red-700/70 font-extralight flex">Please Confirm : </DialogTitle>
                    <DialogDescription>
                        To confirm, type "<span className=" font-semibold underline">{props.name}</span>" in the box below
                        <br />
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <Input
                        type="text"
                        className="w-full"
                        placeholder={props.name}
                        ref={targetName}
                        onChange={handleNameChange}
                    />
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button"
                            className="w-full"
                            onClick={deleteStock}
                            disabled={!isValide}
                            variant="secondary">
                            {
                                isValide ? (
                                    <span className="p-2"><CheckCircledIcon className="h-5 w-5 text-green-500" /></span>
                                ) : (
                                    <span className="p-2"><ExclamationTriangleIcon className="h-5 w-5 text-red-600" /></span>
                                )
                            } Delete
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteStockComponent;
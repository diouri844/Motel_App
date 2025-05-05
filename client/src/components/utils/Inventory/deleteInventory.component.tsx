
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
// import InventoryFacade from "@/facade/inventory.facade"
import InventoryItem from "@/types/inventory.type"
import { CheckCircledIcon, ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { ChangeEvent, useRef, useState } from "react"
import { CiTrash } from "react-icons/ci"

const DeleteInventoryConfirmation: React.FC<InventoryItem> = (props: InventoryItem) => {
    const inventoryName: string = props.name;
    const targetName = useRef(null);
    const [isValide, setIsValide] = useState<boolean>(false);
    const { toast } = useToast();
    //const inventoryManager = new InventoryFacade();

    const handleNameChange = (event: ChangeEvent) => {
        event.preventDefault;
        setIsValide(event.target.value === inventoryName);
        return;
    };

    // const handleDeleteInventory = (event: React.MouseEvent): void => {
    //     event.preventDefault;
    //     // call delete dispatcher :
    //     inventoryManager.removeInventory(props.id).then(
    //         response => { console.log(response) }
    //     ).catch(error => { console.log(error) });
    // };

    const deleteInventoryTemp = (event: React.MouseEvent): void => {
        event.preventDefault();
        toast(
            {
                description: "this action will be added soon",
                variant: "destructive"
            }
        );
        return;
    }



    return (
        <Dialog>
            <DialogTrigger asChild>
                <span className="
                        text-gray-900 text-wrap font-normal
                        rounded-xl cursor-pointer
                        p-2
                        transition-all duration-500
                        hover:bg-gray-200">
                    <CiTrash className="h-5 w-5" />
                </span>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-md text-red-700/70 font-extralight flex">Please Confirm : </DialogTitle>
                    <DialogDescription>
                        To confirm, type "<span className=" font-semibold underline">{inventoryName}</span>" in the box below
                        <br />
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <Input
                        type="text"
                        className="w-full"
                        placeholder={inventoryName}
                        ref={targetName}
                        onChange={handleNameChange}
                    />
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button"
                            className="w-full"
                            onClick={deleteInventoryTemp}
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



export default DeleteInventoryConfirmation;
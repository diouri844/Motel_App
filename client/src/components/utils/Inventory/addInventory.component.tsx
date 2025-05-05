import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import InventoryFacade from "@/facade/inventory.facade";
import { useCheckIsAuthProfileAssociated } from "@/hooks/checkProfileCompleted.hook";
import extractUserInfo from "@/hooks/getLocalUserInfo.hook";
import { AddInventory } from "@/stores/Inventory/inventory.actions";
import InventoryItem from "@/types/inventory.type";
import { AxiosResponse } from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";


const AddInventoryComponent: React.FC<React.ReactNode> = (children: React.ReactNode) => {
    const { toast } = useToast();
    const [inventoryName, setInventoryName] = useState<string>("");
    const inventoryManager = new InventoryFacade();
    const [inventoryDescription, setInventoryDescription] = useState<string>("");
    // setup a dispatch trigger : 
    const dispatch = useDispatch();
    const userId = extractUserInfo().id;
    const { authProfile } = useCheckIsAuthProfileAssociated(userId);
    const id = authProfile?.profileId as string;


    const handleNameChange = (event: React.ChangeEvent): void => {
        event.preventDefault();
        // set the new name value :
        setInventoryName(event.target.value);
        return;
    };

    const handleDescriptionChange = (event: React.ChangeEvent): void => {
        event.preventDefault();
        setInventoryDescription(event.target.value);
        return;
    }


    const handleAddInventory = (event: React.MouseEvent): void => {
        event.preventDefault();
        // check input state :
        if (inventoryName.length === 0 || inventoryName.trim().length === 0) {
            // set toast item to popup :
            toast(
                {
                    description: "Please provide a valid inventory name",
                    variant: "destructive"
                }
            )
            return;
        };
        // call the facade to create a new item in our server side :
        inventoryManager.createInventory(
            id, {
            name: inventoryName,
            description: inventoryDescription
        })
            .then(
                (response: AxiosResponse) => {
                    const data = response.data.data;
                    // setup a local version from the created inventory :
                    // setup an inventory object :
                    const inventoryData: InventoryItem = {
                        id: data.id,
                        name: data.name,
                        description: data.description,
                        createdAt: new Date().toDateString(),
                        userId: data.userId
                    };
                    // call the dispatcher :
                    dispatch(AddInventory(inventoryData));
                    toast({
                        description: "New Inventory added Successfully 💪"
                    });
                }
            ).catch(
                error => {
                    console.log(error);
                    toast(
                        {
                            variant: "destructive",
                            description: "Failed to create new inventory 😓"
                        }
                    )
                }
            ).finally(
                () => {
                    setInventoryName("");
                    setInventoryDescription("");
                    return;
                }
            );
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent
                className="w-[450px] bg-gray-200 border-none shadow-sm text-sm">
                <DialogTitle className="text-lg my-2 text-red-700/70 font-extralight">
                    Add New Inventory
                </DialogTitle>
                <form>
                    <div className="grid w-full items-center gap-5 mb-3">
                        {/** name field :  */}
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name"
                                className="text-sm size-sm"
                            >Name: </Label>
                            <Input
                                id="name"
                                className="w-[350px] h-[30px] p-4 rounded-sm
                                border border-red-400 border-l-[10px] 
                                border-r-0 border-t-0
                                border-b-0  focus:outline-none"
                                placeholder="Your Inventory name"
                                value={inventoryName}
                                onChange={handleNameChange}
                            />
                        </div>
                        {/** description field :  */}
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name"
                                className="text-sm size-sm"
                            >Description: </Label>
                            <textarea
                                id="description"
                                value={inventoryDescription}
                                onChange={handleDescriptionChange}
                                className="w-[350px] h-[50px] p-4 rounded-sm
                                focus:outline-none bg-transparent"
                                placeholder="Add description if you want to"
                            />
                        </div>
                    </div>
                    <Button
                        type="button"
                        onClick={handleAddInventory}
                        size="sm" variant={"destructive"}>
                        Create
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddInventoryComponent;
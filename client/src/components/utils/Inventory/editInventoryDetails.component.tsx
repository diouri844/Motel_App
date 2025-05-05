import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CiEdit } from "react-icons/ci";
import { SubmitHandler, useForm } from "react-hook-form"
import { CommitIcon } from "@radix-ui/react-icons"
import InventoryItemSummary from "@/types/EditInventory.type"
import InventoryFacade from "@/facade/inventory.facade"
import { useToast } from "@/components/ui/use-toast"
import { useDispatch } from "react-redux"
import { UpdateInventory } from "@/stores/Inventory/inventory.actions"




const EditInventoryDetails: React.FC<InventoryItemSummary> = (targetInventory: InventoryItemSummary) => {
    const InventoryManager = new InventoryFacade();
    const { toast } = useToast();
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            id: targetInventory.id,
            name: targetInventory.name,
            description: targetInventory.description
        },
    });

    const handelUpdateInventory: SubmitHandler<InventoryItemSummary> = (data: InventoryItemSummary) => {
        // call inventory updat facade trigger : 
        InventoryManager.editInventoryDetails(
            targetInventory.id as string,
            data
        ).then(response => {
            // check response status :
            const message: string = response.data.message;

            toast(
                {
                    description: message,
                    variant: response.status == 202 ? "default" : "destructive"
                }
            );
            // time to dispatch trigger to update the dom : 
            dispatch(UpdateInventory(targetInventory.id as string, response.data.data));
            return;
        }).catch(
            error => {
                console.log(error);
            }
        );

    };

    return (
        <div className="px-4 py-3 md:p-6 bg-transparent">
            <Card className="bg-transparent  h-[400px] border-0 shadow-none">
                <CardHeader>
                    <CardTitle className="flex justify-normal gap-1">
                        <CiEdit />
                        Edit details
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="grid gap-4" onSubmit={handleSubmit(handelUpdateInventory)}>
                        <div className="grid gap-2">
                            <Label htmlFor="id">Ref</Label>
                            <Input
                                id="id"
                                readOnly
                                className=" cursor-not-allowed"
                                {
                                ...register("id")
                                }
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                placeholder="Enter product name"
                                {
                                ...register("name",
                                    { required: "Inventory Name is required" }
                                )
                                }
                            />
                            {errors.name &&
                                <span className="text-red-500 text-sm opacity-75">{errors.name.message}</span>
                            }
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                placeholder="Enter product description"
                                {
                                ...register("description")
                                }
                            />
                        </div>
                        <div className="flex">
                            <Button type="submit" variant={"secondary"}
                                className="w-full hover:bg-gray-200 
                                transition-all duration-500">
                                <CommitIcon className="w-4 h-4 mx-2" />
                                Save changes</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
};




export default EditInventoryDetails;
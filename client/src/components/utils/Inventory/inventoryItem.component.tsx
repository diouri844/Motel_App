import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import InventoryItem from "@/types/inventory.type";
import { CiFolderOn } from "react-icons/ci";
import EditInventorySheet from "@/components/utils/Inventory/editInventorySheet.component";
import DeleteInventoryConfirmation from "@/components/utils/Inventory/deleteInventory.component";
import InventoryActionMenu from "@/components/utils/Inventory/inventoryActionMenu.component";





const InventoryItemCard: React.FC<InventoryItem> = (props: InventoryItem) => {
    const displayedDate: Date = new Date(props.createdAt);
    const linkPath: string = "/my-inventory/details/" + props.id;
    return (
        <Card className="bg-blend-hard-light 
            hover:shadow-xl  
            hover:rotate-1
            transition-all 
            duration-300
            bg-muted rounded-lg bg-gray-50 ">
            <CardHeader>
                <CardTitle className="text-md text-red-700/70 font-extralight flex justify-between">

                    <span className="flex justify-between gap-3">
                        <CiFolderOn className="h-6 w-6" />
                        <a href={linkPath}>
                            {props.name}
                        </a>
                    </span>
                    <InventoryActionMenu {...props} />
                </CardTitle>
                <CardDescription
                    className="text-[12px] font-light text-gray-500 dark:text-gray-400"
                >{props.description || "No description provided "} </CardDescription>

            </CardHeader>
            <CardFooter className="flex items-center justify-between">
                <div className="text-md text-muted-foreground flex justify-items-center gap-3">
                    <EditInventorySheet {...props} />
                    <DeleteInventoryConfirmation {...props} />
                </div>
                <span className="text-sm text-muted-foreground font-light text-gray-400"> {displayedDate.toLocaleString()} </span>
            </CardFooter>
        </Card>
    );
}

export default InventoryItemCard;



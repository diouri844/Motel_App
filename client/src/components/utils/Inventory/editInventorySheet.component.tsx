import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet"
import EditInventoryDetails from "@/components/utils/Inventory/editInventoryDetails.component";
import InventoryItem from "@/types/inventory.type";
import { CiEdit } from "react-icons/ci";

const EditInventorySheet: React.FC<InventoryItem> = (props: InventoryItem) => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <span className="
                        text-gray-900 text-wrap font-normal
                        rounded-xl cursor-pointer
                        p-2
                        transition-all duration-500
                        hover:bg-gray-200">
                    <CiEdit className="h-5 w-5" />
                </span>
            </SheetTrigger>
            <SheetContent className="bg-gray-50 rounded-md p-4">
                <EditInventoryDetails {...props} />
            </SheetContent>
        </Sheet>
    )
}


export default EditInventorySheet;

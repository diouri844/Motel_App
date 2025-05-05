import { Card } from "@/components/ui/card";
import { PlusIcon } from "@radix-ui/react-icons";
import AddInventoryComponent from "@/components/utils/Inventory/addInventory.component";




const InventoryPlusComponent: React.FC = () => {
    const element: React.ReactNode = (
        <span className="flex items-center gap-2 px-4 py-2" >
            <PlusIcon className="h-6 w-6" />
            <span className=" font-sans">Add New Inventory</span>
        </span>
    )
    return (
        <Card className="flex items-center justify-center 
            h-[120px]
            bg-transparent text-gray-900 text-wrap font-normal
            transition-all duration-200
            hover:bg-gray-200
            focus:rounded-lg focus:bg-gray-200
            rounded-xl cursor-pointer">
            <AddInventoryComponent {...element} />
        </Card >
    );
}

export default InventoryPlusComponent;
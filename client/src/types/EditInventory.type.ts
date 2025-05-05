import InventoryItem from "@/types/inventory.type"


interface InventoryItemSummary extends Pick<InventoryItem, 'name' | 'description'> {
    id?: string; // Optional id property
}



export default InventoryItemSummary;
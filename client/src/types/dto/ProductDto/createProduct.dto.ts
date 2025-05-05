type CreateProductDto = {
    stockId: string;
    inventoryId: string;
    vendorId?: string;
    supplierId?: string;
    name: string;
    description?: string;
    price: number;
    quantity: number;
};


export default CreateProductDto;
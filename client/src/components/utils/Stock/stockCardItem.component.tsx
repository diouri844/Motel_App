
import { CiCirclePlus } from "react-icons/ci"
import { PackageIcon } from "@/components/icons/package.icon"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import EditStockComponent from "@/components/utils/Stock/editStock.component";
import DeleteStockComponent from "@/components/utils/Stock/deleteStock.component";
import CreateNewproductComponent from "../Poduct/addproduct.component"
import { BarChartIcon } from "@radix-ui/react-icons"
//import { Badge } from "@/components/ui/badge"
import { StockStoreType } from "@/types/states/StockState.type";
import ProductItem from "@/types/Product.type";
import { useSelector } from "react-redux";
import ProductFacade from "@/facade/product.facade";
import { useEffect, useState } from "react";
import StockCardBadge from "@/components/utils/Stock/stockBadgeState.component";


const StockCardItem: React.FC<StockStoreType> = (stock: StockStoreType) => {
    const inventoryProps = {
        id: stock.stockDetails.inventoryId
    };
    const [productConts, setProductCounts] = useState<number>(0);
    const products: ProductItem[] = useSelector((state: any) => state.product.products);
    const productManger = new ProductFacade();
    useEffect(
        () => {
            productManger.retriveStockProductList(stock.stockDetails.id)
                .then(
                    result => {
                        // console.log(result);
                        const count = result.data.data.length;
                        setProductCounts(count);
                    }
                ).catch(error => {
                    console.log(error);
                });
        }, [products]
    );

    const isActive: boolean = productConts > 0;
    return (
        <Card key={stock.stockDetails.id as React.Key}
            className="
                            bg-blend-hard-light 
                            hover:shadow-xl  
                            hover:rotate-1
                            transition-all 
                            duration-300
                            bg-muted rounded-lg bg-gray-50 
                        "
        >
            <CardHeader>
                <CardTitle
                    className="text-md text-gray-700 font-extralight flex justify-between"
                >
                    <CardTitle className="text-sm font-medium">Stock Item</CardTitle>
                    <PackageIcon className="h-4 w-4 text-muted-foreground" />
                </CardTitle>
            </CardHeader>
            <CardContent className="text-sm font-light text-gray-900 dark:text-gray-400">
                <div className="flex flex-col space-y-2">
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-bold">{stock.stockDetails.name}</span>
                        <StockCardBadge isActive={isActive} />
                    </div>
                    <div className="text-sm text-muted-foreground">ID: {stock.stockDetails.id}</div>
                    <div className="flex items-center space-x-2">
                        <BarChartIcon className="h-4 w-4 text-muted-foreground text-yellow-500" />
                        <span className="text-sm font-medium">{productConts} products in stock</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
                <EditStockComponent {...stock.stockDetails} />
                <CreateNewproductComponent
                    {...{
                        children: <Button variant="ghost" size="sm">
                            <CiCirclePlus className="h-4 w-4 mx-2" />
                            Add Product
                        </Button>,
                        inventory: inventoryProps,
                        availableStocks: [stock]
                    }}
                />
                <DeleteStockComponent  {...stock.stockDetails} />
            </CardFooter>
        </Card>
    )
}


export default StockCardItem;
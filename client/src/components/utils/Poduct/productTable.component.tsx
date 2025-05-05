import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { OpenInNewWindowIcon } from "@radix-ui/react-icons"
import ProductItem from "@/types/Product.type";



const ProductTableComponent: React.FC<{ products: ProductItem[] }> = (props: { products: ProductItem[] }) => {
    const products: ProductItem[] = props.products as ProductItem[];
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>In Stock</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Stock ID</TableHead>
                    <TableHead>Total Sales</TableHead>
                    <TableHead>Total Orders</TableHead>
                    <TableHead>Customers</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products.map((product) => (
                    <TableRow key={product.id}>
                        <TableCell className="font-medium">{product.name}</TableCell>
                        <TableCell>{product.price.toFixed(2)} MAD</TableCell>
                        <TableCell className="text-blue-600">{product.quantity}</TableCell>
                        <TableCell>
                            <Badge
                                className="font-light"
                                variant={product.quantity > 0 ? "secondary" : "destructive"}>
                                {
                                    product.quantity > 0 ? <span>InStock</span> : <span>OutStock</span>
                                }
                            </Badge>
                        </TableCell>
                        <TableCell className="flex justify-start gap-1">
                            <span className="underline italic text-[10px]
                                    hover:cursor-pointer hover:text-blue-600 hover:text-[8px] 
                                    font-light transition-all duration-300">
                                {product.stockId}
                            </span>
                            <OpenInNewWindowIcon className="mr-2 h-4 w-4 text-blue-700 font-extralight" />
                        </TableCell>
                        {
                            product.totalSales !== null ?
                                <TableCell className="text-yellow-500">{product.totalSales}</TableCell>
                                :
                                <TableCell className="text-red-500">No sales yet</TableCell>
                        }
                        {
                            product.totalOrders !== null ?
                                <TableCell className="text-red-500">{product.totalOrders}</TableCell>
                                :
                                <TableCell className="text-red-500">No Orders yet</TableCell>
                        }
                        {
                            product.customerCount !== null ?
                                <TableCell>
                                    <div className="flex items-center gap-1">
                                        <Badge variant="outline">{product.customerCount}</Badge>
                                        <span className="text-muted-foreground">Customers</span>
                                    </div>
                                </TableCell> : <TableCell>No Customer Yet</TableCell>
                        }

                    </TableRow>
                ))
                }
            </TableBody>
        </Table>
    )
};

export default ProductTableComponent;
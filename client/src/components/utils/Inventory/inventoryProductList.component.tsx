import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ListOrderedIcon from "@/components/icons/listOrder.icon";
import { CiFilter } from "react-icons/ci";


export default function InventoryProductListComponent() {
    return (
        <Card className="bg-transparent">
            <CardHeader>
                <CardTitle>Product List</CardTitle>
                <div className="flex items-center gap-2">
                    <Input
                        type="search"
                        placeholder="Search products..."
                        className="w-full bg-background shadow-none appearance-none"
                    />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon" className="h-8 w-8">
                                <CiFilter className="h-4 w-4" />
                                <span className="sr-only">Filter</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuCheckboxItem checked>In Stock</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>Out of Stock</DropdownMenuCheckboxItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuCheckboxItem checked>Featured</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>New Arrivals</DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon" className="h-8 w-8">
                                <ListOrderedIcon className="h-4 w-4" />
                                <span className="sr-only">Sort</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup value="featured">
                                <DropdownMenuRadioItem value="featured">Featured</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="price-asc">Price: Low to High</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="price-desc">Price: High to Low</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div className="relative group">
                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">View Product</span>
                        </Link>
                        <img
                            src="https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/derailleurs---rear/derailleurs---rear/rd-nx-1-a1/nxrd.jpg?w=450&h=450&mode=max&format=webp"
                            alt="Product Image"
                            width={300}
                            height={300}
                            className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                        />
                        <div className="p-4">
                            <h3 className="font-semibold">Acme Widgets</h3>
                            <p className="text-sm text-muted-foreground">High-quality widgets for all your needs.</p>
                            <div className="flex items-center justify-between mt-2">
                                <div className="font-semibold">$19.99</div>
                                <Button size="sm">Add to Cart</Button>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">View Product</span>
                        </Link>
                        <img
                            src="https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/cassettes/cassettes/cs-pg-1130-a1/cs1130.jpg?w=450&h=450&mode=max&format=webp"
                            alt="Product Image"
                            width={300}
                            height={300}
                            className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                        />
                        <div className="p-4">
                            <h3 className="font-semibold">Acme Gizmos</h3>
                            <p className="text-sm text-muted-foreground">Innovative gizmos for the modern home.</p>
                            <div className="flex items-center justify-between mt-2">
                                <div className="font-semibold">$39.99</div>
                                <Button size="sm">Add to Cart</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
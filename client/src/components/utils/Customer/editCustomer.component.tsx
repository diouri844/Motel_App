import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea";
// import form hooks : 
import { useForm } from 'react-hook-form';
import CustomerItem from "@/types/Customer.type";
import { CiWarning } from "react-icons/ci";
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
//import { setSelectedInventory } from "@/stores/Inventory/inventory.actions";






const EditCustomerComponent: React.FC<CustomerItem> = (props: CustomerItem) => {
    const selectedInventoryId: string = useParams().id as string;
    //const dispatch = useDispatch();
    //dispatch(setSelectedInventory(selectedInventoryId));
    const result = useSelector(state => state.inventory.selectedInventory);
    console.log("Current State : ", result);

    const customer: CustomerItem = props;
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: customer?.firstName || "",
            phoneNumber: customer?.phoneNumber,
            lastName: customer?.lastName || "",
            email: customer?.email || "",
            // Add any other default values for missing props
            address: customer?.address || "",
            city: customer?.city || "",
            country: customer?.country || "",
            postalCode: customer?.postalCode || "",
            createdAt: customer?.createdAt || "",
        },
    });
    return (
        <Dialog>
            <DialogTrigger asChild>
                <span className="cursor-pointer px-2 py-1 rounded-full text-xs font-medium
                bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 
                hover:text-[10px] hover:bg-red-100 hover:text-red-800 transition-all
                 duration-150
                ">{customer.firstName + " " + customer.lastName}</span>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] space-y-4">
                <DialogHeader>
                    <DialogTitle>Edit customer</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click create when you're done.
                    </DialogDescription>
                </DialogHeader>
                <form
                    onSubmit={handleSubmit(() => { })}
                    className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="first-name">First Name*</Label>
                            <Input
                                {...register('firstName',
                                    { required: "first name is required" }
                                )}
                                id="first-name" placeholder="John"
                            />
                            {errors.firstName &&
                                <span className="text-red-500 text-sm opacity-75">{errors.firstName.message}</span>
                            }
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="last-name">Last Name*</Label>
                            <Input
                                {...register('lastName',
                                    { required: "last name is required" }
                                )}
                                id="last-name" placeholder="Doe" />
                            {errors.lastName &&
                                <span className="text-red-500 text-sm opacity-75">{errors.lastName.message}</span>}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            {...register('email',
                                { required: "email is required" }
                            )}
                            id="email" type="email" placeholder="john@example.com" />
                        {errors.email && <span className="text-red-500 text-sm opacity-75">{errors.email.message}</span>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number*</Label>
                        <Input
                            {...register('phoneNumber',
                                { required: "phone number is required" }
                            )}
                            id="phone" type="tel" placeholder="+212 (212) 678969789"
                        />
                        {errors.phoneNumber && <span className="text-red-500 text-sm opacity-75">{errors.phoneNumber.message}</span>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="postal-code">Postal Code</Label>
                        <Input
                            {...register('postalCode'
                            )}
                            id="postal-code" placeholder="12345" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="city">City</Label>
                            <Input
                                {...register('city',
                                    { required: "please select a city " }
                                )}
                                id="city" placeholder="Fez"
                            />
                            {errors.city &&
                                <span className="text-red-500 text-sm opacity-75">{errors.city.message}</span>
                            }
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="country">Country</Label>
                            <Select
                                {...register('country'
                                )}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="mo">Morocco</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Textarea
                            {...register("address")}
                            id="address" placeholder="123 Main St" />
                    </div>
                    <div className="space-y-2 flex justify-between">

                        <a href={"/my-inventory/" + selectedInventoryId + "/customers/item/" + customer.id}
                            className="text-zinc-600 cursor-pointer underline 
                            text-sm hover:underline-offset-3 py-4 transition-all duration-100
                            "
                        >
                            See Details
                        </a>
                    </div>

                    <DialogFooter>
                        <Button
                            variant={"outline"}
                            type="submit">Save changes
                        </Button>
                        <Button
                            variant={"destructive"}
                        ><CiWarning className="mx-1" />
                            Delete customer
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}


export default EditCustomerComponent;
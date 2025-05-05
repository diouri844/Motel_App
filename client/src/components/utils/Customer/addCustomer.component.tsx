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
import CustomerFacade from "@/facade/customer.facade"
import { AxiosResponse } from "axios"
// import form hooks : 
import { useForm } from 'react-hook-form';
import { useParams } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useDispatch } from "react-redux";
import { addCustomer } from "@/stores/Customer/customer.action";



const CreateCustomerForm: React.FC = () => {
    //export member from useForm : 
    const { toast } = useToast();
    const dispatch = useDispatch();
    const inventoryId: string = useParams().id as string;
    // call my customer facade : 
    const CustomerManager = new CustomerFacade();
    const { register, handleSubmit, formState: { errors } } = useForm();


    const createNewCustomer = async (data: any) => {
        const payload = {
            ...data,
            country: "Morocco",
            inventoryId,
            address: data.address || "" + data.city + ", Morocco"
        };
        CustomerManager.createNewCustomer(payload)
            .then(
                (response: AxiosResponse) => {
                    const data = response.data.data;
                    dispatch(addCustomer(data));
                    toast(
                        {
                            description: "New customer added succesfully  💪"
                        }
                    );
                    return;
                }
            ).catch(
                error => {
                    console.log(error);
                    const message: string = error.response.data.message;
                    toast(
                        {
                            description: message + " 😓",
                            variant: "destructive"
                        }
                    );
                }
            )
        return;
    }




    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"outline"}> add new customer </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] space-y-4">
                <DialogHeader>
                    <DialogTitle>Add customer</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click create when you're done.
                    </DialogDescription>
                </DialogHeader>
                <form
                    onSubmit={handleSubmit(createNewCustomer)}
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

                    <DialogFooter>
                        <Button
                            variant={"destructive"}
                            type="submit">Create</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}



export default CreateCustomerForm;
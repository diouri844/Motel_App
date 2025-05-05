import { useCheckIsAuthProfileAssociated } from "@/hooks/checkProfileCompleted.hook";
import extractUserInfo from "@/hooks/getLocalUserInfo.hook";
import { retriveUserInventoryList } from "@/hooks/loadUserInventory.hook";
import DashbroadLayout from "@/layouts/dashbroad.layout";
import InventoryItem from "@/types/inventory.type";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NoDataComponent from "../noData.component";
import SubComponentProps from "@/types/inventorySubData.type";
import SubDataComponent from "./subData.component";
import InventoryHeaderComponent from "@/components/utils/Inventory/inventoryHeader.component";
import EditInventoryDetails from "./editInventoryDetails.component";
import { subDataProps, subDataPartTwo } from "@/Providers/inventory/subData.provider";
import { retriveInventoryCustomerList } from "@/hooks/loadInventoryCustomer.hook";
import { retriveInventoryProductList } from "@/hooks/loadInventoryProduct.hook";
import { setSelectedInventory } from "@/stores/Inventory/inventory.actions";



const InventoryDetails: React.FC = () => {
    // extract the id from params :
    const dispatch = useDispatch();
    const id: string = useParams().id as string;
    dispatch(setSelectedInventory(id));
    const userId = extractUserInfo().id;
    const { authProfile } = useCheckIsAuthProfileAssociated(userId);
    const profileId = authProfile?.profileId as string;
    retriveUserInventoryList(profileId);
    retriveInventoryCustomerList(id);
    retriveInventoryProductList(id);
    const inventorList: InventoryItem[] = useSelector((state: any) => state.inventory.inventoryData);
    //const TotalCustomers: number = useSelector((state: any) => state.inventory.totalCustomers);
    //console.log(TotalCustomers);
    const targetInventory: InventoryItem | null = inventorList.filter(
        (item: InventoryItem) => item.id === id
    )[0];
    if (!targetInventory) {
        return (
            <DashbroadLayout>
                <NoDataComponent />
            </DashbroadLayout>

        )
    }

    const inevntoryProps = {
        id
    };
    return (
        <DashbroadLayout>
            <div className="flex flex-col min-h-screen">
                <InventoryHeaderComponent {...inevntoryProps} />
                <main className="flex-1 grid md:grid-cols-2 gap-1 p-4 md:p-6">
                    <div className="flex-1 grid grid-cols-2">
                        <div className="grid h-[350px]">
                            {
                                subDataProps.map(
                                    (item: SubComponentProps) => {
                                        return (
                                            <SubDataComponent {...item} />
                                        )
                                    }
                                )
                            }
                        </div>
                        <div className="grid h-[350px]">
                            {
                                subDataPartTwo.map(
                                    (item: SubComponentProps) => {
                                        return (
                                            <SubDataComponent {...item} />
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                    <EditInventoryDetails {...targetInventory} />
                </main>
            </div >
        </DashbroadLayout >
    )
};




export default InventoryDetails;
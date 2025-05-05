import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import SubComponentProps from "@/types/inventorySubData.type";
import { useSelector } from "react-redux";


const SubDataComponent: React.FC<SubComponentProps> = (props: SubComponentProps) => {
    // time to check the target key elememnt : 
    const keyOfSearch: string = props.identifier;
    // fetch the value of the store based on the same indentifier : 
    const valueTarget: number = useSelector(
        (state: any) => state.inventory[keyOfSearch]
    );
    return (
        <Card
            key={props.identifier}
            className="bg-transparent w-[200px] h-[100px] my-4
            border-l-4
            border-r-0
            border-t-0
            border-b-0
            rounded-sm
            text-sm
            border-[#dbeaf2]
             shadow-none
            ">
            <CardHeader className="flex items-start justify-between text-sm">
                <CardTitle className="text-sm text-[#ffc265]">
                    {props.icon}
                    <p className="text-[12px] font-light text-gray-500 dark:text-gray-400">
                        {props.description}
                    </p>
                </CardTitle>
                <div className="text-md font-bold">
                    {valueTarget}
                </div>
                {props.comment && <p className="text-[12px] text-gray-400 opacity-55 dark:text-gray-400">
                    {props.comment}
                </p>}
            </CardHeader>
        </Card>
    )
};




export default SubDataComponent;
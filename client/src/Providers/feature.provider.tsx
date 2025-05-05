
// import icons :
import CloudIcon from "@/components/icons/cloud.icon";
import GaugeIcon  from "@/components/icons/cloud.icon";
import SquareIcon from "@/components/icons/square.icon";
import CloudLightningIcon from "@/components/icons/lightcloud.icon";
import UsersIcon from "@/components/icons/users.icon";
import ArchiveIcon from "@/components/icons/archive.icon";
import CurrencyIcon from "@/components/icons/currency.icon"
import IFeature from "@/types/feature.type";



const get_feature_list = ():IFeature[] => {
    let features: IFeature[] = [
        {
            title: "Infinite scalability, zero config",
            paragraph: "Enable code to run on-demand without needing to manage your own infrastructure or upgrade hardware.",
            isMvp: false,
            icon: <CloudIcon />,
            iconBgColor : "#ffc265",
            index: 0
        },
        {
            title: "Real-time insights and controls",
            paragraph: "Get granular, first-party, real-user metrics on site performance per deployment.",
            isMvp: false,
            icon: <GaugeIcon />,
            iconBgColor: "#2e4058",
            index: 1
        },
        {
            title: "Personalization at the edge",
            paragraph: "Deliver dynamic, personalized content, while ensuring users only see the best version of your site.",
            isMvp: false,
            icon: <SquareIcon />,
            iconBgColor: "#ffc265",
            index: 2
        },
        {
            title: "Lightning Fast Performance",
            paragraph: "Experience lightning-fast performance with our optimized infrastructure.",
            isMvp: false,
            icon: <CloudLightningIcon />,
            iconBgColor: "#2e4058",
            index : 3
        },
        {
            title: "CRM Integration",
            paragraph: "Manage customer relationships efficiently with our CRM feature.",
            isMvp:true,
            icon: <UsersIcon />,
            iconBgColor: "#ffc265",
            index : 4
        },
        {
            title: "Inventory Manager Integration",
            paragraph: "Efficiently manage your stock with our Stockage Manager feature.",
            isMvp: true,
            icon: <ArchiveIcon />,
            iconBgColor: "#2e4058", 
            index: 5
        },
        {
            title: "Financial Manager Integration",
            paragraph: "Seamlessly integrate financial management features for better control and insights.",
            isMvp: true,
            icon: <CurrencyIcon />,
            iconBgColor:"#ffc265",
            index: 6
        }
    ];
    return features;
}

export default get_feature_list;
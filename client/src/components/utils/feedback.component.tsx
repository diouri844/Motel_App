import IFeedback from "@/types/feedback.type"
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import StarIcon from "@/components/icons/star.icon";



function FeedbackComponent(item:IFeedback) {
  return (
    <div className="flex flex-col items-center justify-center space-y-3">
        <div className="flex items-center space-x-2">
            <Avatar className="w-16 h-16 border ">
                <AvatarFallback className="bg-gray-50 text-gray-900">{item.psodo}</AvatarFallback>
            </Avatar>
            <div className="flex items-center gap-1">
                { 
                    [...Array(item.starCount).keys()].map(
                            (index) => (
                                <StarIcon key={index} className="w-5 h-5 fill-yellow text-yellow-300" />
                            )
                    )
                }
                {
                    [...Array(5-item.starCount).keys()].map(
                        (index) => (
                            <StarIcon key={index} className="w-5 h-5 fill-gray text-gray-900 opacity-40" />
                        )
                )
                }
            </div>
        </div>
        <div className="text-sm leading-snug lg:text-base lg:leading-normal xl:text-xl opacity-70">
            “{item.comment}“
        </div>
        <div className="space-y-2">
        <div className="font-sans">{item.userName}</div>
            <div className="text-xs text-[#2baae0] dark:text-gray-400">{item.title}</div>
        </div>
    </div>
  )
}

export default FeedbackComponent
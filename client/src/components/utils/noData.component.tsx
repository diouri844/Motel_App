import nodDataProps from "@/types/noData.type";

function NoDataComponent(details: nodDataProps) {
  return (
    <div className="flex flex-col items-center space-y-2 mt-11">
      <div className="text-sm font-medium text-gray-500 
            dark:text-gray-400"> {details.message || "No Data Found"}
      </div>
      <div className="text-sm text-center text-gray-500 dark:text-gray-400">
        {details.description || "No data was found for the requested information."}
      </div>
    </div>
  )
}

export default NoDataComponent;
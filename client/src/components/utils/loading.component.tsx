



export default function LoadingComponent() {
    return (
        <div className="flex w-[700px] items-center justify-center m-[3%]">
            <div className="flex items-center space-x-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-t-transparent 
                dark:border-gray-400" />
                <span className="text-gray-500 dark:text-gray-400">this action may take a moment...</span>
            </div>
        </div>
    )
}
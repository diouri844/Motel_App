import IFeature from "@/types/feature.type"

function FeatureComponent( item: IFeature) {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
        {
            item.isMvp && (
                <div className="inline-block rounded-lg bg-gray-100 font-sans px-3 py-1 text-sm">👑MVP</div>
            )
        }
        <div className="rounded-lg p-3  text-[#2e4058] font-semibold" >
            { item.icon }
        </div>
        <div className="space-y-2 text-center">
            <h3 className="text-sm"> { item.title } </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
                { item.paragraph }
            </p>
        </div>
    </div>
  )
}
export default FeatureComponent;
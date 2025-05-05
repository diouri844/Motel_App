
import IFeature from "@/types/feature.type";
import get_feature_list from "@/Providers/feature.provider";
import FeatureComponent from "@/components/utils/feature.component";


function FeaturesSection() {
  const FeatureList: IFeature[] = get_feature_list();
  console.log ( FeatureList );
  return (
    <section className=" relative w-full h-screen py-14">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 font-sans px-3 py-1 text-sm">Features 🔥</div>
                <h2 className="text-3xl font-sans tracking-tighter sm:text-5xl text-[#2e4058]">The platform for rapid progress</h2>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed 
                  dark:text-gray-400">
                  Let your team focus on shipping features instead of managing infrastructure with automated CI/CD, built-in
                  testing, and integrated collaboration.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              
              {
                FeatureList.map(
                  ( item:IFeature) => (
                    <FeatureComponent {...item } key={item.index} />
                  )
                )
              }
            </div>
          </div>
        </section>
  )
}

export default FeaturesSection;
import get_User_FeedbackList from "@/Providers/feedback.Provider";
import IFeedback from "@/types/feedback.type";
import FeedbackComponent from "@/components/utils/feedback.component";

function FeedbackSection() {
    const feedbackList:IFeedback[] = get_User_FeedbackList();
    return (
    <section className="relative w-full py-16  my-[50%]  h-screen">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
            <div className="inline-block rounded-lg bg-gray-100 font-sans px-3 py-1 text-sm">Testimonials 😉</div>
              <h2 className="text-3xl  font-semibold text-[#2baae0]  tracking-tighter 
              sm:text-4xl md:text-5xl">Customer Love</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-sm/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                See what our customers have to say about their experience with our product.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 items-center justify-center gap-6 lg:grid-cols-3 lg:gap-10">
            {
                feedbackList.map(
                    (item:IFeedback)=>(
                        <FeedbackComponent {...item} key={ item.userName }/>    
                    )
                )
            }
            </div>
          </div>
        </section>
  )
}

export default FeedbackSection
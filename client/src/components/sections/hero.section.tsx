

import { Button } from "@/components/ui/button";






function HeroSection() {
  return (
    <section className="w-full py-10">
            <div className="container grid items-center gap-6 lg:grid-cols-[1fr_600px] lg:gap-10">
              <div>
                <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl 
                  text-[#2baae0]
                  md:text-5xl xl:text-6xl/none">
                  The complete platform to manage your business
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed
                my-[5%] 
                lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Give your team the toolkit to stop configuring and start innovating. Securely build, deploy, and scale
                  the best web experiences.
                </p>
                <Button 
                variant={"secondary"}
                className="font-sans"
                onClick={ () => window.location.href = "/singUp" }
                >
                  Start Free Trial
                </Button>
              </div>
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center lg:order-last lg:aspect-square"
                height="550"
                src="https://img.freepik.com/free-vector/isometric-business-growth-abstract-concept-with-startup-rocket-launch-vector-illustration_1284-78731.jpg?size=626&ext=jpg&ga=GA1.1.1444902423.1705917057&semt=ais"
                width="550"
              />
            </div>
    </section>
  )
}

export default HeroSection;
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PricingSection() {
  return (
    <section className="w-full py-12 lg:py-16 xl:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Pricing</div>
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Pricing</div>
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Choose the perfect plan for your team</h2>
            </div>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              All plans include unlimited team members, secure access controls, and 99.9% uptime SLA. "Users" refers to
              the number of collaborators on your team.
            </p>
          </div>
          <div className="grid max-w-sm gap-4 md:max-w-lg lg:max-w-none lg:grid-cols-3">
            <Card className="w-full grid gap-4 p-4 md:p-6">
              <CardHeader className="p-0">
                <h3 className="text-2xl font-bold">Basic</h3>
                <p className="text-gray-500 dark:text-gray-400">$10/month</p>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="grid gap-2">
                  <li>10 GB storage</li>
                  <li>25 users</li>
                  <li>Custom domains</li>
                  <li>24/7 support</li>
                  <li>Mobile app</li>
                </ul>
              </CardContent>
              <CardFooter className="p-0">
                <Button className="w-full" variant="outline">
                  Choose Basic
                </Button>
              </CardFooter>
            </Card>
            <Card className="w-full grid gap-4 p-4 md:p-6">
              <CardHeader className="p-0">
                <h3 className="text-2xl font-bold">Pro</h3>
                <p className="text-gray-500 dark:text-gray-400">$25/month</p>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="grid gap-2">
                  <li>50 GB storage</li>
                  <li>Unlimited users</li>
                  <li>Custom domains</li>
                  <li>24/7 support</li>
                  <li>Mobile app</li>
                </ul>
              </CardContent>
              <CardFooter className="p-0">
                <Button className="w-full" variant="outline">
                  Choose Pro
                </Button>
              </CardFooter>
            </Card>
            <Card className="w-full grid gap-4 p-4 md:p-6">
              <CardHeader className="p-0">
                <h3 className="text-2xl font-bold">Enterprise</h3>
                <p className="text-gray-500 dark:text-gray-400">$50/month</p>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="grid gap-2">
                  <li>Unlimited storage</li>
                  <li>Unlimited users</li>
                  <li>Custom domains</li>
                  <li>24/7 support</li>
                  <li>Mobile app</li>
                </ul>
              </CardContent>
              <CardFooter className="p-0">
                <Button className="w-full" variant="outline">
                  Choose Enterprise
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="max-w-3xl w-full overflow-auto">
            <table className="w-full border-collapse text-left text-sm table-auto rounded-lg overflow-hidden">
              <thead>
                <tr className="border-b bg-gray-50 dark:bg-gray-800/50">
                  <th className="px-4 py-2" />
                  <th className="px-4 py-2">Basic</th>
                  <th className="px-4 py-2">Pro</th>
                  <th className="px-4 py-2">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-gray-50 dark:bg-gray-800/50">
                  <td className="px-4 py-2">Unlimited projects</td>
                  <td className="px-4 py-2">✅</td>
                  <td className="px-4 py-2">✅</td>
                  <td className="px-4 py-2">✅</td>
                </tr>
                <tr className="border-b bg-gray-50 dark:bg-gray-800/50">
                  <td className="px-4 py-2">Custom domains</td>
                  <td className="px-4 py-2">✅</td>
                  <td className="px-4 py-2">✅</td>
                  <td className="px-4 py-2">✅</td>
                </tr>
                <tr className="border-b bg-gray-50 dark:bg-gray-800/50">
                  <td className="px-4 py-2">24/7 support</td>
                  <td className="px-4 py-2">✅</td>
                  <td className="px-4 py-2">✅</td>
                  <td className="px-4 py-2">✅</td>
                </tr>
                <tr className="border-b bg-gray-50 dark:bg-gray-800/50">
                  <td className="px-4 py-2">Mobile app</td>
                  <td className="px-4 py-2">✅</td>
                  <td className="px-4 py-2">✅</td>
                  <td className="px-4 py-2">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}


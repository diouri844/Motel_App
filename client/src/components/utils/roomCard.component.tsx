
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle} from "lucide-react"
import { cn } from "@/lib/utils"



function RoomCard({ title, description, price, image, features, featured = false }) {
  return (
    <Card className={cn("overflow-hidden", featured && "ring-2 ring-primary")}>
      <div className="relative">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            width={600}
            height={400}
            className="object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
        {featured && <Badge className="absolute top-2 right-2">Popular Choice</Badge>}
      </div>
      <CardContent className="p-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
          <div className="pt-2">
            <p className="text-2xl font-bold">
              ${price} <span className="text-sm font-normal text-muted-foreground">/ night</span>
            </p>
          </div>
          <div className="pt-4">
            <h4 className="text-sm font-medium mb-2">Room Features:</h4>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
              {features.map((feature, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-center gap-1">
                  <CheckCircle className="h-3 w-3 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-4">
            <Button className="w-full">Book Now</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
export default RoomCard;
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export default function TestimonialCard({ name, location, rating, testimonial, image }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <img src={image || "/placeholder.svg"} alt={name}  className="object-cover" />
          </div>
          <div>
            <h3 className="font-medium">{name}</h3>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={cn("h-4 w-4", i < rating ? "text-yellow-400 fill-yellow-400" : "text-muted")} />
          ))}
        </div>
        <p className="text-muted-foreground italic">"{testimonial}"</p>
      </CardContent>
    </Card>
  )
}
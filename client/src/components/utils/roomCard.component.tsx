
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
// import { CheckCircle} from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react";
import RoomFacade from "@/facade/room.facade";
import { CheckCircle } from "lucide-react";



function RoomCard({ id, title, description, price, featured = false }) {
     const roomFacade = new RoomFacade();
    // time to fetch features list for the current room
    const [roomFeatures, setRoomFeatures] = useState<string[]>([]);

    useEffect(
      ()=>{
          const fetchRoomFeatures = async (roomId:string) => {
          // Simulate an API call to fetch room features
          console.log("Fetching room features for room ID:", roomId);
            const featuresResponse = await roomFacade.getRoomFeaturesById(roomId);
            console.log("Room Features Response:", featuresResponse);
            setRoomFeatures(featuresResponse);
            return ; 
          }
          fetchRoomFeatures(id);
        },[id]
    );




  return (
    <Card className={cn("overflow-hidden", featured && "ring-2 ring-primary")}>
      <div className="relative">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={"https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png"}
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
              {
              !roomFeatures || roomFeatures.length === 0 ? (
                <li className="text-sm text-muted-foreground">No features available</li>
              ):
              roomFeatures.map((feature, index) => (
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
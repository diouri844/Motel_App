import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeftSquareIcon } from "lucide-react";
import { format } from "date-fns";
import RoomProps from "@/types/room.type";
import { useFindRoom } from "@/hooks/useFindRoom";

interface ReservationDetailsFormProps {
  roomType: RoomProps[];
  selectedRoom: string;
  checkIn: Date | null;
  checkOut: Date | null;
  calculateDuration: () => number;
  goBack: (event: React.MouseEvent) => void;
  handleBookingSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
}

export function ReservationDetailsForm({
  roomType,
  selectedRoom,
  checkIn,
  checkOut,
  calculateDuration,
  goBack,
  handleBookingSubmit,
  loading,
}: ReservationDetailsFormProps) {

const { room } = useFindRoom(selectedRoom);
function calculateTotalPrice(discountPercentage: number = 0): number {
    if (room) {
        const basePrice = calculateDuration() * room.price;
        const discountedPrice = basePrice * (1 - discountPercentage / 100);
        return discountedPrice;
    }
    return 0;
}


  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Complete Your Reservation</h3>
          <Button variant="ghost" size="sm" onClick={goBack}>
            <ArrowLeftSquareIcon /> Back
          </Button>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Room Type:</span>
            <span className="font-medium">{roomType.find((room) => room.roomId === selectedRoom)?.roomType} Room</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Check-in:</span>
            <span className="font-medium">{checkIn ? format(checkIn, "PPP") : ""}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Check-out:</span>
            <span className="font-medium">{checkOut ? format(checkOut, "PPP") : ""}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Duration:</span>
            <span className="font-medium">{calculateDuration()} Nights</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Total Price:</span>
            <span className="font-medium">{calculateTotalPrice()} MAD</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleBookingSubmit} className="space-y-4">
        <div className="space-y-4">
          <h4 className="font-medium">Guest Information</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="first-name" className="text-sm font-medium">
                Name
              </label>
              <Input id="first-name" required type="text" placeholder="Enter your name please" />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone 
              </label>
              <Input id="phone" required type="tel" placeholder="+212 000000" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input id="email" type="email" required  placeholder="Example@Gmail.com"/>
          </div>
          <div className="space-y-2">
            <label htmlFor="address" className="text-sm font-medium">
              Address
            </label>
            <Input id="address" type="text" required placeholder="Your Address .." />
          </div>
          <div className="space-y-2">
            <label htmlFor="codePromo" className="text-sm font-medium">
              DIscount Code 
            </label>
            <Input id="codePromo" type="text" required placeholder="Your Discount Code .." />
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Processing..." : "Complete Reservation"}
        </Button>
      </form>
    </div>
  );
}
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeftSquareIcon } from "lucide-react";
import { format, set } from "date-fns";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Bed } from "lucide-react"
import { useState } from "react";
import { useAddGuest } from "@/hooks/useAddGuest";
import { useAddReservation } from "@/hooks/useAddReservation";
import { useUpdateStatus } from "@/hooks/useSetRoomStatus";
interface ReservationDetailsFormProps {
  roomType: String[];
  selectedRoom: string;
  availableRooms: any[];
  checkIn: Date | null;
  checkOut: Date | null;
  calculateDuration: () => number;
  goBack: (event: React.MouseEvent) => void;
  loading: boolean;
}

export function ReservationDetailsForm({
  selectedRoom,
  availableRooms,
  checkIn,
  checkOut,
  calculateDuration,
  goBack,
  loading,
}: ReservationDetailsFormProps) {
  // declare a state for managin the guest infor :
  // import hooks responsible for createing new guest : 
  const [loadingState, setLoadingState] = useState<boolean>(loading);
  const [guestInformation, setGuestInformation] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const { addGuest } = useAddGuest();
  const { addReservation } = useAddReservation();
  const { updateRoomStatus } = useUpdateStatus();
  const [initialPrice, setInitialPrice] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string>("");
  function calculateTotalPrice(discountPercentage: number = 0, ): number {
      if( discountPercentage !== 0) {
        return calculateDuration() * initialPrice * (1 - discountPercentage / 100);
        }
        return calculateDuration() * initialPrice;
  };

  const handleBookingSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoadingState(true);
    event.preventDefault();
    const price = calculateTotalPrice();
    const {data, error } = await addGuest(guestInformation);
    if(error) {
      setLoadingState(false);
      console.error("Error creating guest:", error);
      return;
    }
    const reservationPayload = {
      room_id: selectedRoomId,
      check_in: checkIn ? format(checkIn, "yyyy-MM-dd") : "" ,
      check_out: checkOut ? format(checkOut, "yyyy-MM-dd") : "",
      final_price: price,
      guest_id: data.id,
      hotel_id: "47ac674b-e604-4e4f-b2e6-04ec0a135d57", // Replace with actual hotel ID
      discount_code: "", 
    };
    const reservationResponse = await addReservation(reservationPayload)
    if(reservationResponse.error) {
      console.error("Error creating reservation:", reservationResponse.error);
      return;
    }
    setLoadingState(false);

    // check reservationResponse and handle it accordingly
    if(reservationResponse.status === 201){
      // time to empty the form :
      // time to made the selected room to be booked status : 
      const id = selectedRoomId;
      // call a hoojksto make the updates : 
      const res = await updateRoomStatus(id, "Booked");
      if(res.error) {
        console.error("Error updating room status:", res.error);
        return;
      }
      setIsSubmitted(true);
      setGuestInformation({
        name: "", 
        email: "",
        phone: "",
        address: "",
      });
      setSelectedRoomId("");
      setInitialPrice(0);
      // reset the check in and check out dates :
      checkIn = null;
      checkOut = null;
      // goback :
      ()=> goBack({} as React.MouseEvent);
    }
    return ;
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
            <span className="font-medium">{selectedRoom} Room</span>
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
            <span className="font-medium">{calculateTotalPrice().toFixed(2)} MAD</span>
          </div>
        </div>
        <Select onValueChange={ (value) => {
              // time to find the price : 
              const price = availableRooms.find(room => room.id === value)?.price.toFixed(2) || 0;
              setInitialPrice(price);
              setSelectedRoomId(value);
            }}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a room" />
            </SelectTrigger>
            <SelectContent>
              {availableRooms.map((room) => {
                return (
                  <SelectItem 
                  key={room.id} value={room.id} className="cursor-pointer">
                    <div className="flex items-center gap-3 py-2">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                        <Bed className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <div className="font-medium">
                              {room.id} - {room.type}
                            </div>
                            <div className="text-sm text-muted-foreground">{room.description}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-primary">MAD{room.price.toFixed(2)}</div>
                            <div className="text-xs text-muted-foreground">per night</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>
      </div>

      <form onSubmit={handleBookingSubmit} className="space-y-4">
        <div className="space-y-4">
          <h4 className="font-medium">Guest Information</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="first-name" className="text-sm font-medium">
                Name
              </label>
              <Input 
              value={guestInformation.name}
              onChange={(e) => setGuestInformation({ ...guestInformation, name: e.target.value })}
              id="first-name" required type="text" placeholder="Enter your name please" />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone 
              </label>
              <Input 
              value={guestInformation.phone}
              onChange={(e) => setGuestInformation({ ...guestInformation, phone: e.target.value })}
              id="phone" required type="tel" placeholder="+212 000000" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input 
            value={guestInformation.email}
            onChange={(e) => setGuestInformation({ ...guestInformation, email: e.target.value })}
            id="email" type="email" required  placeholder="Example@Gmail.com"/>
          </div>
          <div className="space-y-2">
            <label htmlFor="address" className="text-sm font-medium">
              Address
            </label>
            <Input 
            value={guestInformation.address}
            onChange={(e) => setGuestInformation({ ...guestInformation, address: e.target.value })}
            id="address" type="text" required placeholder="Your Address .." />
          </div>
          <div className="space-y-2">
            <label htmlFor="codePromo" className="text-sm font-medium">
              DIscount Code 
            </label>
            <Input id="codePromo" type="text" required placeholder="Your Discount Code .." />
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loadingState ? "Processing..." : "Complete Reservation"}
        </Button>
      </form>
      {isSubmitted && (
            <div className="mt-4 p-4 border rounded-lg bg-green-50 border-green-200">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-green-800">Booking Confirmed!</h3>
                    <p className="text-sm text-green-600 mt-1">
                    Your reservation is confirmed! We look forward to welcoming you. A confirmation email has been sent to your inbox.
                    </p>
                </div>
              </div>
              <button
                onClick={goBack}
                className="mt-3 px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200"
              >
                Book Another Room
              </button>
            </div>
          )}
    </div>
  );
}
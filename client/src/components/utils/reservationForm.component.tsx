import { useState, FormEvent } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { format } from "date-fns"
import { CheckRoomParams, useCheckRoomAvailability } from "@/hooks/useCheckRoomAvailability";
import { RoomSelectionForm } from "./RoomSelectionForm.component";
import { ReservationDetailsForm } from "./ReservationDetailsForm.component";

export default function ReservationForm({roomType}: { roomType:string[]}) {
  const [checkIn, setCheckIn] = useState(null)
  const [checkOut, setCheckOut] = useState(null)
  const [selectedRoom, setSelectedRoom] = useState("");
  const [roomAvailable, setRoomAvailable] = useState<boolean>(false);
  const hotelId:string = "9cbe53b8-8ad7-4d0e-ae4e-71a1b75383c1";
  // handle room change select :
  const handleRoomChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedRoom(event.target.value);
  };
  const { isAvailable, loading, checkRoomAvailability,  availableRooms } = useCheckRoomAvailability();
  // handle form send :
  const checkAvailability = async (event: React.FormEvent) => {
    event.preventDefault();
    const checkInStr: string = checkIn ? format(checkIn, "yyyy-MM-dd") : "";
    const checkOutStr: string = checkOut ? format(checkOut, "yyyy-MM-dd") : "";
    const params: CheckRoomParams = { hotelId, roomId: selectedRoom, checkIn: checkInStr, checkOut: checkOutStr };
  
    try {
      // console.log("Checking availability with params:", params);
      await checkRoomAvailability(params); // Wait for the async call to complete
      console.log(availableRooms);
      setRoomAvailable(isAvailable as boolean); // Update `roomAvailable` after `isAvailable` is updated
    } catch (error) {
      console.error("Error checking room availability:", error);
    }
  };

  function handleBookingSubmit(_event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented.");
  }

  // Removed calculateNights function as it is not currently used.

  function goBack(event: React.MouseEvent): void {
    event.preventDefault();
    setRoomAvailable(false);
    // clear all state :
    setCheckIn(null)
    setCheckOut(null);
    setSelectedRoom("");
    return;
  }

  function calculateDuration():number{
    const checkInStr: string = checkIn ? format(checkIn, "yyyy-MM-dd") : "";
    const checkOutStr: string = checkOut ? format(checkOut, "yyyy-MM-dd") : "";
    const checkInDate:Date = new Date(checkInStr);
    const checkOutDate:Date = new Date(checkOutStr);
    const nights = Math.ceil(
      (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    return nights;
  }



  return (
    <Card>
      <CardContent className="p-6">
        {!roomAvailable ? (
          <RoomSelectionForm
            roomType={roomType}
            selectedRoom={selectedRoom}
            setSelectedRoom={setSelectedRoom}
            checkIn={checkIn}
            setCheckIn={setCheckIn}
            checkOut={checkOut}
            setCheckOut={setCheckOut}
            checkAvailability={checkAvailability}
            loading={loading}
          />
        ) : (
          <ReservationDetailsForm
            roomType={roomType}
            availableRooms={availableRooms}
            selectedRoom={selectedRoom}
            checkIn={checkIn}
            checkOut={checkOut}
            calculateDuration={calculateDuration}
            goBack={goBack}
            handleBookingSubmit={handleBookingSubmit}
            loading={loading}
          />
        )}
      </CardContent>
    </Card>
  )
}
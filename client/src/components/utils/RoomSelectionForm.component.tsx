import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
// import RoomProps from "@/types/room.type";

interface RoomSelectionFormProps {
  roomType: string[];
  selectedRoom: string;
  setSelectedRoom: (roomId: string) => void;
  checkIn: Date | null;
  setCheckIn: (date: Date | null) => void;
  checkOut: Date | null;
  setCheckOut: (date: Date | null) => void;
  checkAvailability: (event: React.FormEvent) => Promise<void>;
  loading: boolean;
}

export function RoomSelectionForm({
  roomType,
  selectedRoom,
  setSelectedRoom,
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  checkAvailability,
  loading,
}: RoomSelectionFormProps) {
  return (
    <form className="space-y-4" onSubmit={checkAvailability}>
      <div className="space-y-2">
        <label htmlFor="room-type" className="text-sm font-medium">
          Room Type
        </label>
        <select
          id="room-type"
          value={selectedRoom}
          onChange={(e) => setSelectedRoom(e.target.value)}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="">Select Room Type</option>
          {roomType.map((item,index) => (
            <option value={item} key={index}>
              {item} Room
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Check-in Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn("w-full justify-start text-left font-normal", !checkIn && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkIn ? format(checkIn, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Check-out Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn("w-full justify-start text-left font-normal", !checkOut && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkOut ? format(checkOut, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="special-requests" className="text-sm font-medium">
          Special Requests
        </label>
        <Textarea id="special-requests" placeholder="Any special requests or preferences?" />
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Checking..." : "Check Availability"}
      </Button>
    </form>
  );
}
import { CheckCircle } from "lucide-react"
import ReservationForm from "@/components/utils/reservationForm.component";
// import ReservationFacade from "@/facade/reservation.facade";
import { useAvailableRooms } from "@/hooks/useFetchRoomTypes";

function ReservationSection() {

  const { availableRooms } = useAvailableRooms();
  console.log("Available Rooms:", availableRooms);
  
  return (
    <section id="reservation" className="py-16 md:py-24 container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <ReservationForm  roomType={availableRooms} />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Book Your Perfect Stay</h2>
              <p className="text-muted-foreground mb-6">
                Reserve your room directly with us for the best rates and exclusive benefits. Our simple booking process
                ensures a hassle-free experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Best Rate Guarantee</h3>
                    <p className="text-sm text-muted-foreground">
                      Find a lower rate elsewhere? We'll match it and give you an additional 10% off.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Flexible Cancellation</h3>
                    <p className="text-sm text-muted-foreground">
                      Plans change. Most rooms offer free cancellation up to 24 hours before arrival.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Special Packages</h3>
                    <p className="text-sm text-muted-foreground">
                      Check our special offers for seasonal discounts and package deals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default ReservationSection;
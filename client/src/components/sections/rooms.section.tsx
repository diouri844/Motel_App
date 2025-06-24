import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RoomCard from "@/components/utils/roomCard.component";
import RoomFacade from "@/facade/room.facade";
import { useEffect, useState } from "react";

function RoomsSection() {
  const facade = new RoomFacade();


  // state to save all room types
  const [roomTypes, setRoomTypes] = useState<string[]>([]);
  // state to save the selected room type:
  const [selectedRoomType, setSelectedRoomType] = useState<string>("all");
  const [availableRooms, setAvailableRooms] = useState<any[]>([]);
  
  const handleRoomTypeChange = async (type: string) => {
    setSelectedRoomType(type);
    // fetch room types based on the selected type
    const availableRoomsList = await facade.findRoomsByType(type);
    setAvailableRooms(availableRoomsList.data);
    console.log("Available Rooms for type", type, ":", availableRoomsList);
  }


  useEffect(() => {
    const fetchRoomTypes = async () => {
      try {
        const { data, error } = await facade.client
          .from('rooms')
          .select('type')
          .neq('status', 'Booked')
          .order('type', { ascending: true });
  
        if (error || !data) {
          console.error('Error fetching room types:', error);
          return null;
        }
  
        return [...new Set(data.map(room => room.type))];
      } catch (err) {
        console.error('Unexpected error:', err);
        return null;
      }
    };
  
    // Immediately invoke the async function
    (async () => {
      const roomTypeList = await fetchRoomTypes();
      if (roomTypeList) {
        setRoomTypes(roomTypeList);
      }
    })();
  }, [roomTypes, selectedRoomType]);




  return (
    <section id="rooms" className="py-16 md:py-24 bg-muted/50">
              <div className="container">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Luxurious Rooms</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Choose from our selection of meticulously designed rooms and suites, each offering a perfect blend of
                    comfort and elegance.
                  </p>
                </div>
                <Tabs defaultValue="all" className="w-full">
                  <div className="flex justify-center mb-8">
                    <TabsList>
                      {
                        roomTypes.map(
                          type => (<TabsTrigger 
                            key={type} 
                            value={type}
                            onClick={() => handleRoomTypeChange(type)}
                            >{type.toLocaleLowerCase()}
                            </TabsTrigger>)
                        )
                      }
                    </TabsList>
                  </div>
                  <TabsContent value={selectedRoomType} className="mt-0">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {
                        
                          availableRooms.map(room => (
                            <RoomCard
                              key={room.id}
                              title={room.title}
                              description={room.description}
                              price={room.price}
                              image={room.image}
                              features={room.features}
                            />
                          ))
                        
                      }
                      
                      
                
                      {/* <RoomCard
                        title="Standard Room"
                        description="Comfortable room with all essential amenities for a pleasant stay."
                        price={199}
                        image="https://plus.unsplash.com/premium_photo-1661963657190-ecdd1ca794f9?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        features={["King Bed", "Free WiFi", '32" TV', "Air Conditioning"]}
                      />
                      <RoomCard
                        title="Deluxe Ocean View"
                        description="Spacious room with a private balcony overlooking the ocean."
                        price={299}
                        image="https://plus.unsplash.com/premium_photo-1700153918743-26308f82e616?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        features={["King Bed", "Ocean View", "Free WiFi", '42" TV', "Mini Bar"]}
                        featured={true}
                      />
                      <RoomCard
                        title="Executive Suite"
                        description="Luxurious suite with separate living area and premium amenities."
                        price={399}
                        image="https://images.unsplash.com/photo-1595695162612-1d7fc11e46ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        features={["King Bed", "Separate Living Area", "Jacuzzi", '50" TV', "Premium Toiletries"]}
                      />
                      <RoomCard
                        title="Family Room"
                        description="Spacious room designed for families with additional beds."
                        price={349}
                        image="https://plus.unsplash.com/premium_photo-1684338795288-097525d127f0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        features={["King Bed + 2 Singles", "Family Amenities", "Game Console", "Mini Fridge"]}
                      />
                      <RoomCard
                        title="Honeymoon Suite"
                        description="Romantic suite with special amenities for couples."
                        price={449}
                        image="https://plus.unsplash.com/premium_photo-1661846577575-560fd37a2a19?q=80&w=2037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        features={["King Bed", "Ocean View", "Private Hot Tub", "Champagne Service"]}
                      />
                      <RoomCard
                        title="Presidential Suite"
                        description="Our most luxurious accommodation with exclusive services."
                        price={899}
                        image="https://plus.unsplash.com/premium_photo-1661884238187-1c274b3c3413?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
                        features={["King Bed", "Private Terrace", "Butler Service", "Private Dining"]}
                      /> */}
                    </div>
                  </TabsContent>
    
                  <TabsContent value="standard" className="mt-0">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <RoomCard
                        title="Standard Room"
                        description="Comfortable room with all essential amenities for a pleasant stay."
                        price={199}
                        image="https://plus.unsplash.com/premium_photo-1661963657190-ecdd1ca794f9?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        features={["King Bed", "Free WiFi", '32" TV', "Air Conditioning"]}
                      />
                      <RoomCard
                        title="Standard Twin"
                        description="Comfortable room with twin beds and essential amenities."
                        price={199}
                        image="https://images.unsplash.com/photo-1609587639086-b4cbf85e4355?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        features={["Twin Beds", "Free WiFi", '32" TV', "Air Conditioning"]}
                      />
                      <RoomCard
                        title="Standard Garden View"
                        description="Comfortable room with a view of our beautiful gardens."
                        price={219}
                        image="https://images.unsplash.com/photo-1655731976375-572490707000?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        features={["King Bed", "Garden View", "Free WiFi", '32" TV']}
                      />
                    </div>
                  </TabsContent>
    
                  <TabsContent value="deluxe" className="mt-0">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <RoomCard
                        title="Deluxe Room"
                        description="Spacious room with upgraded amenities and comfort."
                        price={259}
                        image="https://images.unsplash.com/photo-1729605411476-defbdab14c54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        features={["King Bed", "Sitting Area", "Free WiFi", '42" TV']}
                      />
                      <RoomCard
                        title="Deluxe Ocean View"
                        description="Spacious room with a private balcony overlooking the ocean."
                        price={299}
                        image="https://images.unsplash.com/photo-1551918120-c25861b95d27?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        features={["King Bed", "Ocean View", "Free WiFi", '42" TV', "Mini Bar"]}
                        featured={true}
                      />
                      <RoomCard
                        title="Deluxe Corner"
                        description="Spacious corner room with panoramic views and extra space."
                        price={329}
                        image="https://plus.unsplash.com/premium_photo-1733760124939-5a725420c2e4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        features={["King Bed", "Panoramic View", "Lounge Area", "Premium Amenities"]}
                      />
                    </div>
                  </TabsContent>
    
                  <TabsContent value="suite" className="mt-0">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <RoomCard
                        title="Executive Suite"
                        description="Luxurious suite with separate living area and premium amenities."
                        price={399}
                        image="https://images.unsplash.com/photo-1595695162612-1d7fc11e46ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        features={["King Bed", "Separate Living Area", "Jacuzzi", '50" TV']}
                      />
                      <RoomCard
                        title="Honeymoon Suite"
                        description="Romantic suite with special amenities for couples."
                        price={449}
                        image="https://plus.unsplash.com/premium_photo-1661846577575-560fd37a2a19?q=80&w=2037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        features={["King Bed", "Ocean View", "Private Hot Tub", "Champagne Service"]}
                      />
                      <RoomCard
                        title="Presidential Suite"
                        description="Our most luxurious accommodation with exclusive services."
                        price={899}
                        image="https://plus.unsplash.com/premium_photo-1661884238187-1c274b3c3413?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
                        features={["King Bed", "Private Terrace", "Butler Service", "Private Dining"]}
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </section>
  )
}

export default RoomsSection
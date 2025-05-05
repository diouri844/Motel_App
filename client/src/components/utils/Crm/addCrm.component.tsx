import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useState, useRef } from "react";
//import rootReducer from "@/stores/CRM/crm.reducer";
import { useSelector, useDispatch } from "react-redux";
import { addCRM } from "@/stores/CRM/crm.actions";


function AddCrmComponent() {
  const { toast } = useToast();
  const crmData = useSelector(state => state.crm.crmData);
  const dispatch = useDispatch();
  // define my dailog ref : 
  // define the name state : 
  const [ crmName , setCrmName ] = useState<string>("");
  const handleNameChange = (event:React.ChangeEvent):void => {
    event.preventDefault();
    // set the new name value :
    setCrmName(event.target.value);
    return;
  }
  const handleAddCRM = (event:React.MouseEvent):void=>{
  //event.preventDefault();
    // check input state :
    if ( crmName.length === 0 || crmName.trim().length === 0 ){
      // set toast item to popup :
      toast(
        {
          description:"Please provide a valid crm name",
          variant: "destructive"
        }
      )
      return;
    }
    console.log( crmData );
    // valid name try to find it in thel list of the CRM 
    const items = crmData.filter(
      crm => {
        return crm.name.toLowerCase() === crmName.toLowerCase();
      }
    );
    if( items.length > 0 ){
      toast({
        description:"Name already in use",
        variant: "destructive"
      });
      // close : 
      return;
    }
    // time to create new crm and save it into the local cach storage :
    const currentDate:Date =  new Date();
    const formatedDate:string = currentDate.getDay()+"-"+currentDate.getMonth()+"-"+currentDate.getFullYear();
    dispatch( 
      addCRM({
        id:"7777",
        name:crmName.toLowerCase(),
        owner: "Chopen844",
        created_at: formatedDate
      }) 
    );
    // popup a cretaed crm success message :
    toast({
      description:"New CRM added Successfully"
    })
    return;
  }
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="submit" size="sm">Add new CRM</Button>
      </DialogTrigger>
      <DialogContent 
      className="w-[450px] bg-gray-200 border-none shadow-sm text-sm">
            <Label className="text-sm my-2 text-red-600"> Add New CRM </Label>
            <form>
              <div className="grid w-full items-center gap-5 mb-3">
                {/** name field :  */}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name"
                  className="text-sm size-sm"
                  >Name: </Label>
                  <Input
                    id="name"
                    className="w-[350px] h-[30px] p-4 rounded-sm
                    border border-red-400 border-l-[10px] 
                    border-r-0 border-t-0
                    border-b-0  focus:outline-none"
                    placeholder="Your CRM name"
                    value={ crmName }
                    onChange={ handleNameChange }
                  />
                </div>
              </div>
              <Button 
              type="button"
              onClick={ handleAddCRM } 
              size="sm" variant={"destructive"}>
                Create
              </Button>
            </form>
      </DialogContent>
    </Dialog>
  );
}
export default AddCrmComponent;

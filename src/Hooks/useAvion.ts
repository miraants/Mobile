import  { GetAllAvion } from "../Service/avion.service"; 
import  { useQuery } from "react-query"; 
   
export const GetAll= () => {
    return useQuery("get-all-avion", () => GetAllAvion(), {
        select: (data : any) : any => {
            return data.data;
        }
    })
}
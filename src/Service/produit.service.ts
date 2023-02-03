import { post, get} from "./publicHttps.service";

const entity="produit";
export const GetAllProduit= async () => {
    return await get(entity+"/list");
}




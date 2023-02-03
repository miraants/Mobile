import { post, get} from "./publicHttps.service";

const entity="avion";
export const GetAllAvion = async () => {
    return await get(entity);
}

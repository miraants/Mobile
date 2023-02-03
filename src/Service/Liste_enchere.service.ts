import { post, get} from "./publicHttps.service";

const entity="liste_enchere";
export const GetAllEnchere = async () => {
    return await get(entity+"/list");
}

const link="utilisateur/login";
export const Login = async (email : string, mdp: string) => {
    return await get(link);
}

const lien="liste_enchere/listeByNom/";
export const GetMyEnchere = async (nom : string) => {
    return await get(lien+nom);
}

const cat="categorie";
export const GetAllCategorie = async () => {
    return await get(cat+"/list");
}

const lin="sary/list/";
export const GetSary = async (id_produit : string) => {
    return await get(lin+id_produit);
}

const l="saryProduit/list/";
export const GetDetail = async (nom_produit : string) => {
    return await get(l+nom_produit);
}

const li="saryProduit/listDetail/";
export const GetDetailProduit = async (nom : string) => {
    return await get(li+nom); 
}
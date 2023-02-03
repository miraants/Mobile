import  { GetAllEnchere } from "../Service/Liste_enchere.service"; 
import  { GetAllProduit } from "../Service/produit.service"; 
import  { Login } from "../Service/Liste_enchere.service";
import  { GetMyEnchere } from "../Service/Liste_enchere.service"; 
import  { GetAllCategorie } from "../Service/Liste_enchere.service";
import  { GetSary } from "../Service/Liste_enchere.service";
import  { GetDetail } from "../Service/Liste_enchere.service";
import  { GetDetailProduit } from "../Service/Liste_enchere.service";
import  { useQuery } from "react-query"; 
   
export const GetAll= () => {
    return useQuery("get-all-enchere", () => GetAllEnchere(), {
        select: (data : any) : any => {
            return data.data;
        }
    })
}

export const GetAllProduct= () => {
    return useQuery("get-all-produit", () => GetAllProduit(), {
        select: (data : any) : any => {
            return data.data;
        }
    })
}

export const LoginAdmin= (email : string, mdp: string) => {
    return useQuery("login", () => Login(email,mdp), {
        select: (data : any) : any => {
            return data.data;
        }
    })
}

export const GetMyEncheres= (nom : string) => {
    return useQuery(["get-enchere",nom], () => GetMyEnchere(nom), {
        select: (data : any) : any => {
            return data.data;
        }
    })
}

export const GetCategorie= () => {
    return useQuery("get-all-categorie", () => GetAllCategorie(), {
        select: (data : any) : any => {
            return data.data;
        }
    })
}


export const GetAllSary= (id_produit : string) => {
    return useQuery(["get-sary",id_produit], () => GetSary(id_produit), {
        select: (data : any) : any => {
            return data.data;
        }
    })
}

export const GetDetails= (nom_produit : string) => {
    return useQuery(["get-detail",nom_produit], () => GetDetail(nom_produit), {
        select: (data : any) : any => {
            return data.data;
        }
    })
}

export const GetD= (id_utilisateur : string) => {
    return useQuery(["get-detail",id_utilisateur], () => GetDetailProduit(id_utilisateur), {
        select: (data : any) : any => {
            return data.data;
        }
    })
}
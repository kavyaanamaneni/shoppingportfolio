import { createContext, useEffect, useState } from "react";
//import SHOP_DATA from "../ShopData.js"
import { getCategoriesAndDocuments } from "../Utils/Firebase/FireBase.jsx";

export const CategoriesContext=createContext({
    categoriesMap:{}
})

export const CategoriesProvider=({children})=>{
    const[categoriesMap,setCategoriesMap]=useState({});
    useEffect(()=>{
        const getCategoriesMap=async()=>{
            const categoryMap=await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    },[]);
    // useEffect(()=>{
    //     addCollectionAndDocuments("categories",SHOP_DATA)
    // },[]);
    const value={categoriesMap};
    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}
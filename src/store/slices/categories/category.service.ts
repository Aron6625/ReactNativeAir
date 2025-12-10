import { Dispatch } from "@reduxjs/toolkit";
import { categories } from "../../../assets/data/categories";
import { ICategory } from "../../../types";
import { categoryActions } from "./category.slice";


export const getCategoriesService =  () => (dispatch: Dispatch) => {
    console.log('this is called services');
    try {
        // await fetch | axios
        setTimeout(()=>{
            const category: ICategory[] = categories
            dispatch(categoryActions.setCategories(category));
            
        }, 2000)

    } catch (error) {
        console.log('Error on get categories', error);
    }
}
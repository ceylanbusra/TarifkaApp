import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text ,FlatList} from "react-native";
import MealDetail from "../components/mealDetail";


const MealsDetail = ({ route }) => {
  const { idMeal } = route.params;
  const [meal, setMeal] = useState([]);
  console.log("gelen mealll id: ", idMeal);


  const fetchData = async () => {
   
    try {
        const response = await axios.get(
            "https://www.themealdb.com/api/json/v1/1/lookup.php?i="+`${idMeal}`
          );
          setMeal(response.data.meals);
          console.log("set mealsın içi",meal);
          console.log("----------------------------------")
          
        
        }
    catch (error) {
        console.error(error)
    }
}

useEffect(() => {
    fetchData();
  }, []);


const renderItem=({item})=>{
 return(
<MealDetail meal={item}/>
 );
  
   }


  return (
    
      <FlatList  data={meal} renderItem= {renderItem}/>
   
  );
};
export default MealsDetail;

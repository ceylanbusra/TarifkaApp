import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MealsCard from "../components/mealsCard";

const Meals = ({ route, navigation }) => {
  const { strCategory } = route.params;
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + `${strCategory}`
    );
    setMeals(response.data.meals);
    console.log("------------", meals);
    console.log("meals adı:", meals.strMeal);
  };

  const onHandleSelected = (idMeal) => {
    navigation.navigate("MealsDetail", { idMeal});
  };

  const renderItem = ({ item }) => {
    return (
      <MealsCard
        meals={item}
        onSelected={() => {
          onHandleSelected(item.idMeal);
        }}
      />
    );
  };

  //console.log("meals sayfası category yazımı",strCategory);
  return (
    <View style={styles.mainContainer}>
      <FlatList data={meals} renderItem={renderItem} />
    </View>
  );
};
export default Meals;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#ff9800",
  },
});

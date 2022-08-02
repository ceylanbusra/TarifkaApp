import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Config from "react-native-config";
import CategoryCard from "../components/categoryCard";

const Categories = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchData();
    

  }, []);

  const fetchData = async () => {
  const  response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    // const resImage = await axios.get("")
    setCategories(response.data.categories);
    console.log("noldu şimdi categoris:", categories);
  };





  const handleCategories = ( strCategory ) => {
    navigation.navigate("Meals", { strCategory });
  };

  const renderItem = ({ item }) => (
    
    <CategoryCard
      categories={item}
      onSelect={() => {
        handleCategories(item.strCategory);
      }}
    />
    
  
    
  );

  return (
    <View style={styles.mainContainer}>

      <FlatList renderItem={renderItem} data={categories} />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#ff9800",
  },
});

export default Categories;

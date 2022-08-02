import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const CategoryCard = ({ categories, onSelect }) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onSelect}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: categories.strCategoryThumb,
          }}
        />
        <Text style={styles.textStyle}>{categories.strCategory}</Text>
      </View>
    </TouchableOpacity>
    
  );
};
export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  mainContainer: {
    justifyContent: "flex-start",
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    width: "95%",
    margin: 5,
    marginHorizontal: 8,
    padding: 10,
  },
  image: {
    width: 70,
    minHeight: 60,
    resizeMode: "contain",
    marginHorizontal: 10,
  },
  textStyle:{
    fontSize:18,
  }
});

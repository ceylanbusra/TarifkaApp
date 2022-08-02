import React from "react";
import {
  View,
  Text,
  Flatlist,
  Image,
  StyleSheet,
  ImageBackground,
TouchableOpacity
} from "react-native";


const MealsCard = ({ meals,onSelected }) => {
  return (
    <TouchableOpacity onPress ={onSelected}>
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.Image}
        source={{
          uri: meals.strMealThumb,
        }}
      >
        <View style={styles.container}>
          <Text style={styles.textStyle}>{meals.strMeal}</Text>
        </View>
      </ImageBackground>
    </View>
    </TouchableOpacity>
  );
};
export default MealsCard;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
  },
  container: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flex: 1,
    borderRadius: 20,
  },
  Image: {
    resizeMode: "cover",
    width: "100%",
    minHeight: 200,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    borderRadius:10,
  },
  textStyle: {
    flex: 1,
    position: "absolute",
    fontSize: 20,
    color: "white",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
});

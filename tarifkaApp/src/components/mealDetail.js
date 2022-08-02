import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  Linking,
  Alert,
} from "react-native";

const MealDetail = ({ meal }) => {

  
  const openUrl = async (url) => {
    const isSupported = await Linking.openURL(url);
    if (isSupported) {
      await Linking.openURL(url);
    } else {
      Alert.alert("Don't know how to open this url", { url });
    }
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <Image
        source={{
          uri: meal.strMealThumb,
        }}
        style={styles.image}
      />
      <Text style={styles.headerTextStyle}>{meal.strMeal}</Text>
      <Text style={styles.textStyle}>{meal.strArea}</Text>
      <View style={styles.div}></View>
      <Text>{meal.strInstructions}</Text>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          openUrl(meal.strYoutube);
        }}
      >
        <View style={styles.button}>
          <Text style={styles.innerText}>watch on youtuube</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  mainContainer: {
    margin: 5,
  },
  container: {},
  image: {
    backgroundColor: "red",
    resizeMode: "stretch",
    width: "100%",
    minHeight: 250,
  },
  headerTextStyle: {
    fontSize: 24,
    fontWeight: "800",
    color: "red",
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "500",
    color: "red",
  },
  button: {
    width: "90%",
    height: 50,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginVertical: 10,
  },
  innerText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  touchable: {
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  div: {
    width: "100%",
    height: 1,
    backgroundColor: "grey",
    marginVertical: 3,
  },
});

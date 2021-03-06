import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>New Mood</Text>
      </View>
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.cardIconContainer} delayPressIn={0}>
          <Text style={styles.cardIcon}>😎</Text>
        </TouchableOpacity>
        <View style={styles.cardBase}>
          <View style={styles.cardTopContainer}>
            <Text style={styles.cardTitle}>Happy & Chill</Text>
            <Text style={styles.cardInfo}>
              you last felt this way was on Tuesday
            </Text>
          </View>
          <View style={styles.cardDataContainer}>
            <Text style={styles.cardQuickData}>2 Day Stability Streak</Text>
            <Text style={styles.cardCompareData}>General Mood Increase</Text>
          </View>
        </View>
      </View>
      <View style={styles.clockContainer}>
        <View style={styles.dialContainer}>
          <Text style={styles.dialFinalFaded}>3</Text>
          <Text style={styles.dialSecondaryFaded}>2</Text>
          <Text style={styles.dialSelected}>- 1 -</Text>
          <Text style={styles.dialSecondaryFaded}>12</Text>
          <Text style={styles.dialFinalFaded}>11</Text>
        </View>
        <View style={styles.dialContainer}>
          <Text style={styles.dialFinalFaded}>22</Text>
          <Text style={styles.dialSecondaryFaded}>21</Text>
          <Text style={styles.dialSelected}>- 20 -</Text>
          <Text style={styles.dialSecondaryFaded}>19</Text>
          <Text style={styles.dialFinalFaded}>18</Text>
        </View>
      </View>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity
          style={styles.addButtonBase}
          onPress={() => alert("hello")}
        >
          <Text style={styles.addButtonTitle}>Add Mood</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity style={styles.backButtonBase}>
          <Icon name="arrow-left-l" style={styles.backButtonIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.025)",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: "rgba(0,0,0,0.25)",
    fontSize: 18,
    fontWeight: "bold",
  },
  cardContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  cardIconContainer: {
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.01)",
    width: 75,
    height: 75,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    elevation: 20,
  },
  cardIcon: {
    color: "black",
    fontSize: 36,
  },
  cardBase: {
    borderRadius: 36,
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.01)",
    bottom: 50,
    height: 250,
    width: 350,
    justifyContent: "center",
    backgroundColor: "white",
    elevation: 18,
  },
  cardTopContainer: {
    marginBottom: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    color: "black",
    paddingVertical: 4,
    fontSize: 24,
    fontWeight: "bold",
  },
  cardInfo: {
    color: "rgba(0,0,0,0.5)",
    fontStyle: "italic",
  },
  cardDataContainer: {
    alignItems: "center",
  },
  cardQuickData: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  cardCompareData: {
    color: "lightgreen",
    fontWeight: "bold",
  },
  clockContainer: {
    flexDirection: "row",
  },
  dialContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  dialFinalFaded: {
    fontSize: 24,
    color: "rgba(0,0,0,0.05)",
  },
  dialSecondaryFaded: {
    color: "rgba(0,0,0,0.25)",
    fontSize: 48,
  },
  dialSelected: {
    color: "black",
    fontSize: 64,
  },
  addButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonBase: {
    backgroundColor: "black",
    borderRadius: 25,
    height: "55%",
    width: "55%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 12,
  },
  addButtonTitle: {
    color: "white",
    fontSize: 18,
  },
  backButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backButtonBase: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    elevation: 8,
  },
  backButtonIcon: {
    color: "white",
    fontSize: 24,
    padding: 12,
  },
});

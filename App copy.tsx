import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>New Mood</Text>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.cardIconContainer}>
          <Text style={styles.cardIcon}>😎</Text>
        </View>
        <View style={styles.cardBase}>
          <View style={styles.cardTopContainer}>
            <Text style={styles.cardTitle}>MOOD NAME</Text>
            <Text style={styles.cardInfo}>mood info such as time and date</Text>
          </View>
          <View style={styles.cardDataContainer}>
            <Text style={styles.cardQuickData}>Quicklook data</Text>
            <Text style={styles.cardCompareData}>Compare data</Text>
          </View>
        </View>
      </View>
      <View style={styles.dialContainer}>
        <Text style={styles.dialFinalFaded}>22</Text>
        <Text style={styles.dialSecondaryFaded}>21</Text>
        <Text style={styles.dialSelected}>- 20 -</Text>
        <Text style={styles.dialSecondaryFaded}>19</Text>
        <Text style={styles.dialFinalFaded}>18</Text>
      </View>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity style={styles.addButtonBase}>
          <Text style={styles.addButtonTitle}>Add Mood</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity style={styles.backButtonBase}>
          <Text style={styles.backButtonIcon}>👈</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    backgroundColor: "darkorchid",
    color: "black",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 2,
    fontSize: 18,
    fontWeight: "bold",
  },
  cardContainer: {
    flex: 3,
    backgroundColor: "red",
    alignItems: "center",
  },
  cardIconContainer: {
    backgroundColor: "fuchsia",
    borderRadius: 18,
    zIndex: 1,
  },
  cardIcon: {
    color: "black",
    fontSize: 48,
    padding: 12,
  },
  cardBase: {
    backgroundColor: "orange",
    borderRadius: 24,
    bottom: "15%",
    height: "85%",
    width: "75%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  cardTopContainer: {
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },
  cardInfo: {
    color: "black",
    fontStyle: "italic",
  },
  cardDataContainer: {
    backgroundColor: "orchid",
    alignItems: "center",
  },
  cardQuickData: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  cardCompareData: {
    color: "green",
    fontWeight: "bold",
  },
  dialContainer: {
    flex: 3,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "space-around",
  },
  dialFinalFaded: {
    fontSize: 24,
    color: "rgba(0,0,0,0.10)",
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
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonBase: {
    backgroundColor: "black",
    borderRadius: 100,
    height: "50%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonTitle: {
    color: "white",
    fontSize: 18,
  },
  backButtonContainer: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  backButtonBase: {
    backgroundColor: "black",
    // height: "25%",
    // // width: "25%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  backButtonIcon: {
    color: "white",
    fontSize: 18,
    padding: 12,
  },
});

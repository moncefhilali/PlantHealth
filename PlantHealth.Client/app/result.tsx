import { Image, StyleSheet, Text, View } from "react-native";

export default function Result() {
  const plantPicture = require("../assets/images/leafImage.jpg");

  return (
    <View style={styles.container}>
      <View style={styles.subContainer1}>
        <View style={styles.pictureContainer}>
          <Image style={styles.plantPicture} source={plantPicture} />
        </View>

        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Healthy</Text>

          <View style={styles.scoreContainer}>
            <Text style={styles.statusText}>8</Text>
            <Text style={styles.outOfText}>/10</Text>
          </View>
        </View>
      </View>

      <View style={styles.subContainer2}>
        <View style={styles.tips}>
          <View style={styles.tip}>
            <Text style={styles.tipText}>{String.fromCodePoint(0x1f4a6)}</Text>
            <Text style={styles.tipText}>Water twice a day</Text>
          </View>

          <View style={styles.tip}>
            <Text style={styles.tipText}>{String.fromCodePoint(0x1f324)}</Text>
            <Text style={styles.tipText}>Sunbath at least 2h</Text>
          </View>

          <View style={styles.tip}>
            <Text style={styles.tipText}>{String.fromCodePoint(0x1f343)}</Text>
            <Text style={styles.tipText}>Clean the pollen</Text>
          </View>
        </View>
      </View>

      <View style={styles.quoteContainer}>
        <Text>Sunbathing your indoor plant will make it happier</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
  },
  subContainer1: {
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "70%",
    height: "55%",
    backgroundColor: "#FFF",
    borderRadius: 50,
  },
  subContainer2: {
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    height: "23%",
    backgroundColor: "#FFF",
    borderRadius: 50,
  },
  pictureContainer: {
    height: "80%",
    width: "90%",
  },
  plantPicture: {
    width: "auto",
    height: "100%",
    objectFit: "cover",
    borderRadius: 50,
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  statusText: {
    color: "#1D9371",
    fontSize: 30,
    fontWeight: 700,
  },
  scoreContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  outOfText: {
    color: "#827A7A",
    fontSize: 15,
    fontWeight: 700,
  },
  tips: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  tip: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    alignItems: "center",
  },
  tipText: {
    fontSize: 20,
    fontWeight: 700,
    color: "#1D9371",
  },
  quoteContainer: {
    borderTopLeftRadius: 370,
    borderTopRightRadius: 370,
    backgroundColor: "#1D9371",
    height: "13.7%",
  },
});

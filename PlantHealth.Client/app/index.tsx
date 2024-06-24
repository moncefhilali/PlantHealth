import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Index() {
  const leafImage = require("../assets/images/leafImage.jpg");
  const leafLogo = require("../assets/images/leafLogo.png");

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground source={leafImage} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <View style={styles.logoContainer}>
              <Image style={styles.logo} source={leafLogo} />
            </View>

            <View style={styles.content}>
              <Text style={styles.title}>Plant Check</Text>
              <Text style={styles.subtitle}>
                “Plants do not speak, but their silence is alive with change.”
              </Text>
              <TouchableOpacity style={styles.button}>
                <Ionicons name="camera" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
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
  logoContainer: {
    // height: "50%",
    marginTop: 35,
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
  },
  imageContainer: {
    width: "90%",
    height: "85%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    overflow: "hidden",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "space-between",
  },
  content: {
    height: "50%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    fontWeight: 600,
    color: "white",
    marginVertical: 20,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});

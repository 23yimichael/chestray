import { StyleSheet, View, Text } from "react-native";

export default function LandingPage() {
  return (
    <View style={styles.container}>
      <Text>Landing Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

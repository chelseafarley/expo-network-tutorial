import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Network from "expo-network";
import { useState, useEffect } from "react";

// npx expo install expo-network

export default function App() {
  const [ipAddress, setIpAddress] = useState(undefined);
  const [networkState, setNetworkState] = useState(undefined);

  useEffect(() => {
    const getIpAddress = async () => {
      const ip = await Network.getIpAddressAsync();
      setIpAddress(ip);
    };
    getIpAddress();

    const getNetworkState = async () => {
      const state = await Network.getNetworkStateAsync();
      setNetworkState(JSON.stringify(state));
    };
    getNetworkState();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{ipAddress}</Text>
      <Text>{networkState}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

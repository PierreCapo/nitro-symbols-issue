import { Button, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { router, useNavigation } from "expo-router";
import { SymbolView as ExpoSymbolView } from "expo-symbols";
import { useEffect } from "react";
import { SymbolView as NitroSymbolView } from "react-native-nitro-symbols";

export default function Screen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: ExpoSymbolHeader,
      headerLeft: NitroSymbolHeader,
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Next Screen</Text>
      <Button title="Pop to previous screen" onPress={() => router.back()} />
    </View>
  );
}

const ExpoSymbolHeader = () => {
  return (
    <ExpoSymbolView
      name="text.book.closed.fill"
      size={20}
      colors={["#A1A1A1"]}
    />
  );
};

const NitroSymbolHeader = () => {
  return (
    <NitroSymbolView
      symbolName="text.book.closed.fill"
      pointSize={20}
      colors={["red"]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

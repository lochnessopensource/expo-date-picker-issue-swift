import * as Device from "expo-device";
import {Platform, Pressable, SafeAreaView, StyleSheet, Text} from "react-native";

import { ThemedText } from "@/components/themed-text";
import { useRouter } from "expo-router";
import React, { useState } from "react";



function getDevMenuHint() {
  if (Platform.OS === "web") {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === "android" ? "cmd+m (or ctrl+m)" : "cmd+d";
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}

export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Pressable onPress={() => router.navigate("/expense-details")}>
      <Text>Go to details</Text>
      </Pressable>  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

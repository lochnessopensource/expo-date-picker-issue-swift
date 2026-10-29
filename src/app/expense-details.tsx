import * as Device from "expo-device";
import { Platform, SafeAreaView, StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { FieldGroup, Host, Icon, Row, Spacer, Text } from "@expo/ui";
import { DatePicker } from '@expo/ui/swift-ui';
import { useRouter } from "expo-router";
import React, { useState } from "react";

const CHEVRON = Icon.select({
    ios: "chevron.right",
    android: require("@expo/material-symbols/chevron_right.xml"),
});

const INFO = Icon.select({
    ios: "info",
    android: require("@expo/material-symbols/info.xml"),
});

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

export default function ExpenseDetailsScreen() {
    const [testDate, setTestDate] = useState(new Date(2024, 4, 31));
    const router = useRouter();
    const [serviceDate, setServiceDate] = React.useState(new Date());
    const [shouldShowServiceDatePicker, setShouldShowServiceDatePicker] =
        React.useState(false);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Host style={{ flex: 1 }}>
                <FieldGroup>
                    <FieldGroup.Section title="Support">
                        <Row alignment="center" onPress={() => {}}>
                            <Text>Test Date</Text>
                            <Spacer flexible />
                            {Platform.OS === "ios" && (
                                <DatePicker
                                    selection={testDate}
                                    displayedComponents={["date"]}
                                    onDateChange={(date) => {
                                        setTestDate(date);
                                    }}
                                />
                            )}
                        </Row>
                    </FieldGroup.Section>
                </FieldGroup>
            </Host>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});

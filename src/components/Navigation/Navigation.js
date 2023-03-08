import React from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "./AuthProvider";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./AuthNavigation";
import TabNavigation from "./TabNavigation";

function Navigation() {
    const { user } = React.useContext(AuthContext);

    return (
        <NavigationContainer>
            {user ? <TabNavigation /> : <AuthNavigation />}
        </NavigationContainer>
    )
}

export default Navigation;

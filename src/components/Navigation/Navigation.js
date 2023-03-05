import React from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SignIn from "../SignIn";
import Dashboard from "../Dashboard";
import { AuthContext } from "../AuthProvider";

function Navigation() {
    const { user } = React.useContext(AuthContext);

    return (
            user ? <Dashboard /> : <SignIn />
    )
}

export default Navigation;
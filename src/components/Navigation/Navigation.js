import React from "react";
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

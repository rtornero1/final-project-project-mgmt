import React from "react";
import {View, Text} from "react-native";
import SignIn from "../SignIn";

function Navigation() {
    const [user, setUser] = React.useState(null);

    return (
        <View>
            { user ? <Text>Home Screen</Text> : <SignIn setUser={setUser} />}
        </View>
    )
}

export default Navigation;
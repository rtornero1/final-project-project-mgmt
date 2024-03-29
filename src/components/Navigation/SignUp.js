import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { axiosInstance } from "../utils";
import { AuthContext } from "./AuthProvider";

function SignUp() {
    const {setUser} = React.useContext(AuthContext);
    
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    async function signUpPost() {
        try {
            const apiEndPoint = "/users/sign_up.json"

            const body = {
                user: {
                    email: email,
                    password: password
                }
            }

            const response = await axiosInstance.post(apiEndPoint, body);

            setUser(response.data);
        } catch (error) {
            console.error(error.toJSON());
        }
    }

    return (
        <View>
            <Text style={styles.text}>
                Sign Up!
            </Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={(change) => setEmail(change)}
                keyboardType={"email-address"}
                placeholder={"Email"}
            />
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={(change) => setPassword(change)}
                placeholder={"Password"}
                secureTextEntry={true}
            />
            <Button
                style={styles.button}
                title="Sign Up"
                onPress={signUpPost}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        padding: 6,
        justifyContent: 'center'
    },
    text: {
        padding: 10,
        marginTop: 200,
        fontWeight: 'bold',
        fontSize: 30
    },
    input: {
        padding: 14,
        height: 40,
        marginTop: 12,
        marginLeft: 6,
        marginRight: 6,
        marginBottom: 18,
        fontSize: 16,
        borderWidth: 2,
    },
    button: {
        color: '#007AFF',
        fontSize: 40,
    }
});

export default SignUp;

import React from "react";
import { View, Text, StyleSheet, FlatList, TextInput, Button } from "react-native";
import { axiosInstance } from "./utils";
import { AntDesign } from '@expo/vector-icons';
import Task from "./Task";
import { AuthContext } from "./Navigation/AuthProvider";



function Backlog() {
    const { user } = React.useContext(AuthContext);

    const [tasks, setTasks] = React.useState([]);

    const [description, setDescription] = React.useState("");

    async function postDescription() {
        
    }

    async function getTasks() {
        try {
            const apiEndPoint = `/${user.username}/feed.json?user_email=${user.email}&user_token=${user.authentication_token}`
            const response = await axiosInstance.get(apiEndPoint)
            setTasks(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        getTasks();
    }, [])

    return (
        <View>
            <Text style={styles.subtitle}>
                Add new task
            </Text>
            <TextInput
                style={styles.input}
                value={description}
                onChangeText={(change) => setDescription(change)}
                placeholder={"Task description..."}
            />
            <Button
                style={styles.button}
                title="Create task"
                onPress={postDescription}
            />

            <FlatList
                data={tasks}
                renderItem={({ item }) => <Task task={item} />}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.contentContainer}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: '600',
        marginTop: 12,
        marginBottom: 6,
        marginLeft: 6,
        color: 'gray'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '500',
        marginTop: 12,
        marginBottom: 3,
        marginLeft: 12,
    },
    contentContainer: {
        padding: 12
    },
    input: {
        padding: 14,
        height: 60,
        marginTop: 6,
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 6,
        fontSize: 14,
        borderWidth: 1,
    },
    button: {
        color: '#007AFF',
        fontSize: 40,
    }

})

export default Backlog;
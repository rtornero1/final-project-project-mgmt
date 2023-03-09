import React from "react";
import { View, Text, StyleSheet, FlatList, TextInput, Button } from "react-native";
import { axiosInstance } from "./utils";
import Task from "./Task";
import { AuthContext } from "./Navigation/AuthProvider";
import InProgress from "./InProgress";



function Backlog() {
    const { user } = React.useContext(AuthContext);
    const [tasks, setTasks] = React.useState([]);

    const [caption, setCaption] = React.useState("");

    async function createTask() {
        try {
            const apiEndPoint = "/tasks.json"

            const body = {
                task: {
                    caption: caption,
                    owner_id: user.id
                }
            }

            const response = await axiosInstance.post(apiEndPoint, body);

            console.log(response.data);
            // <Backlog />;
        } catch (error) {
            console.error(error.toJSON());
        }
    }

    async function getTasks() {
        try {
            // const apiEndPoint = `/${user.username}/feed.json?user_email=${user.email}&user_token=${user.authentication_token}`
            const apiEndPoint = `/tasks.json`
            const response = await axiosInstance.get(apiEndPoint)
            setTasks(response.data.filter(item => item.status === "backlog"));
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
                value={caption}
                onChangeText={(change) => setCaption(change)}
                placeholder={"Task description..."}
            />
            <Button
                style={styles.button}
                title="Create task"
                onPress={createTask}
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
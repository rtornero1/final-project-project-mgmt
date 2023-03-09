import React from "react";
import { View, Text, StyleSheet, FlatList, TextInput, Button } from "react-native";
import { axiosInstance } from "./utils";
import { AntDesign } from '@expo/vector-icons';
import Comment from "./Comment";
import { AuthContext } from "./Navigation/AuthProvider";



function TaskComments() {

    const [comments, setComments] = React.useState([]);

    const [description, setDescription] = React.useState("");

    async function postDescription() {
        
    }

    async function getComments() {
        try {
            // const apiEndPoint = `/${user.username}/feed.json?user_email=${user.email}&user_token=${user.authentication_token}`
            const apiEndPoint = `/tasks.json`
            const response = await axiosInstance.get(apiEndPoint)
            setComments(response.data.filter(item => item.status === "backlog"));
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        getComments();
    }, [])

    return (
        <View>
            <TextInput
                style={styles.input}
                value={description}
                onChangeText={(change) => setDescription(change)}
                placeholder={"Insert comment..."}
            />
            <Button
                style={styles.button}
                title="Add comment"
                onPress={postDescription}
            />

            <FlatList
                data={comments}
                renderItem={({ item }) => <Comment comment={item} />}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.contentContainer}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
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
        height: 40,
        marginTop: 6,
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 6,
        fontSize: 14,
        borderWidth: 1,
    },
    button: {
        color: '#007AFF',
        fontSize: 20,
    }

})

export default TaskComments;
import React from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import TaskComments from "./TaskComments";
import { axiosInstance } from "axios";

function viewComments() {
    console.log("Pushed button");
    return(
        <View>
            <TaskComments />
        </View>
    )
}

function Task({ task }) {
    const [comments, setComments] = React.useState(null);

    async function moveForward() {

    }
    async function editDescription() {

    }

    async function deleteTask() {
        try {
            const apiEndPoint = `/tasks/${task.id}.json`
            const response = await axiosInstance.delete(apiEndPoint)

            console.log("Task deleted");
            // <Backlog />
        } catch (error) {
            console.log(error)
        }
    }

    async function getComments() {
        try {
            const apiEndPoint = `/comments.json`
            const response = await axiosInstance.get(apiEndPoint)
            setComments(response.data.filter(item => item.task_id === "task.id"));
        } catch (error) {
            console.log(error)
        }
    }

    // React.useEffect(() => {
    //     getComments();
    // }, [])

    const buttonOwnerTitle = `Owner: ${task.owner.username}`

    return (
        <View style={styles.task}>
            <Text style={styles.owner}>{buttonOwnerTitle} {}</Text>

            <Text style={styles.caption}>{task.caption}</Text>

            <Pressable onPress={viewComments}>
                <Text style={styles.commentButton}>{task.comments_count} {task.comments_count === 1 ? "comment" : "comments"}</Text>
            </Pressable>
            
            <View style={styles.tasksContainer}>
                <View style={styles.taskButton}>
                    <Pressable style={styles.button} onPress={moveForward}>
                        <AntDesign style={styles.icon} name="stepforward" color="dodgerblue" />
                        <Text>Move</Text>
                    </Pressable>
                </View>
                <View style={styles.taskButton}>
                    <Pressable style={styles.button} onPress={editDescription}>
                        <AntDesign style={styles.icon} name="edit" color="dodgerblue" />
                        <Text>Edit task</Text>
                    </Pressable>
                </View>
                <View style={styles.taskButton}>
                    <Pressable style={styles.button} onPress={deleteTask}>
                        <AntDesign style={styles.icon} name="delete" color="dodgerblue" />
                        <Text>Delete</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    task: {
        padding: 16,
        marginVertical: 8,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#007AFF',
        width: '100%'
    },
    owner: {
        fontWeight: 'bold',
    },
    caption: {
        marginTop: 6,
        marginBottom: 2,
    },
    commentButton: {
        lineHeight: 21,
        marginTop: 8,
        marginBottom: 8,
        letterSpacing: 0.25,
        color: '#007AFF',
        textDecorationLine: 'underline',
    },
    tasksContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    taskButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '33%',
        marginTop: 8,
    },
    icon: {
        fontSize: 20,
    },
    button: {
        alignItems: 'center',
    }
})

export default Task;
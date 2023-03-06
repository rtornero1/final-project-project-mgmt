import React from "react";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';

function Task({ task }) {

    async function editOwner() {

    }
    async function editDescription() {

    }
    async function viewComments() {

    }

    const buttonOwnerTitle = `Owner: ${task.owner.username}`

    return (
        <View style={styles.task}>
            <Text style={styles.owner}>{buttonOwnerTitle}</Text>

            <Text style={styles.caption}>{task.caption}</Text>
            <Pressable onPress={viewComments}>
                <Text style={styles.commentButton}>{task.likes_count} {task.likes_count === 1 ? "comment" : "comments"}</Text>
            </Pressable>
            <View style={styles.tasksContainer}>
                <View style={styles.taskButton}>
                    <Pressable style={styles.button} onPress={editDescription}>
                        <AntDesign style={styles.icon} name="stepforward" color="dodgerblue" />
                        <Text>In Progress</Text>
                    </Pressable>
                </View>
                <View style={styles.taskButton}>
                    <Pressable style={styles.button} onPress={editDescription}>
                        <AntDesign style={styles.icon} name="edit" color="dodgerblue" />
                        <Text>Description</Text>
                    </Pressable>
                </View>
                <View style={styles.taskButton}>
                    <Pressable style={styles.button} onPress={editDescription}>
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
        alignItems: 'right',
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
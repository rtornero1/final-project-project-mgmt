import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';

function Task({ task }) {

    return (
        <View style={styles.task}>
            <Text style={styles.username}>{task.owner.username}</Text>
            <Text style={styles.caption}>{task.caption}</Text>
            <Text style={styles.caption}></Text>
            <View style={styles.likes}>
                <Text style={styles.likesCount}>
                    {task.likes_count} {task.likes_count === 1 ? "comment" : "comments"}
                </Text>
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
        borderColor: 'gainsboro',
        width: '100%'
    },
    imageWrapper: {
        height: 225,
        marginVertical: 12,
        marginLeft: -16,
        marginRight: -16,
    },
    image: {
        height: '100%',
        width: '100%',
    },
    username: {
        fontWeight: '700'
    },
    likes: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    likesCount: {
        marginLeft: 6,
    },
    caption: {
        marginTop: 12,
    }
})

export default Task;
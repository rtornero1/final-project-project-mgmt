import React from "react";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';

function Comment({ comment }) {

    async function editComment() {

    }

    const OwnerTitle = [Joe, Bob, Rai]

    return (
        <View style={styles.comment}>
            <Text style={styles.owner}>{OwnerTitle}</Text>

            <Text style={styles.caption}>{comment.caption}</Text>
            <View style={styles.commentsContainer}>
                <View style={styles.commentButton}>
                    <Pressable style={styles.button} onPress={editDescription}>
                        <AntDesign style={styles.icon} name="edit" color="dodgerblue" />
                        <Text>Edit</Text>
                    </Pressable>
                </View>
                <View style={styles.commentButton}>
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
    comment: {
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
    commentsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    commentButton: {
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

export default Comment;
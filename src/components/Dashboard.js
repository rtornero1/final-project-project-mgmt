import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { axiosInstance } from "./utils";
import { AntDesign } from '@expo/vector-icons';
import Task from "./Task";



function Dashboard( { user } ) {
    const [tasks, setTasks] = React.useState([]);


    async function getFeed() {
        try {
            const apiEndPoint = `/${user.username}/feed.json?user_email=${user.email}&user_token=${user.authentication_token}`
            const response = await axiosInstance.get(apiEndPoint)
            setTasks(response.data);
        } catch(error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        getFeed();
    }, [])

    return (
        <View>
            <Text style={styles.title}>
                Dashboard
            </Text>
            <FlatList
                data={tasks}
                renderItem={({item}) => <Task task={item} />}
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
        marginLeft: 'center'
    },
    contentContainer: {
        padding: 12
    }
})

export default Dashboard;
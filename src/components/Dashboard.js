import React from "react";
import { View, Text, ScrollView } from "react-native";
import { axiosInstance } from "./utils";

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
            <Text>
                Dashboard
            </Text>
            <ScrollView>
                {
                    tasks.map((task) => {
                        return (
                            <View>
                                <Text>
                                    {task.caption}
                                </Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Dashboard;
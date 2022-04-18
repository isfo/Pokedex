import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Background } from "../components/Background";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { DetailPage } from "../screens/DetailPage";
import { propsNavigationStack } from "./NavigationProps";

export default function Route() {



    const { Navigator, Screen } = createStackNavigator<propsNavigationStack>();

    return (
        <NavigationContainer>
            <Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
                <Screen name="Home" component={Home}
                    options={{
                        headerShown: false
                    }}
                />
                <Screen name="DetailPage" component={DetailPage}
                    options={{
                        title: 'My home',
                        headerStyle: {
                            backgroundColor: '#f4511e'
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }} />
            </Navigator>
        </NavigationContainer>
    )
}
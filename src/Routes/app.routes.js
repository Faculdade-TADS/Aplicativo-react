import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../../src/pages/Home";

const { Navigator, Screen } = createBottomTabNavigator();

export const AppRoutes = () =>{
    return(
<Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "#ffff",
                tabBarStyle: {
                    height: 88,
                }
            }}
        > 
        
        <Screen
                name="home"
                component={Home}
                // options={{
                //     tabBarIcon: (({ size, color }) =>
                //         <Feather
                //             name="settings"
                //             size={size}
                //             color={color}
                //         />
                //     )
                // }}
            />

<Screen
                name="cadastro"
                component={Home}
                // options={{
                //     tabBarIcon: (({ size, color }) =>
                //         <Feather
                //             name="settings"
                //             size={size}
                //             color={color}
                //         />
                //     )
                // }}
            />

        </ Navigator>
    )
}
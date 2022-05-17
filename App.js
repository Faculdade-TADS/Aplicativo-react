import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from "./src/Routes/app.routes";


export default function App() {
    return (
    
       <NavigationContainer>
     <AppRoutes />
       </NavigationContainer>
    
    );
}


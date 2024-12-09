import { Text, View } from 'react-native';
import HomeScreen from './components/review/home';
import DetailScreen from './components/review/detail';
import AboutScreen from './components/review/about';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { OPENSANS_REGULAR } from './utils/const';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

SplashScreen.preventAutoHideAsync(); // chờ cho giao diện load font chữ. Sau đó mới chạy vào ứng dụng

const App = () => {
    const [loaded, error] = useFonts({
        [OPENSANS_REGULAR]: require('./assets/fonts/OpenSans-Regular.ttf'),
    });
    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    });
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="home"
                    options={{ title: 'Overview' }}
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="review-detail"
                    options={{ title: 'Detail Page' }}
                    component={HomeScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

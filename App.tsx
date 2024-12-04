import { Text, View } from 'react-native';
import HomeScreen from './components/review/home';
import DetailScreen from './components/review/detail';
import AboutScreen from './components/review/about';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync(); // chờ cho giao diện load font chữ. Sau đó mới chạy vào ứng dụng

const App = () => {
    const [loaded, error] = useFonts({
        'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    });
    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    });
    return (
        <View style={{ marginTop: 50 }}>
            <HomeScreen />
            <DetailScreen />
            <AboutScreen />
        </View>
    );
};

export default App;

import { Button, Text, View } from 'react-native';

const HomeScreen = () => {
    return (
        <View>
            <Text style={{ fontSize: 30 }}>Home</Text>
            <Button title="View Detail" onPress={() => alert('me')} />
        </View>
    );
};

export default HomeScreen;

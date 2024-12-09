import { Button, Text, View } from 'react-native';

const HomeScreen = (props: any) => {
    const { navigation } = props;
    console.log('check console: ', props);
    return (
        <View>
            <Text style={{ fontSize: 30 }}>Home</Text>
            <Button
                title="View Detail"
                onPress={() => navigation.navigate('review-detail')}
            />
        </View>
    );
};

export default HomeScreen;

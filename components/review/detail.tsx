import { Button, StyleSheet, Text, View } from 'react-native';
import { OPENSANS_REGULAR } from '../../utils/const';
import {
    NavigationProp,
    ParamListBase,
    useNavigation,
} from '@react-navigation/native';

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: OPENSANS_REGULAR,
    },
});

const DetailScreen = () => {
    const navigation: NavigationProp<ParamListBase> = useNavigation();

    return (
        <View>
            <Text style={styles.review}>Detail Screen Google</Text>
            <Button
                title="Go Home"
                onPress={() => navigation.navigate('home')}
            />
        </View>
    );
};

export default DetailScreen;

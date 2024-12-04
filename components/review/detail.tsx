import { StyleSheet, Text, View } from 'react-native';
import { OPENSANS_REGULAR } from '../../utils/const';

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: OPENSANS_REGULAR,
    },
});

const DetailScreen = () => {
    return (
        <View>
            <Text style={styles.review}>Detail Screen Google</Text>
        </View>
    );
};

export default DetailScreen;

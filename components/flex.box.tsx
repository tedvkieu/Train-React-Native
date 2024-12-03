import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flex: 1,
        borderWidth: 1,
        borderColor: 'red',
    },
    item1: {
        backgroundColor: 'violet',
        padding: 20,
        flex: 1,
    },
    item2: {
        backgroundColor: 'orange',
        padding: 20,
    },
    item3: {
        backgroundColor: 'blue',
        padding: 20,
    },
    item4: {
        backgroundColor: 'green',
        padding: 20,
    },
});

const FlexBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.item1}>
                <Text>Flex Box 1</Text>
            </View>
            <View style={styles.item2}>
                <Text>Flex Box 2</Text>
            </View>
            <View style={styles.item3}>
                <Text>Flex Box 3</Text>
            </View>
            <View style={styles.item4}>
                <Text>Flex Box 4</Text>
            </View>
        </View>
    );
};

export default FlexBox;

import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    // jsx react native
    return (
        // view tuong ung voi the div
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>Duong Van Kieu</Text>
                <Text style={styles.parent}>
                    Kieu ne
                    <Text>bla bla</Text>
                    {/* Text bla bla se duoc ke thua */}
                </Text>
            </View>
            <Text style={styles.hello1}>Kieu dep trai</Text>
            <Text style={{ color: 'red' }}>Hello 2</Text>
        </View>
    );
}

//ko co css, stylesheet giong css
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    hello1: {
        color: 'violet',
        fontSize: 60,
        borderColor: 'green',
        borderWidth: 1,
        padding: 10,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    parent: {
        fontSize: 60,
        color: 'green',
    },
    child: {
        fontSize: 60,
        color: 'pink',
    },
});

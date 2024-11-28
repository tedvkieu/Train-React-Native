import { useState } from 'react';
import {
    Button,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

export default function App() {
    // jsx react native

    const [students, setStudents] = useState([
        { id: 1, name: 'Kieu1', age: 18 },
        { id: 2, name: 'Kieu2', age: 18 },
        { id: 3, name: 'Kieu3', age: 18 },
        { id: 4, name: 'Kieu4', age: 18 },
        { id: 5, name: 'Kieu5', age: 18 },
        { id: 6, name: 'Kieu6', age: 18 },
        { id: 7, name: 'Kieu7', age: 18 },
        { id: 8, name: 'Kieu8', age: 18 },
        { id: 9, name: 'Kieu8', age: 18 },
        { id: 10, name: 'Kieu8', age: 18 },
        { id: 11, name: 'Kieu8', age: 18 },
        { id: 11, name: 'Kieu8', age: 18 },
        { id: 11, name: 'Kieu8', age: 18 },
    ]);

    return (
        // view tuong ung voi the div
        <View style={styles.container}>
            <Text style={{ fontSize: 60 }}>Hello World</Text>
            <ScrollView>
                {students.map((item) => {
                    return (
                        <View
                            key={item.id}
                            style={{
                                padding: 30,
                                backgroundColor: 'pink',
                                marginBottom: 30,
                            }}>
                            <Text>{item.name}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}

//ko co css, stylesheet giong css
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

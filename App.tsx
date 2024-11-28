import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    // jsx react native

    const [name, setName] = useState<string>('Kieu');
    const [age, setAge] = useState(0);
    const [count, setCount] = useState(0);

    return (
        // view tuong ung voi the div
        <View style={styles.container}>
            <View>
                <Text style={{ fontSize: 40, fontWeight: '600' }}>
                    Name: {name}
                </Text>
                <TextInput
                    multiline
                    autoCapitalize={'words'}
                    onChangeText={(value) => setName(value)}
                    style={{
                        borderColor: 'green',
                        borderWidth: 1,
                        width: 200,
                        padding: 15,
                    }}
                />
            </View>

            <View>
                <Text style={{ fontSize: 40, fontWeight: '600' }}>
                    Age: {age}
                </Text>
                <TextInput
                    multiline
                    onChangeText={(value) => setAge(+value)}
                    style={{
                        borderColor: 'green',
                        borderWidth: 1,
                        width: 200,
                        padding: 15,
                    }}
                    keyboardType="numeric"
                    maxLength={2}
                />
            </View>

            <Text style={{ fontSize: 40, fontWeight: '600' }}>
                Count = {count}
            </Text>

            <View>
                <Button
                    color={'red'}
                    title="Increase"
                    onPress={() => setCount(count + 1)}
                />
            </View>
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

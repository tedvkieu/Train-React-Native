import { useState } from 'react';
import {
    Button,
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

interface ITodo {
    id: number;
    name: string;
}

export default function App() {
    // jsx react native

    const [todo, setTodo] = useState('');
    const [listTodo, setListTodo] = useState<ITodo[]>([]);

    function randomInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const handleAddTodo = () => {
        if (!todo) return;
        setListTodo([...listTodo, { id: randomInteger(2, 2000), name: todo }]);
        setTodo('');
    };
    return (
        // view tuong ung voi the div
        <View style={styles.container}>
            <Text style={styles.header}>Todo App</Text>

            <View style={styles.body}>
                <TextInput
                    value={todo}
                    style={styles.input}
                    onChangeText={(value) => setTodo(value)}
                />
                <Button title="ADD to do" onPress={() => handleAddTodo()} />
            </View>
            <View style={styles.body}>
                <FlatList
                    keyExtractor={(item) => item.id + ''}
                    data={listTodo}
                    renderItem={({ item }) => {
                        return <Text style={styles.todoItem}>{item.name}</Text>;
                    }}
                />
            </View>
        </View>
    );
}

//ko co css, stylesheet giong css
const styles = StyleSheet.create({
    header: {
        backgroundColor: 'orange',
        paddingHorizontal: 20,
        textAlign: 'center',
        fontSize: 50,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: 'green',
        padding: 5,
        marginHorizontal: 15,
        margin: 15,
    },
    container: {
        paddingTop: 50,
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    todoItem: {
        fontSize: 20,
        borderWidth: 1,
        borderStyle: 'dashed',
        marginBottom: 20,
        padding: 10,
    },
    body: {
        paddingHorizontal: 10,
        marginBottom: 20,
    },
});

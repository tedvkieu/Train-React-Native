import { useState } from 'react';
import {
    Alert,
    Button,
    FlatList,
    Keyboard,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import FlexBox from './components/flex.box';
import AntDesign from '@expo/vector-icons/AntDesign';

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
        if (!todo) {
            Alert.alert('Error: Input Todo', 'Todo khong duoc de trong', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel press'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('ok press') },
            ]);
            return;
        }
        setListTodo([...listTodo, { id: randomInteger(2, 2000), name: todo }]);
        setTodo('');
    };

    const deleteTodo = (id: number) => {
        const newTodo = listTodo.filter((item) => item.id !== id);
        setListTodo(newTodo);
    };
    return (
        // view tuong ung voi the div

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text style={styles.header}>Todo App</Text>

                <View style={styles.form}>
                    <TextInput
                        value={todo}
                        style={styles.input}
                        onChangeText={(value) => setTodo(value)}
                    />
                    <Button title="ADD to do" onPress={() => handleAddTodo()} />
                </View>
                <View style={styles.todo}>
                    <FlatList
                        keyExtractor={(item) => item.id + ''}
                        data={listTodo}
                        renderItem={({ item }) => {
                            return (
                                <Pressable
                                    onPress={() => deleteTodo(item.id)}
                                    style={({ pressed }) => ({
                                        opacity: pressed ? 0.5 : 1,
                                    })}>
                                    <View style={styles.groupTodo}>
                                        <Text style={styles.todoItem}>
                                            {item.name}
                                        </Text>
                                        <AntDesign
                                            name="close"
                                            size={24}
                                            color="black"
                                        />
                                    </View>
                                </Pressable>
                            );
                        }}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

//ko co css, stylesheet giong css
const styles = StyleSheet.create({
    groupTodo: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderStyle: 'dashed',
        marginBottom: 15,
        justifyContent: 'space-between',
        padding: 15,
        marginHorizontal: 10,
    },
    container: {
        paddingTop: 50,
        borderWidth: 1,
        borderColor: 'red',
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    header: {
        backgroundColor: 'orange',
        paddingHorizontal: 20,
        textAlign: 'center',
        fontSize: 50,
    },
    form: {
        marginBottom: 20,
    },
    todo: {
        flex: 9,
    },
    todoItem: {
        fontSize: 20,

        //marginBottom: 20,
    },

    input: {
        borderBottomWidth: 1,
        borderColor: 'green',
        padding: 5,
        marginHorizontal: 15,
        margin: 15,
    },

    body: {
        flex: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
});

import * as React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import {
    getPhoneNumber,
    getGoogleAccount,
} from 'react-native-hint-request-picker';

export default function App() {
    const [result, setResult] = React.useState<string | undefined>();

    React.useEffect(() => {
        // getPhoneNumber().then((data) => {
        //   setResult(data.phoneNumber);
        //   alert(data.phoneNumber);
        // }).catch((e) => alert(e));
    }, []);

    const email = () => {
        getGoogleAccount()
            .then((data) => {
                setResult(JSON.stringify(data));
            })
            .catch((e) => console.log(e));
    };

    const phone = () => {
        getPhoneNumber()
            .then((data) => {
                setResult(data.phoneNumber);
            })
            .catch((e) => console.log(e));
    };
    return (
        <View style={styles.container}>
            <Button title="Email" onPress={email} />
            <Text>{'\n'}</Text>
            <Button title="Phone" onPress={phone} />
            <Text>Result: {result}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: 60,
        height: 60,
        marginVertical: 20,
    },
});

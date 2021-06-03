import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './style';



const StyledButton = (props) => {

    const type =props.type;

    console.log(type);

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={() => {
                    console.warn('hey there');
                }}

            >
                <Text style={styles.text}>Custom Order</Text>

            </Pressable>
        </View>
    );
};

export default StyledButton;
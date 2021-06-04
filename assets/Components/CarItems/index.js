import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import StyledButton from '../styleButton';
import styles from './style';

const CarItem = () => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={require('../../images/ModelX.jpeg')}
                style={styles.image} />

            <View style={styles.titles}>
                <Text style={styles.title}> Model S</Text>
                <Text style={styles.subtitle}> Starting at $69,420</Text>
            </View>

            <StyledButton
                type="primary"
                content={"Custom Order"}
                onPress={() =>
                    console.warn('Custom Order was presed')
                }
            />

            <StyledButton
                type="secondary"
                content={"Existing Inventory"}
                onPress={() =>
                    console.warn('Existing Inventory was presed')
                }
            />


        </View>

    );
};

export default CarItem;
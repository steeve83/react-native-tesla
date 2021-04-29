import React from 'react';
import { Text, View, Pressable} from 'react-native'
import styles from './styles';

const StyledButton = (props) => {
    // const type=props.type;
    // const content=props.content;
    // const onPress=props.onPress;
    const { type, content, onPress} = props;


    const backgroundColor = type === 'primary' ? '#171a20cc' : '#ffffffa6';
    const textColor = type === 'primary' ? '#ffffffa6' : '#171a20cc';
    
        return (
            <View style={styles.container}>
                <Pressable
                    style={[styles.button, {backgroundColor:backgroundColor}]}
                    onPress={() => onPress()}>
                   <Text style={[styles.text, {color:textColor}]}>{content}</Text>
                </Pressable> 
                
            </View>
        );
    };


export default StyledButton;


import React from 'react';
import { 
    StyleSheet, 
    TextInput,
    View,
  } from "react-native";

const Field = ({ placeholder, children, showPassword=false }) => {
    return ( 
        <View style={styles.action}> 
            { children }
            <TextInput 
              style={styles.TextInput}
              placeholder={placeholder}
              autoCapitalize="none"
              secureTextEntry={showPassword}
            />   
        </View>
     );
}

const styles = StyleSheet.create({
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2', 
        paddingBottom: 5,
    },
    TextInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
});
 
export default Field;
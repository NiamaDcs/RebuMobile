import React from 'react';
import { View, StyleSheet} from 'react-native';
import Mymap from '../../components/Mymap'

class HomeDriver extends React.Component {

    render() {
        return(
            <View style={styles.containerHome}>
                <Mymap/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerHome: {
        flex: 1,
    }, 
})

export default HomeDriver 


import React from 'react';
import * as Animatable from 'react-native-animatable';

const RenderFooter = ({ style, children }) => {
    return ( 
        <Animatable.View 
            animation="fadeInUpBig"
            iterationCount={1}
            style={style}
        >
            {children}
        </Animatable.View>
     );
}
 
export default RenderFooter;
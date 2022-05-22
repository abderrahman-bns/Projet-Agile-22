import React from 'react'
import { View, StyleSheet } from 'react-native'
import Colors from '../../constant/Colors'
const IconWrapper = ({children, style}) => {
    return (
        <View style={{...styles.container, ...style}}>
          {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.iconBackgroundColor,
        padding: 7,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    }
});
export default IconWrapper

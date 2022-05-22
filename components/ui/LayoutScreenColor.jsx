import React from 'react'
import { StyleSheet } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import Colors from '../../constant/Colors';
const LayoutScreenColor = ({children}) => {
    return (
        <LinearGradient
        start={{ x: -1, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[Colors.primaryGradientLayout, Colors.secondaryGradientLayout, Colors.thirdlyGradientLayout]}
        style={styles.gradient}
      >
        {children}
      </LinearGradient>
    )
}

const styles =StyleSheet.create({
    gradient: {
        flex: 1,
    }
})

export default LayoutScreenColor

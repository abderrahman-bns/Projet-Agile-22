import React from 'react'
import { HeaderButton } from "react-navigation-header-buttons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";
import Colors from '../../constant/Colors'
const CustomHeaderButton = (props) => {
    return (
       <HeaderButton 
        {...props}
        IconComponent={FontAwesomeIcon}
        iconSize={25}
        color={Colors.iconColor}
       />
    )
}

export default CustomHeaderButton

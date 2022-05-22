import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Card from '../ui/Card';
import Icon from "react-native-vector-icons/FontAwesome5";
import IconFeather from "react-native-vector-icons/Feather";
import IconWrapper from '../ui/IconWrapper';
import DecorationLine from '../ui/DecorationLine'
import Colors from '../../constant/Colors';
import Fonts from '../../constant/Font';
const CounselorCard = () => {
    
    return (
      <Card style={styles.card}>
          <View style={styles.container}>
          <View style={styles.titleWrapperRow1}>
            <Text style={styles.title}>Conseiller</Text>
            <DecorationLine />
          </View>
          <View style={styles.infoWrapperRow2}>
              <View style={styles.iconWrapper}>
                  <IconWrapper>
                     <Icon name="user" size={28} color={Colors.iconColor}/>
                  </IconWrapper>
              </View>
              <View style={styles.nameCounselorWrapper}>
                  <Text style={styles.nameCounselor}>MR. Test</Text>
                  <Text style={styles.text}>Agence Casablanca</Text>
              </View>
              <View style={styles.contactCounselorWrapper}>
                 <IconWrapper style={styles.iconWrapperStyle}>
                     <IconFeather name="mail" size={28} color={Colors.iconColor}/>
                  </IconWrapper>
                  <IconWrapper>
                     <IconFeather name="phone" size={28} color={Colors.iconColor}/>
                  </IconWrapper>
              </View>
          </View>
          </View>
      </Card>
    )
}

const styles =StyleSheet.create({
    card:{
        height: 110
    },
    container: {
        width: '100%',
        height: '100%',
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start"

    },
    titleWrapperRow1: {
        padding: 3
    },
    title: {
        fontSize: 18,
        fontFamily: Fonts.OpenSansBold
    },
    text:{
        fontFamily: Fonts.OpenSansMedium
    },
    nameCounselor:{
        fontSize: 17,
        fontFamily: Fonts.OpenSansBold
    },
    infoWrapperRow2:{
        flexDirection: "row",
        width: '100%',
        height: '60%',
        justifyContent: "space-around",
        alignItems: "center"
    },
    iconWrapper:{},
    nameCounselorWrapper: {
        flexDirection: "column",
        justifyContent: "space-between",
        
    },
    contactCounselorWrapper: {
        width: '40%',
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    iconWrapperStyle: {
        marginRight: 8
    }



})
export default CounselorCard

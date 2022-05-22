import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import AccueilScreen from "../../screens/Account/Accueill/AccueilScreen";
import { DefaultNavigationOption } from "../defaultNavigationOptions";
import AllAccountScreen from "../../screens/Account/AllAccount/AllAccountScreen";
import VirementScreen from "../../screens/Account/Virement/VirementScreen";
import ProfileScreen from "../../screens/Account/Profile/ProfileScreen";
import AccountDetailsScreen from "../../screens/Account/AllAccount/AccountDetailsScreen";
import ChequeOverviewScreen from "../../screens/Account/Cheque/ChequeOverviewScreen";
import OpposerChequierScreen from "../../screens/Account/Cheque/OpposerChequierScreen";
import CommandeChequeScreen from "../../screens/Account/Cheque/CommandeChequeScreen";
import { Entypo, Feather, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import RibAccountScreen from "../../screens/Account/AllAccount/RibAccountScreen";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Colors from "../../constant/Colors";
import Font from "../../constant/Font";
import React from "react";
import { Text } from "react-native";
import CardScreen from "../../screens/Account/card/cardScreen";
import CardDetail from "../../screens/Account/card/cardDetail";
import CardEdit from "../../screens/Account/card/CardEdit";
import CardInfo from "../../screens/Account/card/cardInfo";
import CommandeCardScreen from "../../screens/Account/card/CommandeCardScreen";
import BeneficiariesOverviewScreen from "../../screens/Account/Beneficiaries/BeneficiariesOverviewScreen";
import AddBeneficiaryScreen from "../../screens/Account/Beneficiaries/AddBeneficiaryScreen";
import AddVirementScreen from "../../screens/Account/Virement/AddVirementScreen";
import AuthentificationScreen from "../../screens/Auth/AuthentificationScreen";
import VirementMenuScreen from "../../screens/Account/Virement/VirementMenuScreen";
import ChoixAccountScreenCommandeCarte from "../../screens/Account/card/ChoixAccountScreen";
import ChoixAccountScreenCheque from "../../screens/Account/Cheque/ChoixAccountScreen";
import ChoixAccountScreenVirement1 from "../../screens/Account/Virement/FirstAccountChoice";
import ChoixAccountScreenVirement2 from "../../screens/Account/Virement/SecondAccountChoice";
import UpdateBeneficiaryScreen from "../../screens/Account/Beneficiaries/UpdateBeneficiaryScreen";
import PassVirementScreen from "../../screens/Account/Virement/PassVirementScreen";
const DetailsScreenConfigs = {
  AccountHistoric: {
    screen: AccountDetailsScreen,
    navigationOptions: {
      headerTitle: "Historique",
      tabBarIcon: (tabInfo) => {
        return (
          <FontAwesome5 name="history" size={24} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: <Text>Historique</Text>,
    },
  },
  AccountRib: {
    screen: RibAccountScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <FontAwesome name="bank" size={24} color={tabInfo.tintColor} />;
      },
      tabBarLabel: "RIB",
    },
  },
};
const DetailsTab = createMaterialBottomTabNavigator(DetailsScreenConfigs, {
  activeColor: Colors.iconColor,
  //change color
  barStyle: {
    backgroundColor: Colors.primaryGradient,
  },
});
const DetailsScreenCard = {
  Search: {
    screen: CardDetail,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Feather name="search" size={24} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: <Text>Detail</Text>,
    },
  },
  Modification: {
    screen: CardEdit,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Entypo name="edit" size={24} color={tabInfo.tintColor} />;
      },
      tabBarLabel: <Text>Modification</Text>,
    },
  },
  Information: {
    screen: CardInfo,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <FontAwesome name="info-circle" size={24} color={tabInfo.tintColor} />
        );
      },
      tabBarLabel: <Text>Information</Text>,
    },
  },
};
const DetailCardTab = createMaterialBottomTabNavigator(DetailsScreenCard, {
  activeColor: Colors.iconColor,
  //change color
  barStyle: {
    backgroundColor: Colors.primaryGradient,
  },
});
const AccueilStack = createStackNavigator(
  {
    AccueilScreen: AccueilScreen,
    AllAccount: AllAccountScreen,
    Virement: VirementScreen,
    ChoixAccountVirement: ChoixAccountScreenVirement1,
    ChoixAccountVirement2: ChoixAccountScreenVirement2,
    VirementMenu: VirementMenuScreen,
    PassVirementScreen: PassVirementScreen,
    AddVirement: AddVirementScreen,
    Profile: ProfileScreen,
    CardScreen: CardScreen,
    CardDetail: {
      screen: DetailCardTab,
      navigationOptions: {
        headerTitle: "Détails de carte",
      },
    },
    AccountDetail: {
      screen: DetailsTab,
      navigationOptions: {
        headerTitle: "Détails de compte",
      },
    },
    ChequeOverview: ChequeOverviewScreen,
    OpposerCheque: OpposerChequierScreen,
    CommanderCheque: CommandeChequeScreen,
    ChoixAccountCarte: ChoixAccountScreenCommandeCarte,
    ChoixAccountCheque: ChoixAccountScreenCheque,
    CommandeCard: CommandeCardScreen,
  },
  {
    defaultNavigationOptions: DefaultNavigationOption,
  }
);
const BeneficiariesStack = createStackNavigator(
  {
    BeneficiariesOverview: BeneficiariesOverviewScreen,
    AddBeneficiaryScreen: AddBeneficiaryScreen,
    UpdateBeneficiaryScreen: UpdateBeneficiaryScreen,
  },
  {
    defaultNavigationOptions: DefaultNavigationOption,
  }
);
const RootDrawerNavigator = createDrawerNavigator(
  {
    AccueilStack: {
      screen: AccueilStack,
      navigationOptions: {
        title: "Accueil ",
      },
    },
    BeneficiariesStack: {
      screen: BeneficiariesStack,
      navigationOptions: {
        title: "Bénéficiaires",
      },
    },
  },
  {
    drawerBackgroundColor: Colors.secondary,
    drawerType: "back",
    hideStatusBar: false,
    statusBarAnimation: "fade",
    // drawerWidth: () => "50%",
    contentOptions: {
      labelStyle: {
        fontSize: 20,
        fontFamily: Font.OpenSansBold,
        marginVertical: 20,
      },
      itemsContainerStyle: {
        width: "100%",
        marginTop: 80,
        marginLeft: 20,
      },
      activeTintColor: Colors.iconColor,
      activeBackgroundColor: Colors.iconBackgroundColor,
    },
  }
);

const AuthStack = createStackNavigator(
  {
    AuthentificationScreen: AuthentificationScreen,
  },
  {
    defaultNavigationOptions: DefaultNavigationOption,
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthStack,
    App: RootDrawerNavigator,
  },
  {
    initialRouteName: "App",
  }
);
export default createAppContainer(SwitchNavigator);

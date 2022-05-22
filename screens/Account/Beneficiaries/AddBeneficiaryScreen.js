import React from "react";

import Fonts from "../../../constant/Font";

import BeneficiaryFormInput from "../../../components/Beneficiary/BeneficiaryFormInput";
const AddBeneficiaryScreen = ({ navigation }) => {
  return <BeneficiaryFormInput navigation={navigation} saveOrUpdate={"save"} />;
};

AddBeneficiaryScreen.navigationOptions = () => {
  return {
    headerTitle: "Ajouter Bénéficiaire",
    headerTitleStyle: {
      letterSpacing: 0,
      fontFamily: Fonts.OpenSansBold,
      fontSize: 20,
    },
  };
};
export default AddBeneficiaryScreen;

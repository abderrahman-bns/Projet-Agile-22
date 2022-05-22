import React from "react";
import BeneficiaryFormInput from "../../../components/Beneficiary/BeneficiaryFormInput";
import Fonts from "../../../constant/Font";

const UpdateBeneficiaryScreen = ({ navigation }) => {
  return (
    <BeneficiaryFormInput navigation={navigation} saveOrUpdate={"update"} />
  );
};

UpdateBeneficiaryScreen.navigationOptions = () => {
  return {
    headerTitle: "Modifier Bénéficiaire",
    headerTitleStyle: {
      letterSpacing: 0,
      fontFamily: Fonts.OpenSansBold,
      fontSize: 20,
    },
  };
};

export default UpdateBeneficiaryScreen;

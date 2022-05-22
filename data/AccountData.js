import accountModel from "../models/accountModel";

export const ACCOUNTS = [
  new accountModel(
    "a1",
    "Compte cheque",
    "154846598745123654",
    130022,
    "MAD",
    [
      {
        id: 1,
        dateOperation: "06/01/2021",
        description: "Retrait par carte de paiement chez LC WALKIKI Massira CC",
        amount: 300.11,
        deviseType: "MAD",
      },
      {
        id: 2,
        dateOperation: "06/01/2021",
        description: "Retrait par carte de paiement chez Macdonald",
        amount: -600.11,
        deviseType: "MAD",
      },
      {
        id: 3,
        dateOperation: "06/01/2021",
        description: "Retrait par carte de paiement chez LC WALKIKI Massira CC",
        amount: 300.11,
        deviseType: "MAD",
      },
      {
        id: 4,
        dateOperation: "06/01/2021",
        description: "Retrait par carte de paiement chez LC WALKIKI Massira CC",
        amount: -300.11,
        deviseType: "MAD",
      },
      {
        id: 5,
        dateOperation: "06/01/2021",
        description: "Retrait par carte de paiement chez Pizza Hut",
        amount: -150.58,
        deviseType: "MAD",
      },
      {
        id: 6,
        dateOperation: "06/01/2021",
        description: "Retrait par carte de paiement chez LC WALKIKI Massira CC",
        amount: -300.11,
        deviseType: "MAD",
      },
      {
        id: 7,
        dateOperation: "06/01/2021",
        description: "Retrait par carte de paiement chez LC WALKIKI Massira CC",
        amount: 300.01,
        deviseType: "MAD",
      },
    ],
    "CNCAMAMR",
    "u1",
    ["c1"],
    "co1"
  ),
  new accountModel(
    "a2",
    "Compte Epargne",
    "326598547845668",
    1500,
    "MAD",
    [],
    "CNCTYPRE",
    "u1",
    ["c2"],
    "co1"
  ),
];

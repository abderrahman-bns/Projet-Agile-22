class Account {
  constructor(
    idAccount,
    typeAccount,
    RIB,
    amount,
    devis,
    operations,
    codeSwift,
    idUser,
    idCarte,
    idConseiller
  ) {
    this.idAccount = idAccount;
    this.typeAccount = typeAccount;
    this.RIB = RIB;
    this.amount = amount;
    this.devis = devis;
    this.operations = operations;
    this.codeSwift = codeSwift;
    this.idUser = idUser;
    this.idCarte = idCarte;
    this.idConseiller = idConseiller;
  }
}

export default Account;

class Virement {
  constructor(
    idVirement,
    idAccount,
    idCarte,
    idBenif,
    RIB,
    typeCompte,
    toName,
    toRib,
    dateVirement,
    amount,
    devis
  ) {
    this.idVirement = idVirement;
    this.idAccount = idAccount;
    this.idCarte = idCarte;
    this.idBenif = idBenif;
    this.RIB = RIB;
    this.typeCompte = typeCompte;
    this.toName = toName;
    this.toRib = toRib;
    this.dateVirement = dateVirement;
    this.amount = amount;
    this.devis = devis;
  }
}

export default Virement;

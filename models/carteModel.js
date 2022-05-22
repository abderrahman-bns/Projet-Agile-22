class Carte {
  constructor(
    idCarte,
    idAccount,
    typeCarte,
    imageCarte,
    dateMission,
    dateValidation,
    dateExpiration,
    status
  ) {
    this.idCarte = idCarte;
    this.idAccount = idAccount;
    this.typeCarte = typeCarte;
    this.imageCarte = imageCarte;
    this.dateMission = dateMission;
    this.dateValidation = dateValidation;
    this.dateExpiration = dateExpiration;
    this.status = status;
  }
}

export default Carte;

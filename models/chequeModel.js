class Cheque {
  constructor(idCheque, idAccount, nbChequier, typeChequier, nbPages, dateCmd) {
    this.idCheque = idCheque;
    this.idAccount = idAccount;
    this.nbChequier = nbChequier;
    this.typeChequier = typeChequier;
    this.nbPages = nbPages;
    this.dateCmd = dateCmd;
  }
}

export default Cheque;

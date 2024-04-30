export default class ListarPage {
  listaUsuarios = ".sc-bXCLTC.jykigL";
  inputEmailouNome = ".sc-gsFSXq";
  userDataDetalhes = ".sc-ikkxIA.iTvMOa";

  userDataEmail = '[data-test="userDataEmail"]';
  buttonDetalhes = "#userDataDetalhe";
  buttonRemover = ".sc-fUnMCh.dttKkA";
  novoUsuario = ".sc-bmzYkS";

  typeNomePesquisa(name) {
    cy.get(this.inputEmailouNome).type(name);
  }
  typeEmailPesquisa(email) {
    cy.get(this.inputEmailouNome).type(email);
  }
  postNovoUsuario() {
    cy.get(this.novoUsuario).click();
  }
}

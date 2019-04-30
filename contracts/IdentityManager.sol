pragma solidity >=0.4.0 <0.6.0;

contract IdentityManager {

  uint public clientcount;
  uint public banquecount;
  uint public regulateurcount;

  struct Client {
    uint idClient;
    string nom;
    string prenoms;
    string contact;
    string email;
    string genre;
    string adressepostale;
    string datenaissance;

  }

  struct Banque {
    uint idBanque;
    string raisonsociale;
    string numeroTVA;
    string adressepostale;
  }

  struct Regulateur {
    uint idRegulateur;
    string raisonsociale;
    string numeroTVA;
    string adressepostale;
  }

  constructor() public {

  }

  mapping (uint => Client) clients;
  mapping (uint => Banque) banques;
  mapping (uint => Regulateur) regulateurs;

  event createClientEvent(uint idClient, string nom, string prenoms, string contact, string email, string genre, string adressepostale, string datenaissance);
  event createBanqueEvent(uint idBanque, string raisonsociale, string numeroTVA, string adressepostale);
  event createRegulateurEvent(uint idRegulateur,string raisonsociale, string numeroTVA, string adressepostale);

  function createClient(string memory nom, string memory prenoms, string memory contact, string memory email, string memory genre, string memory adressepostale, string memory datenaissance)
  public returns(uint) {
      clientcount++;
      clients[clientcount] = Client(clientcount, nom, prenoms, contact, email, genre, adressepostale, datenaissance);
      emit createClientEvent(clientcount, nom, prenoms, contact, email, genre, adressepostale, datenaissance);
      return clientcount;
  }

  function getClientById(uint id) public view returns (uint idClient, string memory nom, string memory prenoms, string memory contact, string memory email, string memory genre, string memory adressepostale, string memory datenaissance){
    Client memory c = clients[id];
    return (c.idClient, c.nom, c.prenoms, c.contact, c.email, c.genre, c.adressepostale, c.datenaissance);
  }


  function createBanque(string memory raisonsociale, string memory numeroTVA, string memory adressepostale)
  public returns(uint) {
      banquecount++;
      banques[banquecount] = Banque(banquecount, raisonsociale, numeroTVA, adressepostale);
      emit createBanqueEvent(banquecount, raisonsociale, numeroTVA, adressepostale);
      return banquecount;
  }

  function getBanqueById(uint id) public view returns (uint idBanque, string memory raisonsociale, string memory numeroTVA, string memory adressepostale){
    Banque memory b = banques[id];
    return (b.idBanque, b.raisonsociale, b.numeroTVA, b.adressepostale);
  }

  function createRegulateur(string memory raisonsociale, string memory numeroTVA, string memory adressepostale)
  public returns(uint) {
      regulateurcount++;
      regulateurs[regulateurcount] = Regulateur(regulateurcount, raisonsociale, numeroTVA, adressepostale);
      emit createRegulateurEvent(regulateurcount, raisonsociale, numeroTVA, adressepostale);
      return regulateurcount;
  }

  function getRegulateurById(uint id) public view returns (uint idRegulateur,string memory raisonsociale, string memory numeroTVA, string memory adressepostale){
    Regulateur memory r = regulateurs[id];
    return (r.idRegulateur, r.raisonsociale, r.numeroTVA, r.adressepostale);
  }

}

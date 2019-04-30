App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',


  init: function() {

  return App.initWeb3();

},

  initWeb3: function() {
    App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: async function() {
        // var fs = require('fs');
        // var jsonFile = '../../build/contracts/AmaCoin.json';
        // var parsed = JSON.parse(fs.readFileSync(jsonFile));
        // var abi = parsed.abi;
        var kycIMABI = [
          {
            "constant": true,
            "inputs": [],
            "name": "banquecount",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x4222c58c"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "clientcount",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x76c73035"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "regulateurcount",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0xa7885586"
          },
          {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor",
            "signature": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "idClient",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "nom",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "prenoms",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "contact",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "email",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "genre",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "adressepostale",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "datenaissance",
                "type": "string"
              }
            ],
            "name": "createClientEvent",
            "type": "event",
            "signature": "0x3ad538198d5701a7f3eb0cd2cde885cb91c17e89ae421fb16913e3b13933b9af"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "idBanque",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "raisonsociale",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "numeroTVA",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "adressepostale",
                "type": "string"
              }
            ],
            "name": "createBanqueEvent",
            "type": "event",
            "signature": "0xd369eba6dcadc25516a70a3c8b0fbc19382cf4e6f6a3c94c8bae7410660878d3"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "idRegulateur",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "raisonsociale",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "numeroTVA",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "adressepostale",
                "type": "string"
              }
            ],
            "name": "createRegulateurEvent",
            "type": "event",
            "signature": "0xe8668d989d56be5c63add9110523c74308e3676e1894d2732b3b89de28d3fcfd"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "nom",
                "type": "string"
              },
              {
                "name": "prenoms",
                "type": "string"
              },
              {
                "name": "contact",
                "type": "string"
              },
              {
                "name": "email",
                "type": "string"
              },
              {
                "name": "genre",
                "type": "string"
              },
              {
                "name": "adressepostale",
                "type": "string"
              },
              {
                "name": "datenaissance",
                "type": "string"
              }
            ],
            "name": "createClient",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xba920db8"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "id",
                "type": "uint256"
              }
            ],
            "name": "getClientById",
            "outputs": [
              {
                "name": "idClient",
                "type": "uint256"
              },
              {
                "name": "nom",
                "type": "string"
              },
              {
                "name": "prenoms",
                "type": "string"
              },
              {
                "name": "contact",
                "type": "string"
              },
              {
                "name": "email",
                "type": "string"
              },
              {
                "name": "genre",
                "type": "string"
              },
              {
                "name": "adressepostale",
                "type": "string"
              },
              {
                "name": "datenaissance",
                "type": "string"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0xe815f43f"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "raisonsociale",
                "type": "string"
              },
              {
                "name": "numeroTVA",
                "type": "string"
              },
              {
                "name": "adressepostale",
                "type": "string"
              }
            ],
            "name": "createBanque",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xadd2a6fb"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "id",
                "type": "uint256"
              }
            ],
            "name": "getBanqueById",
            "outputs": [
              {
                "name": "idBanque",
                "type": "uint256"
              },
              {
                "name": "raisonsociale",
                "type": "string"
              },
              {
                "name": "numeroTVA",
                "type": "string"
              },
              {
                "name": "adressepostale",
                "type": "string"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0xca82c89e"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "raisonsociale",
                "type": "string"
              },
              {
                "name": "numeroTVA",
                "type": "string"
              },
              {
                "name": "adressepostale",
                "type": "string"
              }
            ],
            "name": "createRegulateur",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x820e837c"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "id",
                "type": "uint256"
              }
            ],
            "name": "getRegulateurById",
            "outputs": [
              {
                "name": "idRegulateur",
                "type": "uint256"
              },
              {
                "name": "raisonsociale",
                "type": "string"
              },
              {
                "name": "numeroTVA",
                "type": "string"
              },
              {
                "name": "adressepostale",
                "type": "string"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0xf3a8580e"
          }
        ];
        var kycIMAddress = '0xA42e4992Bd8dcB854ab7EbF16083d576d59b1DD6';
        App.contracts.IdentityManager = new web3.eth.Contract(kycIMABI,kycIMAddress);
        var c = await web3.eth.getAccounts();
        App.account = c != null ? c[0] : '0x0';


    },

    createClient : function() {

      var nom = $('#nomfield').val();
      var prenom = $('#prenomfield').val();
      var email = $('#emailfield').val();
      var tel = $('#telfield').val();
      var genre = $('#genreSelect').val();
      var adressepostale = $('#adressepostale').val();
      var datenaissance =  $('#datepicker').val().toString();
      alert(datenaissance);

      App.contracts.IdentityManager.methods.createClient(nom, prenom, email, tel, genre, adressepostale, datenaissance)
                                   .send({from: App.account, gas: 3000000}).then(function(result){
                                              console.log('Client n° '+ result);
                                            alert('Client enregistré');
                                            window.location.href='./index.html';
                                          }).catch(function(err) {
                                            console.error(err);
                                            alert("An error was occured. Please let's try again");
                                          });

    },

    createRegulateur : function() {
      var raisonsociale = $('#raisonsocialeRegfield').val();
      var numeroTVA = $('#numtvaRegfield').val();
      var adressepostale = $('#adressepostaleReg').val();

      App.contracts.IdentityManager.methods.createRegulateur(raisonsociale, numeroTVA, adressepostale)
                                   .send({from: App.account, gas: 3000000}).then(function(result){
                                              console.log('Regulateur n° '+ result);
                                            alert('Regulateur enregistré');
                                            window.location.href='./index.html';
                                          }).catch(function(err) {
                                            console.error(err);
                                            alert("An error was occured. Please let's try again");
                                          });

    },

    createBanque : function() {

      var raisonsociale = $('#raisonsocialeBanfield').val();
      var numeroTVA = $('#numtvaBanfield').val();
      var adressepostale = $('#adressepostaleBan').val();

      App.contracts.IdentityManager.methods.createBanque(raisonsociale, numeroTVA, adressepostale)
                                   .send({from: App.account, gas: 3000000}).then(function(result){
                                              console.log('Banque n° '+ result);
                                            alert('Banque enregistrée');
                                            window.location.href='./index.html';
                                          }).catch(function(err) {
                                            console.error(err);
                                            alert("An error was occured. Please let's try again");
                                          });

    },

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});

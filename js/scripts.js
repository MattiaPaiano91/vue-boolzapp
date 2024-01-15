// Estraggo la funzione createApp dall'oggetto Vue
const { createApp } = Vue;

// Creo l'istanza di Vue da montare in pagina
createApp({
  data() {
    return {
      counter: 0,
      newMessage: "",
      contactsSearch: "",
      messageCounter: null,
      contacts: [
        {
          name: "Michele",
          avatar: "img/avatar_1.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "./img/avatar_2.jpg",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "./img/avatar_3.jpg",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "./img/avatar_4.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "./img/avatar_5.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "./img/avatar_6.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: "received",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
            },
          ],
        },
        {
          name: "Federico",
          avatar: "./img/avatar_7.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
            },
          ],
        },
        {
          name: "Davide",
          avatar: "./img/avatar_8.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              status: "received",
            },
          ],
        },
      ],
    };
  },
  methods: {
    addNewmessage() {
      if (this.newMessage.trim().length > 0) {
        let obj = {};
        obj.message = this.newMessage.trim();
        obj.status = "sent";
        obj.date = "10/01/2020 15:51:00";
        this.contacts[this.counter].messages.push(obj);
        this.newMessage = "";
        let timeout;

        timeout = setTimeout(() => {
          let newMessageAutoObject = {
            message: "Ok!",
            status: "received",
            date: "10/01/2020 15:51:00",
          };

          this.contacts[this.counter].messages.push(newMessageAutoObject);
        }, 1000);
      }
    },
    filteredContacts() {
      if (this.contactsSearch == "") {
        for (let i = 0; i < this.contacts.length; i++) {
          this.contacts[i].visible = true;
        }
      } else {
        for (let i = 0; i < this.contacts.length; i++) {
          if (
            !this.contacts[i].name
              .toLowerCase()
              .includes(this.contactsSearch.toLowerCase())
          ) {
            this.contacts[i].visible = false;
          } else {
            this.contacts[i].visible = true;
          }
        }
      }
    },
    splitHourMessage(i) {
      let dateOfSingleMessage = this.contacts[this.counter].messages[i].date;
      let divide = dateOfSingleMessage.split(" ");
      let soloOra = divide[1].split(":").slice(0, 2).join(":");

      return soloOra;
    },
    splitHourAside(i, messageIndex) {
      let dateOfSingleMessage = this.contacts[i].messages[messageIndex].date;
      let divide = dateOfSingleMessage.split(" ");
      let soloOra = divide[1].split(":").slice(0, 2).join(":");

      return soloOra;
    },
    removeMessage(i) {
      this.contacts[this.counter].messages.splice(i, 1);
    },
    showMenù(i){
      if (this.messageCounter == null) {
        this.messageCounter = i;
      }
      else{
        this.messageCounter = null;
      }
        
    },
    switchUser(i){
      this.counter = i;
      this.messageCounter= null;
    }
  },
  // Monto l'istanza di Vue in pagina
}).mount("#app");


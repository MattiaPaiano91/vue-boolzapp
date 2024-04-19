# Vue BoolZapp

Questo progetto è un'applicazione web di messaggistica istantanea sviluppata con Vue.js, che replica parzialmente l'interfaccia e alcune funzionalità di WhatsApp.

## Descrizione

L'applicazione consiste in un'interfaccia divisa in due pannelli: uno per la lista dei contatti e uno per visualizzare la conversazione con il contatto selezionato. Le funzionalità implementate seguono le seguenti milestone:

<!-- ### Milestone 1

- Replica della grafica con la possibilità di avere messaggi scritti dall'utente (verdi) e dall'interlocutore (bianco), assegnando due classi CSS diverse.
- Visualizzazione dinamica della lista contatti tramite la direttiva `v-for`, visualizzando nome e immagine di ogni contatto.

### Milestone 2

- Visualizzazione dinamica dei messaggi tramite la direttiva `v-for`, visualizzando tutti i messaggi relativi al contatto attivo all'interno del pannello della conversazione.
- Cliccando su un contatto, viene mostrata la conversazione relativa.

### Milestone 3

- Aggiunta di un messaggio: l'utente può scrivere un testo nella parte bassa e, premendo "Invio", il testo viene aggiunto al thread sopra come messaggio verde.
- Risposta dall'interlocutore: ad ogni inserimento di un messaggio da parte dell'utente, l'interlocutore risponde con "ok" dopo 1 secondo.

### Milestone 4

- Ricerca utenti: scrivendo qualcosa nell'input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite.

### Milestone 5 (opzionale)

- Cancella messaggio: cliccando su un messaggio, appare un menu a tendina che permette di cancellare il messaggio selezionato.
- Visualizzazione dell'ora e dell'ultimo messaggio inviato/ricevuto nella lista dei contatti. -->

## Tecnologie utilizzate

- Vue.js
- (Opzionale) Libreria Luxon per la gestione delle date

## Installazione

1. Clonare il repository
2. Eseguire `npm install` per installare le dipendenze
3. Eseguire `npm run serve` per avviare l'applicazione in modalità di sviluppo
4. Aprire `http://localhost:8080` (o l'URL specificato dal server di sviluppo) nel browser

## Struttura del progetto

- `src/App.vue`: Componente principale dell'applicazione
- `src/components/ContactList.vue`: Componente per la lista dei contatti
- `src/components/MessageThread.vue`: Componente per la visualizzazione della conversazione
- `src/components/MessageInput.vue`: Componente per l'input dei nuovi messaggi
- `src/data/contacts.js`: File che contiene i dati dei contatti

## Note

- Le scrollbar verticali, sia nel pannello dei messaggi che nella lista dei contatti, possono essere trascurate.
- I pulsanti e le icone possono non essere funzionanti, ad eccezione dell'invio del messaggio.
- Per gestire le date, può essere utile la libreria Luxon.
- La struttura dell'array dei contatti potrebbe avere questa forma:

```javascript
[
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
}
  // Altri contatti...
]
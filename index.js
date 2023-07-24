const contacts = require("./contacts");

const argv = require("yargs").argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      console.table(contacts.listContacts());
      break;

    case "get":
      console.log(contacts.getContactsById(id));
      break;

    case "add":
      console.log(contacts.addContact(name, email, phone));
      break;

    case "remove":
      contacts.removeContact(id);
      console.log(`Contact with id ${id} has been removed.`);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

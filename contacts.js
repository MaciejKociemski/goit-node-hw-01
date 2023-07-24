const fs = require("fs");

const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

function listContacts() {
  const data = fs.readFileSync(contactsPath, "utf-8");
  return JSON.parse(data);
}

function getContactsById(contactId) {
  const contacts = listContacts();
  return contacts.find((contact) => contact.id === contactId);
}

function removeContact(contactId) {
  const contacts = listContacts();
  const updateContacts = contacts.filter((contact) => contact.id !== contactId);
  fs.writeFileSync(contactsPath, JSON.stringify(updatedContacts, null, 2));
}

function addContact(name, email, phone) {
  const contacts = listContacts();
  const newContact = {
    id: Date.now().toString(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  fs.writeFileSync(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

module.exports = {
  listContacts,
  getContactsById,
  removeContact,
  addContact,
};

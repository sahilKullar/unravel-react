let contactList = [
  {
    id: 1,
    name: 'Jhone Doe',
    number: '+1-202-555-0178',
    email: 'jdoe@gmail.com',
  },
  {
    id: 2,
    name: 'Jack Dorsey',
    number: '+1-325-555-0159',
    email: 'jack@twitter.com',
  },
  {
    id: 3,
    name: 'Elon Musk',
    number: '+1-202-555-0186',
    email: 'emusk@twitter.com',
  },
  {
    id: 4,
    name: 'Mark Zuckerberg',
    number: '+1-202-555-0845',
    email: 'markz@meta.com',
  },
  {
    id: 5,
    name: 'Tim Cook',
    number: '+1-101-335-8541',
    email: 'tcook@apple.com',
  },
];

export default contactList;

export function getAllContacts() {
  return contactList;
}

export function getContact(id) {
  console.log(contactList.filter((contact) => contact.id === id));
  return contactList.find((contact) => contact.id === id);
}

const users = [
  {
    id: 1,
    first_name: 'jack',
    last_name: 'dorsey',
    email: 'jack@twitter.com',
  },
  {
    id: 2,
    first_name: 'elon',
    last_name: 'musk',
    email: 'elon@tesla.com',
  },
  {
    id: 3,
    first_name: 'Jeff',
    last_name: 'bezos',
    email: 'Jeff@amazon.com',
  },
  {
    id: 4,
    first_name: 'mark',
    last_name: 'zuckerberg',
    email: 'mark@meta.com',
  },
  {
    id: 5,
    first_name: 'sundar',
    last_name: 'pichai',
    email: 'sundar@gmail.com',
  },
  {
    id: 6,
    first_name: 'bill',
    last_name: 'gates',
    email: 'bill@microsoft.com',
  },
];

export const getAllUsers = () => {
  return users;
};

'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
    {"name":"Billy","phone":"+380669685235"},
    {"name":"Van","phone":"+380678945265"},
    {"name":"Joe","phone":"+380984567188"},
    {"name":"Candice","phone":"+380973758462"}];

const findPhoneByName = (a) =>{
    for (const b of phonebook) {
        if (b.name === a) return b.phone;
      }
};

module.exports = { phonebook, findPhoneByName };

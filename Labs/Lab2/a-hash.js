'use strict';

/* 10. Implement phone book using hash (also known as `object`).
- Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone. */

const phonebook = {
    Bill:"+380669685235",
    Van:"+380678945265",
    Joe:"+380984567188",
    Candice:"+380973758462"
};

const findPhoneByName = (name) =>phonebook[name];

module.exports = { phonebook, findPhoneByName };

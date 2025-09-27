'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = ()=>{
    const first = {"name" : "Slim Shady"};
    let second = {"name" : "Billy Jean"};

    first.name = "Monica"; //Ці дві дії працюють, оскільки вони змінюють сам об'єкт, а не посилання
    second.name = "Monica";

    //first = {"singer" : "Eminem"};   --- Doesn't work      Ця не дія працює, оскільки вона змінює об'єкт на який посилається first 
    second = {"singer" : "Michel Jackson"}; //На протидію першій дії, ця не виклкикає помилок, оскільки second - змінна, а не константа і дозволяє подібні дії


};
module.exports = { fn };

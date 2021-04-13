index.js
import React from 'react';
import ReactDOM from 'react-dom';
/* import myfav , {yt,myName,myNames} from './App.jsx'; */
import * as vp from './App.jsx';

ReactDOM.render(
    <>
    <ol>
        <li>vishal fav youtuber is {vp.default}</li>
        <li>{vp.yt}</li>
        <li>{vp.myName()}</li>
        <li>{vp.myNames()}</li>
    </ol>
    </>
    ,document.getElementById('root')
);


/* 
1. if you have to import some file from other location then you can 
   use import xyz from './filename';
2. that default xyz you can be use in main file to import that varibale
   value that can be present in diffent location.
3. in main file you want to use that const variable then use {} .
   inside the {} enter the varible name.
4. if you have many file to import like commented file on above 
   then you can use export * as vp from './aap.js';
   but you have to add that vp in all varible that can be you use
   in current time eg- <li>{vp.yt}</li>
5. if you want to import function from another file then you can 
   be use function name with () , eg - <li>{vp.myName()}</li>
6. if you have default value import then you can be use
   eg <li>{vp.default}</li> note- not default name
*/

app.jsx
const youtuber ="Raigadkar Comedy";

const yt="1k_y_c";


function myName() {
    let nname="vishal";
    return nname ;
}

function myNames() {
    let sname="pawar";
    return  sname;
}

export default youtuber;
export {yt,myName ,myNames};

/* 1. if you want to use variable form one file to another thane you 
firts create that variable then you can use .
2.  when you create function , make sure that can be camelCase.
3.  in function you first create variable befor use.
4.  only one default export you can use in one file.
5.  if you have to import multiple function and multiple const varibale then you can 
    use eg. export {};
*/

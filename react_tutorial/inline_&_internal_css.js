/* inline and internal css ,
if we use inline styling then we can add style under the tag eg <h1 style=''>,
style attribute is use for inline styling and also if you hava to style taht tag 
with font famaly then , normaly we use .css file like .h1{ font-family: 'xyz'},
but in react we have to add {{ }} in tag that we want to style , 
and if that can be use key in camalCase eg : in .css file we use .h1{font-family: 'xyz'}
but in react <style={{fontFamily:'xyz'}}> that are diffence in external styling and inline styling .

1. <h1 style= {{ color:'red', height:'15px', fontFamily:'fantasy' , textAlign:'center'}}>hii my name is  {v1} </h1> 
in h1 we use inline css method 

2. in h2 we use internal css method , we create variable then we pass key and value in camalCase in {} 
by separeted , .

NOTE - camalCase must be imp,
       style attribute also imp,
       {} for internal css
       {{}} for inline css
*/

import React from 'react';
import ReactDOM from 'react-dom';

const v1='vishal';
const v2='1K_Y_C';

const css={
    color:'pink',
    fontFamily:'Pangolin',
    textAlign:'center'

}

ReactDOM.render(
    
<>

<h1 style= {{ color:'red', height:'15px', fontFamily:'fantasy' , textAlign:'center'}}>hii my name is  {v1} </h1> 
<h2 style={css}> MY NAME IS {v2}</h2>

</>

,document.getElementById('root')
);

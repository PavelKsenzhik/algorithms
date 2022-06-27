import binarySearch from './algorithms/binary-search.js'


function persistence(num, res = 0) {
    //code me

   let text = num.toString();
   if(text.length === 1) {
     console.log(res)
     return res
   };
   num = text[0] * text[1];
   res++;
    return persistence(num, res)
 }

  console.log(persistence(39));  


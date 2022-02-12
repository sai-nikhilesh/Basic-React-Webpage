import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import pic1 from './lappy1.png';
import pic2 from './lappy2.png';
// import Imp from './App.js';
const App = function () {
 return(
     <div>
         <body>
         <center>
         <h1><u>Dell Laptops</u></h1>
         <p>Dell provides technology solutions, services & support. Variety of Laptops That Fits Your Your Budget with Latest Technology. Mighty Performance and Miniature Design with Outstanding Reliability. Buy Now.</p>
         {/* <h2><u>List of available laptops to buy</u></h2> */}
         <br />
         <table>
             <tr>
                 <th>
                     S.NO.
                 </th>
                 <th>
                     MODEL
                 </th>
                 <th>
                     PRICE
                 </th>
                 <th>
                     LINKS
                 </th>
             </tr>
             <tr>
                 <td>
                     1.
                 </td>
                 <td>
                 Inspiron 15
                 </td>
                 <td>
                 34,499/-
                 </td>
                 <td>
                 <a href="https://www.dell.com/en-in/shop/laptops-2-in-1-pcs/inspiron-15-3000-laptop/spd/inspiron-15-3505-laptop/d560429win9s">Click here</a>
                 </td>

             </tr>
             <tr>
                 <td>
                     2.
                 </td>
                 <td>
                 New Vostro 3510
                 </td>
                 <td>
                 41,989/-
                 </td>
                 <td>
                 <a href="https://www.dell.com/en-in/shop/laptops-2-in-1-pcs/new-vostro-3510-laptop/spd/vostro-15-3510-laptop/icc-d585007win8">Click here</a>
                 </td>
             </tr>
             <tr>
                 <td>
                     3.
                 </td>
                 <td>
                 XPS 13
                 </td>
                 <td>
                 1,41,990/-
                 </td>
                 <td>
                 <a href="https://www.dell.com/en-in/shop/laptops-2-in-1-pcs/xps-13-laptop/spd/xps-13-9310-laptop/d560032win9s">Click here</a>
                 </td>
             </tr>
         </table>
                 </center>
                 <img className='img1' src={pic1} alt="laptop image" />
                 <img className='img2' src={pic2} alt="laptop image" />
         </body>
     </div>
 )
}
ReactDOM.render(<App/>,document.querySelector('#root'))

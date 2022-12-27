import React from "react";
import Input from "./input";



const data = [
{
   label: 'celibataire',
   nom:'statut',
   value:'celibataire'
},
{
   label: 'marie e',
   nom:'statut',
   value:'marie'
},
{
   label: 'separe e',
   nom:'statut',
   value:'separe '
},
{
   label: 'divorce e',
   nom:'statut',
   value:'divorce'
}
]
export default function InputRadio({titre, checkbox, onChange}){


    return(
        <div>
            <Input type={!checkbox ? 'radio' : 'checkbox'} titre =  {titre} onChange = {onChange} />
        </div>
    )
}

// export default function InputRadio({titre}){

//     return(
//         <div>
//             <Radio checkbox nom ='statut' titre ='statut' value = 'statut'/>
//             <ListRadio data = {data} titre = { titre}/>
//         </div>
//     )
// }

// export function Radio({titre,checkbox,name,onChange,value}){

//     return(
//        <div className='radio'>
//             <label htmlFor={titre}>{titre}</label>
//             <input type={checkbox ? 'checkbox' : 'radio'} name = {name} onChange = {onChange} value = {titre}></input>
//        </div> 
//     )
// }

// export function ListRadio({titre,checkbox,data,onChange}){

//     return(
// <div>
//                 {
//                     data.map((el, key) => <InputRadio key={key} name={el.nom} titre = {el.label} onChange = {onChange} value = {el.value} checkbox = {checkbox} />)
//                 }
//             </div>
//     )
// }
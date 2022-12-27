import React from "react";
import Input from "./input";


export default function InputText({titre, placeholder}){
     return(
        <div>
            
            <Input type = {'text'} titre ={titre} placeholder = {placeholder}/>
        </div>
     )
}
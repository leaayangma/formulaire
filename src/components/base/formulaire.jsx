import React from "react";
import InputText from "./inputText";
import InputNumber from "./inputNumber";
import InputTel from "./inputTel";
import InputPassword from "./inputPassword";
import InputRadio from "./inputRadio";


export default function Form(){

    return (
        <div>
            <InputText  titre ='username' placeholder ='sobriquet'/>
    
            <InputNumber  titre ='age' />
            
            <InputTel  titre ='tel'/>

            <InputPassword titre ='mot de pass'/>

            <InputRadio />
        </div>

    )
}
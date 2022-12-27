import React from "react";

export default function Input({titre,type,name,onChange,value,placeholder}){
    return(
        <div>
            <label htmlFor="">{titre}</label>
            <input type={type} name = {name} onChange = {onChange} value = {value} placeholder = {placeholder}/>
        </div>
    )
}
import React from 'react';
//props sao propriedade de java para injetar no html utilizando {} no h1
//(props) props.title ou {children} children
export default function Header({children}){
    return(
        <header>
            <h1>{children}</h1> 
            
        </header>
    );
}
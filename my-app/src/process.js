import React from "react";

const Proc = ({ninjas}) => {
    return(
        <div>
            {
           ninjas.map(ninja =>{
        return ninja.age > 25?(
                <ul className="cont" key={ninja.id}>
                <li>{ninja.name}</li>
                <li>{ninja.age}</li>
                <li>{ninja.belt}</li>
            </ul>
            ):null
    })
            }
        </div>
    );
    
}

export default Proc;
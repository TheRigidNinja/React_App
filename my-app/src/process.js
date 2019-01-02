import React from 'react';

const Proc = ({ ninjas, delNinja}) => {
    console.log(delNinja);
    
    const ninjalist = ninjas.map(ninja => {
        return(
            <ul key={ninja.id}>
                <li>{ninja.name}</li>
                <li>{ninja.age}</li>
                <li>{ninja.belt}</li>
                <button onClick={()=>{delNinja(ninja.id)}}>Delete Ninja</button>
            </ul>
        )
    })

    return(
       <div className="cont">
            {ninjalist}
       </div>
    );
}

// })




export default Proc
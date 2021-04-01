import React from 'react';

const Languagelist =(props) => {
        return(
        <div className="langstyle  ma4 bg-light-purple dib pa3 tc grow shadow-4">
             <img src={props.image} alt="Language"/>
             <h1 className="">{props.name}</h1>
        </div>
        )
}
export default Languagelist;
import React from 'react';

interface defaultProps {
    name:{
        title:  string
        first:  string
        last:   string
    },
    dob: {
        age : string
    }
};



const Person:React.FC<defaultProps> = ({name, dob}) => {
    return (
        <div>
            <p>Name: {name.title} {name.first} {name.last}</p>
            <p>Age: {dob.age}</p>
        </div>
    );
}

export default Person;

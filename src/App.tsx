import React from 'react';

export interface defaultProps {
    heading: string,
    name?: string
}

const App:React.FC<defaultProps> = ({ heading, name }) => {
    return (
        <div>
            Hello world from the App!
            <h1>{heading}: {name}</h1>
        </div>
    );
}

export default App;
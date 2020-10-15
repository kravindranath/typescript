import React from 'react';
import TabComponent from './components/TabComponent'
import Person from './components/Person';
import personData from './components/personData';

interface defaultProps {
    heading?: string
}

const App:React.FC<defaultProps> = ({ heading }) => {
    return (
        <div>
            <TabComponent name="Tab1" link="http://localhost:8080/" />
            <Person name={personData.name} dob={personData.dob} />
        </div>
    );
}

export default App;
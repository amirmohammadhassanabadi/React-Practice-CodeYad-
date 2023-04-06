import React from 'react';
import Hello from './Hello';
import Timer from './Timer';

class App extends React.Component {
    render() {
        return (
            <div className='wrapper'>
                <Hello />
                <div className='clock'>
                    <Timer />
                </div>
            </div>
        );
    }
}

export default App;
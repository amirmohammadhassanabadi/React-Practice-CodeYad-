import React from 'react';
import Pure from './Pure';

class Parent extends React.Component{
    constructor() {
        super();
        this.state = {
            fName: "Amirmohammad"
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                fName: "Amirmohammad"
            })
        }, 1000)
    }
    
    render() {
        console.log("parent");
        return (
             <div>
                <Pure fName={this.state.fName}/>
             </div>
        );
    }
}

export default Parent;
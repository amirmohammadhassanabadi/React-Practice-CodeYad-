import React from 'react';

class Pure extends React.PureComponent{
    render() {
        console.log("pure");
        return (
             <h4 className='text-danger'>
                {this.props.fName}
             </h4>
        );
    }
}

export default Pure;
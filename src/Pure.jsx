import React, { memo } from 'react';

// class Pure extends React.PureComponent{
//     render() {
//         console.log("pure");
//         return (
//              <h4 className='text-danger'>
//                 {this.props.fName}
//              </h4>
//         );
//     }
// }

const Pure = (props) => {
    console.log("pure");
    return (
        <h4 className='text-danger'>
            {props.fName}
        </h4>
    );
}

export default memo(Pure);
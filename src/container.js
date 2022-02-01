import React from 'react';
import Counter from './counter';

function Container() {
    return (
        <React.Fragment>
            <Counter name="One" />
            <Counter name="Two" />
            <Counter name="Three" />
        </React.Fragment>
    )
}

export default Container;

// export default class Container extends React.Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <Counter name="One" />
//                 <Counter name="Two" />
//                 <Counter name="Three" />
//             </React.Fragment>
//         );
//     }
// }
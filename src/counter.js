import React, { useState } from 'react';

function Counter(props) {
    const [count, setCount] = useState(0);

    return (
        <button className="btn btn-primary mx-2" onClick={() => setCount(count + 1)}>
            {props.name} {count}
        </button>
    )
}

export default Counter

// export default class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: props.name,
//             count: 0
//         };
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         this.setState(state => ({count: state.count +1}));
//     }

//     render() {
//         return (
//             <button
//                 className="btn btn-primary mx-2"
//                 onClick={this.handleClick}>
//                 {this.state.name} {this.state.count}
//             </button>
//         );
//     }
// }
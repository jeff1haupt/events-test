import React from 'react';
import Counter from './counter';

// function Container() {

// // We will come back to this next week to modify the state of button one at the same time
//     return (
//         <React.Fragment>
//             <Counter name="One" />
//             <Counter name="One" />
//             <Counter name="Two" />
//             <Counter name="Three" />
//         </React.Fragment>
//     )
// }

// export default Container;

// Events 1 Video

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

// Events 2 Video

// export default class Container extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             counts: {

//             }
//         }
//         this.countClicks = this.countClicks.bind(this);
//     }

//     countClicks(name) {
//         this.setState(state => {
//             state.counts[name]
//                 ? state.counts[name] += 1
//                 : state.counts[name] = 1;
//             return state;
//         })
//     }
//     render() {
//         return (
//             <React.Fragment>
//                 <Counter 
//                     name="one" 
//                     count={this.state.counts.one}
//                     onClick={this.countClicks}/>
//                 <Counter 
//                     name="one" 
//                     count={this.state.counts.one}
//                     onClick={this.countClicks}/>
//                 <Counter 
//                     name="two" 
//                     count={this.state.counts.two}
//                     onClick={this.countClicks}/>
//                 <Counter 
//                     name="three" 
//                     count={this.state.counts.three}
//                     onClick={this.countClicks}/>
//             </React.Fragment>
//         );
//     }
// }

// Events 3 Video 


// Events 2 Video

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counts: { },
            highestCount: 0,
            highestCountName: ''
        }
        this.countClicks = this.countClicks.bind(this);
    }

    countClicks(name) {
        this.setState(state => {
            state.counts[name]
                ? state.counts[name] += 1
                : state.counts[name] = 1;

            if (state.counts[name] > state.highestCount) {
                state.highestCount = state.counts[name];
                state.highestCountName = name;
            }
            return state;
        })
    }
    render() {
        return (
            <React.Fragment>
                <div>
                <h2>{this.state.highestCountName}</h2>
                <Counter 
                    name="one" 
                    count={this.state.counts.one}
                    onClick={this.countClicks}/>
                <Counter 
                    name="one" 
                    count={this.state.counts.one}
                    onClick={this.countClicks}/>
                <Counter 
                    name="two" 
                    count={this.state.counts.two}
                    onClick={this.countClicks}/>
                <Counter 
                    name="three" 
                    count={this.state.counts.three}
                    onClick={this.countClicks}/>
                </div>
            </React.Fragment>
        );
    }
}
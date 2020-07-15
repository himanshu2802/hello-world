import React , {Component} from 'react';

//If you are using functional Component. Props works below way
// const PropsDemoComponent = (props) => {
//     console.log(props);
//     return (
//         <div>
//             <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//             {props.children}
//         </div>
//     )
// }


//With Class components, Props works below way
class PropsDemoComponent extends Component {
    render() {
        return <h1>Hello {this.props.name} a.k.a {this.props.heroName} </h1>
    }
    
}

export default PropsDemoComponent;

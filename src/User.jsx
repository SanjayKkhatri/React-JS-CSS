import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

// function User(props) {
//     return(
//         <div>
//             <h1 className='head'> User {props.data.name}, {props.data.email}, {props.data.contact}</h1>
//         </div>
//     )
// }

// function User() {
//     return(
//         <>
//         <td>Hello Sanjay</td>
//         <td>Hello Talha</td>
//         </>
//     )
// }

// function User(props) {
//     const data = {name : "Sanjay Kumar", email: "khatrisanjay095@gmail.com"};
//     return (
//         <div>
//             <h2>User Name : {props.name}</h2>
//             <button onClick={()=>props.alert(data)} >Click Me</button>
//         </div>
//     )
// }

class User extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 1
        }

    };

    render() {

        return
        (
            <div>
                <h1>Total Count : {this.state.count} </h1>
                <button onClick={()=>this.setState({count : this.state.count + 1})}>Update Count</button>
            </div>
        )
    }

}

export {User};
import React from 'react'


function Employee(props){
    return (<>
        <h3>Hey {props.name} !!</h3>
        <p> {props.role}</p>
    </>)

}


export default Employee;
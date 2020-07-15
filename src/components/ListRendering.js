import React from 'react'
import Person from './Person'

function ListRendering() {

    //SImple Example
    // const names = ['Himanshu', 'Srikanth', 'Sumit']
    // const namesList = names.map(name => <h2>{name}</h2>)
    // return (
    //     <div>
    //         {
    //             namesList
    //         }
    //     </div>
    // )


    //Complex Example
    const persons = [
        {
            id: 1,
            name: 'Himanshu',
            skill: 'Java'
        },
        {
            id: 2,
            name: 'Sumit',
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Srikanth',
            skill: 'SAP PI'
        }
    ]

    const personList = persons.map(person => <Person key={person.id} persn={person}/> )

    return <div>{personList}</div>
}

export default ListRendering

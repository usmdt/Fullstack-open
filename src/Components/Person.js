import React from "react"
import phonebookService from "../Services/phonebook"

const Person = ({ persons, onChange }) => {
	const handlePerson = (id) => {
		phonebookService.deleteItem(id).then((response) => {
			console.log(response.data)
		})
		onChange(persons.filter((person) => person.id !== id))
	}

	return (
		<ul>
			{persons.map((person) => (
				<li key={person.name}>
					{person.name} {person.phone}
					<button onClick={() => handlePerson(person.id)}> delete</button>
				</li>
			))}
		</ul>
	)
}

export default Person

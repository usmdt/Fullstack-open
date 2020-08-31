import React from "react"
import phonebookService from "../Services/phonebook"
import "../index.css"

const Person = ({ persons, onChange, onError }) => {
	const handlePerson = (id, name) => {
		if (
			window.confirm(`Do you really want to delete ${name} from address book?`)
		) {
			phonebookService
				.deleteItem(id)
				.then((response) => {
					console.log(response.data)
				})
				.catch((error) => {
					onError(`${name} was already removed from the server`)
					setTimeout(() => {
						onError(null)
					}, 5000)
				})
			onChange(persons.filter((person) => person.id !== id))
		}
	}

	return (
		<ul>
			{persons.map((person) => (
				<li className="note" key={person.name}>
					{person.name} {person.phone}
					<button onClick={() => handlePerson(person.id, person.name)}>
						delete
					</button>
				</li>
			))}
		</ul>
	)
}

export default Person

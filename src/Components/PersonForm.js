import React, { useState } from "react"
import phonebookService from "../Services/phonebook"

const PersonForm = ({ persons, onChange }) => {
	const [newName, setNewName] = useState("")
	const [newPhone, setNewPhone] = useState("")
	const handleNewPerson = (event) => {
		setNewName(event.target.value)
	}

	const handleNewPhone = (event) => {
		setNewPhone(event.target.value)
	}

	const addNewPerson = (event) => {
		event.preventDefault()
		const tempPerson = {
			id: persons.length + 1,
			name: newName,
			phone: newPhone,
		}
		if (persons.some((person) => person.name === newName)) {
			window.alert(`${newName} already exists`)
		} else if (newName === "" || newPhone === "") {
			window.alert("name and phone number must be filled")
			setNewName("")
			setNewPhone("")
		} else {
			phonebookService.create(tempPerson).then((response) => {
				console.log(response)
			})
			onChange(persons.concat(tempPerson))
			setNewName("")
			setNewPhone("")
		}
	}

	return (
		<form onSubmit={addNewPerson}>
			<div>
				name:
				<input value={newName} onChange={handleNewPerson} />
			</div>
			<div>
				phone:
				<input value={newPhone} onChange={handleNewPhone} />
			</div>
			<div>
				<button type="submit">add</button>
			</div>
		</form>
	)
}

export default PersonForm

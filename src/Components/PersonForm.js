import React, { useState } from "react"
import phonebookService from "../Services/phonebook"
import phonebook from "../Services/phonebook"

const PersonForm = ({ persons, onChange, onError }) => {
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
			if (
				window.confirm(
					`${tempPerson.name} already exists in the phonebook, do you want to replace it?`
				)
			) {
				phonebookService
					.update(
						tempPerson,
						persons.find((person) => person.name === tempPerson.name).id
					)
					.then((response) => {
						console.log(response)
					})
				const index = persons.findIndex(
					(person) => person.name === tempPerson.name
				)
				const newPersons = [...persons]
				newPersons[index].phone = tempPerson.phone
				onChange(newPersons)
				onError(`${tempPerson.name} phone number updated`)
			}
		} else if (newName === "" || newPhone === "") {
			window.alert("name and phone number must be filled")
		} else {
			phonebookService
				.create(tempPerson)
				.then((response) => {
					console.log(response)
				})
				.catch((error) => {
					onError(`${tempPerson.name} was already added to the server`)
					setTimeout(() => {
						onError(null)
					}, 5000)
				})
			onChange(persons.concat(tempPerson))
		}
		setNewName("")
		setNewPhone("")
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

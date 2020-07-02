import React, { useState } from "react"

const PersonForm = (props) => {
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
			name: newName,
			id: props.persons.length + 1,
			phone: newPhone,
		}
		if (props.persons.some((person) => person.name === newName)) {
			window.alert(`${newName} already exists`)
		} else if (newName === "" || newPhone === "") {
			window.alert("name and phone number must be filled")
			setNewName("")
			setNewPhone("")
		} else {
			props.onChange(props.persons.concat(tempPerson))
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

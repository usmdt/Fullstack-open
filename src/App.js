import React, { useState, useEffect } from "react"
import Person from "./Components/Person"
import Filter from "./Components/Filter"
import PersonForm from "./Components/PersonForm"
import phonebookService from "./Services/phonebook"
import Notification from "./Components/Notification"

const App = () => {
	const [persons, setPersons] = useState([])
	const [errorMessage, setErrorMesage] = useState("")

	useEffect(() => {
		phonebookService.getAll().then((response) => {
			setPersons(response.data)
		})
	}, [])
	const handlePersons = (value) => {
		setPersons(value)
	}
	const handleError = (value) => {
		setErrorMesage(value)
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<Notification message={errorMessage} />
			<Filter persons={persons} />
			<h2>Add new one</h2>
			<PersonForm
				persons={persons}
				onChange={handlePersons}
				onError={handleError}
			/>
			<h2>Numbers</h2>
			<Person
				persons={persons}
				onChange={handlePersons}
				onError={handleError}
			/>
		</div>
	)
}

export default App

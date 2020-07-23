import React from "react"

const Person = (props) => {
	return (
		<ul>
			{props.persons.map((person) => (
				<li key={person.name}>
					{person.name} {person.phone}
				</li>
			))}
		</ul>
	)
}

export default Person

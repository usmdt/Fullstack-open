import React, { useState } from "react"

const Filter = ({ persons }) => {
	const [filter, setFilter] = useState("")
	const [filteredNames, setFilteredNames] = useState([])

	const handleFilter = (event) => {
		console.log(filteredNames)
		setFilter(event.target.value)
		setFilteredNames(
			persons.filter((person) =>
				person.name.toLowerCase().startsWith(filter.toLowerCase())
			)
		)
	}
	return (
		<div>
			<input value={filter} onChange={handleFilter} />
			<ul>
				{filteredNames.map((filtered) => (
					<li key={filtered.name}>{filtered.name}</li>
				))}
			</ul>
		</div>
	)
}

export default Filter

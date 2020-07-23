import React, { useState } from "react"

const Filter = ({ persons }) => {
	const [filter, setFilter] = useState("")
	const [filteredNames, setFilteredNames] = useState([])
	const [filterLength, setFilterLength] = useState(true)

	const handleFilter = (event) => {
		setFilter(event.target.value)

		setFilteredNames(
			persons.filter((person) =>
				person.name.toLowerCase().startsWith(filter.toLowerCase())
			)
		)
		console.log(filteredNames.length)
		if (filteredNames.length >= 10) {
			setFilterLength(false)
			console.log(filterLength)
		} else {
			setFilterLength(true)
		}
	}
	return (
		<div>
			<input value={filter} onChange={handleFilter} />
			{filterLength ? (
				<ul>
					{filteredNames.map((filtered) => (
						<li key={filtered.name}>{filtered.name}</li>
					))}
				</ul>
			) : null}
		</div>
	)
}

export default Filter

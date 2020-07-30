import React, { useState } from "react"

const Filter = ({ persons }) => {
	const [filter, setFilter] = useState("")
	const [filteredNames, setFilteredNames] = useState([])

	const handleFilter = (event) => {
		if (event.target.value === "") {
			setFilteredNames([])
			setFilter("")
			console.log(filter)
		} else {
			setFilter(event.target.value)
			setFilteredNames(
				persons.filter((person) =>
					person.name.toLowerCase().startsWith(filter.toLowerCase())
				)
			)
		}
	}
	return (
		<div>
			<input value={filter} onChange={handleFilter} />
			{filteredNames.length > 0 ? (
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

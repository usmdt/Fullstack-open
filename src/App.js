import React, { useState, useEffect } from "react"
import axios from "axios"

const App = () => {
	const [countries, setCountries] = useState([])
	const [filteredCountries, setFilteredCountries] = useState([])

	const handleSearch = (event) => {
		console.log(event.target.value)
		setFilteredCountries(
			countries.filter((country) =>
				country.name.toLowerCase().startsWith(event.target.value.toLowerCase())
			)
		)
	}

	const hook = () => {
		axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
			setCountries(response.data)
		})
	}

	useEffect(hook, [])

	return (
		<div>
			find countries
			<input onChange={handleSearch}></input>
			<ul>
				{filteredCountries.map((country) => (
					<li key={country.name}>{country.name}</li>
				))}
			</ul>
		</div>
	)
}

export default App

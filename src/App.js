import React, { useState, useEffect } from "react"
import axios from "axios"
import Country from "./Components/Country"

const App = () => {
	const [countries, setCountries] = useState([])
	const [filteredCountries, setFilteredCountries] = useState([])

	const handleSearch = (event) => {
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
			{filteredCountries.length === 1 ? (
				<Country country={filteredCountries}></Country>
			) : (
				<div>
					{filteredCountries.length < 10 ? (
						<ul>
							{filteredCountries.map((country) => (
								<li key={country.name}>{country.name}</li>
							))}
						</ul>
					) : (
						<div> too many countries to display </div>
					)}
				</div>
			)}
		</div>
	)
}

export default App

import React from "react"

const Country = ({ country }) => {
	console.log(country)
	return (
		<div>
			{country.map((country) => (
				<div key={country.name}>
					<h1>{country.name}</h1>
					<p>Capital {country.capital}</p>
					<p>Population {country.population}</p>
					<h3>Languages</h3>
					<ul>
						{country.languages.map((language) => (
							<li key={language.name}>{language.name}</li>
						))}
					</ul>
					<img src={country.flag} height="100" width="100"></img>
				</div>
			))}
		</div>
	)
}

export default Country

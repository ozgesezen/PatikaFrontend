import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadData = async () => {
        const resp = await axios.get("https://restcountries.com/v3.1/all");
        console.log(resp);
    }

    useEffect(() => {
        loadData();
    }, [])


    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Bayrak</th>
                    <th>Ulke</th>
                    <th>Nufus</th>
                    <th>Baskent</th>
                </tr>
            </thead>
            <tbody>
                {countries.map((country, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                            <img src={country.flags.png} alt="" />
                        </td>
                        <td>{country.name.common}</td>
                        <td>{country.population}</td>
                        <td>{country.capital}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default Countries
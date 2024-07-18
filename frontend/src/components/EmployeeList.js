import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/employeeService';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        EmployeeService.getAllEmployees()
            .then(response => {
                console.log('Data fetched successfully:', response.data);
                setEmployees(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('There was an error!', error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="list-container">
            <h1>Employee List</h1>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>{employee.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default EmployeeList;

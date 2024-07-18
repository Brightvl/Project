import React, { useState } from 'react';
import EmployeeService from '../services/employeeService';

const EmployeeForm = ({ onEmployeeAdded }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const employee = { name };
        EmployeeService.createEmployee(employee).then(response => {
            console.log('Employee created', response.data);
            onEmployeeAdded(response.data);
            setName('');
        });
    };

    return (
        <div className="form-container">
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Employee</button>
            </form>
        </div>
    );
};

export default EmployeeForm;

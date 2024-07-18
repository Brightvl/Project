import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
// Импорт других компонентов по необходимости

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/employees" element={<EmployeeList />} />
                    <Route path="/add-employee" element={<EmployeeForm />} />
                    {/* Добавьте маршруты для других компонентов */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

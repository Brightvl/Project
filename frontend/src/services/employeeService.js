import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';

class EmployeeService {
    getAllEmployees() {
        return axios.get(`${API_URL}/employees`);
    }

    createEmployee(employee) {
        return axios.post(`${API_URL}/employees`, employee);
    }

    // другие методы
}

export default new EmployeeService();

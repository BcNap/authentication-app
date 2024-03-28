import React, { useState } from 'react';
import './Form.css';

function Form() { // Component names should start with a capital letter
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!/^(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            newErrors.password = 'Password must be at least 8 characters long and include at least one number';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert('Form is valid. Proceed with backend authentication.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <div>
                <label>Email:</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className={errors.email ? 'input-error' : ''}
                />
                {errors.email && <div className="error-message">{errors.email}</div>}
            </div>
            <div>
                <label>Password:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className={errors.password ? 'input-error' : ''}
                />
                {errors.password && <div className="error-message">{errors.password}</div>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form; // Updated export statement to match the component name

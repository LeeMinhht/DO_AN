import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { clear } from '@testing-library/user-event/dist/clear';
import axiosClient from '~/scrips/healper/axiosClient';

const Register = () => {
    const [formData, setFormData] = useState({
        cusUsername: '',
        password: '',
        confirmPassword: '',
        email: '',
        phone: '',
        fullname: '',
        image: '',
        gender: false,
        identityCard: '',
        license: ''
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setErrorMessage('Mật khẩu xác nhận không trùng khớp');
            return;
        }
        const roleData = {
            roleId: "1",
            roleName: "USER"
        };
    
        const requestData = {
            ...formData,
            role: roleData
           
        };
    
        try {
            const response = await axios.post(`http://localhost:8080/api/v1/public/register`, requestData);
    
            setSuccessMessage('Đăng kí thành công');
            setErrorMessage('');
    
            setFormData({
                cusUsername: '',
                password: '',
                confirmPassword: '',
                email: '',
                phone: '',
                fullname: '',
                image: '',
                gender: false,
                identityCard: '',
                license: '',
                role: roleData.roleId
            });
        } catch (error) {
            console.log(error);
            setErrorMessage('Đăng kí thất bại');
            setSuccessMessage('');
        }
    };
    



    return (
        <div>
            <h2>Đăng kí người dùng</h2>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="cusUsername" value={formData.cusUsername} onChange={handleChange} /></div>

                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                    <label>Confirm Password:</label>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                </div>
                <div>
                    <label>email:</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label>phone:</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div>
                    <label>fullname:</label>
                    <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} />
                </div>
                <div>
                    <label>Gender:</label>
                    <label>
                        <input type="radio" name="gender" value="true" onChange={handleChange} /> Male
                    </label>
                    <label>
                        <input type="radio" name="gender" value="false" onChange={handleChange} /> Female
                    </label>
                </div>
                <div>
                    <label>Image:</label>
                    <input type="file" name="image" accept="image/*" onChange={handleChange} />
                </div>
                <div>
                    <label>identityCard:</label>
                    <input type="text" name="identityCard" value={formData.identityCard} onChange={handleChange} />

                    <label>license:</label>
                    <input type="text" name="license" value={formData.license} onChange={handleChange} />
                </div>
                <button type="submit">Đăng kí</button>
            </form >
        </div >
    );
};

export default Register;

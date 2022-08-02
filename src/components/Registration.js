import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';

import './StyleComponent.css';

export default function Registration() {
    const [student, setStudent] = useState({gender:"Male"});
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`${window.location.origin}/api/Registration`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...student })
        })
        response.statusText === "OK" && navigate("/UserData");

    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setStudent(prevItem => ({ ...prevItem, [name]: value }));
    }

    useEffect(() => {
        const socket = io();

        socket.on("scan-user", (scanID) => {
            setStudent(previousItem => ({ ...previousItem, id: scanID }));
        })
    }, [])


    return (
        <div className="container margin-top-30 Registration-style-1">
            <div className="custom-white form-border-style" >
                <div className="row">
                    <h3 align="center">Registration Form</h3>
                </div>

                <form className="form-horizontal" onSubmit={handleSubmit}>
                    <div className="control-group">
                        <label className="control-label">ID</label>
                        <div className="controls">
                            <input type="text" name="id" value={student.id || "Please Scan your Card"} required />
                        </div>
                    </div>

                    <div className="control-group">
                        <label className="control-label">Name</label>
                        <div className="controls">
                            <input name="name" type="text" value={student.name || ""} onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="control-group">
                        <label className="control-label">Gender</label>
                        <div className="controls">
                            <select name="gender" value={ student.gender } onChange={handleChange}>
                                <option value="Male" selected>Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>

                    <div className="control-group">
                        <label className="control-label">Email Address</label>
                        <div className="controls">
                            <input name="email" type="text" value={student.email || ""} onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="control-group">
                        <label className="control-label">Mobile Number</label>
                        <div className="controls">
                            <input name="mobile" type="text" value={student.mobile || ""} onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn btn-warning">Save</button>
                    </div>
                </form>

            </div>
        </div>)
}

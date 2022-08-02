import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './StyleComponent.css';


export default function UserDataUpdate() {
    const location = useLocation();
    const navigate = useNavigate();
    const [studentID, setStudentID] = useState("");
    const [student, setStudent] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setStudent((values) => ({ ...values, [name]: value }));
        console.log(student.gender);

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        sendData({ ...student, id: studentID });
       
    }

    const sendData = async (updateStudent) => {
        const response = await fetch("/api/UserData", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateStudent)
        })
        console.log(response);
        response.statusText === "OK" && navigate("/UserData");
    }

    useEffect(() => {
        const { id, ...restStudent } = location.state;
        setStudent(restStudent);
        setStudentID(id);
    }, [location.state])


    return (
        <div className="margin-top-30">
            <div className="container form-border-style bgcolor-f2f2f2" >
                <div className="custom-white">
                    <div className="row">
                        <h3 align="center">Edit User Data</h3>
                    </div>

                    <form className="form-horizontal" onSubmit={handleSubmit}>
                        <div className="control-group">
                            <label className="control-label">ID</label>
                            <div className="controls">
                                <input type="text" value={studentID || ""} readOnly />
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
                                <select name="gender" value={student.gender || "" } onChange={handleChange} >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>

                        <div className="control-group">
                            <label className="control-label">Email Address</label>
                            <div className="controls">
                                <input name="email" type="text" onChange={handleChange} value={student.email || ""} required />
                            </div>
                        </div>

                        <div className="control-group">
                            <label className="control-label">Mobile Number</label>
                            <div className="controls">
                                <input name="mobile" type="text" onChange={handleChange} value={student.mobile || ""} required />
                            </div>
                        </div>

                        <div className="form-actions">
                            <button type="submit" className="btn btn-warning">Update</button>
                            <Link to="/UserData" className="btn">Back</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
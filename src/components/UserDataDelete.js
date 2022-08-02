import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import './StyleComponent.css';
export default function UserDataDelete() {
    const location = useLocation();
    const navigate = useNavigate();
    const [student, setStudent] = useState({});


    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`${window.location.origin}/api/UserData`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id:student.id})
        })

        response.statusText === "OK" && navigate("/UserData");
    }

    useEffect(() => {
        setStudent(location.state);
    }, [location.state])

    return (
        <div className="container margin-top-30">

            <div className="span10 offset1">
                <div className="row">
                    <h3 align="center">Delete User</h3>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr className="bgcolor-eea63a color-FFF" >
                                <th>Name</th>
                                <th>ID</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>Mobile Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={student.id || ""} className="bgcolor-eee">
                                <td>{student.name|| ""}</td>
                                <td>{student.id || ""}</td>
                                <td>{student.gender || ""}</td>
                                <td>{student.email || ""}</td>
                                <td>{student.mobile || ""}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <form className="form-border-style" onSubmit={handleSubmit}>

                    <div className="bgcolor-eee padding-12px-15px">
                        <p className="alert alert-error">Are you sure to delete ?</p>
                        <div className="space-around ">
                            <button type="submit" className="btn btn-danger">Yes</button>
                            <Link to="/UserData" className="btn">No</Link>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}
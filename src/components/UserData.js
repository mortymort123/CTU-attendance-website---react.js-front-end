import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './StyleComponent.css';

export default function UserData() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        const response = await fetch(`${window.location.origin}/api/UserData`)
        const data = await response.json();
        setUsers(data);
    }

    return (
        <div className="container margin-top-30">
            <div className="row">
                <h3>User Data Table</h3>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr className="bgcolor-eea63a color-FFF" >
                            <th>Name</th>
                            <th>ID</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Mobile Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user =>
                            <tr key={user.id} className="bgcolor-eee">
                                <td>{user.name}</td>
                                <td>{user.id}</td>
                                <td>{user.gender}</td>
                                <td>{user.email}</td>
                                <td>{user.mobile}</td>
                                <td className="space-around">
                                    <Link to="/UserDataUpdate" state={{ ...user }} className="btn btn-warning">Edit</Link>
                                    <Link to="/UserDataDelete" state={{ ...user }} className="btn btn-inverse">Delete</Link>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>

    )

}
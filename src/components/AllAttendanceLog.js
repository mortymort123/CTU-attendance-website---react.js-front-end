import { useEffect, useState } from 'react'

import './StyleComponent.css';




export default function AllAttendanceLog() {

    const [allAttendance, setAllAttendance] = useState([]);


    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        const response = await fetch(`${window.location.origin}/api/AllAttendanceLog`)
        const data = await response.json();
        setAllAttendance(data);
    }

    return (
        <div className="container margin-top-30">
            <div className="row">
                <h3>Attendance Log</h3>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr className="bgcolor-eea63a color-FFF">
                            <th>Name</th>
                            <th>ID</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Mobile Number</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allAttendance.map(user =>
                            <tr key={user.date} className="bgcolor-eee">
                                <td>{user.name}</td>
                                <td>{user.id}</td>
                                <td>{user.gender}</td>
                                <td>{user.email}</td>
                                <td>{user.mobile}</td>
                                <td>{
                                    user.date.replace("T", " ").slice(0, 19)
                                }</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
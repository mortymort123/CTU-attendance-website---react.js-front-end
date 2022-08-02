import { useEffect, useState } from 'react';
import { io } from 'socket.io-client'

import './StyleComponent.css';

export default function ReadTagID() {
    const [users, setUsers] = useState([]);
    const [scanStudent, setScanStudent] = useState({});
    useEffect(() => {
        const socket = io();

        socket.on("scan-user", async (scanID) => {
            const response = await fetch(`${window.location.origin}/api/ReadTagID`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: scanID })
            })

            const data = await response.json();
            if (data.id !== null) {
                setUsers(previousItem => ([...previousItem, data]));
                setScanStudent(data);

            } else {
                alert("ID is not registered!")

            }
        })
    }, [])


    return (
        <div>
            <h3 className="margin-top-30" align="center" id="blink">Please Scan Tag to Display ID or User Data</h3>
            <div className='ReadTagID-style-1 table-width'>
                <div className="color-FFF bgcolor-eea63a">
                    <h4>User Data</h4>
                </div>
                <div className="flex-row bgcolor-f9f9f9" >
                    <div className="padding-12px-15px width-200px">ID</div>
                    <div>:</div>
                    <div className="padding-12px-15px  text-align-center width-auto">{scanStudent.id}</div>
                </div>
                <div className="flex-row bgcolor-f2f2f2">
                    <div className="padding-12px-15px width-200px">Name</div>
                    <div>:</div>
                    <div className="padding-12px-15px  text-align-center width-auto">{scanStudent.name}</div>
                </div>
                <div className="flex-row bgcolor-f9f9f9">
                    <div className="padding-12px-15px width-200px">Gender</div>
                    <div>:</div>
                    <div className="padding-12px-15px  text-align-center width-auto">{scanStudent.gender}</div>
                </div>
                <div className="flex-row bgcolor-f2f2f2">
                    <div className="padding-12px-15px width-200px">Email</div>
                    <div>:</div>
                    <div className="padding-12px-15px  text-align-center width-auto">{scanStudent.email}</div>
                </div>
                <div className="flex-row bgcolor-f9f9f9">
                    <div className="padding-12px-15px width-200px">Mobile</div>
                    <div>:</div>
                    <div className="padding-12px-15px  text-align-center width-auto">{scanStudent.mobile}</div>
                </div>
            </div>

            <div className="container">
                <div id="getUID"></div>
                <h3 className="attendance margin-top-30">Attendance Log</h3>
                <table className="table table-striped table-bordered custom-white">
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
                        {users.length > 0 && users.map(user =>

                            <tr key={user.date} className="bgcolor-eee">
                                <td>{user.name}</td>
                                <td>{user.id}</td>
                                <td>{user.gender}</td>
                                <td>{user.email}</td>
                                <td>{user.mobile}</td>
                                <td>{user.date.replace("T", " ").slice(0, 19)}

                                </td>
                            </tr>

                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
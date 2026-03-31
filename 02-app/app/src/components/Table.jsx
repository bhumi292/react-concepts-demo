import React from 'react'

const Table = () => {
    const users = [
        { id:"1", feature:"Data stored in", Controlled:"React State", Uncontrolled:"DOM"},
        { id:"2", feature:"React Hook", Controlled:"useState", Uncontrolled:"useRef"},
        { id:"3", feature:"Control", Controlled:"React controls input", Uncontrolled:"DOM controls input"},
        { id:"4", feature:"Value attribute", Controlled:"Uses value", Uncontrolled:"Uses ref"},
        { id:"5", feature:"Validation", Controlled:"Easy", Uncontrolled:"Harder"}
    ];

    return(
        <div>
            <h2>components</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>feature</th>
                        <th>Controlled</th>
                        <th>Uncontrolled</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.feature}</td>
                            <td>{user.Controlled}</td>
                            <td>{user.Uncontrolled}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table
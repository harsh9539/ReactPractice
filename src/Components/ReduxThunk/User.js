import React from 'react'

const User = ({ users }) => {
    console.log(users);
    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                {
                    users.map(({ name, username }) => (
                        <tbody>
                            <tr>
                                <td>{name}</td>
                                <td>{username}</td>
                            </tr>
                        </tbody>
                    ))
                }
            </table>
        </div>
    )
}

export default User

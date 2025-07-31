import React from 'react';

const UserData = ({user}) => {
    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
        </tr>
    );
}

const UserList = () => {
    const users = [
        {email: 'user1@gmail.com', name: 'user1'},
        {email: 'user2@gmail.com', name: 'user2'},
        {email: 'user3@gmail.com', name: 'user3'},
        {email: 'user4@gmail.com', name: 'user4'},
        {email: 'user5@gmail.com', name: 'user5'},
    ];

    return (
        <table>
            <thead>
            <tr>
                <th>
                    이름
                </th>
                <th>
                    이메일
                </th>
            </tr>
            </thead>
            <tbody>
            {users.map(user => <UserData user={user} key={user.email} />)}
            </tbody>
        </table>
    )
}
export default UserList;
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const User = () => {

    const loadedUser = useLoaderData();

    const [users, setUsers] = useState(loadedUser);

    const handledDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-jozswvh6c-triistiak-gmailcom.vercel.app/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            // remaining users
                            const remainingUsers = users.filter(user => user._id);
                            setUsers(remainingUsers);
                        }
                    })
                
            }
        });
    }

    return (
        <div>
            <h2 className="font-bold text-2xl">Users: {loadedUser.length}</h2>
            
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created at</th>
                            <th>Last Logged At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        
                        {
                            users.map((user, k) => 
                                <tr key={user._id}>
                                    <th>{k+1}</th>
                                    <td>{user.email}</td>
                                    <td>{user.createdAt}</td>
                                    <td>{ user.lastLoggedAt}</td>
                                    <td>
                                        <button onClick={() => handledDelete(user._id)} className="btn font-bold">X</button>
                                    </td>
                                </tr>
                            )
                        }
                        
                        
                        
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default User;
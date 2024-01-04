import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {

    const { _id, name, photo, category, supplier, chef, details } = coffee;

    const handleDelete = _id => {
        console.log(_id)

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
                

                fetch(`http://localhost:5000/coffeelist/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    return (
        <div className= "max-w-7xl mx-auto">
            <div className="card card-side bg-[#F5F4F1] shadow-xl">
                <figure className="border-2"><img className="" src={ photo} alt="Movie" /></figure>
                <div className="card-body">
                    
                    <div className="flex gap-8">
                        <div>
                            <h2 className="">Name: {name}</h2>
                            <h2 className="">Chef: {chef}</h2>
                            <h2 className="">Price: 0</h2>
                            
                        </div>

                        <div className="card-actions">
                            <div className="join join-vertical space-y-3">
                                <button className="btn">view</button>
                                <Link to={`updatecoffee/${_id}`}>
                                    <button className="btn">edit</button>
                                </Link>
                                <button
                                    onClick={() => handleDelete(_id)}
                                    className="btn">X</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
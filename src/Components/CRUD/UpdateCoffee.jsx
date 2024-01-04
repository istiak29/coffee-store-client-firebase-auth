import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const {_id, name, supplier, category, chef, taste, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, supplier, category, chef, taste, details, photo }

        console.log(updatedCoffee);

        // send data to the server
        fetch(`http://localhost:5000/coffeelist/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    


    return (
        <div className="max-w-7xl mx-auto">
            <div>
                <span>back to home</span>
            </div>

            <div className="bg-[#F4F3F0] rounded-md">

                <div className="text-center mt-16">
                    <h3 className="font-bold text-2xl pt-8">Update Coffee: { name}</h3>
                    <p className="my-8 px-48">
                        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                    </p>
                </div>

                <div>
                    <form onSubmit={handleUpdateCoffee}>

                        <div className="grid grid-cols-2 gap-5 mx-28">
                            <div className="">
                                <h5>Name:</h5>
                                <input className="w-full input input-bordered" defaultValue={name}  placeholder="coffee name" type="text" name="name" />
                            </div>

                            <div className="">
                                <h5>Supplier:</h5>
                                <input className="w-full input input-bordered" defaultValue={supplier} placeholder="Enter coffee supplier" type="text" name="supplier" />
                            </div>

                            <div className="">
                                <h5>Category:</h5>
                                <input className="w-full input input-bordered" defaultValue={category} placeholder="Enter coffee category" type="text" name="category" />
                            </div>

                            <div className="">
                                <h5>Chef:</h5>
                                <input className="w-full input input-bordered" defaultValue={chef} placeholder="Enter coffee chef" type="text" name="chef" />
                            </div>

                            <div className="">
                                <h5>Taste:</h5>
                                <input className="w-full input input-bordered" defaultValue={taste} placeholder="Enter coffee details" type="text" name="taste" />
                            </div>

                            <div className="">
                                <h5>Details:</h5>
                                <input className="w-full input input-bordered" defaultValue={details} placeholder="Enter coffee details" type="text" name="details" />
                            </div>

                            <div className="">
                                <h5>Photo:</h5>
                                <input className="w-full input input-bordered rounded-md" defaultValue={photo} placeholder="Enter photo URL" type="text" name="photo" />
                            </div>


                        </div>

                        <div className="mt-5 mx-28 pb-16 ">
                            <button type="submit" className=" btn-block border py-3 rounded-md border-[#331A15] bg-[#D2B48C] font-bold">Update Coffee</button>
                        </div>

                    </form>
                </div>

            </div>

        </div>
    );
};

export default UpdateCoffee;
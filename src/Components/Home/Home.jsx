import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const Home = () => {

    const coffees = useLoaderData();

    return (
        <div >
            <h1 className="font-bold text-3xl text-center">Hot and cold coffee</h1>

            <div className="grid grid-cols-2 gap-5">
                {
                    coffees.map(coffee => <CoffeeCard
                        key={coffee._id}
                        coffee={coffee}
                    ></CoffeeCard>)
                }
            </div>

        </div>
    );
};

export default Home;
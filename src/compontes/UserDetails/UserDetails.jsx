import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    // const user = useLoaderData();
    // const {name} = user;
    const name =''
    return (
        <div>
            <h2>Details about: {name} </h2>
        </div>
    );
};

export default UserDetails;
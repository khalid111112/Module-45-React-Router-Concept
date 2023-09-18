import { useLoaderData } from "react-router-dom";
import User from "../user/User";
import './Users.css';

const Users = () => {

    const users = useLoaderData();

    // state-->data
    // state -->loader
    // use effect
    // fetch -->state set --> set state
    console.log(users);
    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <p>Fantas ting </p>
            <div className="users">
                {
                    users.map(user => <User key={user} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;
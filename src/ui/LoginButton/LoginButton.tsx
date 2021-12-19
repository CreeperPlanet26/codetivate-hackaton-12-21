import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export const LoginButton = () => (
    <div className="login-button-ui-component">
        <Link to="/dashboard">
            <Button variant="contained" color="primary" >
                View
            </Button>
        </Link>
    </div>
);

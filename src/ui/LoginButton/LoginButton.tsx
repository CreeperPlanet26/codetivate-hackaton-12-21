import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export const LoginButton = () => (
    <div className="login-button-ui-component">
        <Link to="/login">
            <Button variant="contained" color="primary" >
                Login
            </Button>
        </Link>
    </div>
);

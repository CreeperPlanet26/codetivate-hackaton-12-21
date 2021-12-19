import { Button } from "@material-ui/core";
import { Link } from "react-router-dom"

export const HelpPortalButton = () => (
    <div className="join-button-ui-component">
        <Link to="/help_portal">
            <Button variant="contained" color="primary">
                Help Portal
            </Button>
        </Link>
    </div>
);

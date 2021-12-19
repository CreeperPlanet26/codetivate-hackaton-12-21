import React, { Dispatch, SetStateAction } from "react";
import { Button, Drawer } from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { navLinks } from "./NavLinks";
import { LoginButton } from "../LoginButton";
import { Link, useLocation } from "react-router-dom";

interface NavBarProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const NavBar: React.FC<NavBarProps> = ({ isOpen, setIsOpen }) => {
    const { pathname: route } = useLocation();

    return (
        <Drawer className="nav-bar-ui-component-outer" open={isOpen} anchor="right">
            <ClickAwayListener onClickAway={() => setIsOpen(false)}>
                <div>
                    <div className="nav-bar-ui-component">
                        <div>
                            <section>
                                <Button onClick={() => setIsOpen(false)} id="close">
                                    <img src="assets/close.svg" />
                                </Button>
                            </section>

                            <ul>
                                {navLinks.map((l) => (
                                    <div className="links" key={l.name}>
                                        <section className="link">
                                            <Link to={l.path}>
                                                <Button className={`${route === l.path ? "active" : null} on-card`}>
                                                    {l.name}
                                                </Button>
                                            </Link>
                                        </section>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="login-button">
                        <LoginButton />
                    </div>

                </div>
            </ClickAwayListener>
        </Drawer>
    );
};

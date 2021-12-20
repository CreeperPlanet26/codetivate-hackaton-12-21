import { useState } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { navLinks } from "../../ui/NavBar/NavLinks";
import { NavBar } from "../../ui/NavBar";
import { LoginButton } from "../../ui/LoginButton";
import { HelpPortalButton } from "../../ui/HelpPortalButton";

export const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="home-page">
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <nav>
        <Link to="/">
          <Button className="tts-button">Assist</Button>
        </Link>

        <div className="links">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              <Button className="a">{link.name}</Button>
            </Link>
          ))}
        </div>

        <Button onClick={() => setIsOpen(true)} className="hamburger">
          <img src="/assets/hamburger.svg" />
        </Button>
      </nav>

      <div className="grid">
        <div className="text">
          <h1>Assist</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quae
            velit provident aperiam itaque accusantium eveniet sunt labore quod
            at.
          </p>
          <section>
            <div className="login-button">
              <LoginButton />
            </div>

            <div className="join-button">
              <HelpPortalButton />
            </div>
          </section>
        </div>
        <img className="art" src="/assets/art.svg" />
      </div>
    </div>
  );
};

import { headerLogo } from "../assets/images";
const Nav = () => {
  return (
    <header>
      <nav>
        <a href="/">
          <img src="{headerLogo}" alt="header logo" />
        </a>
      </nav>
    </header>
  );
};

export default Nav;

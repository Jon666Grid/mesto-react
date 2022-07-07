import logo from "../images/Logo.svg";

export default function Header() {
   return (
      <header className="header">
         <img className="header__logo" src={logo} alt="логотип" />
      </header>
   );
}
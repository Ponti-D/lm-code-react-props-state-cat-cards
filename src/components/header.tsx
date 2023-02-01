interface HeadersProp {
  catCount: number;
  dogCount: number;
}

const Header: React.FC<HeadersProp> = (props) => (
  <header className="header__container">
    <h1 className="header__title header__welcome">Welcome to React!</h1>
    <h2 className="header__title">
      There are currently {props.catCount} Cats and {props.dogCount} Dogs in this Cat App
    </h2>
  </header>
);

export default Header;

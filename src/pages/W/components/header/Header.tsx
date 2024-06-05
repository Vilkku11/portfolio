import "./Header.css";

type HeaderLink = {
  name: string;
  href: string;
};

const Header = () => {
  const HeaderLinks: HeaderLink[] = [
    { name: "Start", href: "#init" },
    { name: "Overview", href: "#sdf" },
  ];

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          {HeaderLinks.map((link) => (
            <li key={link.name}>
              <a className="nav-item" href={link.href}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

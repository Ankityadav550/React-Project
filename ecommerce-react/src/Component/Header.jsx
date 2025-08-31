function Header(){
    return(
        <header>
      <div className="logo">E-commerce App</div>

      <div>
        <nav>
          <ul className="menu">
            <li className="menu-item"><a href="/Home">Home</a></li>
            <li className="menu-item"><a href="/Men">Men</a></li>
            <li className="menu-item"><a href="/Women">Women</a></li>
            <li className="menu-item"><a href="/Kids">Kids</a></li>
            <li className="menu-item"><a href="/Accessories">Accessories</a></li>
            <li className="menu-item"><a href="/Sale">Sale</a></li>
          </ul>
        </nav>
      </div>

      <div className="header-right">
        <input type="search" placeholder="Search for products..." />
        <button className="login-btn">Login</button>
      </div>
    </header>
    );
}

export default Header;
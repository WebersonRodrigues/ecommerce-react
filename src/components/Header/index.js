import "./index.css";

const Header = () => {

    return (
        <ul>
            <li><a className="active" href="#">Dashboard</a></li>
            <li><a href="#">Usuarios</a></li>
            <li><a href="#">Clientes</a></li>
            <li><a href="#">Relatorios</a></li>
            <li><a href="#">Sair</a></li>
        </ul>
    )
}

export default Header;
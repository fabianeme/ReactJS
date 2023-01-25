import React from 'react';

const Categorias = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Aceites</a></li>
                <li><a className="dropdown-item" href="#">Liq. Frenos</a></li>
                <li><a className="dropdown-item" href="#">Refrigerantes</a></li>
            </ul>
        </li>
    );
}

export default Categorias;

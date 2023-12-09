import React from "react";


// css 
import css from "./Header.module.scss"
// 

// compontents
import Search from "./Search/Search"
import NavLinkItem from "./NavLinkItem/NavLinkItem";
//

const Header: React.FC = () => {
    return (
        <header className={css.header + " p-3 text-bg-dark"}>
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <NavLinkItem url = "/" name = "Главная страница" />
                        <NavLinkItem url = "/about" name = "О нас" />
                    </ul>

                    <Search />
                    

                    <div className="text-end">
                        <button type="button" className="btn btn-outline-light me-2">Поиск</button>

                       
                        {/* {% if current_user.login == "admin" %}
                            <a href="{{ url_for('admin_display') }}" class = "btn btn-outline-primary">{{ current_user.login }}</a>
                            <a href="/logout" class="btn btn-success">Выход</a>
                        {% elif current_user.login %}
                            <a href="{{ url_for('profile') }}" class = "btn btn-outline-primary">{{ current_user.login }}</a>
                            <a href="/logout" class="btn btn-success">Выход</a>
                        {% else %} */}
                            <a href = "/login" className="btn btn-light me-2">Вход в аккаунт</a>
                            <a href = "/register" className="btn btn-success me-2">Зарегистрироваться</a>
                        {/* {% endif %} */}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
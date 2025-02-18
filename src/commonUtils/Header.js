import React from "react";

const Header = ( {title} ) => {
    return (
        <div>
            <div class="alert alert-info alert-dismissible"></div>
            <h2 className="mt-3 text-center" id = "headerBar"> { title } </h2>
        </div>
    );
}

export default Header;
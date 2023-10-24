import { Component } from "react";
import "./NavbarStyles.css";
import "./MiddleStyles.css";
import { MenuData } from "./MenuData";


class Navbar extends Component{
   
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">LOGO</h1>

           

                <ul className="nav-menu">
                    {MenuData.map((item, index) => {
                        return (
                            <li key={index}>
                               
                                {item.title}<i className={item.icon}
                               ></i>
                               <a href={item.url}
                                    className={item.cName}>
                               </a>
                            </li>
                        );
                    })}
                   
                   <button>Enrolement</button>
               

                  </ul>
                   
               
               
               
            </nav>
     
     
        )
     

    }
}
export default Navbar


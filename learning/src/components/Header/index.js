import React from "react";
import "./styles.css";

import Logo from '../assets/img/carneirosLogo.png';

//Statless components
const Header = () => <header id="main-header"> <img src={Logo} alt="logo" className="logo"></img></header>;
//Pode se usar esta forma para retornar um componente

export default Header;








//This form is too avalaible, so it is used to when we have states
/*
class Header extends Component{

render(){

    return <h1>Hello</h1>
}

}*/
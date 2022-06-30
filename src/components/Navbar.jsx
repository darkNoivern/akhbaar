import React from "react";
import { NavLink, Link } from "react-router-dom";
import  { IconButton } from "@mui/material"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {grey} from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import "./style.css";
const LinkButton = styled(IconButton)({
    color: grey[500],
    '&:hover': {
        color: 'rgb(255,255,255,0.65)',
    },
});  
const Navbar = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand ms-lg-4" exact to='/'>
                        Akhbaar📰
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                        <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <NavLink activeClassName="active" className="nav-link ms-1" exact to="/">
                                Home
                            </NavLink>
                            <NavLink activeClassName="active" className="nav-link ms-1" exact to="/topic/buisness">
                                Business
                            </NavLink>
                            <NavLink activeClassName="active" className="nav-link ms-1" exact to="/topic/entertainment">
                                Entertainment
                            </NavLink>
                            <NavLink activeClassName="active" className="nav-link ms-1" exact to="/topic/general">
                                General
                            </NavLink>
                            <NavLink activeClassName="active" className="nav-link ms-1" exact to="/topic/health">
                                Health
                            </NavLink>
                            <NavLink activeClassName="active" className="nav-link ms-1" exact to="/topic/science">
                                Science
                            </NavLink>
                            <NavLink activeClassName="active" className="nav-link ms-1" exact to="/topic/sports">
                                Sports
                            </NavLink>
                            <NavLink activeClassName="active" className="nav-link ms-1" exact to="/topic/technology">
                                Technology
                            </NavLink>
                        </div>

                        <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <LinkButton>
                                <FacebookOutlinedIcon />
                            </LinkButton>
                            <LinkButton>
                                <TwitterIcon />
                            </LinkButton>
                            <LinkButton>
                                <LinkedInIcon />
                            </LinkButton>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

import {Outlet,Link} from "react-router-dom";
import {Fragment} from "react";

import {ReactComponent as CrwnLogo} from "../../assets/007 crown.svg";

import './navigation.styles.scss'

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className = 'logo' />
                    </Link>
                <div className= 'links-container'>
                    <Link className='nav-link' to='/shop'>
                       shop
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
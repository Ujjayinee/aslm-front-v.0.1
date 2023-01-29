import "./LoginNavBar.css";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import NotificationsIcon from '@mui/icons-material/Notifications';
function LoginNavBar(){
    return(
        <div class="wbnav">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <div class="navbar-brand">Axis Saral</div>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/aboutUs">ABOUT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/contact">CONTACT</a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default LoginNavBar;
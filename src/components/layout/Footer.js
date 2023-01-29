import { Link } from "react-router-dom";
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer(){

    return(
        <div>
            <nav class="nav navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="https://www.facebook.com/axisbank" target="_blank"><FacebookIcon/></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="https://twitter.com/axisbank" target="_blank"><TwitterIcon/></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="https://www.linkedin.com/company/axis-bank/?trk=top_nav_home" target="_blank"><LinkedInIcon/></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="https://www.instagram.com/axis_bank/" target="_blank"><InstagramIcon/></a>
                            </li>
                        </ul>
                    </div>
                    <div class="navbar-brand">Copyright © 2023 Axis Saral</div>
                </div>
            </nav>
        </div>









        
    )

}
export default Footer;


/**
 * <div>
            <footer className={classes.footer}>
                <div className={classes.social}>
                    <ul>  
                        <li>
                            <a href="https://www.facebook.com/axisbank" target="_blank"><FacebookIcon/></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/axisbank" target="_blank"><TwitterIcon/></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/axis-bank/?trk=top_nav_home" target="_blank"><LinkedInIcon/></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/axis_bank/" target="_blank"><InstagramIcon/></a>
                        </li>
                    </ul>
                </div>
                <div className={classes.para}>
                <p>
                    <Link to="/privacy">Privacy Policy </Link>
                    | Copyright © 2023 Axis Saral
                    </p>                    
                </div>
            </footer>
        </div>
 */
import "./HomePage.css"
import { Container } from "@mui/system";
function HomePage(){
    return( 
        <div> 
           <Container>
                <Container> 
                    <div class="block1">
                        <img src="https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block"></img>
                    </div>
                    <div class="container1 text-center hearderset">
                        <h1 class="heading1">SARAL Learning Portal</h1>
                        <br/><br/>
                        <p>
                            If Your actions inspire others to dream more,
                            learn more, do more and become more, you are LEADER.
                        </p><p>...................................................</p> 
                    </div>
                </Container>
                <Container>
                <div class="lines1"></div>
                </Container>
                
                <Container>
                        <div class="page1">
                            <video autoPlay loop muted plays-inline class="backvideo">
                                <source src="https://player.vimeo.com/external/159035843.sd.mp4?s=0d309dd63ee62d4efc5e0e471824ed7fab0f7f85&profile_id=164&oauth2_token_id=57447761"/>
                            </video>
                            <div class="lines1"></div>
                            <div class="headings text-center hearderset">
                                <h1>Everything you need,</h1>
                                <h2>in one place...</h2>    
                            </div>
                            <div class="line2"></div>
                        </div>
                    </Container>
                </Container>  
        </div>
    )
}
export default HomePage;

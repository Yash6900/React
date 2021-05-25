import React, {Component,} from 'react';
import { Navbar, NavbarBrand,Jumbotron, Container} from 'reactstrap';


class Header extends Component{
    
    render(){
        return(
            
        <>
        <Navbar dark >
        <div className="container">
          <NavbarBrand href="/">
            Restaurant Con Fusion
          </NavbarBrand>
        </div>
      </Navbar>

            <Jumbotron>
      <Container>
          <div className="row row-header">
              <div className="col-12 col-sm-6">
                  <h1 className="display-3">
                      Ristorante Con Fusion
                  </h1>
                  <p className="lead"> We Take Inspiration from the World's best cuisines, and create a unique Fusion experience.Our lipsmacking creations will tickle your culinary senses! </p>
              </div>
          </div>
          </Container>

      </Jumbotron>
     
        </>
        
        );
    }
}


export default Header;

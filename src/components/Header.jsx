import React from 'react'
import './header.css';
import { Container } from 'reactstrap';

const Header = () => {
  return (
    <section>
        <Container>
            <div className="navigation">
                <div className="logo">
               
                    <h2>  <i class="ri-pantone-fill"></i> Education.</h2>
                </div>
           
            </div>
        </Container>
    </section>
  )
}

export default Header
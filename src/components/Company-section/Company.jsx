import React from "react";
import { Container, Row, Col } from "reactstrap";
const Company = () => {
  return (
    <section>
    <Container>
    <Row>
        <Col lg="2" md="3">
            <h3 className="d-flex align-items-center gap-1"><i class="ri-vimeo-line"></i>Vimeo</h3>
        </Col>
        <Col lg="2" md="3">
        <h3 className="d-flex align-items-center gap-1"><i class="ri-vimeo-line"></i>Pinterest</h3>
        </Col>
        <Col lg="2" md="3">
        <h3 className="d-flex align-items-center gap-1"><i class="ri-vimeo-line"></i>YouTube</h3>
        </Col>
        <Col lg="2" md="3">
        <h3 className="d-flex align-items-center gap-1"><i class="ri-vimeo-line"></i>SoundCloud</h3>
        </Col>
        <Col lg="2" md="3">
        <h3 className="d-flex align-items-center gap-1"><i class="ri-vimeo-line"></i>Spotify</h3>
        </Col>
        <Col lg="2" md="3">
        <h3 className="d-flex align-items-center gap-1"><i class="ri-vimeo-line"></i>Dribble</h3>   
        </Col>
      </Row>
    </Container>
    </section>
  );
};

export default Company;

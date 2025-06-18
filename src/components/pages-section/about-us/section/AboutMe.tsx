import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Col, Row } from 'react-bootstrap'

const AboutMe = () => {
    return (
        <>
            <section className="section-about padding-tb-50">
                <div className="container">
                    <Row className="mb-minus-24">
                        <Col lg={6} className="mb-24 col-12">
                            <div className="bb-about-img">
                                <img src="/assets/img/about/driveway-clean-powerwash-pressurewash-wash.png" alt="about-one" />
                            </div>
                        </Col>
                        <Col lg={6}  className="mb-24 col-12">
                            <div className="bb-about-contact">
                                <Fade triggerOnce direction='up' duration={1000} delay={200} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                    <div className="section-title">
                                        <div className="section-detail">
                                            <h2 className="bb-title"><span>Bright Blast</span> is</h2>
                                        </div>
                                    </div>
                                </Fade>
                                <Fade triggerOnce direction='up' duration={1000} delay={400}>
                                    <div className="about-inner-contact">
                                        <h4>Local pressure washing done right.</h4>
                                        <p>At Bright Blast, we believe a clean surface is more than just aesthetics — it’s about pride, safety, and creating a welcoming environment. Based in Alameda, we offer professional pressure washing services for homes, storefronts, driveways, patios, and more. We use eco-conscious methods, attention to detail, and reliable scheduling to make sure every job gets done right the first time. Whether you need to refresh your sidewalk, remove graffiti, or prep for an outdoor event, we’re here to help your space shine.</p>
                                        <p>Founded by a local with a passion for clean work and clean design, Bright Blast blends small-town trust with professional results. We don’t just spray and leave — we build relationships, offer thoughtful add-ons like trash bin cleaning or cedar-based mosquito repellent, and treat your property with care. Our mission is simple: to deliver powerful results with a personal touch, every single time.</p>
                                    </div>
                                </Fade>
                                <Fade triggerOnce direction='up' duration={1000} delay={600} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                                    <Row className="bb-vendor-rows row mb-minus-24">
                                        <Col sm={4} className="mb-24">
                                            <div className="bb-vendor-box">
                                                <div className="bb-count">
                                                    <h5 className="counter">Strong</h5>
                                                </div>
                                                <div className="inner-text">
                                                    <p>Customer Service</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={4} className="mb-24">
                                            <div className="bb-vendor-box">
                                                <div className="bb-count">
                                                    <h5 className="counter">Visible</h5>
                                                </div>
                                                <div className="inner-text">
                                                    <p>Results</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={4} className="mb-24">
                                            <div className="bb-vendor-box">
                                                <div className="bb-count">
                                                    <h5 className="counter">Crisp</h5>
                                                </div>
                                                <div className="inner-text">
                                                    <p>Outcomes</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Fade>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default AboutMe

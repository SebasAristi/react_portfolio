import { Button, Container, Col, Row, } from "react-bootstrap";

function Home() {
    return (

        <>

            <div id="intro" class="view">

                <div className="mask rgba-black-strong">

                    <div className="container-fluid d-flex align-items-center justify-content-center h-100">

                        <div className="row d-flex justify-content-center text-center mb-4">

                            <div class="col-md-10">

                                {/* <!-- Heading --> */}
                                <h2 className="display-4 font-weight-bold white-text pt-5 mb-2 heading-name">Sebastian Aristizabal</h2>

                                {/* <!-- Divider --> */}
                                <hr class="heading-name" />

                                {/* <!-- Description --> */}
                                <h4 className="white-text my-4 heading-name">Welcome to my page if you want to know more about it click below </h4>
                                <Container fluid className="mb-2">
                                    <Col>

                                        <Row className="justify-content-center align-center">
                                            <Button className="m-5" href="/about">Learn More</Button>
                                        </Row>
                                    </Col>

                                </Container>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            {/* <!--/.Mask--> */}
            <main class="mt-5">
                <div class="container">
                    {/* 
            <!--Section: Best Features--> */}
                    <section  class="text-center">

                        {/* <!-- Heading --> */}
                        <h2 class="mb-5 font-weight-bold">Full Stack Web Developer</h2>


                        <div class="row d-flex justify-content-center mb-4">


                            <div class="col-md-8">


                                <p class="grey-text">I am a full stack developer who has worked with javascript and react, I like to explore different ways of learning and being able to contribute when required</p>

                            </div>


                        </div>


                        <div class="row">


                            <div className="col-md-6 mb-5">
                                <h4 className="my-4  text-center">Front End</h4>
                                <div className="grey-text">
                                    <ul>
                                        <li>HTML5</li>
                                        <li>CSS</li>
                                        <li>JS</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-6 mb-5">
                                <h4 className="my-4  text-center">Back End</h4>
                                <div className="grey-text">
                                    <ul>
                                        <li>NodeJs</li>
                                        <li>MongoDB</li>
                                        <li>MySQL</li>
                                        <li>Sequelize</li>
                                    </ul>
                                </div>
                            </div>


                            {/* <div className="col-md-4 mb-5">
                                <h4 className="my-4  text-center">Front End</h4>
                                <div className="grey-text">
                                    <ul>
                                        <li>HTML5</li>
                                        <li>CSS</li>
                                        <li>JS</li>
                                    </ul>
                                </div>
                            </div> */}
                            {/* <!--Grid column--> */}

                        </div>
                        {/* <!--Grid row--> */}

                    </section>
                    {/* <!--Section: Best Features--> */}

                   
                </div>
            </main>
        </>
    )

}

export default Home;
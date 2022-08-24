function About() {
    return (
        <main className="mt-5">
            <div className="container">

                {/* <!--Section: Best Features--> */}

                <section id="best-features" className="text-center">

                    {/* <!-- Heading --> */}
                    <h2 className="mb-5 font-weight-bold">About Me</h2>


                    <div className="row d-flex justify-content-center mb-4">
                        <div className="col-md-4">
                            <img src="https://github.com/SebasAristi/react_portfolio/blob/main/src/images/d268679e-ea7d-43b0-a33a-44de84a0fa65.JPG?raw=true" className="img-fluid" alt="" />
                        </div>

                        <div className="col-md-8">

                            <p className="grey-text">Who Am I?</p>
                            <p>Hi, I'm Sebastian Arisrtizabal, I'm a full stack developer, most of my experience comes from javascript and react, I like to learn new things to implement them when required,</p>

                        </div>


                    </div>


                    <div className="col-md- mt-5">


                        <div className="col-md- mb-5">
                            <h4 className="my-4 font-weight-bold">Experience</h4>
                            <p className="grey-text"></p>
                        </div>

                        <div className="col-md- mb-5">
                            <h4 className="my-4 font-weight-bold">Hobbies</h4>
                            <p className="grey-text"></p>
                        </div>


                        <div className="col-md- mb-5">
                            <h4 className="my-4 font-weight-bold">Adventure</h4>
                            <p className="grey-text"></p>
                        </div>


                    </div>


                </section>
            </div>
        </main>
    )
}


export default About;

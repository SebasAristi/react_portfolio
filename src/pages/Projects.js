function Projects() {
    return (
        <main className="mt-5">
        <div class="container">
       
            <section className="text-center">


                <h2 className="mb-5 font-weight-bold">My Portfolio</h2>


                <div className="row">


                    <div className="col-lg-4 col-md-12 mb-4">

                        <div className="view overlay z-depth-1-half">
                            <img src="https://github.com/SebasAristi/react_portfolio/blob/main/src/images/Screen%20Shot%202022-08-23%20at%203.22.46%20PM.png?raw=true" className="img-fluid" alt="" />
                            <div className="mask rgba-white-slight"></div>
                        </div>

                        <h4 className="my-4 font-weight-bold">Movie-ish</h4>
                        <p className="grey-text">Movie finder application using HTML, CSS and javascript.</p>
                        <a href="https://pillifino.github.io/movie-ish/" target="_blank">Movie-ish</a>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">

                        <div className="view overlay z-depth-1-half">
                            <img src="https://github.com/SebasAristi/react_portfolio/blob/main/src/images/Screen%20Shot%202022-08-23%20at%203.24.42%20PM.png?raw=true" className="img-fluid" alt="" />
                            <div className="mask rgba-white-slight"></div>
                        </div>

                        <h4 className="my-4 font-weight-bold">Grumble</h4>
                        <p className="grey-text">Find a work partner. Find a match. Built with REACTJS, Node, Mongo, Apollo and graphql.</p>
                        <a href="https://grumble-really-cool-people.herokuapp.com/" target="_blank">Grumble</a>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">

                        <div className="view overlay z-depth-1-half">
                            <img src="https://github.com/SebasAristi/react_portfolio/blob/main/src/images/Screen%20Shot%202022-08-23%20at%203.26.14%20PM.png?raw=true" className="img-fluid" alt="" />
                            <div className="mask rgba-white-slight"></div>
                        </div>

                        <h4 className="my-4 font-weight-bold">Google book search</h4>
                        <p className="grey-text">Google book search. Built with REACTJS, Node, Mongo, Apollo and graphql.</p>
                        <a href="https://sebs-google-book-search.herokuapp.com/" target="_blank">Book Search</a>
                    </div>


                </div>

                <div className="row">


                    <div className="col-lg-4 col-md-12 mb-4">

                        <div className="view overlay z-depth-1-half">
                            <img src="https://github.com/SebasAristi/react_portfolio/blob/main/src/images/Screen%20Shot%202022-08-23%20at%203.26.33%20PM.png?raw=true" className="img-fluid" alt="" />
                            <div className="mask rgba-white-slight"></div>
                        </div>

                        <h4 className="my-4 font-weight-bold">Text Editor</h4>
                        <p className="grey-text">TextEditor PWA. Take your notes offline. Built with webpack</p>
                        <a href="https://sebstexteditor.herokuapp.com/" target="_blank">Text Editor</a>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">

                        <div className="view overlay z-depth-1-half">
                            <img src="https://github.com/SebasAristi/react_portfolio/blob/main/src/images/Screen%20Shot%202022-08-23%20at%203.27.02%20PM.png?raw=true" className="img-fluid" alt="" />
                            <div className="mask rgba-white-slight"></div>
                        </div>

                        <h4 className="my-4 font-weight-bold">Note Taker</h4>
                        <p className="grey-text">Note Taker app built with Express.</p>
                        <a href="https://guarded-coast-47180.herokuapp.com/" target="_blank">Note Taker</a>
                    </div>
                    {/* <div className="col-lg-4 col-md-6 mb-4">

                        <div className="view overlay z-depth-1-half">
                            <img src="https://mdbootstrap.com/img/Photos/Others/images/13.jpg" className="img-fluid" alt="" />
                            <div className="mask rgba-white-slight"></div>
                        </div>

                        <h4 className="my-4 font-weight-bold">Heading</h4>
                        <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                            maiores nam,
                            aperiam minima
                            assumenda deleniti hic.</p>

                    </div> */}


                </div>


            </section>






        </div>
    </main>
    )
}

export default Projects;
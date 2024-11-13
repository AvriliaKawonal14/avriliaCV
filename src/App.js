const App = () => {
  return (
    <div>
      {/* Required meta tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Google Fots */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      {/* Remixicon Icon */}
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      {/* Remixicon Icon */}
      {/* Bootstrap CSS */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      />
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
      />
      {/* Main CSS */}
      <link href="assets/css/main.css" rel="stylesheet" />
      <title>Borstein - Dark theme resume template</title>
      {/* header */}
      <header className="ds-header">
        <div className="container">
          <div className="ds-logo">
            <a href="index.html">Borstein</a>
          </div>
        </div>
      </header>
      {/* header */}
      {/* banner */}
      <section className="ds-banner">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12  col-md-6  col-lg-7  col-xl-7  col-xxl-7 ds-banner-left">
              <h1 className="ds-banner-hed">
                I’m a soft­ware devel­op­er from Austin, Texas.
              </h1>
              <ul className="ds-social">
                <li>
                  <a href="#" target="_blanck">
                    <i className="ri-github-fill" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blanck">
                    <i className="ri-stack-overflow-line" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blanck">
                    <i className="ri-linkedin-fill" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-12  col-md-6  col-lg-5  col-xl-5  col-xxl-5">
              <figure>
                <img
                  src="assets/images/banner-image.png"
                  className="ds-image-shadow"
                />
                <figcaption>Josue Borstein</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
      {/* banner */}
      {/* resume */}
      <section className="ds-resume-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12  col-md-6  col-lg-6  col-xl-6  col-xxl-6">
              <h2>
                I am passionate about building excellent software that improves
                the lives{" "}
              </h2>
            </div>
            <div className="col-12 col-sm-12  col-md-6  col-lg-6  col-xl-6  col-xxl-6">
              <p>
                I am a seasoned software expert who has developed products for
                enterprise clients such as Intuit, Yale University, and
                Hewlett-Packard (HP), as well as many venture-backed businesses.
                I specialize in building applications specific to the business
                needs of my clients. I have done work in software development,
                mobile app creation, front-end/back-end web, database/server
                management, graphic design, and video game development.
              </p>
              <a href="#" className="ds-download-button">
                Download Resume <i className="ri-download-line" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* projects */}
      <section className="ds-projects-section">
        <div className="container">
          <h2>
            <span>projects</span>Check out a few of my recent project.
          </h2>
          <div className="row ds-projects-listing-section">
            <div className="col-12 col-sm-12  col-md-4  col-lg-4  col-xl-4  col-xxl-4 ds-projects-loop">
              <figure>
                <a href="#" className="ds-link-button">
                  <i className="ri-external-link-line" />
                </a>
                <img
                  src="assets/images/projects-1.png"
                  className="ds-image-shadow transition"
                />
              </figure>
              <section>
                <h3>Roambi</h3>
                <span>Mobile app for news feed.</span>
              </section>
            </div>
            <div className="col-12 col-sm-12  col-md-4  col-lg-4  col-xl-4  col-xxl-4 ds-projects-loop">
              <figure>
                <a href="#" className="ds-link-button">
                  <i className="ri-external-link-line" />
                </a>
                <img
                  src="assets/images/projects-2.png"
                  className="ds-image-shadow transition"
                />
              </figure>
              <section>
                <h3>3d ricks</h3>
                <span>Mobile gaming app for kids.</span>
              </section>
            </div>
            <div className="col-12 col-sm-12  col-md-4  col-lg-4  col-xl-4  col-xxl-4 ds-projects-loop">
              <figure>
                <a href="#" className="ds-link-button">
                  <i className="ri-external-link-line" />
                </a>
                <img
                  src="assets/images/projects-3.png"
                  className="ds-image-shadow transition"
                />
              </figure>
              <section>
                <h3>Bubbles</h3>
                <span>Dark UI Elements</span>
              </section>
            </div>
          </div>
        </div>
      </section>
      {/* projects */}
      {/* testimonials */}
      <section className="ds-testimonials-section">
        <div className="container">
          <h2>
            <span>Testimonials</span>
          </h2>
          <div className="ds-testimonials-slider">
            <div className="ds-testimonials-loop">
              <article>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                quis sem maximus, ornare metus ut, congue enim. Sed fermentum
                nulla tellus, quis efficitur mauris tristique efficitur. Aliquam
                rhoncus sem sed ullamcorper venenatis. Aenean malesuada eu orci
                non sodales. Pellentesque facilisis lacus libero, et gravida
                velit imperdiet ut. Etiam tempor purus eu erat accumsan
                hendrerit. Phasellus eu ipsum libero. Curabitur consectetur
                consequat nisi ac pellentesque facilisis lacus congue.
              </article>
              <section>
                <span className="ds-name">Johnathan Hudi</span>
                <span className="ds-post">Program manager URI tech</span>
              </section>
            </div>
            <div className="ds-testimonials-loop">
              <article>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                quis sem maximus, ornare metus ut, congue enim. Sed fermentum
                nulla tellus, quis efficitur mauris tristique efficitur. Aliquam
                rhoncus sem sed ullamcorper venenatis. Aenean malesuada eu orci
                non sodales. Pellentesque facilisis lacus libero, et gravida
                velit imperdiet ut. Etiam tempor purus eu erat accumsan
                hendrerit. Phasellus eu ipsum libero. Curabitur consectetur
                consequat nisi ac pellentesque facilisis lacus congue.
              </article>
              <section>
                <span className="ds-name">Johnathan Hudi</span>
                <span className="ds-post">Program manager URI tech</span>
              </section>
            </div>
            <div className="ds-testimonials-loop">
              <article>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                quis sem maximus, ornare metus ut, congue enim. Sed fermentum
                nulla tellus, quis efficitur mauris tristique efficitur. Aliquam
                rhoncus sem sed ullamcorper venenatis. Aenean malesuada eu orci
                non sodales. Pellentesque facilisis lacus libero, et gravida
                velit imperdiet ut. Etiam tempor purus eu erat accumsan
                hendrerit. Phasellus eu ipsum libero. Curabitur consectetur
                consequat nisi ac pellentesque facilisis lacus congue.
              </article>
              <section>
                <span className="ds-name">Johnathan Hudi</span>
                <span className="ds-post">Program manager URI tech</span>
              </section>
            </div>
          </div>
        </div>
      </section>
      {/* testimonials */}
      <section className="ds-email-section">
        <div className="container">
          <h2>I'm available for work</h2>
          <a href="mailto:contact@borstein.com">contact@borstein.com</a>
        </div>
      </section>
      {/* footer */}
      <footer className="ds-footer">
        <div className="container">
          <span className="ds-copyright">
            © 2020 All right reserved. <br />
            <a href="https://www.designstub.com/" target="_blanck">
              Free minimal bootstrap template by Designstub.
            </a>
          </span>
          <a href="https://www.designstub.com/" target="_blanck"></a>
        </div>
        <a href="https://www.designstub.com/" target="_blanck"></a>
      </footer>
      <a href="https://www.designstub.com/" target="_blanck">
        {/* footer */}
        {/* Optional JavaScript; choose one of the two! */}
        {/* Option 1: Bootstrap Bundle with Popper */}
        {/* Option 2: Separate Popper and Bootstrap JS */}
        {/*
    
    
    */}
        {"}"}
      </a>
    </div>
  );
};

export default App;

import React, { Component } from 'react'

export default class WorkExperience extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="workexperience">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                {/* <span className="heading-meta">highlights</span> */}
                <h2 className="colorlib-heading animate-box">Work Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Full Stack Web Development <span>November 2017 - Present </span>
                        <h4>Gobierno de la Ciudad de Buenos Aires <span>Buenos Aires, Argentina</span></h4>
                        </h2>
                        <p>I am part of the Clinical Medical History and Hospital Management System's Development used in hospitals and community rooms of the Government of Buenos Aires city.
                        The system development is build on a modern web architecture (Angular JS, Django, Django REST Framework). The system is used on a daily basis for 2-3 thousand of users (Professional in Medicine and Administrators) and has a database of more than half million patients.
                        The tasks that I develop are design, implement and build new modules of the system, fix bugs and errors and add new features into the different modules. I participate in the Back-end as well as the Front-end part of the system.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2> Visit Researcher at Advanced Real-Time Simulation Lab <span> January 2017 - July 2017 </span>
                        <h4> Carleton University <span> Ottawa, Ontario, Canada </span></h4>
                        </h2>
                        <p>I earned a scholarship to work in Carleton University as a Visiting Researcher for 5 months.
                        First I worked in a team helping to develop scheduling algorithms for LTE Network Simulations. I developed the Proportional Fair algorithm with different variants. Then I worked in Embedded
                        Systems researching how to develop a PID Controller for a Quadcopter in C++.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2> .Net Developer <span> November 2013 - July 2016 </span>
                        <h4>Interfaces S.A. <span>Buenos Aires, Argentina</span></h4>
                        </h2>
                        <p>Software development for the oil industry, specifically to support the reservoir engineering using C# and .NET technologies. The software was about Reservoir Visualization, Analysis & Management Software.

                        I developed several tools that involved doing the UI design, doing the connection with
                        the database (Oracle and Microsoft Access) and doing calculation with data. In order
                        to do these calculations I had to read books and papers and talk with chemists and
                        geologists.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2> Web developer <span> Novemer 2012 - October 2013 </span>
                        <h4> Viarural S.A. <span> Buenos Aires, Argentina</span></h4>
                        </h2>
                        <p>System’s Development using PHP, Javascript (JQuery, Ajax), HTML5, CSS3.
                        I developed small HTML pages and also I developed the system registration of a motorcycle
                        sales website and I helped with the searching process of the motorcycles using
                        JQuery and PHP.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

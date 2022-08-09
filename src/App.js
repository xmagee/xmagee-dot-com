import { FaBrandsGithub, FaSolidFile } from 'solid-icons/fa';

const App = () => {
  return (
      <>
        <div class="profile">
          <div class="profile-header-section">
            <div class="profile-header">
              <img class="profile-image"
                   alt="Alex Magee's profile picture"
                   src="https://avatars.githubusercontent.com/u/86931568?v=4" />
            </div>

            <p class="image-attrib">
              <a href="https://en.wikipedia.org/wiki/Yellowstone_National_Park#/media/File:Beautiful_Meadow_in_Yellowstone_National_Park.JPG"
                 target="_blank">
                "Meadow in Yellowstone National Park"
              </a>
              , by &nbsp;
              <a href="https://commons.wikimedia.org/wiki/User:Jrmichae"
                 target="_blank">
                Jrmichae
              </a>
              , licensed under CC BY-SA 4.0 &nbsp;
            </p>

            <div class="profile-section">
              <div>
                  <h3>Alex Magee</h3>
                  <p><i>Software Developer I</i></p>
                  <p class="text-half-opac">Pittsburgh, Pennsylvania, United States</p>
              </div>

              <nav>
                <ul>
                  {nav_links.map((link) => (
                      <li>
                        <a
                            href={link.href}
                            target={link.target}>
                          {link.icon}
                        </a>
                      </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <ProfileSection header="About">
            <p>
              Hey, nice to see you! 😺
            </p>

            <br />

            <p>
              I am mainly a backend software developer, but I work with front-end and mobile technologies
              as well. Most of the projects that I have worked on are in the .NET ecosystem - C#, VB.NET,
              Sql Server. Some other languages that I have used professionally include Javascript, Typescript,
              PHP, HTML/CSS, SQlite, and MySql.
            </p>

            <br />

            <p>
              Currently happily employed as a Software Developer I at {' '}
              <a href='https://www.nationalfuel.com/seneca-resources-company' target='_blank'>Seneca Resources, LLC</a>! 💼
            </p>
          </ProfileSection>

          <ProfileSection header="Skills">
            <div class="profile-skillslist">
              <ul>
                <li>
                  C#, VB.NET, NodeJS, PHP, Rust, Go
                </li>
                <li>
                  MSSQL, MySQL, SQlite, MongoDB
                </li>
                <li>
                  ReactJS, HTML/CSS/JS, Wordpress, Electron
                </li>
              </ul>
            </div>
          </ProfileSection>

          <ProfileSection header="Professional Experience">
            <ul class="profile-prolist">
              <li>
                <h4>Software Developer I</h4>
                <p>Seneca Resources</p>
                <i>March 2022 - present</i>
                <ul>
                  <li>
                    Developing applications for the .NET ecosystem using C#
                  </li>
                  <li>
                    SQL Server database development
                  </li>
                </ul>
              </li>
              <li>
                <h4>Contract Software Developer</h4>
                <p>Self-employed</p>
                <i>May 2020 - April 2022</i>
                <ul>
                  <li>
                    Primarily developing web applications
                  </li>
                  <li>
                    Technologies/frameworks most used include C#, VB.NET, Javascript, ReactJS, NodeJS, Sql
                  </li>
                </ul>
              </li>
              <li>
                <h4>Programmer Intern</h4>
                <p>American Refining Group</p>
                <i>May 2019 - May 2020</i>
                <ul>
                  <li>
                    Worked on internal ASP.NET sites using VB.NET, C#, Sql
                  </li>
                  <li>
                    Made changes to Wordpress training site
                  </li>
                  <li>
                    Created an I.T. inventory management webapp using React, C#/.NET 5, Sql
                  </li>
                </ul>
              </li>
              <li>
                <h4>QA Intern</h4>
                <p>Graham Packaging</p>
                <i>August 2018 - April 2019</i>
                <ul>
                  <li>
                    Tested production line product samples for consistency, logged measurements and results
                  </li>
                  <li>Compared results to historical data </li>
                </ul>
              </li>
            </ul>
          </ProfileSection>

          <ProfileSection header="Education">
            <ul class="profile-prolist">
              <li>
                <h4>Bachelors of Science (B.S.), Computer Information Systems & Technology</h4>
                <p>University of Pittsburgh</p>
                <i>September 2016 – April 2020</i>
                <ul>
                  <li>
                    President, I.T. Club
                  </li>
                  <li>
                    Treasurer / Webmaster, Esports club
                  </li>
                </ul>
              </li>
              <li>
                <h4>High School Diploma</h4>
                <p>Bradford Area High School, Bradford, PA</p>
                <i>September 2012 – June 2016</i>
                <ul>
                  <li>
                    A+ Certification (2016), NOCTII skills certification
                  </li>
                  <li>
                    SkillsUSA competitor, I.T.
                  </li>
                  <li>
                    Completed 3 yrs. of Computer Maintenance skills program
                  </li>
                </ul>
              </li>
            </ul>
          </ProfileSection>

          <ProfileSection header="Projects / Published Work">
            <div class="profile-skillslist">
              <ul>
                <li>
                  CASA MCKean website maintenance - <a href="https://casamckean.org" target="_blank">www.casamckean.org</a>
                </li>
                <li>
                  Tuna Valley Towing website - <a href="https://tunavalleytowing.com" target="_blank">www.tunavalleytowing.com</a>
                </li>
              </ul>
            </div>
          </ProfileSection>
        </div>
      </>
  );
};

const ProfileSection = ({ header, children }) => {
  return (
      <div class="profile-section">
        {header && (<h3><u>{header}</u></h3>)}

        <p>{children}</p>
      </div>
  )
};

const iconSize = 20, iconColor = '#202B38';

const nav_links = [
  {
    title: 'Github',
    href: 'https://github.com/xmagee',
    target: '_blank',
    icon: <FaBrandsGithub size={iconSize} color={iconColor} />
  },
  {
    title: 'Resume (PDF)',
    href: 'https://github.com/xmagee/resume/releases/latest/download/resume.pdf',
    target: '_self',
    icon: <FaSolidFile size={iconSize} color={iconColor} />
  },
]

export default App;

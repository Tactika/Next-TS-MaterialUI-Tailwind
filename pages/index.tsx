import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/components/Link";
import ProTip from "../src/components/ProTip";
import Copyright from "../src/components/Copyright";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import Navigation from "../src/components/Navigation";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Navigation />

        <main>
          <article>
            <div>
              <h1>
                Hi, I'm{" "}
                <span className="font-xl font-bold">Damien Richcreek</span>
              </h1>
              <p>
                I'm a full stack web developer with a passion for creating
                beautiful, functional, and responsive websites.
              </p>
              <p>
                My goal is to create websites that are easy to use and navigate,
                and that provide a great user experience.
              </p>
              <p>
                My skills include HTML, CSS, JavaScript, React, Node.js,
                Express, MongoDB, and more.
              </p>
              <p>
                Check out my <Link href="/projects">projects</Link> to see some
                of my work.
              </p>
              <p>
                Or, <Link href="/contact">contact</Link> me to learn more about
                how I can help you with your next project.
              </p>
            </div>
            <div>
              <img
                src="/images/damien.jpg"
                alt="Damien Richcreek"
                width={300}
                style={{ borderRadius: 15 }}
              />
            </div>
          </article>
          <article>
            <div>
              <h2>My Skills</h2>
              <div>
                <h3>Front End</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS3</li>
                  <li>TypeScript</li>
                  <li>JavaScript</li>
                  <li>Redux</li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div>
                <h3>Back End</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Laravel</li>
                  <li>Django</li>
                  <li>MySQL/MariaDB</li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div>
                <h3>Frameworks</h3>
                <ul>
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>TailwindCSS</li>
                  <li>MaterialUI</li>
                  <li>Laravel</li>
                  <li></li>
                </ul>
              </div>
              <div>
                <h3>Tools</h3>
                <ul>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>VS Code</li>
                  <li>Postman</li>
                  <li>Insomnia</li>
                </ul>
              </div>
            </div>
          </article>
          <article>
            <div>
              <h2>My Projects</h2>
            </div>
            <div>
              <img src="images/damien.jpg" alt="First Project" width={300} />
              <h3>Project 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                suscipit inventore eius? Earum illum hic deserunt iusto nemo
                quibusdam quo adipisci. Enim excepturi dignissimos eaque, illo
                nulla amet velit? Quos!
              </p>

              <a href="#">
                <button>Live</button>
              </a>

              <a href="#">
                <button>Github</button>
              </a>
            </div>
            <div>
              <img src="images/damien.jpg" alt="Second Project" width={300} />
              <h3>Project 2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                suscipit inventore eius? Earum illum hic deserunt iusto nemo
                quibusdam quo adipisci. Enim excepturi dignissimos eaque, illo
                nulla amet velit? Quos!
              </p>

              <a href="#">
                <button>Live</button>
              </a>

              <a href="#">
                <button>Github</button>
              </a>
            </div>
            <div>
              <img src="images/damien.jpg" alt="Third Project" width={300} />
              <h3>Project 3</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                suscipit inventore eius? Earum illum hic deserunt iusto nemo
                quibusdam quo adipisci. Enim excepturi dignissimos eaque, illo
                nulla amet velit? Quos!
              </p>

              <a href="#">
                <button>Live</button>
              </a>

              <a href="#">
                <button>Github</button>
              </a>
            </div>
            <div>
              <img src="images/damien.jpg" alt="Fourth Project" width={300} />
              <h3>Project 4</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                suscipit inventore eius? Earum illum hic deserunt iusto nemo
                quibusdam quo adipisci. Enim excepturi dignissimos eaque, illo
                nulla amet velit? Quos!
              </p>

              <a href="#">
                <button>Live</button>
              </a>

              <a href="#">
                <button>Github</button>
              </a>
            </div>
            <div>
              <img src="images/damien.jpg" alt="Fifth Project" width={300} />
              <h3>Project 5</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                suscipit inventore eius? Earum illum hic deserunt iusto nemo
                quibusdam quo adipisci. Enim excepturi dignissimos eaque, illo
                nulla amet velit? Quos!
              </p>

              <a href="#">
                <button>Live</button>
              </a>

              <a href="#">
                <button>Github</button>
              </a>
            </div>
            <div>
              <img src="images/damien.jpg" alt="Sixth Project" width={300} />
              <h3>Project 6</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                suscipit inventore eius? Earum illum hic deserunt iusto nemo
                quibusdam quo adipisci. Enim excepturi dignissimos eaque, illo
                nulla amet velit? Quos!
              </p>

              <a href="#">
                <button>Live</button>
              </a>

              <a href="#">
                <button>Github</button>
              </a>
            </div>
          </article>
          <article>
            <div>
              <h2>Contact</h2>
              <div>
                <h3>Get in touch</h3>
                <form>
                  <div>
                    <label htmlFor="name">Name</label>
                    <div>
                      <input type="text" id="name" name="name" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <div>
                      <input type="email" id="email" name="email" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message">Message</label>
                    <div>
                      <textarea id="message" name="message" rows={5} />
                    </div>
                  </div>
                  <button type="submit">Send</button>
                </form>
              </div>
            </div>
          </article>
        </main>
        <footer>
          <div>
            <h3>Follow Me</h3>
            <ul>
              <li>
                <a href="#">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <GitHubIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <EmailIcon />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p>Copyright &copy; 2023 - Damien Richcreek</p>
          </div>
        </footer>
        {/* <Typography variant="h4" component="h1" gutterBottom>
          Material UI - Next.js example in TypeScript
        </Typography> */}
        {/* <Link href="/about" color="secondary">
          Go to the about page
        </Link> */}
        {/* <ProTip />
        <Copyright /> */}
      </Box>
    </Container>
  );
}

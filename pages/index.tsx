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
import BasicModal from "../src/components/Modal";
import Modal from "../src/components/Modal";
import { useState } from "react";
import { project } from "../src/types";
import useSWR from "swr";
import Skills from "../src/components/Skills";
import Projects from "../src/components/Projects";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/staticdata", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  console.log("Projects in Index", data.data);

  return (
    <Container id="home">
      <Navigation />

      <main>
        <article id="about">
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
              My skills include HTML, CSS, JavaScript, React, Node.js, Express,
              MongoDB, and more.
            </p>
            <p>
              Check out my <Link href="/projects">projects</Link> to see some of
              my work.
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

        {/* Skills Section - This is where I want to use the skills data from the API */}
        <Skills skills={data.data.skills} />
        <Projects projects={data.data.projects} />
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
    </Container>
  );
}

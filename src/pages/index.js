import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h1>{config.heading}</h1>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <a href={`mailto:${config.email}`} className="button primary">
              Get in Touch
            </a>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            well&ndash;rounded, <br />
            refined front end development
          </h2>
          <p>
            Over ten years of industry experience in a collaborative environment  <br />
            with a focus on the front end, Drupal, and mentorship.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon solid fa-terminal major style1">
              <span className="label">DevOps</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-database major style1">
              <span className="label">Back end development</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style1">
              <span className="label">Front end development</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Multidisciplinary <br />
            perspective
          </h2>
          <p>
            Being a full&ndash;stack developer means approaching a feature with an understanding of the entire system.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Collaboration <br />
            and teamwork
          </h2>
          <p>
            Agency life has given me experience in cross-functional teams with developers, UX architects, UI designers, and stakeholders.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Mentorship <br />
            and Leadership
          </h2>
          <p>
          Fostering individual and team growth through pull requests, code reviews, pair programming, and presentations.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Development skills</h2>
          <p>
          Front end with HTML, Sass, and JavaScript is my bread and butter with knowledge of various PHP solutions, JS frameworks, and more sprinkled in.
          </p>
        </header>
        <ul className="features">
          <li className="icon brands fa-html5">
            <h3>Front end</h3>
            <p>
            Expertise in developing cross&ndash;browser using a <b>mobile&ndash;first</b> approach and utilizing <b>HTML</b>, <b>Sass</b>, <b>jQuery</b>, and vanilla <b>JavaScript</b>.
            </p>
          </li>
          <li className="icon brands fa-bootstrap">
            <h3>CSS Frameworks</h3>
            <p>
            Extensive experience with <b>Bootstrap</b>, including customizing from the Sass source and <b>custom implementations</b>.
            </p>
          </li>
          <li className="icon brands fa-drupal">
            <h3>Back end</h3>
            <p>
            Concentrating on <b>Drupal 8/9</b> with working knowledge of <b>Drupal 7</b>, <b>WordPress</b>, and <b>Laravel</b>.
            </p>
          </li>
          <li className="icon solid fa-universal-access">
            <h3>a11y</h3>
            <p>
            Well&ndash;versed in <b>accessibility audits</b>, best practices, <b>automated and manual testing</b>, content editor training, and team education.

            </p>
          </li>
          <li className="icon brands fa-git-alt">
            <h3>git</h3>
            <p>
            Advocate for structure through <b>feature branches</b>, meaningful commit messages, <b>pull requests</b>, code reviews, and <b>rebasing</b>.
            </p>
          </li>
          <li className="icon brands fa-jira">
            <h3>Project Management Software</h3>
            <p>
            Process know&ndash;how with <b>Jira</b> workflows in an <b>agile</b> environment and knowledge of <b>basecamp</b> for collaboration.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Let's get in touch</h2>
        </header>
        <ul className="actions stacked">
          <li>
            <a href={`mailto:${config.email}`} className="button fit primary">
              Email me
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;

import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <article id="main">
      <header>
        <h2>Contact</h2>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <section>
            <p>Shoot me a message</p>
            <form name="contact" method="POST" data-netlify="true">
              <div className="row gtr-uniform">
                <div className="col-6 col-12-xsmall">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    defaultValue=""
                    placeholder="Name"
                  />
                </div>
                <div className="col-6 col-12-xsmall">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    defaultValue=""
                    placeholder="Email"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Enter your message"
                    rows="6"
                  ></textarea>
                </div>
                <div className="col-12">
                  <ul className="actions">
                    <li>
                      <input
                        type="submit"
                        value="Send Message"
                        className="primary"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </section>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;

import React from 'react';

function About() {
  return (
    <section>
      <div className="d-flex">
        <div className="skew section-heading">
          <h3 className="anti-skew">About Me</h3>
        </div>
      </div>
      <div className="w-100">
        <div className="bio-image"></div>
        <article className="pt-4 px-3 bio-text">
          <p className="py-2">
            I am a full stack developer with a prior background in translation,
            working cross culturally in the South Pacific. I have a prior M.A.
            degree with a certificate in linguistics. I have recently obtained a
            certificate in full stack development from Vanderbilt University.
          </p>
          <p className="py-2">
            I have both front end and back end skills including React, Node.js,
            Express.js, MySQL, and MongoDB. For a full list of my skills as a
            developer, click the link to my resume above.
          </p>
          <p className="py-2">
            My work as a linguist required creative problem-solving skills and a
            focus on consumer impact. I have experience managing multiple
            projects and teams. I work hard and strive for excellence in
            everything that I do. These same skills serve me well when it comes
            to meeting client expectations for their web needs.
          </p>
          <p className="py-2">
            When I am not working, I enjoy spending time with my family, hiking,
            fishing, gaming, and practicing martial arts.
          </p>
          <p className="py-2">
            Click the link to my porfolio section to see examples of my work.{' '}
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;

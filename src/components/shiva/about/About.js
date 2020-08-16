import React from "react";
import img17 from "./CS.jpeg";
import "./style.css";
export default function About() {
  return (
    <div
      className="abRoot"
      style={{ maxHeight: "100%" }}
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <h1
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        className="nag"
      >
        About <b>Us</b>
      </h1>
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        className="para"
      >
        <p>
          Founded in 2020,Avasyutech is a privately held company headquartered
          in Warangal,Telangana
        </p>
      </div>
      <div className="about1">
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="about2"
        >
          <p>
            Confusion in choosing career, peer pressure, lack of guidance and
            many other daunting pokes...! These are mostly seen among students
            of this era.
          </p>
          <p>
            To curb all these, AVASYU as an EdTech start-up has a platform to
            ease students in choosing their desired career and provide guidance
            accordingly. We do so by offering a self assessment questionnaire
            trivia in the choice of their career picked.
          </p>
          <p>
            The prime motive of our start is to unchain students from the self
            and societal ties they are engulfed into and liberate themselves to
            walk into their desired career roles.
          </p>
          <p>
            Currently, the trend of hiring graduates is based on the skills that
            the job market demands rather than the skills an individual possess.
            We bash this swing through a quirky flip of the trend.
          </p>
          <p>
            We help the students in identifying their capabilities and concern
            on the upgrade of skills they possess to drive him/her towards the
            opportunities in their respective fields. This enables them to
            sustain and prosper in their chosen career paths.
          </p>
          <p>
            Innovation in the EdTech space is our motto and we are focussed to
            reform the path through AVASYU
          </p>
        </div>
        <div className="about30">
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            className="about33"
          >
            <img src={img17} />
          </div>
        </div>
      </div>
      <div className="us">
        <div className="us1">
          <h2
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <b>Our</b> Mission
          </h2>
          <p
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            We aim to provide our platform as a basis to educational
            institutions for maintaining a credit record in the strong areas of
            their students. It can be carried forward to claim opportunities to
            students whenever necessitated. This way of record caters the
            institutes mostly at the time of campus placements.
          </p>
        </div>
        <div className="us2">
          <h2
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <b>Our</b> Vision
          </h2>
          <p
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            The pivotal role of AVASYU is to assist students to roll forward and
            drop their coveted career seed. This envisions them to acheive their
            goals.Our prime intent is to extract the innate potential in an
            individual through our platform and edify them to prosper in their
            respective career paths.
          </p>
        </div>
        <div className="us3">
          <h2
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <b>Our</b> Values
          </h2>
          <p
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            AVASYU platform nurtures students in a way capable to project their
            efficacy. We offer the best guidance and learning ambience, ensuring
            an inject of 'get-set-go' stimuli.Students enrolled to self-assess
            on AVASYU will always have our back to support.
          </p>
        </div>
      </div>
    </div>
  );
}

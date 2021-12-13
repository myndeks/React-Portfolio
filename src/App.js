import React, { useState } from "react";

import Separator from "./components/separator";
import Header from "./components/header";
import Pill from "./components/pill";
import ContentBox from "./components/content-box";
import SocialsList from "./components/socials-list";
import Experience from "./components/experience";
import ContactBlock from "./components/contact-block";

import data from "./data";

import "./App.css";

function App() {
  const [language, setLanguage] = useState("en");
  const { links, about, education, skills, technicalSkills, expierence, contacts } = data[language];

  return (
    <div className="app">
      <Header language={language} setLanguage={setLanguage} />
      <main className="main">
        <section className="section">
          <ContentBox className="flex-1" title={links.title}>
            <SocialsList items={links.items} />
          </ContentBox>
          <ContentBox className="flex-2" title={about.title}>
            <p>{about.body}</p>
          </ContentBox>
        </section>
        <section className="section">
          <ContentBox className="flex-1" title={education.title}>
            {education.items.map(({ name, period, degree }, i, arr) => (
              <React.Fragment key={i}>
                <div className="school-info">
                  <p>{name}</p>
                  <p>{period}</p>
                  <p>{degree}</p>
                </div>
                {arr.length - 1 !== i && <Separator isShort />}
              </React.Fragment>
            ))}
          </ContentBox>
          <div className="d-flex flex-2">
            <ContentBox title={skills.title} className="flex-1 pills-box">
              {skills.items.map((item, i) => (
                <Pill color={item.color}>{item.name}</Pill>
              ))}
            </ContentBox>
            <ContentBox className="flex-1 pills-box" title={technicalSkills.title}>
            {technicalSkills.items.map((item, i) => (
              <Pill color={item.color}>{item.name}</Pill>
            ))}
            </ContentBox>
          </div>
        </section>
        <section className="section">
          <ContentBox className="flex-1" title={expierence.title}>
            <div className="content-box__content job-experience">
            {expierence.items.map(({ company, title, period, achievements, body }, i) => (
                <Experience
                  key={i}
                  company={company}
                  title={title}
                  period={period}
                  achievements={achievements}
                >
                  {body}
                </Experience>
              ))}
            </div>
          </ContentBox>
        </section>
      </main>
      <footer className="footer">
        <Separator />
        <div className="contacts">
          {contacts.items.map((data, i) => (
            <ContactBlock key={i} {...data} />
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;

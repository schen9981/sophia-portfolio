import React from "react";
import resumeFile from './files/sophiachen-brownu.pdf';

const socialSites = [
  {
    link: "mailto:schen9981@gmail.com",
    icon: "header far fa-envelope fa-2x"
  },
  {
    link: "https://github.com/schen9981",
    icon: "header fab fa-github fa-2x"
  },
  {
    link: "https://www.linkedin.com/in/sophiachen9981/",
    icon: "header fab fa-linkedin-in fa-2x"
  },
  {
    link: resumeFile,
    icon: "header far fa-file fa-2x"
  },
  {
    link: "https://medium.com/@sophia_chen1",
    icon: "header fab fa-medium-m fa-2x"
  }
];

const Header = () => (
  <header className="masthead d-flex">
    <div className="container text-center my-auto">
      <div className="name-content">
        <h1 className="mb-1">Sophia Chen</h1>
        <h3 className="mb-5">
          {socialSites.map((site,index)=>(
            <li className="list-inline-item" key={`social_${index}`}>
              <a className="social-link rounded-circle text-white mr-3" href={site.link}>
                <i className={site.icon} />
              </a>
            </li>
          ))}
        </h3>
      </div>
    </div>
    <div className="overlay" />
  </header>
);
export default Header;

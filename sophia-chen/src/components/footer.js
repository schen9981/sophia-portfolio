import React from "react";
import resumeFile from './files/sophiachen-brownu.pdf';

const socialSites = [
  {
    link: "mailto:schen9981@gmail.com",
    icon: "far fa-envelope",
    name: "envelope"
  },
  {
    link: "https://github.com/schen9981",
    icon: "fab fa-github",
    name: "github"
  },
  {
    link: "https://www.linkedin.com/in/sophiachen9981/",
    icon: "fab fa-linkedin-in",
    name: "linkedin"
  },
  {
    link: resumeFile,
    icon: "far fa-file",
    name: "file"
  },
  {
    link: "https://medium.com/@sophia_chen1",
    icon: "fab fa-medium-m",
    name: "medium"
  }
];
const FooterSection = () => (
  <footer className="footer text-center">
    <div className="container">
      <ul className="list-inline mb-5">
      {socialSites.map((site,index)=>(
        <li className={`list-inline-item ${site.name}`} key={`social_${index}`}>
          <a className="social-link rounded-circle text-white mr-3" href={site.link}>
            <i className={site.icon} />
          </a>
        </li>
      ))}
      </ul>
      <p className="text-muted small mb-0">
        Copyright &copy; Sophia Chen 2018
      </p>
    </div>
  </footer>
);
export default FooterSection;

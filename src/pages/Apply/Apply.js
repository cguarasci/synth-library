import React, { useState, useEffect } from 'react';
import './Apply.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import applicationsInfo from '../../utils/applications.json';

const Apply = () => {
  const [applicationsData, setApplicationsData] = useState(null);

  document.documentElement.style.setProperty('--body-background-color', '#E4D3FF');

  useEffect(() => {
    setApplicationsData(applicationsInfo);
  }, []);

  const formLink = 'https://docs.google.com/forms/d/e/1FAIpQLSfWhKX-L4MtXFn49GVEZ-Clu23JjqgYzA7KtN06II6qDtsyCg/viewform';

  return (
    <div>
      <Header activePage="Apply" />
      <main>
        <div className="apply-content">
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img className={"stoplight " + [applicationsData?.['glow'][applicationsData?.['status']]]} width="60px" style={{transform: "rotate(270deg)"}} src={process.env.PUBLIC_URL + '/images/icons/' + applicationsData?.['stoplight'][applicationsData?.['status']]} alt="Green Stoplight" />
            <h2 style={{margin: 0}}>{applicationsData?.['phrase'][applicationsData?.['status']]}</h2>
          </div>
          <p>Please use the email address you would like to use for your account.</p>
          <a className="new-window-button" href={formLink} target="_blank" rel="noopener noreferrer">Open in New Window</a>
          <iframe src={formLink + '?embedded=true'} width="100%" height="725" frameborder="0" title="Application Form">Loading…</iframe>
        </div>
        <Footer style={{width: 'fit-content'}} />
      </main>
    </div>
  );
};

export default Apply;

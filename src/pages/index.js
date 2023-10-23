import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  // Define a style object for the banner background
  const bannerBackgroundStyle = {
    backgroundImage: `url('https://4kwallpapers.com/images/walls/thumbs_2t/11090.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 50% darker with 0.5 opacity
    color: 'white', // Set the text color to white
    height: '1000px', // Set the header height to 1000 pixels (adjust as needed)
    position: 'absolute', // Position the header absolutely
    top: '0', // Place it at the top of the page
    left: '0',
    right: '0',
    zIndex: '1', // Ensure it appears behind the navigation bar
  };

  // Adjust the marginTop value for spacing between the banner and content
  const contentStyle = {
    marginTop: '875px', // Add spacing equal to the banner height
  };

  // Define styles for the button and title text
  const buttonStyle = {
    borderRadius: '100px', // Rounded corners for the button
    fontSize: '24px', // Larger font size for the button text
  };

  const titleTextStyle = {
    fontSize: '75px', // Larger font size for the title text
  };

  return (
    <div>
      <div className="navbar">
        {/* Your transparent navigation bar content */}
      </div>
      <header className={clsx('hero hero--primary', styles.heroBanner)} style={bannerBackgroundStyle}>
        <div className="container">
          <h1 className="hero__title" style={titleTextStyle}>
            {siteConfig.title}
          </h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
              style={buttonStyle}>
              Proceed to Docs
            </Link>
          </div>
        </div>
      </header>
      <div style={contentStyle}>
        {/* Your page content below the banner */}
      </div>
    </div>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}

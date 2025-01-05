// Updated Home Page Component
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  const bannerBackgroundStyle = {
    backgroundImage: `url('https://4kwallpapers.com/images/walls/thumbs_2t/11090.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    height: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  const titleTextStyle = {
    fontSize: '50px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const buttonStyle = {
    borderRadius: '25px',
    fontSize: '18px',
    padding: '10px 30px',
    backgroundColor: '#5c6bc0',
    color: 'white',
    textDecoration: 'none',
    marginTop: '20px',
  };

  return (
    <header style={bannerBackgroundStyle}>
      <div>
        <h1 style={titleTextStyle}>{siteConfig.title}</h1>
        <p>{siteConfig.tagline}</p>
        <Link
          style={buttonStyle}
          to="/docs/intro">
          Get Started
        </Link>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

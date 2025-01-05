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
    backgroundColor: 'var(--ifm-background-color)', // Adapts to light or dark mode
    color: 'var(--ifm-color-text-primary)',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  const titleTextStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const buttonStyle = {
    borderRadius: '20px',
    fontSize: '16px',
    padding: '10px 20px',
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
      <main style={{ height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <HomepageFeatures />
        <footer style={{ padding: '1rem', textAlign: 'center' }}>
          &copy; {new Date().getFullYear()} {siteConfig.title}. All rights reserved.
        </footer>
      </main>
    </Layout>
  );
}

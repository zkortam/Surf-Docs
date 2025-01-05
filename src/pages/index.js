// Clean and Aesthetic Home Page for Surf Docs
import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: 'var(--ifm-background-color)', // Adapts to light/dark mode
    color: 'var(--ifm-color-text-primary)',
    padding: '1rem',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    margin: '0 0 1rem',
  },
  subtitle: {
    fontSize: '20px',
    margin: '0 0 2rem',
    color: 'var(--ifm-color-secondary)',
  },
  button: {
    backgroundColor: 'var(--ifm-color-primary)',
    color: 'white',
    padding: '12px 24px',
    fontSize: '18px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    textDecoration: 'none',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  buttonHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
  },
};

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{siteConfig.title}</h1>
      <p style={styles.subtitle}>{siteConfig.tagline}</p>
      <Link
        to="/docs/intro"
        style={styles.button}
        onMouseEnter={(e) => {
          e.target.style.transform = styles.buttonHover.transform;
          e.target.style.boxShadow = styles.buttonHover.boxShadow;
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = '';
          e.target.style.boxShadow = '';
        }}>
        Explore Surf Docs
      </Link>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Explore the power of Surf Docs">
      <HomepageHeader />
    </Layout>
  );
}

import React from 'react';
import PropTypes from 'prop-types'; // For prop validation
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

// Define styles as constants
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

// Define a reusable Button component
function AnimatedButton({ to, children }) {
  const handleMouseEnter = (e) => {
    e.target.style.transform = styles.buttonHover.transform;
    e.target.style.boxShadow = styles.buttonHover.boxShadow;
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = '';
    e.target.style.boxShadow = '';
  };

  return (
    <Link
      to={to}
      style={styles.button}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {children}
    </Link>
  );
}

// Validate AnimatedButton props
AnimatedButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function HomepageHeader({ siteConfig }) {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{siteConfig.title}</h1>
      <p style={styles.subtitle}>{siteConfig.tagline}</p>
      <AnimatedButton to="/docs/intro">Explore Surf Docs</AnimatedButton>
    </div>
  );
}

HomepageHeader.propTypes = {
  siteConfig: PropTypes.object.isRequired,
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Explore the power of Surf Docs">
      <HomepageHeader siteConfig={siteConfig} />
    </Layout>
  );
}

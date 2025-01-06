import React from 'react';
import PropTypes from 'prop-types'; // For prop validation
import clsx from 'clsx';
import styles from './styles.module.css';

// Add sample data to FeatureList
const FeatureList = [
  {
    title: 'Feature One',
    description: 'This is the description for feature one.',
    Svg: () => <svg height="100" width="100"><circle cx="50" cy="50" r="40" fill="blue" /></svg>,
  },
  {
    title: 'Feature Two',
    description: 'This is the description for feature two.',
    Svg: () => <svg height="100" width="100"><rect width="100" height="100" fill="green" /></svg>,
  },
  {
    title: 'Feature Three',
    description: 'This is the description for feature three.',
    Svg: () => <svg height="100" width="100"><polygon points="50,15 90,85 10,85" fill="red" /></svg>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg ? <Svg className={styles.featureSvg} role="img" /> : <div>No SVG Available</div>}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

// Prop validation for Feature component
Feature.propTypes = {
  Svg: PropTypes.func,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

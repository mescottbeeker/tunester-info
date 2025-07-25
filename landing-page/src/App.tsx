// src/App.tsx
import * as stylex from '@stylexjs/stylex';
import { useState, useCallback } from 'react';

const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f9fafb',
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 1rem',
    background: 'linear-gradient(135deg, #3b82f6, #1e3a8a)',
    color: '#ffffff',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: { default: '2.5rem', '@media (min-width: 768px)': '3.5rem' },
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
    maxWidth: '600px',
  },
  ctaButton: {
    padding: '0.75rem 2rem',
    fontSize: '1.125rem',
    fontWeight: '600',
    backgroundColor: '#ffffff',
    color: '#1e3a8a',
    borderRadius: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#e5e7eb',
    },
  },
  features: {
    display: 'grid',
    gridTemplateColumns: {
      default: '1fr',
      '@media (min-width: 768px)': 'repeat(3, 1fr)',
    },
    gap: '2rem',
    padding: '4rem 1rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  featureCard: {
    backgroundColor: '#ffffff',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  featureTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  featureDescription: {
    fontSize: '1rem',
    color: '#4b5563',
  },
});

interface FeatureCardProps {
  title: string;
  description: string;
}

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div {...stylex.props(styles.featureCard)}>
      <h3 {...stylex.props(styles.featureTitle)}>{title}</h3>
      <p {...stylex.props(styles.featureDescription)}>{description}</p>
    </div>
  );
}

function LandingPage() {
  const [isClicked, setIsClicked] = useState(false);

  const handleCtaClick = useCallback(() => {
    setIsClicked(true);
    console.log('CTA clicked!');
  }, []);

  return (
    <div {...stylex.props(styles.container)}>
      <section {...stylex.props(styles.hero)}>
        <h1 {...stylex.props(styles.heroTitle)}>Welcome to Our App</h1>
        <p {...stylex.props(styles.heroSubtitle)}>
          Discover a modern, fast, and scalable React 19 application built with TypeScript and StyleX.
        </p>
        <button {...stylex.props(styles.ctaButton)} onClick={handleCtaClick}>
          {isClicked ? 'Thanks for Clicking!' : 'Get Started'}
        </button>
      </section>
      <section {...stylex.props(styles.features)}>
        <FeatureCard
          title="Fast"
          description="Built with Vite for lightning-fast development and production builds."
        />
        <FeatureCard
          title="Type-Safe"
          description="TypeScript ensures robust, error-free code with strong typing."
        />
        <FeatureCard
          title="Scalable"
          description="StyleX's atomic CSS keeps your styles lean and maintainable."
        />
      </section>
    </div>
  );
}

export default function App() {
  return <LandingPage />;
}
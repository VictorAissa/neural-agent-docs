import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <img
                    src="img/neural-agent-logo.png"
                    alt="NeuralAgent Logo"
                    className={styles.heroLogo}
                    width="200"
                    height="200"
                />
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro"
                    >
                        Explorer la documentation
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title} - Framework d'agents IA autonomes`}
            description="NeuralAgent™ est un framework d'agents autonomes qui combine l'IA générative avancée avec des capacités d'action autonome, développé par Yann Coudrah."
        >
            <HomepageHeader />
            <main>
                <div className="container margin-vert--lg">
                    <div className="row">
                        <div className="col col--8 col--offset-2">
                            <div className="text--center margin-bottom--lg">
                                <h2>
                                    Une architecture avancée pour des agents IA
                                    autonomes
                                </h2>
                                <p className="padding-horiz--md">
                                    Conçu par <strong>Yann Coudrah</strong>,
                                    NeuralAgent™ représente une avancée
                                    significative dans le domaine des agents IA
                                    autonomes. Le projet a débuté en novembre
                                    2023 comme une initiative de recherche
                                    interne et a rapidement évolué vers une
                                    plateforme complète pour la création, la
                                    gestion et le déploiement d'agents IA
                                    autonomes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}

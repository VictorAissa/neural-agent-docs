import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Architecture Multi-Agent',
        emoji: '🤖🤖🤖',
        description: (
            <>
                Coordination de plusieurs agents spécialisés pour résoudre des
                problèmes complexes avec une planification hiérarchique
                adaptative.
            </>
        ),
    },
    {
        title: 'Mémoire Contextuelle Avancée',
        emoji: '🧠💭',
        description: (
            <>
                Capacité de maintenir le contexte sur de longues périodes
                d'interaction grâce au système de mémoire à multiples niveaux.
            </>
        ),
    },
    {
        title: "Intégration d'Outils via API",
        emoji: '🔌🔧',
        description: (
            <>
                Connexion transparente avec des applications tierces pour
                permettre aux agents d'interagir avec le monde réel.
            </>
        ),
    },
];

function Feature({ emoji, title, description }) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <div className={styles.featureEmoji}>{emoji}</div>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

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

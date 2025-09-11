import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: ReactNode;
    link: string;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Клиент',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                
            </>
        ),
        link: '/account/client'
    },
    {
        title: 'Куратор',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                
            </>
        ),
        link: '/account/service'
    },
    {
        title: 'Сервисный инженер',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                
            </>
        ),
        link: '/account/curator'
    },
];

function Feature({ title, Svg, description, link }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <Link to={link}>

            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
            </Link>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
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

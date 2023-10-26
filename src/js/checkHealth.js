export default function getIndicator(hero) {
    const indicators= {
        "healthy": [50, 100],
        "wounded": [15, 49],
        "critical": [0, 14]
    }
    const health = ["healthy", "wounded", "critical"]
    return health.filter(marker => hero.health >= indicators[marker][0] && hero.health <= indicators[marker][1])[0];
};
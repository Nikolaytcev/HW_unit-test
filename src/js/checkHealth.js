export function getIndicator(hero) {
    const indicators= {
        "healthy": [50, 100],
        "wounded": [15, 49],
        "critical": [0, 14]
    };
    const health = Object.keys(indicators);
    return health.filter(marker => hero.health >= indicators[marker][0] && hero.health <= indicators[marker][1])[0];
}

export function sortHeroesForhealth(heroes) {
    return heroes.sort((h1, h2) => h1.health < h2.health ? 1 : -1);
}
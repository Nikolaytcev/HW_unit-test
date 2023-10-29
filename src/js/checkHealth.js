function getHealth({health}) {
    if (health <= 15) {
      return 'critical'
    }
    if (health <= 50) {
      return 'wounded'
    }
    return "healthy"
  }

export function getIndicator(hero) {
    return getHealth(hero);
}

export function sortHeroesForhealth(heroes) {
    return heroes.sort((h1, h2) => h1.health < h2.health ? 1 : -1);
}
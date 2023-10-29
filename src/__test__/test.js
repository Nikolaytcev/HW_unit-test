import { getIndicator, sortHeroesForhealth } from "../js/checkHealth";

test.each([
    [{name: 'Маг', health: 90}, "healthy"],
    [{name: 'Лучник', health: 45}, "wounded"],
    [{name: 'Орк', health: 10}, "critical"]
])(
    (`Health of %s match %s`), (hero, health) => {
        expect(getIndicator(hero)).toBe(health);
    })

test("testing sort function", () => {
    const heroes = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ];
    const result = sortHeroesForhealth(heroes);
    expect(result).toEqual([
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ])
});
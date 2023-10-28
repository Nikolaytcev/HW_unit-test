import { getIndicator, sortHeroesForhealth } from "../js/checkHealth";

test("testing health of hero", () => {
    const result = getIndicator({name: 'Маг', health: 90});
    expect(result).toBe("healthy");
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
import getIndicator from "../js/checkHealth";

test("testing health indicator of hero", () => {
    const result = getIndicator({name: 'Маг', health: 90});
    expect(result).toBe("healthy");
})


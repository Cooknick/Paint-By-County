import colorizeCounties, { getCountyValue } from '.';
const countyList = [
    {
        name: 'County 1',
        population: 1000,
        tempSet: [
            {
                month: "JAN",
                min:  39.40,
                max: 61.10
            },
            {
                month: "FEB",
                min: 49.60,
                max: 70.30
            }
        ] 
    },
    {
        name: 'County 2',
        population: 2000,
        tempSet: [
            {
                month: "JAN",
                min:  20,
                max: 80
            },
            {
                month: "FEB",
                min: 30,
                max: 90,
            }
        ] 
    }
]
const setAllCounty = jest.fn();
const dataGuide = [
    {
        label: 'Population',
        tiers: [1,2,3,4], 
    },
    {
        label: 'Temperatures',
        tiers: [5,6,7,8], 
    }
]
const singleCounty = {
    population: 1000,
    tempSet: [
        {
            month: "JAN",
            min:  39.40,
            max: 61.10
        },
        {
            month: "FEB",
            min: 49.60,
            max: 70.30
        }
    ]
}
describe('colorizeCounties', () => {
    it('returns Populations', async () => {
        const result = await colorizeCounties(countyList, dataGuide, ['Population'] );
        expect(result).toEqual(expect.arrayContaining([
            {
                color: 'rgb(82, 82, 103)',
                ...countyList[0]
            }
        ]))
    })
    it('returns Temperatures', async () => {
        const result = await colorizeCounties(countyList, dataGuide, ['Population'] );
        expect(result).toEqual(expect.arrayContaining([
            {
                color: 'rgb(82, 82, 103)',
                ...countyList[0]
            }
        ]))
    })
})

describe('getCountyValue', () => {
    it('returns Temperature', async () => {
        const result = await getCountyValue(singleCounty, ['Temperature', 'JAN']);
        expect(result).toBe(50);
    })
    it('returns Population', async () => {
        const result = await getCountyValue(singleCounty, ['Population']);
        expect(result).toBe(1000);
    })
})
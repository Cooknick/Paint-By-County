import _ from 'lodash';
import colorSet from '../color-set/darkgreen-yellow.json'

export function getCountyValue(county, selectedData){
    switch(selectedData[0]){
        case 'Temperature':
            const tempSet = county.tempSet.filter(set => set.month === selectedData[1])[0];
            if(tempSet){
                const avgTemp = _.mean([Math.round(tempSet.max), Math.round(tempSet.min)]);
                return avgTemp;
            } else {
                return 0
            }
        default:
            return county[selectedData[0].toLowerCase()]
    }
}

export default async function colorizeCounties(countyList, guide, selectedData) {
    let freshList;
    const brackets = guide.filter(dataSet => dataSet.label === selectedData[0]);

    freshList = await countyList.map( county => {
        let retainedStep = 0;

        const countyValue = getCountyValue(county, selectedData)

        brackets[0].tiers.forEach((step, i) => {
            if (step < countyValue) {
                retainedStep = i
            }
        })

        return { ...county, color: colorSet[retainedStep] };
    })

    return freshList
}

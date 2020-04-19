import stateNames from '../data-sets/state-list.json';

const findFullStateName = (regionName) => {
    const stateAbbr = regionName.slice(-2, regionName.length);
    return stateNames[0][stateAbbr];
}

const findCountyName = (regionName) => {
    return regionName.slice(0, regionName.length - 4)
}

const isLouisiana = (stateName) => {
    switch(stateName){
        case 'Louisiana':
            return ' Parish' 
        case 'Alaska':
            return '';
        default:
            return ' County'
    }
}

const findFullRegionName = (regionName) => {
    const countyName = findCountyName(regionName);
    const stateName = findFullStateName(regionName);
    return `${countyName}${isLouisiana(stateName)}, ${stateName}`;
}

export { findFullRegionName, findCountyName, findFullStateName, isLouisiana };
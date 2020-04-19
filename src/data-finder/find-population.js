import _ from 'lodash';
import { maskNumber } from '../mask-numbers';
import populations from '../data-sets/population.json'

export default function findPopulation(region) {
    const filteredPopulation = populations.filter(state => _.includes(state, region));
    const flatPopulation = _.flatten(filteredPopulation)[1];

    return parseInt(flatPopulation) > 100 ? maskNumber(flatPopulation) : '< 100';
}

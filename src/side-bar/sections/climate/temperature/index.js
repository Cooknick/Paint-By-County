import React from 'react';
import _ from 'lodash';
import { selectData } from '../../../../ducks';
import { connect } from 'react-redux';

function calcHeight(min, max) {
    const delta = max - min;
    return Math.round(delta) * 4;
}

const Temperature = ({ tempSet, selectData, selectedData }) => {
    if (tempSet.length > 0) {
        return (
            <div className="tempRange">
                {tempSet.map(row => {

                    let { min, max, month } = row;
                    max = Math.round(max);
                    min = Math.round(min);
                    const rangeHeight = calcHeight(min, max);

                    const isActive = selectedData[1] === month ? 'active' : 'inactive'

                    return (
                        <div className={`rangeWrapper ${isActive}`} onClick={() => selectData(['Temperature', month])} style={{ top: `${100 - max}px` }}>
                            <div className="rangeText">{max}</div>
                            <div className="rangeScale" style={{ height: rangeHeight }}>{month}</div>
                            <div className="rangeText">{min}</div>
                        </div>
                    )
                }
                )}
            </div>
        )
    }
    return (
        <div className="tempRange">
            <div className="placeholderOverlay">
                <div className="noData">No Data Available</div>
                <div className="contributeToData"><a href="http://github.com">Contribute to Our Data</a></div>
            </div>
        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    selectData: data => dispatch(selectData(data)),
})

const mapStateToProps = state => ({
    selectedData: _.get(state, 'selectedData'),
    tempSet: _.get(state, 'lockedCounty.tempSet') || _.get(state, 'hoveredCounty.tempSet', []),
})

export default connect(mapStateToProps, mapDispatchToProps)(Temperature);
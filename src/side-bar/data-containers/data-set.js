import React, { useState } from 'react';
import { connect } from 'react-redux';

import { SourceButton, SourceBody } from '../source-attribute'

const DataSet = ({ setName, guide, DataComponents}) => {
    
    const [sourceView, setSourceView] = useState(false);
    const sourceSet = guide.filter(set => set.category === setName);

    return (
        <div className="dataSet">
            <div className="dataSetHeader">
                <div className="headerName">General</div>
                <SourceButton setSourceView={setSourceView} sourceView={sourceView} />
            </div>
            {sourceView ? <SourceBody sourceSet={sourceSet} /> : <DataComponents /> }
        </div>
    )
}

const mapStateToProps = state => ({
    guide: state.guide || [],
})

export default connect(mapStateToProps, null)(DataSet);
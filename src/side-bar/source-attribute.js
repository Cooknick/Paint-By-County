import React from 'react';

const SingleSource = ({ label, source }) => {
    return (
        <div>
            <span>{label}:</span> <br />
            {source.map(sourceList => {
                return (
                    <span className="footnote">{sourceList}</span>
                )
            })}
        </div>
    )
}

const SourceBody = ({ sourceSet }) => {
    return (
        <div className="sourceWrapper">
            {sourceSet.map(singleSource => {
                return (
                    <SingleSource source={singleSource.source} label={singleSource.label} />
                )
            })}
        </div>
    )
}

const SourceButton = ({ sourceView, setSourceView }) => {
    return (
        <div className="headerSource" onClick={() => setSourceView(!sourceView)}>{sourceView ? 'Data' : 'Source'}</div>
    )
}

export { SourceButton, SourceBody };
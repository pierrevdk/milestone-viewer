import React from 'react';

export default function Timeline(props, context) {
    const timeline = props.timeline.map((moment) => moment.date);
    const location = context.history.getCurrentLocation();

    let previousLink;
    if (props.moment > 0) {
        previousLink = context.history.createHref({
            pathname: location.pathname,
            query: { moment: props.moment - 1 },
        });
    }

    let nextLink;
    if (props.moment + 1 < timeline.length) {
        nextLink = context.history.createHref({
            pathname: location.pathname,
            query: { moment: props.moment + 1 },
        });
    }

    return (
        <div className="timeline">
            <a href={previousLink}>Previous</a>
            <span>{timeline[props.moment]} ({props.moment + 1} / 6)</span>
            <a href={nextLink}>Next</a>
        </div>
    );
}

Timeline.propTypes = {
    timeline: React.PropTypes.array.isRequired,
    moment: React.PropTypes.number.isRequired,
};

Timeline.contextTypes = {
    history: React.PropTypes.object,
};

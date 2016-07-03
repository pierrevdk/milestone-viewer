import React from 'react';

export default function Timeline(props, context) {
    const { timeline, moment } = props;
    const location = context.history.getCurrentLocation();

    let previousLink;
    let previousClass;
    if (moment > 0) {
        previousLink = context.history.createHref({
            pathname: location.pathname,
            query: { moment: moment - 1 },
        });
    } else {
        previousClass = 'disabled';
    }

    let nextLink;
    let nextClass;
    if (moment + 1 < timeline.length) {
        nextLink = context.history.createHref({
            pathname: location.pathname,
            query: { moment: moment + 1 },
        });
    } else {
        nextClass = 'disabled';
    }

    return (
        <div className="timeline">
            <a href={previousLink} className={previousClass}>← Previous</a>
            <div>{timeline[moment]} • {moment + 1}/6</div>
            <a href={nextLink} className={nextClass}>Next →</a>
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

import React from 'react';

export default function Timeline(props, context) {
    const { timeline, moment } = props;
    const location = context.history.getCurrentLocation();

    let firstLink;
    let firstClass;
    let previousLink;
    let previousClass;
    if (moment > 0) {
        previousLink = context.history.createHref({
            pathname: location.pathname,
            query: { moment: moment - 1 },
        });

        firstLink = context.history.createHref({
            pathname: location.pathname,
            query: { moment: 0 },
        });
    } else {
        previousClass = 'disabled';
        firstClass = 'disabled';
    }

    let lastLink;
    let lastClass;
    let nextLink;
    let nextClass;
    if (moment + 1 < timeline.length) {
        nextLink = context.history.createHref({
            pathname: location.pathname,
            query: { moment: moment + 1 },
        });

        lastLink = context.history.createHref({
            pathname: location.pathname,
            query: { moment: timeline.length - 1 },
        });
    } else {
        nextClass = 'disabled';
        lastClass = 'disabled';
    }

    return (
        <div className="timeline">
            <a href={firstLink} className={firstClass}>First</a>
            <a href={previousLink} className={previousClass}>← Previous</a>
            <a href={nextLink} className={nextClass}>Next →</a>
            <a href={lastLink} className={lastClass}>Last</a>
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

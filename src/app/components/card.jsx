import React from 'react';
import assign from 'lodash.assign';

function getStatusSummary(cards, defaultData) {
    return cards.reduce((data, card) => {
        data = assign({}, data);
        if (card.status) {
            data[card.status] = data[card.status] + 1;
            data.total = data.total + 1;
        } else {
            data = getStatusSummary(card.cards, assign({}, data));
        }
        return data;
    }, defaultData);
}

export default function Card(props, context) {
    let className = 'card';
    let cards = null;
    let link;
    const query = context.history.getCurrentLocation().query;
    if (!props.cards || props.cards.length === 0) {
        className = `${className} status-${props.status}`;
        link = null;
    } else {
        link = context.history.createHref({
            pathname: `${props.urlPrefix}/${props.index}`,
            query,
        });

        cards = getStatusSummary(props.cards, {
            todo: 0,
            doing: 0,
            done: 0,
            dropped: 0,
            total: 0,
        });
        cards.todo = (cards.todo / cards.total) * 100;
        cards.doing = (cards.doing / cards.total) * 100;
        cards.done = (cards.done / cards.total) * 100;
        cards.dropped = (cards.dropped / cards.total) * 100;

        cards = [
            <div
                key="done"
                className="status status-done"
                style={{ width: `${cards.done}%` }}
            ></div>,
            <div
                key="doing"
                className="status status-doing"
                style={{ width: `${cards.doing}%` }}
            ></div>,
            <div
                key="todo"
                className="status status-todo"
                style={{ width: `${cards.todo}%` }}
            ></div>,
            <div
                key="dropped"
                className="status status-dropped"
                style={{ width: `${cards.dropped}%` }}
            ></div>,
        ];
    }

    return (
        <a href={link} className="card-block">
            <span>{props.label}</span>
            <div className={className}>
                <div className="background-container">{cards}</div>
            </div>
        </a>
    );
}

Card.propTypes = {
    label: React.PropTypes.string.isRequired,
    status: React.PropTypes.string,
    cards: React.PropTypes.array,
    urlPrefix: React.PropTypes.string.isRequired,
    index: React.PropTypes.number.isRequired,
};

Card.contextTypes = {
    history: React.PropTypes.object,
};

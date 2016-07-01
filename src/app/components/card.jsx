import React from 'react';

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

        cards = props.cards.reduce((data, card) => {
            if (card.status) {
                data[card.status] = data[card.status] + 1;
                data.total = data[card.status] + 1;
            }
            return data;
        }, {
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
            <div key="dropped" className="status-dropped" style={{ height: cards.dropped }}></div>,
            <div key="todo" className="status-todo" style={{ height: cards.todo }}></div>,
            <div key="doing" className="status-doing" style={{ height: cards.doing }}></div>,
            <div key="done" className="status-done" style={{ height: cards.done }}></div>,
        ];
    }
    /*
    props.cards.map( (child) => {
        <div className={`status-${child.status}`}></div>
    })*/

    return (
        <a href={link} className={className}>
            <span>{props.label}</span>
            <div className="background-container">{cards}</div>
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

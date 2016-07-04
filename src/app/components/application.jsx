import createHistory from 'history/lib/createHashHistory';
import { useQueries } from 'history';
import React from 'react';
import Timeline from './timeline';
import Card from './card';

const INVALID_PATH_CARD = {
    label: 'The path is invalid',
    cards: [],
};

function locationToState(location, data) {
    const { pathname, query } = location;

    // Remove inconvenient '#'.
    const rawPath = pathname.substr(1).trim();

    // // Extract tree path from pathname.
    const path = rawPath ?
                 rawPath.split('/').map(index => parseInt(index, 10)) : [];

    // Moment must always exist, otherwise default to instant 0.
    const moment = query.moment < data.length ?
                   parseInt(query.moment, 10) : data.length - 1;

    return {
        moment,
        path,
    };
}

export class Application extends React.Component {
    constructor(props) {
        super(props);
        this.history = useQueries(createHistory)();
        const location = this.history.getCurrentLocation();
        this.state = locationToState(location, this.props.data);
    }

    getChildContext() {
        return {
            history: this.history,
        };
    }

    componentDidMount() {
        this.history.listen((location) => {
            this.setState(locationToState(location, this.props.data));
        });
    }

    getCardInfo() {
        const { path, moment } = this.state;

        // Extract all indexes from path.
        // Get the path's leaf if it exists, error otherwise.
        let cardInfo = this.props.data[moment];
        try {
            for (let i = 0; i < path.length; i++) {
                if (cardInfo.cards[path[i]]) {
                    cardInfo = cardInfo.cards[path[i]];
                } else {
                    throw new Error('Invalid path');
                }
            }
        } catch (error) {
            cardInfo = INVALID_PATH_CARD;
        }

        return cardInfo;
    }

    getPreviousLink() {
        // Remove last path's element.
        let path = [].concat(this.state.path);
        path.pop();
        path = path.join('/');

        // Create the previous link if current card is not the root.
        let link = null;
        if (this.state.path.length > 0) {
            const location = this.history.getCurrentLocation();
            const href = this.history.createHref({
                pathname: path,
                query: location.query,
            });

            link = <a href={href}>Back</a>;
        }

        return link;
    }

    getTimeline() {
        return this.props.data.map(moment => moment.date);
    }

    render() {
        const { path, moment } = this.state;

        const timeline = this.getTimeline();

        const cardInfo = this.getCardInfo();
        const previousLink = this.getPreviousLink();

        // Set app's title if current card is root.
        if (path.length === 0) {
            cardInfo.label = 'Milestone Viewer';
        }

        return (
            <div className="container">
                <header>
                    <div className="prev">{previousLink}</div>
                    <h1>{cardInfo.label}</h1>
                    <div>Sprint {moment + 1} / 6</div>
                    <div className="next"></div>
                </header>
                <Timeline
                    timeline={timeline}
                    moment={moment}
                />
                <div className="cards-list">
                {
                    cardInfo.cards.map((card, index) =>
                        <Card
                            key={index}
                            index={index}
                            path={path}
                            {...card}
                        />)
                }
                </div>
                <footer>
                    <div className="legend done">Done</div>
                    <div className="legend doing">Doing</div>
                    <div className="legend todo">To-Do</div>
                    <div className="legend dropped">Dropped</div>
                </footer>
            </div>
        );
    }
}

Application.propTypes = {
    data: React.PropTypes.array.isRequired,
};

Application.childContextTypes = {
    history: React.PropTypes.object,
};

export default Application;

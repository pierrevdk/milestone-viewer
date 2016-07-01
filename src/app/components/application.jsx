import createHistory from 'history/lib/createHashHistory';
import { useQueries } from 'history';
import React from 'react';
import Timeline from './timeline';
import Card from './card';

function locationToState(location, data) {
    const { pathname, query } = location;
    return {
        path: pathname.substr(1),
        moment: query.moment < data.length ? parseInt(query.moment, 10) : 0,
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

    render() {
        const path = this.state.path;
        const moment = this.state.moment;

        let cardInfo = this.props.data[moment];
        let error = null;
        let previousLink = null;
        if (path !== '') {
            const indexes = path.split('/').map((index) => parseInt(index, 10));

            for (let i = 0; i < indexes.length; i++) {
                if (cardInfo.cards[indexes[i]]) {
                    cardInfo = cardInfo.cards[indexes[i]];
                } else {
                    error = 'Invalid path';
                }
            }

            let link = [].concat(indexes);
            link.pop();
            link = link.join('/');
            const location = this.history.getCurrentLocation();
            link = this.history.createHref({
                pathname: link,
                query: location.query,
            });
            previousLink = <a href={link}>Back</a>;
        } else {
            cardInfo = {
                label: 'Milestone Viewer',
                cards: cardInfo.cards,
            };
        }

        let cards = cardInfo.cards;
        if (error) {
            cards = [];
        }

        return (
            <div className="container">
                <header>
                    <div className="prev">{previousLink}</div>
                    <h1>{cardInfo.label}</h1>
                    <div className="next"></div>
                </header>
                <Timeline timeline={this.props.data} moment={this.state.moment} history={this.history} />
                <div className="cards-list">
                {error}
                {
                    cards.map((card, index) => <Card key={index} {...card} index={index} urlPrefix={path} history={this.history} />)
                }
                </div>
                <footer>
                    <div className="legend dropped">Dropped</div>
                    <div className="legend todo">To-Do</div>
                    <div className="legend doing">Doing</div>
                    <div className="legend done">Done</div>
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

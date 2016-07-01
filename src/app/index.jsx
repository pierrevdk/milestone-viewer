// for better babel ES6 environment
import 'babel-polyfill';

// require all the application styles -> ignored by coverage
/* istanbul ignore next */ import './styles/application';

// import react libs
import React from 'react';
import ReactDOM from 'react-dom';


// import main application components
import Application from './components/application';


const data = [
    {
        date: '2016-06-30',
        cards: [
            {
                label: 'Infra',
                cards: [
                    { label: 'IVA', status: 'todo' },
                    { label: 'Mylen V2', status: 'todo' },
                    {
                        label: 'Images auto-hébergés',
                        cards: [
                            { label: 'Paquet Debian', status: 'done' },
                            { label: 'Rasperry Pi 2', status: 'done' },
                            { label: 'Rasperry Pi 3', status: 'done' },
                            { label: 'Virtualbox', status: 'done' },
                            { label: 'Vagrant', status: 'todo' },
                        ],
                    },
                    {
                        label: 'Images hébergeurs',
                        cards: [
                            { label: 'OVH', status: 'done' },
                            { label: 'Scaleway', status: 'done' },
                            { label: 'SWHosting', status: 'done' },
                            { label: 'PingFiles', status: 'done' },
                            { label: 'Digital Ocean', status: 'dropped' },
                        ],
                    },
                    { label: 'Gestion du cycle de vie des Cozy', status: 'todo' },
                    { label: 'RUN', status: 'doing' },
                ],
            },
            {
                label: 'Software',
                status: 'doing',
            },
        ],
    },
    {
        date: '2016-06-30',
        cards: [
            {
                label: 'Infra',
                cards: [
                    { label: 'IVA', status: 'doing' },
                    { label: 'Mylen V2', status: 'doing' },
                    {
                        label: 'Images auto-hébergés',
                        cards: [
                            { label: 'Paquet Debian', status: 'done' },
                            { label: 'Rasperry Pi 2', status: 'done' },
                            { label: 'Rasperry Pi 3', status: 'done' },
                            { label: 'Virtualbox', status: 'done' },
                            { label: 'Vagrant', status: 'doing' },
                        ],
                    },
                    {
                        label: 'Images hébergeurs',
                        cards: [
                            { label: 'OVH', status: 'done' },
                            { label: 'Scaleway', status: 'done' },
                            { label: 'SWHosting', status: 'done' },
                            { label: 'PingFiles', status: 'done' },
                            { label: 'Digital Ocean', status: 'dropped' },
                        ],
                    },
                    { label: 'Gestion du cycle de vie des Cozy', status: 'doing' },
                    { label: 'RUN', status: 'doing' },
                ],
            },
            {
                label: 'Software',
                status: 'doing',
            },
        ],
    },
];

// rendering our application
ReactDOM.render(<Application data={data} />, document.getElementById('app'));

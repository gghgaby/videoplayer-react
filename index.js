import React from 'react';
import ReactDOM from 'react-dom';
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json';

const app = document.getElementById('platziContainer');
ReactDOM.render(<Playlist data={data}/>, app);
import React from 'react';
import {render} from 'react-dom';
import Home from '../pages/containers/home';
//import Playlist from './src/playlist/components/playlist';
import data from '../api.json';


const app = document.getElementById('platziContainer');
render(<Home data={data}/>, app); 
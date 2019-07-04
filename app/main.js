/* globals document */
import { component } from 'riot';
import BpList from './bp-list.riot';
import * as env from './env';

component(BpList)(document.getElementById('app'), { name: env.name });

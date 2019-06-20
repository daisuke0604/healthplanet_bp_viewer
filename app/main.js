/* globals document */
import { component } from 'riot';
import BpList from './bp-list.riot';

component(BpList)(document.getElementById('app'), {
  title: 'test',
});

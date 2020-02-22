import '../sass/main.scss';
import './views/base';
import './views/modal-box';

import { renderDataCard } from './views/modal-box';
import { elements } from './views/base';

let linkData = [
  {
    title: 'coding challenge',
    description: 'Free code camp',
    url: 'www.freecodecamp.com',
    category: 'Programming'
  },
  {
    title: 'coding challenge',
    description: 'Free code camp',
    url: 'www.freecodecamp.com',
    category: 'Programming'
  }
];

// For adding data to the linkData
export const addLinkData = list => {
  linkData.push(list);
  console.log(linkData);

  // For rendering data card
  elements.cardWrapEl.innerHTML = '';
  renderDataCard(linkData);
};

renderDataCard(linkData);

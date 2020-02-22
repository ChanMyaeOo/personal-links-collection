import '../sass/main.scss';
import './views/base';
import './views/modal-box';

import { renderDataCard, renderCategory } from './views/modal-box';
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

let categoryList = ['All', 'Programming', 'Design'];

// For adding data to the linkData
export const addLinkData = list => {
  linkData.push(list);
  console.log(linkData);

  // For rendering data card
  elements.cardWrapEl.innerHTML = '';
  renderDataCard(linkData);
};

renderCategory(categoryList);
renderDataCard(linkData);

// For adding category
export const addLinkCategory = list => {
  categoryList.push(list);
  elements.categoryContent.innerHTML = '';
  renderCategory(categoryList);
};

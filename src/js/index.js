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

// For removing category
export const removeLinkCategory = category => {
  const categoryIndex = categoryList.findIndex(data => {
    return data === category;
  });

  if (categoryIndex !== -1) {
    categoryList.splice(categoryIndex, 1);

    elements.categoryContent.innerHTML = '';
    renderCategory(categoryList);

    elements.linkCategoryEl.innerHTML = '';
    injectCategory(categoryList);
  }
};

// Handle for adding category
elements.catAddFormEl.addEventListener('submit', e => {
  e.preventDefault();
  const category = e.target.elements.catAddInput.value;

  if (category) {
    addLinkCategory(category);
    e.target.elements.catAddInput.value = '';
    elements.catAddModalEl.classList.remove('category-add-modal-active');

    elements.linkCategoryEl.innerHTML = '';
    injectCategory(categoryList);
  }
});

// Injecting link category to the dropdown list
export const injectCategory = list => {
  const lists = list.slice(1, list.length);
  lists.forEach(data => {
    const markup = `
      <option value="${data}">${data}</option>
    `;
    elements.linkCategoryEl.insertAdjacentHTML('afterbegin', markup);
  });
};

injectCategory(categoryList);

// Editing data card
export const renderCardEdit = () => {
  const cardEditBtn = document.querySelectorAll('#card-edit');
  cardEditBtn.forEach(btn => {
    btn.addEventListener('click', e => {
      console.log(e.target.parentNode.parentNode.dataset.card);
      showEditForm();
    });
  });
};

renderCardEdit();

const showEditForm = () => {
  elements.dataEditModalEl.classList.add('data-edit-modal-active');
};

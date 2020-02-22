import icon from '../../img/icons.svg';
import { elements } from './base';
import { addLinkData, renderCardEdit, removeLinkCategory } from '../index';
import uuid from '../uuid';

// Handle to open link data add form
elements.dataAddBtnEl.addEventListener('click', e => {
  elements.dataAddModalEl.classList.add('data-add-modal-active');
});

// Handle to close link data add form
elements.closeFormEl.addEventListener('click', e => {
  elements.dataAddModalEl.classList.remove('data-add-modal-active');
});

// Handle to open link data edit form
// elements.dataEditBtnEl.addEventListener('click', e => {
//   elements.dataEditModalEl.classList.add('data-edit-modal-active');
// });

// Handle to close link data edit form
elements.closeFormEditEl.addEventListener('click', e => {
  elements.dataEditModalEl.classList.remove('data-edit-modal-active');
});

// Handle to open category add form
elements.catAddBtnEl.addEventListener('click', e => {
  elements.catAddModalEl.classList.add('category-add-modal-active');
});

// Handle to close category add form
elements.closeCatAddFormEl.addEventListener('click', e => {
  elements.catAddModalEl.classList.remove('category-add-modal-active');
});

// Handle to open category remove form
elements.catRemoveBtnEl.addEventListener('click', e => {
  elements.catRemoveModalEl.classList.add('category-remove-modal-active');
});

// Handle to close category remove form
elements.closeCatRemoveFormEl.addEventListener('click', e => {
  elements.catRemoveModalEl.classList.remove('category-remove-modal-active');
});

// Handle to add link data
elements.dataAddFormEl.addEventListener('submit', e => {
  e.preventDefault();
  const linkTitle = e.target.elements.linkTitle.value;
  const linkDescription = e.target.elements.linkDescription.value;
  console.log(linkDescription);
  const linkUrl = e.target.elements.linkUrl.value;
  const addDataCategory = document.querySelector('#link-category');
  const linkCategory =
    addDataCategory.options[addDataCategory.selectedIndex].value;
  const linkData = {
    id: uuid(),
    title: linkTitle,
    description:
      linkDescription !== '' ? linkDescription : ':( ------------- :(',
    url: linkUrl,
    category: linkCategory
  };

  if (linkTitle && linkUrl && linkCategory) {
    addLinkData(linkData);

    e.target.elements.linkTitle.value = '';
    e.target.elements.linkDescription.value = '';
    e.target.elements.linkUrl.value = '';

    elements.dataAddModalEl.classList.remove('data-add-modal-active');

    renderCardEdit();
  }
});

// Handle for showing data card to the UI
export const renderDataCard = list => {
  list.forEach(data => {
    const markup = `
    <div class="card" data-card="${data.id}">
        <div class="card__top">
            <div class="card__share">Share</div>
            <div class="card__fav">
                <button class="card__fav-love">
                <svg>
                    <use href="${icon}#icon-heart-outlined"></use>
                </svg>
                </button>
            </div>
        </div>

        <div class="card__content">
            <a href="${data.url}" class="card__title">${data.title}</a>
            <div class="card__description">${data.description}</div>
        </div>

        <div class="card__bottom">
            <i class="far fa-edit card__edit" id="card-edit"></i>

            <i class="far fa-trash-alt card__delete" id="card-delete"></i>
        </div>
    </div>
    `;

    elements.cardWrapEl.insertAdjacentHTML('beforeend', markup);
  });
};

// Rendering category
export const renderCategory = list => {
  list.forEach(data => {
    const markup = `
            <button>${data}</button>
        `;

    elements.categoryContent.insertAdjacentHTML('beforeend', markup);
  });
};

// Handle for removing category
elements.catRemoveFormEl.addEventListener('submit', e => {
  e.preventDefault();
  const category = e.target.elements.catRemoveInput.value;

  if (category) {
    removeLinkCategory(category);
    e.target.elements.catRemoveInput.value = '';
    elements.catRemoveModalEl.classList.remove('category-remove-modal-active');
  }
});

console.log(uuid());

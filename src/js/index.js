import '../sass/main.scss';
import './views/base';

import { elements } from './views/base';

// Handle to open link data add form
elements.dataAddBtnEl.addEventListener('click', e => {
  elements.dataAddModalEl.classList.add('data-add-modal-active');
});

// Handle to close link data add form
elements.closeFormEl.addEventListener('click', e => {
  elements.dataAddModalEl.classList.remove('data-add-modal-active');
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

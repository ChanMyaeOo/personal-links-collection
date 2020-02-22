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

import { generateObjects } from './data.js';
import { createCardsFromData } from './create-cards-from-data.js';
import { disableAllFilters, enableAllFilters } from './change-form-state.js';

createCardsFromData(generateObjects(1));

disableAllFilters();
// Test if it enables
setTimeout(enableAllFilters, 2000);

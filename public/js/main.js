import { generateObjects } from './data.js';
import { createCardsFromData } from './create-cards-from-data.js';
import { disableFormsActivity, enableFormsActivity } from './change-form-state.js';

createCardsFromData(generateObjects(5));

disableFormsActivity();

// Test if it enables
setTimeout(enableFormsActivity, 2000);

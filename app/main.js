import Publisher from './helpers/publisher.js';
import { TemplateController } from './components/template/template-controller.js';
import { FilterController } from './components/filter/filter-controller.js';
import { HeaderController } from './components/header/header-controller.js'
import './css/main.scss';

const publisher = new Publisher();
const templateController = new TemplateController(publisher.methods);
const headerController = new HeaderController(publisher.methods);
const filterController = new FilterController(publisher.methods);

import Publisher from './helpers/publisher.js';
import { TemplateController } from './components/template/template-controller.js';
import { FilterController } from './components/filter/filter-controller.js';
import './css/main.scss';

const publisher = new Publisher();
const templateController = new TemplateController(publisher.methods);
const filterController = new FilterController(publisher.methods);

fetch('http://localhost:8080/base/database.json')
  .then((response) => response.json())
  .then((data) => {
    publisher.notify(publisher.eventNames.LOAD_DATA, data);
    publisher.notify(publisher.eventNames.SHOW_FILTER);
  });

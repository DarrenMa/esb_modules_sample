import esb from 'elastic-builder';
import { ToElasticFilter } from 'filtermodule';
import { ToElasticSort } from 'sortmodule';

const run = () => {

  // add any customers filters here
  const boolBody = ToElasticFilter(); // esb.boolQuery().must(esb.regexpQuery('catch_all', `.*test.*`).flags('NONE'));

  // apply the sorting here
  const s = ToElasticSort(); // esb.sort('catch_all', 'asc').missing('_last').mode('max').unmappedType('keyword');

  // build the base query here
  const body = esb.requestBodySearch().query(boolBody).sort(s);

  console.log(JSON.stringify(body.toJSON(), null, 2));

};

run();


import esb from 'elastic-builder';

export function ToElasticSort(): esb.Sort {
  return esb.sort('catch_all', 'asc')
    .missing('_last')
    .mode('max')
    .unmappedType('keyword');
}


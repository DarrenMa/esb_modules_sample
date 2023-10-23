import esb from 'elastic-builder';

export function ToElasticFilter(): esb.Query {
  return esb
    .regexpQuery('catch_all', `.*test.*`)
    .flags('NONE')
}


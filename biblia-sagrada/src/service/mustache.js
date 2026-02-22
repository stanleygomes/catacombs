import Mustache from 'mustache';
import config from '../common/config';

const showCompiledTemplateDefault = config.app.sqlite.showCompiled;

const getAllIndexes = (arr, val) => {
  let indexes = [];
  indexes = [];
  let i = -1;

  while ((i = arr.indexOf(val, i + 1)) !== -1) {
    indexes.push(i);
  }

  return indexes;
};

const getTemplate = (query, params = {}) => {
  return new Promise((resolve, reject) => {
    let rendered = null;
    const arrayParam = [];

    try {
      rendered = Mustache.render(query, params);
    } catch (error) {
      reject(error);
    }

    Object.keys(params).forEach(el => {
      const queryParam = `:${el}`;
      const indexes = getAllIndexes(rendered, queryParam);
      if (indexes.length) {
        indexes.forEach(() => {
          const atributo = params[el];
          if (atributo.constructor.name === 'Array') {
            const attrArray = atributo.reduce((acc, cur) => {
              acc.push(`$${arrayParam.length + 1}`);
              arrayParam.push(cur);
              return acc;
            }, []);

            rendered = rendered.replace(queryParam, attrArray.join(', '));
            return false;
          }

          rendered = rendered.replace(queryParam, atributo).toString();
          arrayParam.push(atributo);
        });
      }
    });

    if (showCompiledTemplateDefault === true) {
      console.log('Query: ', rendered);
      console.log('Params: ', params);
      console.log('Array params: ', arrayParam);
    }

    const response = {
      rendered,
      arrayParam,
    };

    resolve(response);
  });
};

const getQuery = (query, params) => {
  return new Promise((resolve, reject) => {
    getTemplate(query, params)
      .then(response => resolve(response.rendered))
      .catch(error => reject(error));
  });
};

export default {
  getQuery,
};

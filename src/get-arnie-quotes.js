const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  const promises = urls.map(async (url) => {
    const res = await httpGet(url);
    const message = JSON.parse(res.body).message;

    if (res.status === 200) {
      return { 'Arnie Quote': message };
    } else {
      return { 'FAILURE': message };
    }
  });

  const results = Promise.all(promises);
  return results;
};

module.exports = {
  getArnieQuotes,
};

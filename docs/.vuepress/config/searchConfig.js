const secretKeyConfig = require("./secretKeyConfig.js");
module.exports = {
  search: true,
  searchMaxSuggestions: 10,

  algolia: {
    appId: secretKeyConfig.algoliaAppId,
    apiKey: secretKeyConfig.algoliaApiKey,
    indexName: secretKeyConfig.algoliaIndexName
  }
};

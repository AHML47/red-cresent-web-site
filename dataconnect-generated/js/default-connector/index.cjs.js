const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'red_crescent',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;


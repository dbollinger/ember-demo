

export default function (server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  server.createList('transfer-request', 5, 'success');
  server.createList('transfer-request', 5, 'error');
  server.createList('transfer-request', 5, 'inactive');
  server.createList('transfer-request', 5, 'inProgress');
}

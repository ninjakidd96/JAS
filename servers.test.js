describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  afterEach(function() {
    // teardown logic
  });
});

// server.test.js

describe("Servers test", function() {
  beforeEach(function () {
    // Initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update the server table correctly on updateServerTable()', function () {
    // Arrange: Add a server first (assuming submitServerInfo works)
    submitServerInfo();

    // Act: Call the function to update the server table
    updateServerTable();

    // Assert: Verify that the table contains the server's name
    const serverTable = document.getElementById('serverTable');
    const tableRows = serverTable.querySelectorAll('tr');

    expect(tableRows.length).toEqual(1); // There should be one row
    expect(tableRows[0].textContent).toContain('Alice'); // Check if the row contains 'Alice'
  });

  // Add more test cases for other functions in server.js

  afterEach(function() {
    // Clean up the DOM after each test
    serverTbody.innerHTML = ''; // Remove the table rows
  });
});

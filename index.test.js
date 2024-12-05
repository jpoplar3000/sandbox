const request = require('supertest'); // Install with `npm install supertest`
const app = require('./index');       // Import the app

describe('GET /', () => {
  it('should return "Hello, World!"', async () => {
    const response = await request(app).get('/'); // Simulate a GET request to "/"
    expect(response.status).toBe(200);           // Check for HTTP 200 status
    expect(response.text).toBe('Hello, World!'); // Verify the response text
  });
});

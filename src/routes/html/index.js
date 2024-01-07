export const GET = (req, res, url, payload) => {
  res.setHeader("Content-Type", "text/html");
  res.end(`
      <!DOCTYPE html>
      <html>
      <head>
          <title>HTML Page</title>
      </head>
      <body>
          <h1>Hello, this is an HTML page!</h1>
      </body>
      </html>
  `);
};

export const POST = (req, res, url, payload) => {
  res.setHeader("Content-Type", "text/html");
  res.end(`
      <!DOCTYPE html>
      <html>
      <head>
          <title>HTML Page</title>
      </head>
      <body>
          <h1>Hello, this is an HTML page!</h1>
          <h3>Received Body:</h3>
          <pre>${req.body}</pre>
      </body>
      </html>
  `);
};

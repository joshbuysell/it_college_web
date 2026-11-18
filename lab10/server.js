import http from 'http';
import { todos } from './data.js';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!DOCTYPE html>
      <html lang="uk">
      <head>
        <meta charset="UTF-8">
        <title>Node.js Server — Лабораторна робота №10</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f7f9fc; color: #333; margin: 40px; text-align: center; }
          .card { background: white; max-width: 600px; margin: 0 auto; padding: 30px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border-left: 5px solid #312783; }
          h1 { color: #312783; margin-top: 0; }
          p { margin: 10px 0; color: #555; }
          .badge { display: inline-block; background: #e0e7ff; color: #312783; padding: 4px 10px; border-radius: 6px; font-weight: 600; font-size: 14px; }
          a { color: #312783; text-decoration: none; font-weight: 600; }
          a:hover { text-decoration: underline; }
          .endpoint { background: #f1f5f9; padding: 10px 14px; border-radius: 6px; display: inline-block; font-family: monospace; margin-top: 15px; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Мій перший сервер на Node.js працює!</h1>
          <p><span class="badge">Лабораторна робота №10</span></p>
          <p>Студент: <strong>Цвик Віктор</strong> | Група: <strong>КН-310</strong> (ID #28)</p>
          <div class="endpoint">
            GET <a href="/api/v1/todoItem">/api/v1/todoItem</a>
          </div>
        </div>
      </body>
      </html>
    `);
  } else if (req.url === '/api/v1/todoItem' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(todos));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ message: 'Маршрут не знайдено' }));
  }
});

server.listen(PORT, () => {
  console.log(`Сервер успішно запущено за адресою: http://localhost:${PORT}`);
});

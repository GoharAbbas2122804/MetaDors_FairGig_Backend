# FairGig Backend

This backend is organized as six independent Node.js Express microservices.

## Services

| Service | Port | Start Command |
| --- | --- | --- |
| auth-service | 8001 | `cd auth-service && npm install && node index.js` |
| earnings-service | 8002 | `cd earnings-service && npm install && node index.js` |
| anomaly-service | 8003 | `cd anomaly-service && npm install && node index.js` |
| analytics-service | 8004 | `cd analytics-service && npm install && node index.js` |
| grievance-service | 8005 | `cd grievance-service && npm install && node index.js` |
| certificate-service | 8006 | `cd certificate-service && npm install && node index.js` |

## Layout

Each service includes:

- `index.js`
- `package.json`
- `.env.example`
- `README.md`
- `routes/index.js`
- `models/index.js`
- `middleware/index.js`
- `controllers/index.js`

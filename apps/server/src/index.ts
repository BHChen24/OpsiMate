import express from 'express';
import integrationRouter from './api/integration';
import healthRouter from './api/health';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/api/v1', integrationRouter);
app.use('/', healthRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

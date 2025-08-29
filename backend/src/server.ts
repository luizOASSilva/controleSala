import 'dotenv/config'
import app from './app.js';
import './config/database.js';

app.listen(process.env.PORT, () => {
    console.log(`Listening on port http://localhost:${process.env.PORT}`);
})

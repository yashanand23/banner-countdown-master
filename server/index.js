const express = require('express');
const cors = require('cors');
const bannerRoutes = require('./routes/bannerRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api', bannerRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();
app.use(history());
app.use(express.static(__dirname));

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});

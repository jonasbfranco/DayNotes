const express = require('express');
const routes = require('./routes');
const cors = require('cors');


const app = express();
require('./config/dbConfig');

// para nao ter problema em acessar a api de outro endereco
app.use(cors());
// para usar o response com json, se for send nao precisa desta linha abaixo.
app.use(express.json());
app.use(routes);


/* 
app.get('/', (request, response) => {
    //// return response.send('Hello Word!');
    return response.json({
        nome: 'Jonas B. Franco',
    });
});
*/

app.listen(3333);
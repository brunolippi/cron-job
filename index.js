require('dotenv').config();
const cron = require('node-cron');
const express = require('express');

app = express();

cron.schedule('* * * * *', () => {
    console.log('Cron job ran every minute!')
})

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});

/* 

    * * * * * *
    | | | | | |
    | | | | | día de la semana
    | | | | mes
    | | | día del mes
    | | hora
    | minuto
    segundo ( opcional )

*/
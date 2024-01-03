const express = require('express');
const app = express();
const routes = require('./router/routes')
const cors = require('cors');
const sequelize = require('./app/utilsFunction/dbFunctions');
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(routes);


sequelize.authenticate().then(()=>{
    console.log('SQL db autheticated successfully');
  }).catch(err=>console.log('authentication failed ', err ));

  (async () => {
    try {
      await sequelize.sync({ force: false }); 
      console.log('Database synchronized');
    } catch (error) {
      console.error('Error synchronizing database:', error);
    }
  })();  


app.listen(5000 , ()=>{
    console.log('server running on port 5000');
})
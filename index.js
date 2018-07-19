const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const server = require('./server')


mongoose
  .connect('mongodb://gregk:abc123@ds141611.mlab.com:41611/lambda-notes_cspt1')
  .then(() => {
    console.log('Connected to mongodb!!')
    server.listen(PORT, () => {
      console.log(`Listening on ${PORT}`)
    })
  })
  .catch(err => {
    console.log(err);
  })
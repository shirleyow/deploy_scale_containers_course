const _ = require('lodash');
const express = require('express');
const app = express();
const port = 5000;

list_of_texts = [
    "Logic will get you from A to B. Imagination will take you everywhere.",
    "There are 10 kinds of people. Those who know binary and those who don't.",
    "There are two ways of constructing a software design. One way is to make it\
    so simple that there are obviously no deficiencies and the other is to make\
    it so complicated that there are no obvious deficiencies.",
    "It's not that I'm so smart, it's just that I stay with problems longer.",
    "It is pitch dark. You are likely to be eaten by a grue."
]

app.get('/api', (req, res) => {
  res.send(_.sample(list_of_texts));
}); // note that "/" will clash with the root route of the react app
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
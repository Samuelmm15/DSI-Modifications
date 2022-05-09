/* eslint-disable prefer-const */
import express from 'express';
import {spawn} from 'child_process';
import {join} from 'path';

const app = express();

/**
 * This function, use an specific path from the system.
 */
app.use(express.static(join(__dirname, '../execmd')));

/**
 * This function gets a http request.
 */
app.get(`/cmd/:command/args/:options`, (req, res) => {
  let IntroducedCommand = req.params.command.replace(':', '');
  let IntroducedOption = req.params.options.replace(':', '');

  if (IntroducedCommand !== ' ') {
    if (IntroducedOption !== '') {
      const result = spawn(IntroducedCommand, ['./execmd/example.txt']);
      // result.stdout.pipe(process.stdout);
      let message = '';
      result.stdout.on('data', (data) => {
        message += data;
      });
      result.on('close', () => {
        res.send({type: `${IntroducedCommand}`, options: `${IntroducedOption}`, message: `${message}`});
      });
    }
  }
});

/**
 * This function gets a http request and send a error message.
 */
app.get('*', (_, res) => {
  res.send('<h1>404</h1>');
});

/**
 * This function listen an specific port.
 */
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});


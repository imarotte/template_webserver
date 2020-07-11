/*
 * @Copyright © 2019-2020 Isaac Marotte - All Rights Reserved
 *
 * This file is the sole property of its owner.
 * Unauthorized use of this file, via any medium or form, whole or in part,
 * is strictly prohibited without the expressed written permission of Isaac Marotte
 *
 * This file is proprietary and confidential
 *
 * Last Modified: 2020.7.10
 */

import { join } from 'path';
import http from 'http';
import express from 'express';
import indexHttp from './index.html';

const PORT = 3000;

const app = express();

// handle any static files (like scripts) we dont need the server to handle
app.use(express.static(join(process.cwd(), '/public')));


/**
 * handle all other routes
 */
app.get('*', (req, res) => {
  res.send(indexHttp(`${req.hostname}:${PORT}`));
});


const httpServer = http.createServer(app);

httpServer.listen(PORT, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
    return;
  }

  console.log(`
-----------------------------------------------------------
    HTTP was launched at http://localhost:${PORT}
-----------------------------------------------------------
`
  );
});

/**
 * gracefully shutdown the server
 */
const serverShutdown = () => {
  httpServer.close((err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    process.exit(0);
  });
};


/**
 *
 * @param {string} signalName - signal that was emitted
 * @param {string} action - the action that was taken
 */
const shutdownListener = (signalName = 'SIGTERM', action = 'exited') => {
  process.on(signalName, () => {
    console.log(`${signalName}: Process ${process.pid} has been ${action}`);
    serverShutdown();
  });
};

/**
 * Node process was interrupted
 */
shutdownListener('SIGHUP', 'had it\'s controlling terminal closed');

/**
 * Node process was interrupted
 */
shutdownListener('SIGINT', 'interrupted');

/**
 * expect a successful termination
 */
shutdownListener('SIGTERM', 'terminated');


/**
 * Windows requires additional steps to emit the correct
 * Not needed if using PhpStorm/WebStorm
 */
if (process.platform === 'win32') {
  // eslint-disable-next-line global-require
  const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  /**
   * catch any windows events from the stdin/stdout
   * and ensure they are being processed correctly
   *
   * @param {string} ev - name of the event
   */
  const catchWindowsEvent = (ev) => {
    rl.on(ev, () => {
      process.emit('SIGINT');
    });
  };

  catchWindowsEvent('SIGINT');
  catchWindowsEvent('SIGTERM');
  catchWindowsEvent('SIGKILL');
}

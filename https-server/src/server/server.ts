#!/usr/bin/env node
'use strict';

// ############### Types ###############

type Protocol = 'https';
type ServerConfig = {
  protocol: Protocol,
  key: Buffer,
  cert: Buffer,
};

// ############### Logging ###############

import dotenv from 'dotenv';
import debug from 'debug';

dotenv.config();
debug.enable(process.env.DEBUG || '');

// ############### Imports ###############

import { networkInterfaces, NetworkInterfaceInfo } from 'os';
import * as fs from 'fs';
import express, { Request, Response, NextFunction, Application } from 'express';
import logger from 'morgan';
import * as https from 'https';
import { createServer } from 'https';
import createError from 'http-errors';

// ############### SSL Setup ###############

import path from 'path';
const ssl_folder = path.join(__dirname, 'ssl_certs');
const key_path = path.join(ssl_folder, 'localhost.key');
const cert_path = path.join(ssl_folder, 'localhost.crt');


// ############### Server Initialization ###############

const express_app = express(); // Create an Express app
const port = 3000;
express_app.set('port', port);
const public_dir = __dirname; // Set the public directory to serve from
const config: ServerConfig = {
  protocol: 'https',
  key: fs.readFileSync(key_path),
  cert: fs.readFileSync(cert_path),
};

// ############### Express Setup ###############

express_app.use(logger('dev'));
express_app.use(function(req: Request, res: Response, next: NextFunction) {
  if (res.headersSent) {
    next(createError(404, "This page doesn't exist!"));
  } else {
    next();
  }
});

// Handle errors with the error handler
express_app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
  res.status(err.status || 500); // Set the error code
  res.sendFile(`error/${err.status}.html`, { root: __dirname }); // Respond with a static error page (404 or 500)
});


// ############### HTTPS Server Function Definitions ###############

function createHttpsServer(express_app: Application): https.Server {
  try {
    const server = createServer({ key: config.key, cert: config.cert }, express_app);
    return server;
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}


function handleError(error: NodeJS.ErrnoException) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  switch (error.code) {
  case 'EADDRINUSE':
    console.error(`Port ${port} is already being used`);
    process.exit(1);
    break;
  case 'EACCES':
    console.error(`Port ${port} requires elevated user privileges (sudo)`);
    process.exit(1);
    break;
  default:
    throw error;
  }
}

function handleListening() {
  const network_interfaces: NodeJS.Dict<NetworkInterfaceInfo[]> = networkInterfaces();
  const interfaces: string[] = [];
  // dev holds all the network interfaces on which the server is listening
  // details holds all the details for each object on that interface
  Object.keys(network_interfaces).forEach(function(dev) {
    if (network_interfaces[dev]) {
      network_interfaces[dev].forEach(function(details) {
        /**
         * Node v. 18+ returns a number (4, 6) for family;
         * earlier versions returned IPv4 or IPv6. This handles
         * both cases.
         */
        if (details.family.toString().endsWith('4')) {
          interfaces.push(`-> ${config.protocol}://${details.address}:${port}/`);
        }
      });
    }
  });
  debug(
    `  ** Serving from the ${public_dir}/ directory. **

  App available in your browser at:

    ${interfaces.join('\n    ')}

  Hold CTRL + C to stop the server.\n\n `
  );
}

const https_server = createHttpsServer(express_app); // Create a HTTPS server and attach the Express app
https_server.listen(port);
https_server.on('error', handleError);
https_server.on('listening', handleListening);

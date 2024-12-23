#!/usr/bin/env node
'use strict';

/**
 *  Types
 */
type Protocol = 'https';
type ServerConfig = {
  protocol: Protocol,
  key: Buffer,
  cert: Buffer,
};
type NetworkInterfaceInfo = {
  address: string;
  netmask: string;
  family: string;
  mac: string;
  internal: boolean;
  cidr: string;
  scopeid?: number;
};

type NetworkInterfaces = {
  [key: string]: NetworkInterfaceInfo[];
};


/**
 *  Logging
 */
// require('dotenv').config();
// const debug = require('debug')(process.env.DEBUG);


/**
 *  Imports
 */
const networkInterfaces: NetworkInterfaces = require('os').networkInterfaces(); // Get network interfaces for this machine
const fs = require('fs');
const express = require('express');
const logger = require('morgan');
import * as https from 'https';
import { Request, Response, NextFunction, Application } from 'express';
import createHttpError from 'http-errors';

/**
 *  SSL Setup
 */
const path = require('path');
const ssl_folder = path.join(__dirname, 'ssl_certs');
const key_path = path.join(ssl_folder, 'localhost.key');
const cert_path = path.join(ssl_folder, 'localhost.crt');

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

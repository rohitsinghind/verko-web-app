import React from 'react';

import { connect } from 'socket.io-client';
import Env from '../env.json';

export const socket = connect(Env.ROOT);
export const SocketContext = React.createContext(socket);

import * as React from 'react';

interface Props {}

const defaultValue = {};

export const Context = React.createContext<Props>(defaultValue);

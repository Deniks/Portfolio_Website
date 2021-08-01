import React from 'react';

import { View } from '@react-pdf/renderer';

export const Seperator = () => {
  return (
    <View style={{ width: '100%', padding: 10, marginBottom: 5 }}>
      <View
        style={{
          borderBottom: '1px solid grey',
          width: '80%',
          flexBasis: '100%',
        }}
      />
    </View>
  );
};

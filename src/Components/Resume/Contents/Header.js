import React from 'react';

import { Link, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    alignItems: 'stretch',
  },
  detailColumn: {
    flexDirection: 'column',
    flexGrow: 9,
    textTransform: 'uppercase',
  },
  linkColumn: {
    flexDirection: 'column',
    flexGrow: 2,
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Lato Bold',
  },
  subtitle: {
    fontSize: 10,
    justifySelf: 'flex-end',
    fontFamily: 'Lato',
  },
  link: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
});

export default () => (
  <View style={styles.container}>
    <View style={styles.detailColumn}>
      <Text style={styles.name}>Deniss Rezanovics</Text>
      <Text style={styles.subtitle}>Software Engineer</Text>
    </View>
    <View style={styles.linkColumn}>
      <Link href="mailto:deniss.rezanovics@gmail.com" style={styles.link}>
        deniss.rezanovics@gmail.com
      </Link>
      <Link href="tel: +371 27739868" target="_blank" style={styles.link}>
        +371 27739868
      </Link>
      <Link
        href="https://www.denissrezanovics.com/"
        target="_blank"
        style={styles.link}
      >
        denissrezanovics.com
      </Link>
      <Link href="github.com/Deniks" target="_blank" style={styles.link}>
        https://github.com/Deniks
      </Link>
    </View>
  </View>
);

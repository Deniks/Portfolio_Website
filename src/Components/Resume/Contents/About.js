import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

import Title from './Title';

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 15,
    '@media max-width: 400': {
      paddingTop: 10,
      paddingLeft: 0,
    },
  },
  entryContainer: {
    marginBottom: 10,
    maxWidth: 300,
  },
  text: {
    fontSize: 10,
    fontFamily: 'Lato',
  },
});

export default () => (
  <View style={styles.container}>
    <Title>Who Am I?</Title>
    <View style={styles.entryContainer}>
      <Text style={styles.text}>
        I am a passionate software engineer with a wide profile of expertiese. I
        have experience working with technology assembly such as MERN stack that
        allows to fully maintain and implement whatever functionality required .
        My skillset is not limiting only on Web technolgies. Throughout my first
        4 years in IT industry I have explored fields such as 3D modeling
        (Blender), game developement (Unity) and desktop app developement (C#
        WPF). Each field contributed to my overall knowlege of programming and
        project structuring that definetly impacted my Web developement projects
        as well. More, I am familiar with majority of projects management
        practices like Scrum, RAD or Kanban. That said, I hope to deliver the
        utmost quality product if you choose to work with me.
      </Text>
    </View>
  </View>
);

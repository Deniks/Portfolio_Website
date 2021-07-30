import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

import Title from './Title';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  school: {
    fontFamily: 'Lato Bold',
    fontSize: 10,
  },
  degree: {
    fontFamily: 'Lato',
    fontSize: 10,
  },
  candidate: {
    fontFamily: 'Lato Italic',
    fontSize: 10,
  },
});

const EducationContainer = ({ school, degree, candidate }) => (
  <>
    <Text style={styles.school}>{school}</Text>
    <Text style={styles.degree}>{degree}</Text>
    <Text style={styles.candidate}>{candidate}</Text>
  </>
);

export default () => (
  <View style={styles.container}>
    <Title>Education</Title>
    <EducationContainer
      school="Boston College"
      degree="BTEC Level 3 Extended in Computer Science"
    />
    <EducationContainer
      school="84th Secondary School of Riga"
      degree="Secondary School Education (remotely) in General Studies"
    />
    <EducationContainer
      school="Riga State Technical School"
      degree="Professional Studies in Computer Science"
    />
  </View>
);

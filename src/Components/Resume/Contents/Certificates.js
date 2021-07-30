import React from 'react';
import { Text, View, StyleSheet, Link, Image } from '@react-pdf/renderer';

import Title from './Title';
import { Seperator } from '../Other/Seperator';

const certificates = [
  {
    name: 'Learn the Basics of Blockchain with Python Course',
    issuingOrganization: 'Codecademy',
    date: 'Aug 2019',
    credentialURL:
      'https://www.codecademy.com/profiles/Rezanovich/certificates/f21a464d190cb43e78b83ca8d1f0c6b0',
  },
  {
    name: 'Learn React.js: Part II Course',
    issuingOrganization: 'Codecademy',
    date: 'Aug 2018',
    credentialURL:
      'https://www.codecademy.com/profiles/Rezanovich/certificates/666120308fc207a66d8afaa0dcf4ee19',
  },
  {
    name: 'Learn React Course',
    issuingOrganization: 'Codecademy',
    date: 'May 2018',
    credentialURL:
      'https://www.codecademy.com/profiles/Rezanovich/certificates/af00e5032d0a68cc84879983f5d8333b',
  },
  {
    name: 'Learn Responsive Design Course',
    issuingOrganization: 'Codecademy',
    date: 'Apr 2018',
    credentialURL:
      'https://www.codecademy.com/profiles/Rezanovich/certificates/3a62023b0054dc793edc0adecd715fd7',
  },
  {
    name: 'Learn Sass Course',
    issuingOrganization: 'Codecademy',
    date: 'Mar 2018',
    credentialURL:
      'https://www.codecademy.com/profiles/Rezanovich/certificates/eb1ffda40f347629dcef6de33d3f9741',
  },
];
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    '@media max-width: 400': {
      paddingTop: 10,
    },
  },

  certificateContainer: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Lato Bold',
  },
  text: {
    fontSize: 10,
    fontFamily: 'Lato',
  },
  link: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: 'black',
  },
});

const CertificateContainer = ({
  name,
  issuingOrganization,
  date,
  credentialURL,
}) => (
  <View style={styles.certificateContainer}>
    <View>
      <Text style={styles.title}>{name}</Text>
    </View>
    <View>
      <Text style={styles.text}>{issuingOrganization}</Text>
    </View>
    <View>
      <Text style={styles.text}>Issued {date}</Text>
    </View>
    <View>
      <Link href={credentialURL} target="_blank" style={styles.link}>
        <Text>See Credential</Text>
      </Link>
    </View>
    <Seperator />
  </View>
);

export default () => (
  <View style={styles.container}>
    <Title>Certificates</Title>
    {certificates.map(
      ({ name, issuingOrganization, date, credentialURL }, i) => (
        <CertificateContainer
          key={i}
          name={name}
          issuingOrganization={issuingOrganization}
          date={date}
          credentialURL={credentialURL}
        />
      )
    )}
  </View>
);

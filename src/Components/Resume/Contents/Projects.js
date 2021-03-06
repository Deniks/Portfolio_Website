import React from 'react';
import { Text, View, StyleSheet, Image, Link } from '@react-pdf/renderer';

import Title from './Title';

import { projectsData } from '../../../Global/seed';
import { Seperator } from '../Other/Seperator';

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
  },

  body: {
    flexDirection: 'row',
  },

  description: {
    fontSize: 10,
    fontFamily: 'Lato',
    paddingRight: '10px',
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: 'column',
    flexBasis: '30%',
    flexGrow: 9,
  },
  rightColumn: {
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'flex-end',
    justifySelf: 'flex-end',
  },
  title: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Lato Bold',
  },
  image: {
    width: '200px',
    borderRadius: '3px',
  },
  link: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: 'black',
  },
});

const ProjectEntry = ({ name, description, image, links }) => {
  return (
    <View style={styles.entryContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.title}>{name}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.leftColumn}>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.rightColumn}>
          <Image style={styles.image} src={image} />
        </View>
      </View>

      {links.map((link, i) => (
        <Link key={i} href={link} target="_blank" style={styles.link}>
          <Text>{link}</Text>
        </Link>
      ))}
      <Seperator />
    </View>
  );
};

const Projects = () => (
  <View style={styles.container}>
    <Title>Projects</Title>
    {projectsData.map(({ name, description, image, links }) => (
      <ProjectEntry
        name={name}
        description={description}
        image={image}
        links={links}
        key={name}
      />
    ))}
  </View>
);

export default Projects;

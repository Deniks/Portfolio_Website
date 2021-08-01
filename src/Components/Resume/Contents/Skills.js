import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

import Title from './Title';
import List, { Item } from './List';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 11,
    marginBottom: 10,
  },
  skills: {
    fontFamily: 'Lato',
    fontSize: 10,
    marginBottom: 10,
  },
});

const SkillEntry = ({ name, skills }) => (
  <View>
    <Text style={styles.title}>{name}</Text>
    <List>
      {skills.map((skill, i) => (
        <Item key={i}>{skill}</Item>
      ))}
    </List>
  </View>
);

const Skills = () => (
  <View>
    <Title>Skills</Title>
    <SkillEntry
      name="Front-end"
      skills={[
        'JavaScript',
        'React.js',
        'Redux',
        'Jest',
        'GraphQL',
        'HTML/CSS',
        'Responsive/Adaptive Design',
        'Material UI',
        'Three.js',
      ]}
    />
    <SkillEntry
      name="Back-end"
      skills={[
        'Node',
        'Express.js',
        'MongoDB',
        'TypeScript',
        'Apollo',
        'RESTful API',
        'SSR',
        'SPA',
        'Webpack',
      ]}
    />
    <SkillEntry
      name="Project Managment"
      skills={['Agile', 'SCRUM', 'Kanban', 'Gantt Chart', 'Git']}
    />
    <SkillEntry
      name="DevOps"
      skills={['CI/CD', 'Docker', 'Kubernetes', 'Azure']}
    />
    <SkillEntry
      name="Other"
      skills={[
        'Unit Testing',
        'Functional Testing',
        'Kali Linux',
        'Ubuntu',
        'Networking',
        'OOP',
        'Functional Programming',
        'C#',
        'WPF',
        'Unity',
        'Python',
        'Django',
        'Blender',
        'Hard-Surface Modeling',
      ]}
    />
  </View>
);

export default Skills;

import React from 'react';
import {
  Text,
  Font,
  Page,
  View,
  Image,
  Document,
  StyleSheet,
  Link,
} from '@react-pdf/renderer';

import Header from './Contents/Header';
import Skills from './Contents/Skills';
import Education from './Contents/Education';
import Experience from './Contents/Experience';
import Projects from './Contents/Projects';
import About from './Contents/About';
import Certificates from './Contents/Certificates';

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    '@media max-width: 400': {
      flexDirection: 'column',
    },
  },
  image: {
    marginBottom: 10,
    borderRadius: 2,
  },
  leftColumn: {
    flexDirection: 'column',
    width: 170,
    paddingTop: 30,
    paddingRight: 15,
    '@media max-width: 400': {
      width: '100%',
      paddingRight: 0,
    },
    '@media orientation: landscape': {
      width: 200,
    },
  },
  rightColumn: {
    flexDirection: 'column',
    '@media max-width: 400': {
      width: '100%',
      paddingRight: 0,
    },
    '@media orientation: landscape': {
      width: 200,
    },
  },
  footer: {
    fontSize: 12,
    fontFamily: 'Lato Bold',
    textAlign: 'center',
    marginTop: 15,
    paddingTop: 5,
    borderWidth: 3,
    borderColor: 'gray',
    borderStyle: 'dashed',
    '@media orientation: landscape': {
      marginTop: 10,
    },
  },
  link: {
    color: 'tomato',
    textDecoration: 'underline',
  },
});

Font.register({
  family: 'Open Sans',
  src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`,
});

Font.register({
  family: 'Lato',
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
});

Font.register({
  family: 'Lato Italic',
  src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
});

Font.register({
  family: 'Lato Bold',
  src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
});

const Resume = (props) => (
  <Page {...props} style={styles.page}>
    <Header />
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Image src="/logo.png" style={styles.image} />
        <Skills />
        <Certificates />
      </View>
      <View style={styles.rightColumn}>
        <About />
        <Projects />
        <Experience />
        <Education />
      </View>
    </View>
    <View style={styles.footer}>
      <Text>
        Do check my{' '}
        <Link
          href="https://www.denissrezanovics.com/"
          target="_blank"
          style={styles.link}
        >
          Portfolio Website
        </Link>
      </Text>
    </View>
  </Page>
);

export default () => (
  <Document
    author="Deniss Rezanovics"
    keywords="Software Engineer, Web Developement, Deniss Rezanovics"
    subject="The resume of Deniss Rezanovics"
    title="Resume"
  >
    <Resume size="A4" />
  </Document>
);

// export const PDFViewer = ({ src }) => {
//   return (
//     <embed
//       src={src}
//       type="application/pdf"
//       height="100%"
//       width="100%"
//       style={{ position: 'absolute', left: 0, top: 0 }}
//     />
//   );
// };

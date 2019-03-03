import React from 'react';
import loadable from '@loadable/component';
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import Header from '../../components/Header';
import './Home.css';

function Home() {
  return (
    <Layout>
      <Header />
      <Container>
        <p>hi</p>
      </Container>
    </Layout>
  );
}

export default Home;

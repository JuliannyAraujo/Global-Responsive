// pages/index.js
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const IndexPage = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <section id="content">
        <p>Bem-vindo ao Saúde para Todos! Escolha uma opção no menu acima.</p>
        <p>A saúde é um aspecto fundamental da vida. Manter um estilo de vida saudável contribui para o bem-estar físico e mental. Nossa missão é proporcionar a todos o acesso a informações e serviços de saúde de qualidade. Junte-se a nós nessa jornada pela saúde para todos!</p>
      </section>
    </div>
  );
};

export default IndexPage;

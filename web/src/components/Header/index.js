import React from 'react';
import logo from '../../assets/logo.png';
import * as S from './styles';
import bell from '../../assets/bell.png';




function Header() {
  return (

    <S.Container>


      <S.LeftSide>
        <img src={logo} alt="Codego" />

      </S.LeftSide>



      <S.RightSide>
        <a href="#">Início</a>
        <span className="dividir" />
        <a href="#">Cadastrar Processo</a>
        <span className="dividir" />
        <a href="#">Sincronizar Celular</a>
        <span className="dividir" />
        <a href="#">Relatório</a>
        <span className="dividir" />
        <a href="#">Consulta</a>
        <span className="dividir" />
        <a href="#" id="notification">
          <img src={bell} alt="Notificação" />
          <span>  5  </span>
        </a>
      </S.RightSide>






    </S.Container>


  )
};

export default Header;
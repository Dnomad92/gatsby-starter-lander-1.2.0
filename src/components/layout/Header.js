import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-secondary-500 shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        Lander
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#sobre">
          Sobre
        </AnchorLink>
        <AnchorLink className="px-4" href="#servicos">
          Serviços
        </AnchorLink>
        <AnchorLink className="px-4" href="#portfolio">
          Portfólio
        </AnchorLink>
        <AnchorLink className="px-4" href="#clientes">
          Clientes
        </AnchorLink>
        <AnchorLink className="px-4" href="#Contatos">
          Contatos
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="hover:bg-primary-900 text-sm bg-primary-400">Start Free Trial</Button>
      </div>
    </div>
  </header>
);

export default Header;

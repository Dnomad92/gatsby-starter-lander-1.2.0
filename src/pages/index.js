import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

const Index = () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-center ">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            CRIANDO IDÉIAS <br/> GERANDO CONEXÕES

          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Deixe-nos ajudar você a aumentar sua presença online. A Toca da Designer é a sua escolha definitiva para agência de mídia social
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">WhatsApp</Button>
          </p>
          <p className="mt-4 text-gray-600">Entre em contato conosco AGORA mesmo!</p>
        </div>
        {/*<div className="lg:w-1/2">
          <HeroImage />
        </div>*/}
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Beneficios</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Maior alcance</p>
              <p className="mt-4">
                 Com nosso plano de mídia social, sua empresa poderá alcançar um público maior e mais diversificado. Isso significa que você poderá alcançar mais clientes em potencial e, assim, aumentar suas chances de sucesso.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Melhora da reputação da marca</p>
              <p className="mt-4">
              Uma presença forte nas redes sociais pode ajudar a melhorar a reputação da sua marca. Com nosso plano de mídia social, você poderá mostrar aos seus clientes que é uma empresa confiável e respeitável.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Melhoria da eficiência do marketing</p>
              <p className="mt-4">
                Com nosso plano de mídia social, você poderá melhorar a eficiência do seu marketing. Nossos especialistas podem ajudá-lo a criar campanhas publicitárias bem-sucedidas e a maximizar o ROI de suas iniciativas de marketing.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
          Criação de conteúdo personalizado e criativo, adaptado ao seu público-alvo e à sua marca.
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Nosso serviço de mídia social oferece conteúdo personalizado e criativo, criado especificamente para a sua marca e seu público-alvo. Isso garante que suas postagens nas redes sociais sejam autênticas e relevantes para seus seguidores, o que aumentará o engajamento e as interações com sua marca.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Programação e publicação regular de posts em todas as suas redes sociais.
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            É importante manter uma presença ativa nas redes sociais para aumentar a visibilidade e o alcance da sua marca. Com nosso serviço, você terá postagens regulares e bem planejadas em todas as suas plataformas de mídia social, garantindo que seus seguidores vejam sua marca com frequência e tenham um motivo para interagir com suas postagens.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Monitoramento de engajamento e interações com seu público
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Além de publicar conteúdo regularmente, é importante monitorar as interações e o engajamento com seu público. Com nosso serviço, você terá acesso a análises detalhadas de cada interação e engajamento, permitindo que você ajuste sua estratégia de mídia social com base nos resultados.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Tem alguma dúvida?</h3>
      <p className="mt-8 text-xl font-light">
        Se quiser saber mais sobre como a Toca da Designer pode ajudá-lo, entre em contato conosco hoje mesmo e fale com nossa equipe de especialistas em mídia social!
      </p>
      <p className="mt-8">
        <Button size="xl">WhatsApp</Button>
      </p>
    </section>
  </Layout>
);

export default Index;

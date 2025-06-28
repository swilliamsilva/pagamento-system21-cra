import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Users, Zap, Shield, Database, Cloud } from 'lucide-react';
import './App.css';

// Importando assets
import heroBackground from './hero-bg.png';
import hexagonalArch from './hexagonal-arch.png';
import microservices from './microservices.png';
import javaSpring from './java-spring.png';
import contributeIcon from './contribute-icon.png';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-white"
            >
              Pagamento System21
            </motion.div>
            <div className="flex items-center space-x-6">
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">Sobre</a>
              <a href="#architecture" className="text-slate-300 hover:text-white transition-colors">Arquitetura</a>
              <a href="#technologies" className="text-slate-300 hover:text-white transition-colors">Tecnologias</a>
              <a href="#contribute" className="text-slate-300 hover:text-white transition-colors">Contribuir</a>
              <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md transition-colors flex items-center">
                <a href="https://github.com/swilliamsilva/pagamento-system21" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-slate-900/50" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Sistema de Pagamentos
              <span className="block text-blue-400">com Arquitetura Hexagonal</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Projeto open source desenvolvido em Java 21 e Spring Boot 3, 
              implementando microserviços com arquitetura hexagonal para máxima flexibilidade e testabilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg transition-colors">
                <a href="https://github.com/swilliamsilva/pagamento-system21" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <Github className="w-5 h-5 mr-2" />
                  Ver no GitHub
                </a>
              </button>
              <button className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-6 py-3 rounded-md text-lg transition-colors">
                <a href="#contribute" className="flex items-center justify-center">
                  <Users className="w-5 h-5 mr-2" />
                  Contribuir
                </a>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Sobre o Projeto</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              O Pagamento System21 é um sistema distribuído de pagamentos que implementa 
              os princípios da arquitetura hexagonal (Ports & Adapters) para criar uma 
              solução robusta, testável e facilmente extensível.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={hexagonalArch} 
                alt="Arquitetura Hexagonal" 
                className="rounded-lg shadow-2xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-white">Arquitetura Hexagonal</h3>
              <p className="text-slate-300 text-lg">
                A arquitetura hexagonal permite que o domínio da aplicação seja completamente 
                independente de frameworks, bancos de dados e interfaces externas. Isso resulta em:
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <Shield className="w-5 h-5 text-green-400 mr-3" />
                  Isolamento completo da lógica de negócio
                </li>
                <li className="flex items-center">
                  <Zap className="w-5 h-5 text-yellow-400 mr-3" />
                  Facilidade para testes unitários e de integração
                </li>
                <li className="flex items-center">
                  <Code className="w-5 h-5 text-blue-400 mr-3" />
                  Flexibilidade para mudanças de tecnologia
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Arquitetura de Microserviços</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              O sistema é composto por microserviços especializados que se comunicam 
              através de eventos, garantindo baixo acoplamento e alta coesão.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={microservices} 
                alt="Arquitetura de Microserviços" 
                className="rounded-lg shadow-2xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-white">Microserviços Especializados</h3>
              <p className="text-slate-300 text-lg">
                Cada serviço tem uma responsabilidade específica e pode ser desenvolvido, 
                testado e implantado independentemente.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "API Gateway",
                description: "Roteamento e segurança centralizada",
                icon: <Shield className="w-8 h-8 text-blue-400" />
              },
              {
                title: "Auth Service",
                description: "Autenticação JWT e autorização",
                icon: <Users className="w-8 h-8 text-green-400" />
              },
              {
                title: "Payment Orchestrator",
                description: "Orquestração de pagamentos",
                icon: <Zap className="w-8 h-8 text-yellow-400" />
              },
              {
                title: "Boleto Service",
                description: "Processamento de boletos bancários",
                icon: <Database className="w-8 h-8 text-purple-400" />
              },
              {
                title: "PIX Service",
                description: "Transações PIX em tempo real",
                icon: <Zap className="w-8 h-8 text-orange-400" />
              },
              {
                title: "Card Service",
                description: "Processamento de cartões",
                icon: <Shield className="w-8 h-8 text-red-400" />
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 hover:bg-slate-700/50 transition-colors rounded-lg p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  {service.icon}
                  <h4 className="text-xl font-semibold text-white">{service.title}</h4>
                </div>
                <p className="text-slate-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Stack Tecnológico</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Utilizamos as tecnologias mais modernas e robustas do ecossistema Java 
              para garantir performance, escalabilidade e manutenibilidade.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={javaSpring} 
                alt="Java e Spring Boot" 
                className="rounded-lg shadow-2xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-white">Java 21 + Spring Boot 3</h3>
              <p className="text-slate-300 text-lg">
                Aproveitamos os recursos mais recentes do Java 21 e Spring Boot 3 
                para criar uma aplicação moderna e eficiente.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Java 21", category: "Linguagem" },
              { name: "Spring Boot 3", category: "Framework" },
              { name: "MongoDB", category: "Banco NoSQL" },
              { name: "PostgreSQL", category: "Banco SQL" },
              { name: "Cassandra", category: "Banco Distribuído" },
              { name: "DynamoDB", category: "Banco AWS" },
              { name: "Kafka", category: "Mensageria" },
              { name: "Docker", category: "Containerização" },
              { name: "AWS S3", category: "Storage" },
              { name: "AWS SNS", category: "Notificações" },
              { name: "Micrometers", category: "Observabilidade" },
              { name: "JUnit 5", category: "Testes" }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-700/50 border border-slate-600 hover:bg-slate-600/50 transition-colors text-center rounded-lg p-4"
              >
                <h4 className="font-semibold text-white mb-1">{tech.name}</h4>
                <span className="text-xs bg-slate-600 text-slate-200 px-2 py-1 rounded">
                  {tech.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section id="contribute" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Junte-se à Comunidade</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Este é um projeto open source e convidamos desenvolvedores de todos os níveis 
              para contribuir e aprender juntos. Sua participação é muito bem-vinda!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <img 
                src={contributeIcon} 
                alt="Contribuir" 
                className="w-64 h-64 mx-auto mb-8 rounded-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-3xl font-bold text-white">Como Contribuir</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Fork o Repositório</h4>
                    <p className="text-slate-300">Faça um fork do projeto no GitHub para sua conta pessoal.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Configure o Ambiente</h4>
                    <p className="text-slate-300">JDK 21, Docker e Docker Compose são os únicos requisitos.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Desenvolva e Teste</h4>
                    <p className="text-slate-300">Implemente suas melhorias seguindo os padrões TDD do projeto.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Envie um Pull Request</h4>
                    <p className="text-slate-300">Submeta suas contribuições para revisão da comunidade.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md text-lg transition-colors">
                  <a href="https://github.com/swilliamsilva/pagamento-system21/fork" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <Code className="w-5 h-5 mr-2" />
                    Fork no GitHub
                  </a>
                </button>
                <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md text-lg transition-colors">
                  <a href="https://github.com/swilliamsilva/pagamento-system21/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Documentação
                  </a>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-slate-700">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Pagamento System21</h3>
              <p className="text-slate-300 mb-4">
                Sistema de pagamentos com arquitetura hexagonal desenvolvido em Java 21.
              </p>
              <div className="flex space-x-4">
                <button className="text-slate-400 hover:text-white transition-colors">
                  <a href="https://github.com/swilliamsilva/pagamento-system21" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Recursos</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#about" className="hover:text-white transition-colors">Sobre o Projeto</a></li>
                <li><a href="#architecture" className="hover:text-white transition-colors">Arquitetura</a></li>
                <li><a href="#technologies" className="hover:text-white transition-colors">Tecnologias</a></li>
                <li><a href="#contribute" className="hover:text-white transition-colors">Como Contribuir</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Desenvolvedor</h4>
              <p className="text-slate-300 mb-2">William Silva</p>
              <p className="text-slate-400 text-sm">
                Desenvolvedor apaixonado por arquiteturas limpas e código de qualidade.
              </p>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              © 2025 Pagamento System21. Projeto open source sob licença MIT.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;


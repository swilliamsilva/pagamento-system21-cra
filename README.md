


# Pagamento System21 - Site de Apresentação (Create React App)

Site de apresentação do projeto **Pagamento System21**, um sistema de pagamentos distribuído desenvolvido em Java 21 com arquitetura hexagonal.

## 🚀 Sobre o Projeto

Este site foi criado para apresentar o projeto [pagamento-system21](https://github.com/swilliamsilva/pagamento-system21) e convidar desenvolvedores para contribuir com o desenvolvimento open source.

### Características do Site:
- **React 18** com Create React App
- **TypeScript** para tipagem estática
- **CSS customizado** com design system próprio
- **Framer Motion** para animações
- **Lucide Icons** para ícones
- Design responsivo e moderno
- **Compatível com Netlify** (testado e aprovado)

## 🛠️ Tecnologias Utilizadas

- React 18
- TypeScript
- Create React App
- Framer Motion
- Lucide React
- React Router DOM
- CSS3 com design system customizado

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 16+
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone <repository-url>

# Entre no diretório
cd pagamento-system21-cra

# Instale as dependências
npm install
# ou
yarn install
```

### Execução em Desenvolvimento
```bash
npm start
# ou
yarn start
```

O site estará disponível em `http://localhost:3000`

### Build de Produção
```bash
npm run build
# ou
yarn build
```

### Teste do Build
```bash
# Instalar serve globalmente (se necessário)
npm install -g serve

# Servir o build
serve -s build
```

## 🌐 Deploy no Netlify

Este projeto foi especificamente otimizado para funcionar perfeitamente no Netlify:

### ✅ Recursos Netlify-Ready:
- **Create React App**: Framework totalmente compatível com Netlify
- **Redirects configurados**: Arquivo `_redirects` para SPA
- **Build otimizado**: Comando `npm run build` gera pasta `build/`
- **Sem dependências problemáticas**: Não usa Vite ou outras ferramentas que podem causar problemas

### Deploy Manual no Netlify:
1. Faça o build: `npm run build`
2. Faça upload da pasta `build` no Netlify
3. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`

### Deploy Automático via Git:
1. Conecte o repositório ao Netlify
2. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
   - **Node version**: `18` (recomendado)

### Configurações Netlify:
```toml
# netlify.toml (opcional)
[build]
  publish = "build"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 📁 Estrutura do Projeto

```
src/
├── App.tsx         # Componente principal
├── App.css         # Estilos globais e design system
├── index.tsx       # Ponto de entrada
├── *.png          # Assets de imagem
└── ...

public/
├── _redirects      # Configuração de redirects para Netlify
├── index.html      # Template HTML
└── ...

build/              # Pasta gerada pelo build (para deploy)
├── static/
├── index.html
└── ...
```

## 🎨 Design System

### Paleta de Cores
- **Primária**: Azul (#2563eb, #3b82f6)
- **Secundária**: Verde (#22c55e, #16a34a)
- **Accent**: Laranja, Amarelo, Roxo
- **Background**: Gradiente azul escuro (#0f172a, #1e3a8a)
- **Texto**: Branco, Slate (várias tonalidades)

### Tipografia
- **Fonte**: Inter (Google Fonts)
- **Tamanhos**: Sistema responsivo (text-sm a text-7xl)
- **Pesos**: 300-900

### Layout
- **Container**: max-width 1200px, centralizado
- **Grid**: Sistema flexível com CSS Grid
- **Spacing**: Sistema baseado em rem (0.25rem a 5rem)
- **Breakpoints**: sm (640px), md (768px), lg (1024px)

## 📱 Responsividade

O site é totalmente responsivo:
- 📱 **Mobile**: 320px+ (design mobile-first)
- 📱 **Tablet**: 768px+
- 💻 **Desktop**: 1024px+
- 🖥️ **Large screens**: 1280px+

## ⚡ Performance

- **Otimizações CRA**: Code splitting automático
- **Imagens otimizadas**: Compressão adequada
- **CSS otimizado**: Minificação automática
- **JavaScript otimizado**: Minificação e tree-shaking

## 🔧 Diferenças da Versão Vite

Esta versão foi criada especificamente para resolver problemas de compatibilidade com Netlify:

### ❌ Problemas da versão Vite:
- Configuração complexa para Netlify
- Problemas com redirects SPA
- Dependências que podem causar conflitos
- Build process mais complexo

### ✅ Vantagens da versão CRA:
- **Compatibilidade total** com Netlify
- **Configuração simples** e direta
- **Build confiável** e testado
- **Suporte oficial** do React team
- **Documentação extensa** e comunidade ativa

## 🤝 Contribuindo

Este site foi criado para promover o projeto open source **Pagamento System21**. Para contribuir com o projeto principal, visite:

👉 [github.com/swilliamsilva/pagamento-system21](https://github.com/swilliamsilva/pagamento-system21)

## 🐛 Solução de Problemas

### Build falha no Netlify:
1. Verifique se o Node.js está na versão 16+
2. Confirme que o comando de build é `npm run build`
3. Confirme que o diretório de publicação é `build`

### Site mostra página em branco:
1. Verifique se o arquivo `_redirects` está na pasta `public/`
2. Confirme que as rotas estão configuradas corretamente
3. Verifique o console do navegador para erros

### Imagens não carregam:
1. Confirme que as imagens estão na pasta `src/`
2. Verifique se os imports estão corretos
3. Teste o build localmente primeiro

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**William Silva**
- GitHub: [@swilliamsilva](https://github.com/swilliamsilva)
- Projeto: [pagamento-system21](https://github.com/swilliamsilva/pagamento-system21)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!

## 📝 Notas de Deploy

- ✅ **Testado no Netlify**: Este projeto foi especificamente testado e otimizado para Netlify
- ✅ **Build estável**: Create React App garante builds consistentes
- ✅ **Sem dependências problemáticas**: Todas as dependências são compatíveis com Netlify
- ✅ **Documentação completa**: Instruções detalhadas para deploy

# pagamento-system21-cra

Pagamento System21: Uma Jornada na Arquitetura Hexagonal com Java 21 e Spring Boot 3

Introdução

O cenário de desenvolvimento de software moderno exige sistemas robustos, escaláveis e, acima de tudo, adaptáveis. Em um mundo onde os requisitos de negócio mudam constantemente e a integração com diversas plataformas é a norma, a capacidade de evoluir rapidamente sem comprometer a estabilidade é crucial. É nesse contexto que o projeto Pagamento System21 surge como uma solução exemplar, demonstrando como a aplicação de princípios de design de software sólidos, como a Arquitetura Hexagonal, pode resultar em um sistema de pagamentos distribuído altamente flexível e manutenível.
Desenvolvido em Java 21 e utilizando o poder do Spring Boot 3, o Pagamento System21 não é apenas um sistema funcional; é um estudo de caso prático sobre como construir aplicações resilientes e desacopladas. Este artigo explora os pilares fundamentais do projeto, desde sua concepção arquitetural até as tecnologias que o impulsionam, e, mais importante, convida a comunidade de desenvolvedores a se juntar a essa jornada de inovação e colaboração open source.
A Essência da Arquitetura Hexagonal (Ports & Adapters)
No coração do Pagamento System21 reside a Arquitetura Hexagonal, também conhecida como Arquitetura de Ports & Adapters. Este padrão arquitetural, proposto por Alistair Cockburn, visa criar sistemas onde a lógica de negócio central (o domínio) é completamente isolada de suas preocupações externas, como bancos de dados, interfaces de usuário, sistemas de terceiros e frameworks. A ideia é que o domínio da aplicação não saiba nada sobre a tecnologia que o cerca, comunicando-se com o mundo exterior apenas através de
interfaces bem definidas, os 'Ports' (portas). As implementações concretas dessas interfaces, que interagem com o mundo externo, são os 'Adapters' (adaptadores).

Ports (Portas)
As portas são interfaces que definem um contrato de comunicação entre o domínio da aplicação e o mundo exterior. Elas podem ser de dois tipos:
Driving Ports (Portas de Condução): Definem como o domínio da aplicação é invocado por agentes externos (por exemplo, uma API REST, uma interface de usuário, um agendador de tarefas). São as interfaces que o domínio oferece para ser utilizado.
Driven Ports (Portas Conduzidas): Definem como o domínio da aplicação interage com agentes externos (por exemplo, um banco de dados, um serviço de e-mail, um gateway de pagamento). São as interfaces que o domínio precisa para funcionar, mas cuja implementação é fornecida por um adaptador externo.

Adapters (Adaptadores)
Os adaptadores são as implementações concretas das portas. Eles traduzem as chamadas do mundo externo para o formato que o domínio entende (no caso dos Driving Adapters) e vice-versa (no caso dos Driven Adapters). Exemplos incluem:
Driving Adapters: Controladores REST, interfaces de linha de comando, listeners de mensagens.
Driven Adapters: Implementações de repositórios de banco de dados, clientes de API de terceiros, publicadores de mensagens.

Benefícios no Pagamento System21
No Pagamento System21, a Arquitetura Hexagonal oferece uma série de vantagens cruciais para um sistema de pagamentos:
Isolamento da Lógica de Negócio: O coração do sistema – as regras de negócio relacionadas a pagamentos – permanece intocado por mudanças em tecnologias de banco de dados, frameworks web ou provedores de pagamento. Isso garante que a lógica mais crítica seja robusta e fácil de manter.

Testabilidade Aprimorada: Como o domínio é independente, ele pode ser testado de forma isolada, sem a necessidade de infraestrutura externa (bancos de dados, APIs). Isso acelera o ciclo de desenvolvimento e garante maior confiança no código.

Flexibilidade e Adaptabilidade: A troca de um banco de dados, a adição de um novo método de pagamento (PIX, Boleto, Cartão) ou a integração com um novo gateway de pagamento torna-se uma tarefa de adicionar ou substituir um adaptador, sem impactar o domínio central. Isso é vital em um setor em constante evolução como o de pagamentos.

Manutenibilidade e Escalabilidade: O baixo acoplamento entre os componentes facilita a compreensão do código, a identificação de problemas e a adição de novas funcionalidades, contribuindo para um sistema mais fácil de manter e escalar.

Microserviços: A Força da Distribuição
Complementando a Arquitetura Hexagonal, o Pagamento System21 adota uma abordagem de microserviços. Em vez de construir uma aplicação monolítica, o sistema é decomposto em pequenos serviços independentes, cada um responsável por uma funcionalidade de negócio específica. Essa granularidade permite que cada serviço seja desenvolvido, implantado e escalado de forma autônoma, otimizando a agilidade e a resiliência do sistema como um todo.
Cada microserviço no Pagamento System21 é projetado com a Arquitetura Hexagonal em mente, garantindo que mesmo dentro de um contexto distribuído, a lógica de negócio de cada serviço permaneça isolada e testável. A comunicação entre esses serviços é realizada principalmente através de eventos, promovendo um baixo acoplamento e permitindo que os serviços reajam a mudanças de estado uns dos outros de forma assíncrona e eficiente.
Componentes Chave da Arquitetura de Microserviços:

O Pagamento System21 é composto por uma série de microserviços especializados, cada um desempenhando um papel vital no fluxo de pagamentos:
API Gateway: Atua como o ponto de entrada unificado para todas as requisições externas. É responsável pelo roteamento das requisições para os microserviços apropriados, autenticação inicial e segurança, protegendo os serviços internos da exposição direta.
Auth Service: Gerencia a autenticação e autorização dos usuários e sistemas, utilizando tokens JWT (JSON Web Tokens) para garantir a segurança das transações e acessos.

Payment Orchestrator: Orquestra o fluxo de pagamentos, coordenando as interações entre os diferentes serviços de pagamento (Boleto, PIX, Cartão) e garantindo que as transações sejam processadas de forma consistente e segura.
Boleto Service: Implementa a lógica de negócio específica para a geração e processamento de boletos bancários, encapsulando as regras e integrações necessárias para este método de pagamento.

PIX Service: Responsável por todas as operações relacionadas ao PIX, desde a criação de chaves até o processamento de transações em tempo real, aproveitando a agilidade e a instantaneidade do sistema de pagamentos brasileiro.

Card Service: Lida com o processamento de transações com cartão de crédito e débito, incluindo validação, autorização e captura, com foco na segurança e conformidade com as normas do setor.

Asaas Integration: Um adaptador específico para a integração com o gateway de pagamentos Asaas, demonstrando a flexibilidade da Arquitetura Hexagonal para incorporar serviços de terceiros sem impactar o domínio central.
Essa abordagem de microserviços, combinada com a Arquitetura Hexagonal, confere ao Pagamento System21 uma capacidade notável de escalabilidade horizontal, resiliência a falhas (uma falha em um serviço não derruba o sistema inteiro) e a possibilidade de equipes independentes trabalharem em diferentes partes do sistema simultaneamente, acelerando o desenvolvimento e a entrega de valor.

Stack Tecnológico: Potência e Modernidade com Java 21 e Spring Boot 3
O Pagamento System21 é construído sobre uma base tecnológica sólida e moderna, aproveitando o que há de mais recente no ecossistema Java para garantir performance, escalabilidade e facilidade de desenvolvimento. A escolha do Java 21 e Spring Boot 3 não é aleatória; ela reflete um compromisso com a inovação e a utilização de ferramentas que oferecem recursos avançados e uma comunidade vibrante.

Java 21: A Vanguarda da Plataforma
Com o lançamento do Java 21, a plataforma continua a evoluir, trazendo melhorias significativas em performance, segurança e produtividade para desenvolvedores. O Pagamento System21 se beneficia de recursos como:
Virtual Threads (Project Loom): Embora não explicitamente detalhado no repositório, a compatibilidade com Virtual Threads no Java 21 é um divisor de águas para aplicações de alta concorrência, permitindo que o Spring Boot 3 lide com um número muito maior de requisições simultâneas de forma eficiente, sem a complexidade da programação assíncrona tradicional. Isso é particularmente relevante para um sistema de pagamentos que exige baixa latência e alta vazão.
Pattern Matching for Switch: Simplifica o código e o torna mais legível, especialmente ao lidar com diferentes tipos de dados ou estados.
Record Patterns: Facilita a desestruturação de objetos Record, tornando o código mais conciso e expressivo.
Essas e outras melhorias no Java 21 contribuem para um código mais limpo, performático e fácil de manter, elementos essenciais para um sistema de pagamentos crítico.

Spring Boot 3: Produtividade e Ecossistema Completo
O Spring Boot 3, construído sobre o Spring Framework 6, é a espinha dorsal do desenvolvimento de microserviços no Pagamento System21. Ele simplifica drasticamente a criação de aplicações Spring, eliminando grande parte da configuração boilerplate e permitindo que os desenvolvedores se concentrem na lógica de negócio. Dentre seus benefícios, destacam-se:
Autoconfiguração: O Spring Boot configura automaticamente a maioria dos componentes com base nas dependências presentes no classpath, acelerando o desenvolvimento.

Servidores Embarcados: Facilita a implantação, pois cada microserviço pode ser executado como um JAR autônomo com um servidor web embarcado (Tomcat, Jetty ou Undertow).
Atuadores (Actuators): Fornecem endpoints prontos para monitoramento e gerenciamento da aplicação em produção, essenciais para a observabilidade.
Suporte a GraalVM Native Image: Permite compilar aplicações Spring Boot em executáveis nativos, resultando em tempos de inicialização ultrarrápidos e menor consumo de memória, ideal para ambientes de nuvem e funções serverless.

Bancos de Dados e Mensageria
Para garantir a flexibilidade e a adequação a diferentes necessidades de persistência e comunicação, o Pagamento System21 utiliza uma variedade de tecnologias de dados e mensageria:
MongoDB: Um banco de dados NoSQL orientado a documentos, ideal para dados flexíveis e de alta escalabilidade, frequentemente utilizado em microserviços que exigem agilidade no esquema.
Cassandra: Um banco de dados NoSQL distribuído e altamente disponível, projetado para lidar com grandes volumes de dados em clusters, com alta performance de escrita.
DynamoDB: O serviço de banco de dados NoSQL totalmente gerenciado da AWS, oferecendo escalabilidade e performance sob demanda, integrado para cenários de nuvem.
PostgreSQL: Um robusto banco de dados relacional de código aberto, utilizado para cenários onde a integridade transacional e a estrutura de dados relacional são prioritárias.
Kafka: Uma plataforma de streaming distribuída de alta performance, utilizada para a comunicação assíncrona entre os microserviços, garantindo resiliência e escalabilidade na troca de eventos.

Integração com AWS
O projeto demonstra a capacidade de integração com serviços da Amazon Web Services (AWS), um pilar fundamental para aplicações modernas e escaláveis em nuvem:
AWS S3 (Simple Storage Service): Utilizado para armazenamento de objetos, como arquivos de log, backups ou documentos relacionados a transações.
AWS SNS (Simple Notification Service): Um serviço de mensagens pub/sub, que pode ser utilizado para notificações ou para orquestrar fluxos de trabalho baseados em eventos.

Observabilidade e Testes
A qualidade e a confiabilidade são prioridades no Pagamento System21. Para isso, o projeto incorpora práticas e ferramentas essenciais:
Micrometers: Uma fachada de instrumentação de métricas que permite coletar e exportar métricas de aplicação para diversos sistemas de monitoramento (Prometheus, Grafana, etc.), fornecendo insights sobre o comportamento do sistema em tempo real.
Logs e Health Checks Customizados: Implementação de logs detalhados e endpoints de health check personalizados para cada microserviço, facilitando a depuração e o monitoramento da saúde da aplicação.
TDD (Test-Driven Development): O projeto segue a metodologia de Desenvolvimento Orientado a Testes, garantindo que cada funcionalidade seja coberta por testes unitários e de integração robustos. Isso não apenas assegura a correção do código, mas também serve como documentação viva e facilita refatorações futuras.
JUnit 5: O framework de testes padrão para aplicações Java, utilizado para escrever e executar os testes unitários e de integração, garantindo a qualidade do código.
Essa combinação de tecnologias e práticas de desenvolvimento reflete um compromisso com a construção de um sistema de pagamentos de alta qualidade, pronto para os desafios do ambiente de produção e para a evolução contínua.
Junte-se à Comunidade: Como Contribuir com o Pagamento System21
O Pagamento System21 é um projeto open source e sua força reside na colaboração da comunidade. Convidamos desenvolvedores de todos os níveis de experiência a se juntarem a nós nesta jornada, contribuindo com código, documentação, ideias ou feedback. Sua participação é fundamental para o crescimento e aprimoramento contínuo do sistema.

Por Que Contribuir?
Aprender e Crescer: Explore uma arquitetura de software moderna, aprofunde seus conhecimentos em Java 21, Spring Boot 3 e microserviços.
Impacto Real: Suas contribuições ajudarão a construir um sistema de pagamentos robusto e de código aberto.
Networking: Conecte-se com outros desenvolvedores apaixonados por tecnologia e software de qualidade.

Portfólio: Adicione um projeto relevante e de alta qualidade ao seu portfólio.

Guia Rápido para Contribuição:
Fork o Repositório: Comece fazendo um fork do repositório principal no GitHub para sua conta pessoal. Isso criará uma cópia do projeto onde você poderá trabalhar livremente.

Clone o Repositório Forkado: Clone o seu fork para sua máquina local:
Configure o Ambiente: Certifique-se de ter o JDK 21 instalado. Para rodar os serviços localmente, você precisará do Docker e Docker Compose. O projeto já possui configurações para levantar a infraestrutura necessária (bancos de dados, Kafka) via Docker Compose.

Desenvolva e Teste: Escolha uma issue para trabalhar ou proponha uma nova funcionalidade. Implemente suas melhorias seguindo os padrões de código do projeto e, crucialmente, escreva testes (unitários e de integração) que cubram suas alterações. O projeto adota TDD, então comece pelos testes!
Envie um Pull Request (PR): Após desenvolver e testar suas alterações, envie um Pull Request para o repositório principal. Certifique-se de que seu PR seja claro, conciso e inclua uma descrição detalhada das mudanças e por que elas foram feitas. A equipe do projeto revisará seu código e fornecerá feedback.

Recursos Adicionais para Contribuidores:
O repositório do Pagamento System21 contém documentação valiosa para ajudar novos contribuidores a se familiarizarem com o projeto:
HEXAGONAL-ARCH.md: Detalhes aprofundados sobre a implementação da Arquitetura Hexagonal no BoletoService.
SECURITY.md: Informações sobre a segurança, JWT, filtros e configuração de autenticação.
OBSERVABILITY.md: Detalhes sobre logs, métricas e traces para observabilidade.
FLOW.md: Diagramas textuais que ilustram os fluxos entre as classes por camada.
Licença

O projeto Pagamento System21 é distribuído sob a Licença MIT. Isso significa que você é livre para usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou vender cópias do software, desde que a notificação de direitos autorais e a permissão sejam incluídas em todas as cópias ou partes substanciais do software.
Sobre o Autor

Este projeto foi idealizado e iniciado por William Silva, um desenvolvedor apaixonado por arquiteturas de software limpas, código de qualidade e o ecossistema Java. William busca constantemente aplicar as melhores práticas de engenharia de software para construir sistemas robustos e eficientes, e o Pagamento System21 é um reflexo dessa paixão e expertise. Ele convida a todos a se conectarem e colaborarem para levar este projeto adiante.
GitHub: https://github.com/swilliamsilva/pagamento-system21
LinkedIn: https://www.linkedin.com/in/william-silva-20315993/

⭐ Se você achou este projeto interessante ou útil, por favor, considere dar uma estrela no repositório do GitHub! Seu apoio nos motiva a continuar aprimorando e expandindo o Pagamento System21.


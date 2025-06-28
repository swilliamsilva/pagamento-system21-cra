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

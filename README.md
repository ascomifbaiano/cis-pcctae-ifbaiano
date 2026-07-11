# Analisador de Conformidade e Pareceres CIS-PCCTAE

Este repositório contém os códigos-fontes e recursos da aplicação Single Page Application (SPA) desenvolvida para a Comissão Interna de Supervisão da Carreira (CIS/PCCTAE) do IF Baiano. A ferramenta otimiza a triagem documental e automatiza a emissão de despachos e pareceres de processos eletrônicos (SUAP).

## 📁 Estrutura do Repositório

- **[index.html](file:///G:/Meu%20Drive/APP/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/IF%20Baiano%20APPs/analisador-cis-pcctae/index.html)**: Interface de usuário responsiva com suporte nativo a acessibilidade (zoom de fonte e contraste).
- **[style.css](file:///G:/Meu%20Drive/APP/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/IF%20Baiano%20APPs/analisador-cis-pcctae/style.css)**: Design System Vanilla CSS estruturado sob as cores oficiais do IF Baiano.
- **[app.js](file:///G:/Meu%20Drive/APP/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/IF%20Baiano%20APPs/analisador-cis-pcctae/app.js)**: Lógica client-side para o checklist interativo, verificação de retroatividade e gerador de documentos.
- **[marca-if-baiano-horizontal.png](file:///G:/Meu%20Drive/APP/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/IF%20Baiano%20APPs/analisador-cis-pcctae/marca-if-baiano-horizontal.png)**: Logotipo institucional para o cabeçalho.
- **[docs/](file:///G:/Meu%20Drive/APP/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/IF%20Baiano%20APPs/analisador-cis-pcctae/docs)**: Pasta local com PDFs de normativas integradas à biblioteca digital interna.
  - `Resolucao_Consup_63_2020.pdf`: Regulamento geral de afastamentos stricto sensu.
  - `Instrucao-Normativa-34-2020_Consolidada.pdf`: Regulamento consolidado de alocação de carga horária semanal.

## 🚀 Como Executar e Hospedar

1. **Uso Local**: Dê um clique duplo sobre o arquivo `index.html` em sua máquina local para iniciar a ferramenta diretamente no navegador.
2. **Hospedagem (GitHub Pages)**: Publique esta pasta no seu GitHub e ative o GitHub Pages nas configurações do repositório para disponibilizar a ferramenta online em uma URL pública HTTPS (ex: `https://seu-usuario.github.io/analisador-cis-pcctae/`).

## 🛡️ Privacidade e LGPD
A aplicação foi projetada para atuar em conformidade estrita com a LGPD. Todos os dados inseridos (nome, processo, SIAPE) são lidos em memória de forma volátil apenas para a composição e cópia rápida dos textos. O sistema não utiliza banco de dados externo ou armazenamento em cookies de terceiros.

## 📜 Log de Atualizações (Changelog)

### 📅 11/07/2026 - Implantação e Organização no Repositório do GitHub
- 📂 **Migração de Código**: Movi e estruturei a aplicação na pasta central de repositórios do GitHub (`IF Baiano APPs/analisador-cis-pcctae`) para publicação e versionamento corretos.
- 📚 **Biblioteca Digital**: Criei a pasta `docs/` contendo as normativas locais em formato PDF.
- 🎨 **Layout Dashboard**: Redesenhei a interface para apresentar um layout em duas colunas, com a biblioteca de leis e normas fixada na barra lateral.
- ♿ **Acessibilidade & UI**: Inseri controles de acessibilidade (Alto Contraste e Zoom de Fonte) e padronizei o layout sob a paleta oficial do IF Baiano (Verde `#3E9A2D` e Vermelho `#C80710`).

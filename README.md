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

### 📅 11/07/2026 - Redesign UI/UX Premium & Atualização de Fluxo (Reitora Ozenice)
- 📂 **Migração de Código**: Movi e estruturei a aplicação na pasta central de repositórios do GitHub (`IF Baiano APPs/analisador-cis-pcctae`) para versionamento.
- 📚 **Biblioteca Digital & Sidebar**: Criei a pasta `docs/` com PDFs de normativas locais e implementei uma gaveta/sidebar flutuante interativa com um botão FAB para acesso à legislação.
- 🎛️ **Fluxo Stepper Wizard**: Dividi o formulário e checklist em um fluxo guiado passo a passo de 3 etapas com indicador visual de progresso (`stepper-nav`).
- 📊 **Checklist de Conformidade**: Adicionei barra de progresso dinâmica em tempo real para o preenchimento de documentos e redesenhei os checkboxes com marcadores SVG personalizados.
- ♿ **Acessibilidade & UI**: Inseri controles de acessibilidade (Alto Contraste e Zoom de Fonte), suporte total a teclado e padronizei a paleta oficial do IF Baiano (Verde `#3E9A2D` e Vermelho `#C80710`).
- 🔔 **Toast Notifications**: Adicionei um sistema de toasts na base da tela para dar feedback ao copiar documentos ou ao reiniciar o formulário.
- 🏫 **Dados Dinâmicos de Lotação**: Inclusão de campos no formulário para Campus de Lotação (com seleção de todas as unidades tradicionais da instituição, Reitoria e os 4 novos campi de Remanso, Ribeira do Pombal, Ruy Barbosa e Santo Estêvão), Setor e Cargo do servidor.
- ⚖️ **Correção do Fluxo Administrativo**: Ajuste no despacho de diligência para devolver o processo diretamente ao setor de lotação do servidor, e alteração do encaminhamento do parecer de deferimento para o Gabinete da Reitora (em vez de NAGP).
- 👑 **Atualização da Reitoria**: Alterada a assinatura e o preâmbulo das minutas de portaria para a atual reitora do IF Baiano, Ozenice Silva dos Santos, utilizando os dados oficiais fornecidos (Decreto de 20/05/2026, publicado no DOU de 21/05/2026, Seção 2, pág. 1), com a respectiva flexão de gênero gramatical.
- ♿ **Ajuste na Barra de Acessibilidade**: Reposicionamento dos controles de acessibilidade (Alto Contraste, A- e A+) para o lado esquerdo da tela e redesign dos botões para um formato sólido de alto contraste (fundo branco com letras escuras), resolvendo os problemas de legibilidade e visualização.

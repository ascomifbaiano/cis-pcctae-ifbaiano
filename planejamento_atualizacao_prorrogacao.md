# Plano de Especificacao e Acao: Inclusao do Tipo de Pedido Prorrogacao de Afastamento no Analisador CIS-PCCTAE

## 1. Diagnostico da Situacao Atual e Necessidade Institucional

A aplicacao **Analisador CIS-PCCTAE** (versao 2.0) dispoe atualmente de duas modalidades de analise:
1. Afastamento Integral para Pos-Graduacao Stricto Sensu (`afastamento`).
2. Alocacao de Carga Horaria Semanal para Acoes de Desenvolvimento (`alocacao`).

Constata-se a ausencia do fluxo especifico para o tipo de pedido **Prorrogacao de Afastamento Integral**, procedimento administrativo frequente para servidores Tecnico-Administrativos em Educacao (TAE) que necessitam de ampliacao do prazo original para conclusao de suas dissertacoes, teses ou estagios pos-doutorais.

De acordo com as diretrizes da pagina oficial do IF Baiano e o arcabouco normativo vigente, a solicitacao de prorrogacao possui rito, documentacao comprobatoria e janelas temporais distintas do pedido inicial, nao exigindo barema de pontuacao de chamada publica, mas demandando a fiscalizacao rigorosa da portaria de concessao inicial, do cronograma e justificativa do orientador, da tempestividade regimental (60 a 70 dias de antecedencia) e dos limites maximos globais de afastamento fixados no Artigo 4º da Resolucao CONSUP nº 63/2020.

---

## 2. Fundamentacao Legal e Referencias Normativas

O modulo de Prorrogacao sera estruturado em total conformidade com a seguinte legislacao:

1. **Resolucao nº 63/2020 - OS-CONSUP/IFBAIANO, de 30 de marco de 2020**:
   - Art. 4º: Prazos maximos de duracao (Mestrado ate 24 meses, Doutorado ate 48 meses, Pos-Doutorado ate 12 meses).
   - Art. 4º, § 2º: Utilizacao de licenca capacitacao para prorrogacao e limite de ate 4 anos consecutivos para afastamentos no exterior.
   - Art. 9º: Exigencia de publicacao no DOU antes do inicio da viagem ou de sua prorrogacao (afastamento no exterior).
   - Art. 20: Obrigatoriedade de anuencia da chefia imediata e autorizacao do Diretor Geral do campus ou Pro-Reitor/Diretor Sistemico.
   - Art. 28 e 29: Obrigacoes de comprovacao e permanencia apos o termino.
   - Art. 30: Competencia privativa da CIS/PCCTAE para avaliacao documental e emissao de parecer tecnico.
2. **Decreto Federal nº 9.991, de 28 de agosto de 2019**, alterado pelo **Decreto nº 10.506, de 02 de outubro de 2020**:
   - Regulamenta a Politica Nacional de Desenvolvimento de Pessoas (PNDP) e as acoes de desenvolvimento dos servidores publicos civis da Uniao.
3. **Instrucao Normativa nº 21, de 01 de fevereiro de 2021, do Ministerio da Economia / SIPEC**:
   - Estabelece procedimentos especificos para afastamentos de servidores para participacao em acoes de desenvolvimento.
4. **Lei Federal nº 8.112, de 11 de dezembro de 1990**:
   - Art. 95: Afastamento do pais para estudo ou missao oficial.
   - Art. 96-A: Afastamento para participacao em programa de pos-graduacao stricto sensu no pais.
5. **Lei Federal nº 11.091, de 12 de janeiro de 2005**:
   - Estruturacao do Plano de Carreira dos Cargos Tecnico-Administrativos em Educacao (PCCTAE).
6. **Decretos Federais nº 5.824/2006 e nº 5.825/2006**:
   - Incentivo a qualificacao e diretrizes do plano de desenvolvimento dos integrantes da carreira PCCTAE.
7. **Nota Tecnica SEI nº 7058/2019/ME**:
   - Uniformizacao acerca da aplicabilidade da PNDP no ambito dos orgaos e entidades do SIPEC.

---

## 3. Requisitos Funcionais (RF) e Regras de Negocio

### 3.1. Requisitos de Entrada e Formularios (Step 1)
- **RF01 - Selecao da Modalidade**: Adicionar a opcao "Prorrogacao de Afastamento (Pos-Graduacao Stricto Sensu)" no seletor de tipo de processo.
- **RF02 - Dados da Concessao Anterior**: Exibir campos especificos e obrigatorios quando selecionada a prorrogacao:
  - Numero e data da Portaria Concessoria Inicial (ex.: Portaria nº 145/2024 - RET-GAB, de 10/03/2024).
  - Data de inicio e data de termino da vigencia anterior.
- **RF03 - Periodo da Prorrogacao Pleiteada**:
  - Nova Data de Inicio pretendida (deve ser imediatamente subsequente ao termino da portaria anterior).
  - Nova Data de Termino pretendida.
- **RF04 - Validacao de Tempestividade Regimental**:
  - Regra de negocio oficial: o servidor deve encaminhar o processo a CIS com antecedencia de no minimo 60 (sessenta) dias e no maximo 70 (setenta) dias antes do inicio da prorrogacao.
  - O sistema calculara a diferenca em dias entre a Data do Parecer/Autuacao e a Data de Inicio da Prorrogacao:
    * Se entre 60 e 70 dias: indicador visual verde de Tempestividade Atendida.
    * Se inferior a 60 dias: alerta informativo ambar de Intempestividade Relativa (necessidade de justificativa circunstanciada para o atraso).
    * Se superior a 70 dias: alerta informativo azul de Antecedencia Excessiva.
- **RF05 - Validacao do Limite Global Acumulado (Artigo 4º)**:
  - Calcular a duracao total acumulada (periodo anterior + periodo prorrogado):
    * Mestrado: maximo acumulado de 24 meses.
    * Doutorado: maximo acumulado de 48 meses.
    * Pos-Doutorado: maximo acumulado de 12 meses.
  - Alerta bloqueante caso o somatorio ultrapasse o teto legal sem previsao de licenca capacitacao acoplada.

### 3.2. Checklist Documental Especifico de Prorrogacao (Step 2)
A modalidade de Prorrogacao utilizara estrutura de checagem documental dividida em 4 secoes:

1. **Secao 1: Requerimento e Autorizacoes Institucionais**:
   - Requerimento padrao preenchido no SUAP (Tipo do Documento: Formularios DGP / Modelo: Requerimento de Prorrogacao de Afastamento para Participacao em Programa de Pos-graduacao Stricto Sensu no Pais ou no Exterior - TAE).
   - Assinatura eletronica do(a) servidor(a) requerente.
   - Assinatura e anuencia expressa da chefia imediata no requerimento.
   - Assinatura e anuencia do Diretor Geral do campus (para servidores lotados nos campi) ou do Pro-Reitor / Diretor Sistemico / Diretor Executivo (para servidores lotados na Reitoria).

2. **Secao 2: Documentos da Concessao Anterior e Academicos**:
   - Portaria de concessao referente ao primeiro periodo de afastamento devidamente anexada ao processo.
   - Comprovante de matricula recente emitido pela instituicao de ensino no semestre letivo em curso.
   - Historico escolar atualizado demonstrando aproveitamento e cumprimento dos creditos regimentais.

3. **Secao 3: Justificativa e Cronograma do Orientador**:
   - Documento formal assinado pelo(a) orientador(a) contendo a justificativa circunstanciada da necessidade da prorrogacao.
   - Declaracao do(a) orientador(a) indicando expressamente o prazo necessario para a finalizacao das atividades previstas e conclusao do curso.
   - Cronograma detalhado das atividades pendentes a serem desenvolvidas durante o periodo prorrogado (ex.: finalizacao de experimentos, redacao final da tese/dissertacao, submissao de artigos, exame de qualificacao ou defesa).

4. **Secao 4: Tempestividade e Limites Temporais**:
   - Respeito a janela regimental de antecedencia de encaminhamento a CIS (entre 60 e 70 dias antes do inicio da prorrogacao).
   - Observancia do prazo maximo acumulado do afastamento estabelecido no Art. 4º da Resolucao CONSUP nº 63/2020 (ate 24 meses para mestrado, 48 meses para doutorado ou 12 meses para pos-doutorado).
   - Ausencia de efeitos retroativos (termo inicial compativel com o rito decisorio, observando o Artigo 37 da Constituicao Federal e Artigo 60 da Lei nº 9.784/1999).

### 3.3. Documentos Finais Gerados pela CIS (Step 3)
- **RF06 - Despacho de Diligencia da CIS para Prorrogacao**:
  - Em caso de itens desmarcados (pendencias), emite despacho saneador citando textualmente a Resolucao CONSUP nº 63/2020 e a pagina de orientacoes da DGP/CIS, listando cada documento ausente ou intempestivo.
- **RF07 - Parecer de Deferimento de Prorrogacao**:
  - Texto formal da CIS/PCCTAE com numeracao e ano automatico, historico do pleito, mencao a Portaria concessoria de origem, certidao de conformidade dos documentos do orientador e cronograma, indicacao do periodo complementar deferido e encaminhamento a Reitora para homologacao.
- **RF08 - Minuta de Portaria de Prorrogacao de Afastamento**:
  - Redacao institucional padronizada do Gabinete da Reitoria do IF Baiano (Art. 1º: Prorrogar o afastamento integral concedido pela Portaria nº ..., especificando servidor, cargo, matricula SIAPE, lotacao, curso, nivel e o novo periodo de vigencia).
- **RF09 - Checklist de Conformidade Documental Imprimivel**:
  - Visao formatada em folha timbrada para impressao em PDF ou anexacao direta aos autos eletronicos do SUAP como certidao da CIS.

---

## 4. Requisitos Nao-Funcionais (RNF) e Diretrizes de Design

1. **Aderencia Estrita ao System Design do IF Baiano**:
   - Manter as variaveis CSS institucionais (`--if-verde: #3E9A2D;`, `--if-vermelho: #C80710;`, `--if-fundo: #F4F9F4;`).
   - Tipografia limpa com fontes Outfit e Inter.
2. **Acessibilidade Web WCAG 2.1 AAA**:
   - Razao de contraste minima de 7.0:1 para textos regulares e 4.5:1 para elementos de destaque e cabecalhos.
   - Suporte nativo ao modo Alto Contraste (`.high-contrast`) e redimensionamento dinamico de fonte (`A+` e `A-`).
   - Navegacao completa por teclado com indicador visual de foco em todos os componentes.
3. **Veto Absoluto a Emojis e Jargoes Vazios**:
   - Zero emojis em qualquer parte do codigo, documentacao, checklist ou documentos gerados.
   - Substituicao de icones graficos por elementos vetoriais SVG inline ou badges textuais elegantes.
   - Redacao em lingua portuguesa (pt-BR) ABNT2 com acentuacao grafica integral.
   - Ausencia de travessoes intercalares, utilizando virgulas ou pontos.
4. **Privacidade e Execucao Client-Side**:
   - Processamento 100% em memoria local no navegador sem gravacao ou envio de dados pessoais para servidores externos, em conformidade com a LGPD.

---

## 5. Arquitetura de Modificacao de Codigo

### 5.1. Arquivos Envolvidos

```
IF Baiano APPs/analisador-cis-pcctae/
├── index.html                                (Atualizacao do select, campos de portaria anterior e links da biblioteca)
├── app.js                                    (Inclusao do objeto CHECKLISTS.prorrogacao, calculo temporal e geradores)
├── style.css                                 (Ajustes de layout dos novos campos no Bento Grid)
├── harness.py                                (Expansao da suite de testes para validar modalidade prorrogacao)
├── docs/                                     (Inclusao dos textos legais complementares)
└── _System_Designs/IF_Baiano_APPs/
    └── system_design_analisador_cis_pcctae.md (Registro no changelog)
```

### 5.2. Estrutura de Dados em `app.js`

```javascript
CHECKLISTS.prorrogacao = {
    titulo: "Prorrogacao de Afastamento Integral (Pos-Graduacao Stricto Sensu)",
    secoes: [
        {
            titulo: "Requerimento e Autorizacoes Institucionais",
            itens: [
                { id: "pro_1_1", texto: "Requerimento preenchido no modelo proprio do SUAP (Requerimento de Prorrogacao de Afastamento para Participacao em Programa de Pos-graduacao Stricto Sensu no Pais ou no Exterior - TAE)." },
                { id: "pro_1_2", texto: "Formulario devidamente assinado eletronicamente pelo(a) servidor(a) requerente." },
                { id: "pro_1_3", texto: "Assinatura digital e anuencia expressa da chefia imediata no requerimento." },
                { id: "pro_1_4", texto: "Assinatura digital e anuencia do Diretor Geral do campus (servidores nos campi) ou Pro-Reitor/Diretor Sistemico (servidores na Reitoria)." }
            ]
        },
        {
            titulo: "Documentos da Concessao Anterior e Academicos",
            itens: [
                { id: "pro_2_1", texto: "Copia da Portaria referente a concessao do primeiro periodo de afastamento anexada ao processo." },
                { id: "pro_2_2", texto: "Comprovante oficial de matricula emitido recentemente pela instituicao promotora do curso." },
                { id: "pro_2_3", texto: "Historico escolar atualizado com o aproveitamento academico demonstrado." }
            ]
        },
        {
            titulo: "Justificativa e Cronograma do Orientador",
            itens: [
                { id: "pro_3_1", texto: "Documento oficial do(a) orientador(a) justificando a necessidade da prorrogacao do afastamento." },
                { id: "pro_3_2", texto: "Documento do(a) orientador(a) atestando expressamente o prazo necessario para a finalizacao das atividades para conclusao do curso." },
                { id: "pro_3_3", texto: "Cronograma circunstanciado das atividades academicas a serem executadas durante o periodo da prorrogacao." }
            ]
        },
        {
            titulo: "Tempestividade e Limites Temporais",
            itens: [
                { id: "pro_4_1", texto: "Encaminhamento a CIS dentro da antecedencia regimental (com no maximo 70 dias e no minimo 60 dias da data de inicio da prorrogacao)." },
                { id: "pro_4_2", texto: "Prazo total acumulado compativel com o teto legal do Art. 4º da Resolucao CONSUP nº 63/2020 (Mestrado ate 24m, Doutorado ate 48m, Pos-Doc ate 12m)." },
                { id: "pro_4_3", texto: "Vigencia da prorrogacao sem efeitos retroativos, observando o Artigo 37 da Constituicao Federal e Artigo 60 da Lei nº 9.784/1999." }
            ]
        }
    ]
};
```

---

## 6. Plano de Execucao Passo a Passo

O desenvolvimento sera executado em quatro fases estruturadas:

1. **Fase 1: Atualizacao da Estrutura HTML (`index.html`)**:
   - Insercao da opcao `prorrogacao` no seletor de modalidades.
   - Adicao do bloco de campos condicionais no Step 1 (`#campos-prorrogacao`), contendo:
     * Campo de texto para Numero da Portaria Inicial.
     * Campo de data para Data de Publicacao da Portaria Inicial.
     * Campos para Periodo Anterior Usufruido (Data de Inicio e Data de Fim).
   - Insercao do banner de calculo e status da janela de antecedencia (60 a 70 dias).
   - Atualizacao dos links da Biblioteca de Legislacao (adicionando Decreto 10.506/2020, IN 21/2021 ME e Nota Tecnica SEI 7058/2019).

2. **Fase 2: Implementacao da Logica e Geradores em JavaScript (`app.js`)**:
   - Integracao da definicao `CHECKLISTS.prorrogacao`.
   - Implementacao do listener dinamico no campo `#tipo-processo` para alternar a exibicao dos campos de concessao anterior.
   - Funcao utilitaria para calculo dos prazos:
     * Deducao automatica de meses acumulados.
     * Calculo da antecedencia em relacao a data do parecer.
   - Refatoracao de `processarConformidade()`:
     * Gerador de Despacho de Diligencia customizado para Prorrogacao.
     * Gerador de Parecer de Deferimento de Prorrogacao (citando Portaria originaria e novo periodo).
     * Gerador da Minuta de Portaria de Prorrogacao do Gabinete da Reitoria.
     * Montagem do Checklist Impresso Timbrado com identificacao da prorrogacao.

3. **Fase 3: Estilizacao Visual e Acessibilidade (`style.css`)**:
   - Criacao dos estilos para o painel condicional de prorrogacao em Bento Grid.
   - Badge indicador de tempestividade da prorrogacao (verde para intervalo 60 a 70 dias, ambar para inferior a 60 dias).
   - Garantia de contraste WCAG 2.1 AAA em todos os novos elementos.

4. **Fase 4: Testes Automatizados e Homologacao (`harness.py`)**:
   - Atualizacao da suite de testes para validar:
     * Integridade dos 3 tipos de processo (`alocacao`, `afastamento`, `prorrogacao`).
     * Consistencia de todas as 4 secoes do checklist de prorrogacao.
     * Ausencia de quebra de sintaxe ou referencias nulas.
   - Execucao completa e homologacao 100% PASS.

---

## 7. Criterios de Aceite (Definition of Done)

Para que a entrega seja considerada concluida com sucesso, os seguintes criterios devem ser atendidos:

1. A aplicacao permite selecionar a modalidade "Prorrogacao de Afastamento Integral" e exibe dinamicamente os campos de informacao da Portaria Inicial.
2. O checklist renderizado apresenta os 10 itens fundamentados nas orientacoes oficiais da DGP/CIS e na Resolucao CONSUP nº 63/2020.
3. A verificacao de retroatividade e tempestividade calcula com precisao se o pedido cumpre a antecedencia regimental de 60 a 70 dias.
4. Havendo itens pendentes, o Despacho de Diligencia lista unicamente as exigencias da prorrogacao.
5. Em conformidade plena, sao gerados com 1 clique o Parecer Deferido da CIS, a Minuta de Portaria de Prorrogacao do Gabinete da Reitoria e o Checklist Timbrado para impressao.
6. A suite de autoteste `harness.py` e executada e atinge resultado 100% PASS.
7. Toda a documentacao e codigo estao em conformidade com as Regras 11 (zero emojis), 19 (pt-BR ABNT2 com acentos), 28 (sem travessoes intercalares) e 39 (relacao para GitHub).

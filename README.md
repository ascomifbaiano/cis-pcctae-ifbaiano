# Analisador CIS-PCCTAE

Sistema de triagem técnica documental, conferência de conformidade regimental e geração automatizada de atos administrativos para a Comissão Interna de Supervisão do Plano de Carreira dos Cargos Técnico-Administrativos em Educação (CIS-PCCTAE) do Instituto Federal de Educação, Ciência e Tecnologia Baiano (IF Baiano).

---

## 1. Visão Geral e Propósito Institucional

O **Analisador CIS-PCCTAE** é uma ferramenta web de apoio à governança e à gestão de pessoas no âmbito do IF Baiano. Desenvolvido para conferir celeridade, uniformidade e segurança jurídica à instrução processual eletrônica no Sistema Unificado de Administração Pública (SUAP), o sistema guia o relator ou analista da comissão na conferência exaustiva de documentos obrigatórios, calculando prazos regimentais e gerando minutas de despachos, pareceres e portarias em estrita observância à legislação federal e às normas internas da instituição.

---

## 2. Modalidades de Processos Atendidas

O sistema disponibiliza fluxos documentais independentes e parametrizados:

1. **Afastamento Integral para Pós-Graduação Stricto Sensu (Concessão Inicial)**:
   - Análise de pedidos de afastamento integral no país ou no exterior para cursos de Mestrado, Doutorado e Pós-Doutorado.
   - Verificação de enquadramento em Edital de Seleção e chamada pública interna.
   - Conferência de tempo de efetivo exercício, inexistência de penalidades disciplinares e cumprimento do interstício legal.
   - Validação da Declaração do NUCAP ou NAGP atestando que a ação de desenvolvimento está prevista no Plano de Desenvolvimento de Pessoas (PDP) do exercício.

2. **Prorrogação de Afastamento Integral para Pós-Graduação Stricto Sensu (Nova Modalidade)**:
   - Avaliação técnica para extensão de prazo concedido por portaria anterior.
   - Registro e validação da Portaria Concessória Inicial (número, data e período inicial usufruído).
   - Validação da janela de tempestividade regimental de 60 a 70 dias de antecedência entre a data de análise e o início da vigência prorrogada.
   - Verificação dos limites globais acumulados de afastamento fixados no Artigo 4º da Resolução CONSUP número 63/2020 (até 24 meses para Mestrado, até 48 meses para Doutorado e até 12 meses para Pós-Doutorado).
   - Conferência da Declaração formal do NUCAP ou NAGP e cópia do PDP aprovado.
   - Análise da justificativa circunstanciada e do cronograma de conclusão emitidos pelo(a) orientador(a) acadêmico(a).

3. **Alocação de Carga Horária Semanal para Ações de Desenvolvimento**:
   - Concessão de carga horária para capacitação e aperfeiçoamento profissional em serviço.

---

## 3. Fundamentação Legal e Normativa

Todos os checklists, alertas de conformidade e minutas documentais estão alicerçados no arcabouço normativo vigente:

- **Lei Federal número 11.091, de 12 de janeiro de 2005**: Estrutura o Plano de Carreira dos Cargos Técnico-Administrativos em Educação (PCCTAE) no âmbito das Instituições Federais de Ensino vinculadas ao Ministério da Educação.
- **Lei Federal número 8.112, de 11 de dezembro de 1990**: Regime Jurídico Único dos Servidores Públicos Civis da União, em especial os Artigos 95, 96-A e 102.
- **Decreto Federal número 9.991, de 28 de agosto de 2019** (alterado pelo Decreto Federal número 10.506, de 02 de outubro de 2020): Regulamenta a Política Nacional de Desenvolvimento de Pessoas (PNDP).
- **Instrução Normativa ME/SIPEC número 21, de 01 de fevereiro de 2021**: Estabelece orientações aos órgãos e entidades do SIPEC para afastamentos com foco no desenvolvimento de pessoas.
- **Resolução CONSUP/IF Baiano número 63/2020, de 30 de março de 2020**: Regulamenta a concessão de afastamento para participação em programas de pós-graduação stricto sensu e de pós-doutorado para servidores técnico-administrativos do IF Baiano.

---

## 4. Funcionalidades e Recursos do Sistema

### 4.1. Assistente de Dados Processuais (Etapa 1)
- Identificação do interessado, matrícula SIAPE, cargo e unidade de lotação (Campus ou Reitoria).
- Seleção de nível de pós-graduação (Mestrado, Doutorado ou Pós-Doutorado).
- Seção dinâmica para Prorrogação com captação da Portaria anterior e período vigente.
- Motor de cálculo de tempestividade com sinalização visual (tempestivo, intempestivo ou com antecedência excessiva).

### 4.2. Checklist Dinâmico de Conformidade (Etapa 2)
- Estruturação em 5 seções documentais:
  - Seção 1: Requerimento padronizado e anuências expressas da chefia imediata e da Direção-Geral ou Reitoria.
  - Seção 2: Documentos comprobatórios da concessão inicial e da situação acadêmica regular.
  - Seção 3: Justificativa acadêmica circunstanciada e cronograma de finalização firmado pelo orientador.
  - Seção 4: Alinhamento institucional e conformidade com a PNDP (Declaração formal do NUCAP ou NAGP com cópia comprobatória da página do PDP).
  - Seção 5: Tempestividade do requerimento e limites globais regimentais.
- Indicador percentual de conformidade atualizado a cada seleção.

### 4.3. Gerador Integrado de Documentos Administrativos (Etapa 3)
- **Parecer da CIS/PCCTAE**: Documento formal de deferimento circunstanciado com histórico, fundamentação, citação à comissão designada pela Portaria 374/2026 - RET-GAB/RET/IFBAIANO e recomendação de homologação pela Reitoria.
- **Despacho de Diligência / Notificação de Pendências**: Emissão instantânea relacionando itens não atendidos com prazo para saneamento do processo, com destaque visual e formatação em negrito para o termo [PENDÊNCIA] na tela e na área de transferência rich text (HTML) para colagem direta no editor do SUAP.
- **Minuta de Portaria do Gabinete da Reitoria**: Texto legal padronizado contendo o preâmbulo da Reitora, menção à manifestação favorável da CIS designada pela Portaria 374/2026 e termos da concessão ou prorrogação.
- **Checklist Timbrado**: Impressão e exportação direta da folha de checagem com o cabeçalho institucional do IF Baiano.

---

## 5. Estrutura do Diretório

```
analisador-cis-pcctae/
├── index.html                           # Interface visual moderna e formulário estruturado
├── app.js                               # Regras de negócio, checklists e geradores de minutas
├── style.css                            # Folha de estilos responsiva com identidade IF Baiano
├── harness.py                           # Suíte automatizada de testes de integridade e regras
├── EXECUTAR_ANALISADOR-CIS-PCCTAE.bat   # Script para inicialização local simplificada
├── favicon.png                          # Ícone oficial da aplicação
├── marca-if-baiano-horizontal.png       # Brasão institucional horizontal para cabeçalhos
├── marca-if-baiano-vertical.png         # Brasão institucional vertical
├── planejamento_atualizacao_prorrogacao.md # Especificação técnica do módulo de prorrogação
└── README.md                            # Documentação técnica completa do projeto
```

---

## 6. Como Executar a Aplicação

A aplicação foi projetada como um utilitário web estático de alta confiabilidade, sem necessidade de servidores complexos ou banco de dados externo:

1. **Execução Direta**: Dê um duplo clique no arquivo `EXECUTAR_ANALISADOR-CIS-PCCTAE.bat` ou abra diretamente o arquivo `index.html` em qualquer navegador web moderno (Google Chrome, Microsoft Edge, Mozilla Firefox).
2. **Uso no SUAP**: Os textos gerados nos botões de cópia rápida podem ser colados diretamente no editor de despachos ou documentos eletrônicos do SUAP.

---

## 7. Suíte de Testes Automatizados (Harness)

Para validar a integridade dos arquivos, sintaxe, regras de negócio e a conformidade com as diretrizes do laboratório, execute no terminal:

```powershell
python harness.py
```

Itens validados pelo autoteste:
- Existência e conformidade do arquivo de documentação `README.md`.
- Compilação e ausência de erros de sintaxe em scripts Python.
- Presença e carregamento de Favicon oficial.
- Presença e integridade das regras da modalidade Prorrogação e declaração do PDP.
- Cumprimento rigoroso da Regra 11 (Veto absoluto a caracteres emojis em código e documentação).

---

## 8. Histórico de Versões

- **Versão 2.2**: Reestruturação das Etapas de Análise (Stepper Navigator) para layout estritamente horizontal tanto entre etapas quanto entre círculos numerados e rótulos, com conector progressivo dinâmico e suporte completo ao modo Alto Contraste (WCAG 2.1 AAA). Calibração e aumento em 15% na altura da logomarca horizontal no cabeçalho institucional (48px) para perfeito equilíbrio visual.
- **Versão 2.1**: Inclusão da modalidade Prorrogação de Afastamento Integral para Pós-Graduação Stricto Sensu, cálculo de tempestividade da janela regimental de 60 a 70 dias, validação de limite acumulado do Artigo 4º da Resolução CONSUP número 63/2020, inserção compulsória da Declaração de alinhamento com o PDP emitida pelo NUCAP ou NAGP, atualização da portaria de designação da CIS/PCCTAE para a Portaria 374/2026 - RET-GAB/RET/IFBAIANO e formatação automática do marcador [PENDÊNCIA] em negrito visual na tela e no clipboard rich text para o SUAP.
- **Versão 2.0**: Redesenho completo da interface para o padrão institucional do IF Baiano, integração com a PNDP (Decreto 9.991/2019) e criação dos geradores de despachos e pareceres em texto puro e formato timbrado.
- **Versão 1.0**: Lançamento inicial da ferramenta para apoio às análises da CIS/PCCTAE.

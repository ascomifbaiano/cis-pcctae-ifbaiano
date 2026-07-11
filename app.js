/* ==========================================================================
   DADOS E REGRAS DE CHECKLIST - CIS/PCCTAE IF BAIANO
   ========================================================================== */

const CHECKLISTS = {
    alocacao: {
        titulo: "Alocação de Carga Horária (Ações de Desenvolvimento)",
        secoes: [
            {
                titulo: "1. Formulário de Inscrição e Requisitos Básicos",
                itens: [
                    { id: "al_1_1", texto: "Carga horária solicitada está dentro do limite máximo (Lato Sensu: até 8h semanais / Stricto Sensu: até 16h semanais).", obrigatorio: true },
                    { id: "al_1_2", texto: "Período de alocação compatível com o curso (Mestrado: 24m / Doutorado: 48m / Pós-Doc: 12m / Lato Sensu: 18m).", obrigatorio: true },
                    { id: "al_1_3", texto: "Não possui curso ou título no mesmo nível de qualificação pretendido.", obrigatorio: true },
                    { id: "al_1_4", texto: "Não possui concessão simultânea de alocação de carga horária para outra ação de desenvolvimento.", obrigatorio: true },
                    { id: "al_1_5", texto: "Ação de desenvolvimento prevista no PDP (Plano de Desenvolvimento de Pessoas) vigente.", obrigatorio: true },
                    { id: "al_1_6", texto: "Consta expressamente a necessidade de desenvolvimento no plano do setor.", obrigatorio: true },
                    { id: "al_1_7", texto: "Formulário assinado eletronicamente pelo solicitante, chefia imediata e Direção Geral/Diretor Sistêmico.", obrigatorio: true }
                ]
            },
            {
                titulo: "2. Comprovante de Matrícula",
                itens: [
                    { id: "al_2_1", texto: "Comprovante de matrícula contém data recente (do semestre vigente).", obrigatorio: true },
                    { id: "al_2_2", texto: "Comprovante identifica corretamente o nome do(a) servidor(a).", obrigatorio: true },
                    { id: "al_2_3", texto: "Comprovante identifica corretamente o nome do curso e da instituição de ensino.", obrigatorio: true }
                ]
            },
            {
                titulo: "3. Relatórios e Anuências do Setor",
                itens: [
                    { id: "al_3_1", texto: "Anuência da chefia imediata registrada eletronicamente via SUAP.", obrigatorio: true },
                    { id: "al_3_2", texto: "Anuência da Direção-Geral (Campi) ou Pró-Reitor/Diretor Sistêmico (Reitoria) no SUAP.", obrigatorio: true },
                    { id: "al_3_3", texto: "Documento de Planejamento do Setor para o Atendimento das Demandas Institucionais anexado com distribuição da carga horária.", obrigatorio: true }
                ]
            },
            {
                titulo: "4. Manifestação da DGP/NUCAP e Documentos Acadêmicos",
                itens: [
                    { id: "al_4_1", texto: "Manifestação favorável do NUCAP/DGP sobre o alinhamento ao PDP.", obrigatorio: true },
                    { id: "al_4_2", texto: "Grade de horários oficial das disciplinas anexada ao processo.", obrigatorio: true },
                    { id: "al_4_3", texto: "Declaração assinada pelo orientador atestando carga horária, curso e instituição.", obrigatorio: true },
                    { id: "al_4_4", texto: "Comprovante de reconhecimento do curso pelo MEC/CAPES (ou Plataforma Sucupira/Carolina Bori).", obrigatorio: true }
                ]
            },
            {
                titulo: "5. Declarações de Nada Consta Setoriais",
                itens: [
                    { id: "al_5_1", texto: "Setor de Suprimento e Logística (CSL) - Nada Consta.", obrigatorio: true },
                    { id: "al_5_2", texto: "Setor de Biblioteca (SB) - Nada Consta.", obrigatorio: true },
                    { id: "al_5_3", texto: "Setor de Patrimônio (SP) - Nada Consta.", obrigatorio: true },
                    { id: "al_5_4", texto: "Núcleo de Apoio à Gestão de Pessoas (NAGP) - Nada Consta.", obrigatorio: true },
                    { id: "al_5_5", texto: "Coordenação de Atenção à Saúde e Qualidade de Vida (COASQ) - Nada Consta.", obrigatorio: true },
                    { id: "al_5_6", texto: "Ausência de Processo Administrativo Disciplinar (PAD) em curso contra o servidor.", obrigatorio: true },
                    { id: "al_5_7", texto: "Pró-Reitoria de Extensão (PROEX) - Nada Consta.", obrigatorio: true },
                    { id: "al_5_8", texto: "Pró-Reitoria de Pesquisa, Inovação e Pós-Graduação (PROPES) - Nada Consta.", obrigatorio: true }
                ]
            }
        ]
    },
    afastamento: {
        titulo: "Afastamento Integral (Pós-Graduação Stricto Sensu)",
        secoes: [
            {
                titulo: "1. Formulário de Inscrição e Restrições de Cargo",
                itens: [
                    { id: "af_1_1", texto: "Servidor não é ocupante de Função Gratificada (FG) ou Cargo de Direção (CD) (ou solicitou dispensa/exoneração).", obrigatorio: true },
                    { id: "af_1_2", texto: "Servidor não possui jornada com carga horária reduzida (ou solicitou retorno ao tempo integral).", obrigatorio: true },
                    { id: "af_1_3", texto: "Não responde a Processo Administrativo Disciplinar (PAD).", obrigatorio: true },
                    { id: "af_1_4", texto: "Período solicitado respeita o limite (Mestrado: até 24m / Doutorado: até 48m / Pós-Doc: até 12m).", obrigatorio: true },
                    { id: "af_1_5", texto: "O afastamento está previsto no Plano de Desenvolvimento de Pessoas (PDP) do IF Baiano.", obrigatorio: true },
                    { id: "af_1_6", texto: "O curso possui alinhamento direto com a área de atribuição do cargo efetivo do servidor.", obrigatorio: true },
                    { id: "af_1_7", texto: "Não possui curso concluído no mesmo nível de titulação pretendido.", obrigatorio: true },
                    { id: "af_1_8", texto: "Assinaturas do solicitante, chefia imediata e Direção Geral/Diretor Sistêmico no formulário.", obrigatorio: true }
                ]
            },
            {
                titulo: "2. Requisitos Temporais (Declaração do NAGP)",
                itens: [
                    { id: "af_2_1", texto: "Tempo mínimo de efetivo exercício no IF Baiano atendido (3 anos para Mestrado / 4 anos para Doutorado e Pós-Doc).", obrigatorio: true },
                    { id: "af_2_2", texto: "Não está em usufruto de outro afastamento integral da instituição.", obrigatorio: true },
                    { id: "af_2_3", texto: "Não se afastou por interesse particular nos últimos 2 anos (Mestrado/Doutorado) ou 4 anos (Pós-Doc).", obrigatorio: true },
                    { id: "af_2_4", texto: "Não usufruiu de licença para capacitação nos 2 anos anteriores à solicitação.", obrigatorio: true },
                    { id: "af_2_5", texto: "Não retornou de outro afastamento para pós-graduação stricto sensu há menos de 2 anos (Mestrado/Doutorado) ou 4 anos (Pós-Doc).", obrigatorio: true },
                    { id: "af_2_6", texto: "Obteve resultado favorável na última Avaliação de Desempenho Anual.", obrigatorio: true }
                ]
            },
            {
                titulo: "3. Comprovantes Acadêmicos e Matrícula",
                itens: [
                    { id: "af_3_1", texto: "Comprovante de matrícula oficial contendo data recente e assinatura da instituição de ensino.", obrigatorio: true },
                    { id: "af_3_2", texto: "Documentação comprobatória de reconhecimento do curso pelo MEC/CAPES (ou Plataforma Sucupira/Carolina Bori).", obrigatorio: true },
                    { id: "af_3_3", texto: "Declaração de atividades acadêmicas contendo data recente e assinatura do orientador.", obrigatorio: true },
                    { id: "af_3_4", texto: "Declaração do orientador atestando a necessidade do afastamento e a carga horária exigida.", obrigatorio: true }
                ]
            },
            {
                titulo: "4. Relatórios e Nada Consta Setoriais",
                itens: [
                    { id: "af_4_1", texto: "Relatório de afastamentos anteriores do servidor extraído via SUAP/NAGP.", obrigatorio: true },
                    { id: "af_4_2", texto: "Setor de Suprimento e Logística (CSL) - Nada Consta.", obrigatorio: true },
                    { id: "af_4_3", texto: "Setor de Biblioteca (SB) - Nada Consta.", obrigatorio: true },
                    { id: "af_4_4", texto: "Setor de Patrimônio (SP) - Nada Consta.", obrigatorio: true },
                    { id: "af_4_5", texto: "Núcleo de Apoio à Gestão de Pessoas (NAGP) - Nada Consta.", obrigatorio: true },
                    { id: "af_4_6", texto: "Coordenação de Atenção à Saúde e Qualidade de Vida (COASQ) - Nada Consta.", obrigatorio: true },
                    { id: "af_4_7", texto: "Pró-Reitoria de Extensão (PROEX) - Nada Consta.", obrigatorio: true },
                    { id: "af_4_8", texto: "Pró-Reitoria de Pesquisa, Inovação e Pós-Graduação (PROPES) - Nada Consta.", obrigatorio: true }
                ]
            }
        ]
    }
};

/* ==========================================================================
   INICIALIZAÇÃO E EVENT LISTENERS
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // Inicialização da Data Padrão do Parecer (Hoje)
    const inputDateParecer = document.getElementById("data-parecer");
    const hoje = new Date().toISOString().split("T")[0];
    inputDateParecer.value = hoje;

    // Renderizar checklist padrão (afastamento)
    renderChecklist("afastamento");

    // Mudança de Modalidade de Processo
    const selectTipo = document.getElementById("tipo-processo");
    selectTipo.addEventListener("change", (e) => {
        renderChecklist(e.target.value);
        verificarRetroatividade();
    });

    // Ouvintes para validar retroatividade
    document.getElementById("data-inicio-pretendida").addEventListener("change", verificarRetroatividade);
    inputDateParecer.addEventListener("change", verificarRetroatividade);

    // Botões de marcação do checklist
    document.getElementById("btn-marcar-todos").addEventListener("click", () => alterarTodosChecks(true));
    document.getElementById("btn-desmarcar-todos").addEventListener("click", () => alterarTodosChecks(false));

    // Botão de ação principal
    document.getElementById("btn-analisar").addEventListener("click", processarConformidade);

    // Controle de Abas de Resultados
    initTabs();

    // Configuração de Acessibilidade
    initAccessibility();

    // Banner de Cookies/LGPD
    initCookieBanner();
    
    // Botões de cópia rápida
    setupCopyButtons();
});

/* ==========================================================================
   RENDERIZAÇÃO DO CHECKLIST
   ========================================================================== */

function renderChecklist(tipo) {
    const container = document.getElementById("checklist-container");
    container.innerHTML = ""; // Limpa anterior

    const checklist = CHECKLISTS[tipo];
    if (!checklist) return;

    checklist.secoes.forEach((secao, idxSecao) => {
        const secaoDiv = document.createElement("div");
        secaoDiv.className = "checklist-section";

        const secaoTitle = document.createElement("h3");
        secaoTitle.className = "checklist-section-title";
        secaoTitle.textContent = secao.titulo;
        secaoDiv.appendChild(secaoTitle);

        const listDiv = document.createElement("div");
        listDiv.className = "checklist-list";

        secao.itens.forEach((item) => {
            const itemDiv = document.createElement("div");
            itemDiv.className = "checklist-item";
            itemDiv.setAttribute("role", "checkbox");
            itemDiv.setAttribute("aria-checked", "false");
            itemDiv.setAttribute("tabindex", "0");

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = item.id;
            checkbox.setAttribute("tabindex", "-1"); // Navegação de teclado via itemDiv

            const label = document.createElement("label");
            label.setAttribute("for", item.id);
            label.textContent = item.texto;

            // Evento de clique na div inteira para melhor usabilidade
            itemDiv.addEventListener("click", (e) => {
                if (e.target !== checkbox) {
                    checkbox.checked = !checkbox.checked;
                }
                itemDiv.setAttribute("aria-checked", checkbox.checked ? "true" : "false");
                itemDiv.classList.toggle("checked", checkbox.checked);
            });

            // Suporte a navegação por teclado (Enter / Space)
            itemDiv.addEventListener("keydown", (e) => {
                if (e.key === " " || e.key === "Enter") {
                    e.preventDefault();
                    checkbox.checked = !checkbox.checked;
                    itemDiv.setAttribute("aria-checked", checkbox.checked ? "true" : "false");
                    itemDiv.classList.toggle("checked", checkbox.checked);
                }
            });

            itemDiv.appendChild(checkbox);
            itemDiv.appendChild(label);
            listDiv.appendChild(itemDiv);
        });

        secaoDiv.appendChild(listDiv);
        container.appendChild(secaoDiv);
    });
}

function alterarTodosChecks(valor) {
    const checkboxes = document.querySelectorAll('#checklist-container input[type="checkbox"]');
    checkboxes.forEach(cb => {
        cb.checked = valor;
        const itemDiv = cb.closest(".checklist-item");
        if (itemDiv) {
            itemDiv.setAttribute("aria-checked", valor ? "true" : "false");
            itemDiv.classList.toggle("checked", valor);
        }
    });
}

/* ==========================================================================
   VERIFICAÇÃO DE RETROATIVIDADE
   ========================================================================== */

function verificarRetroatividade() {
    const dataInicioInput = document.getElementById("data-inicio-pretendida").value;
    const dataParecerInput = document.getElementById("data-parecer").value;
    const warningDiv = document.getElementById("retroatividade-warning");

    if (!dataInicioInput || !dataParecerInput) {
        warningDiv.classList.add("hidden");
        return false;
    }

    const dataInicio = new Date(dataInicioInput);
    const dataParecer = new Date(dataParecerInput);

    if (dataInicio < dataParecer) {
        // Formatar datas para exibição pt-BR
        document.getElementById("warn-data-solicitada").textContent = formatarData(dataInicioInput);
        document.getElementById("warn-data-parecer").textContent = formatarData(dataParecerInput);
        warningDiv.classList.remove("hidden");
        return true;
    } else {
        warningDiv.classList.add("hidden");
        return false;
    }
}

/* ==========================================================================
   PROCESSAMENTO E GERAÇÃO DE PARECER/DESPACHO
   ========================================================================== */

function processarConformidade() {
    const form = document.getElementById("form-processo");
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const tipoProcesso = document.getElementById("tipo-processo").value;
    const nivelCurso = document.getElementById("nivel-curso").value;
    const numProcesso = document.getElementById("numero-processo").value;
    const nomeServidor = document.getElementById("nome-servidor").value;
    const siape = document.getElementById("siape-servidor").value;
    const dataInicioPretendida = document.getElementById("data-inicio-pretendida").value;
    const dataFimPretendida = document.getElementById("data-fim-pretendida").value;
    const dataParecer = document.getElementById("data-parecer").value;

    // Coleta itens não conformes (desmarcados)
    const itensDesmarcados = [];
    const checklist = CHECKLISTS[tipoProcesso];
    
    checklist.secoes.forEach(secao => {
        secao.itens.forEach(item => {
            const cb = document.getElementById(item.id);
            if (cb && !cb.checked) {
                itensDesmarcados.push(item.texto);
            }
        });
    });

    const isRetroativo = verificarRetroatividade();
    const resultSection = document.getElementById("results-section");
    const txtDocumento = document.getElementById("text-documento");
    const txtPortaria = document.getElementById("text-portaria");
    const tabPortariaBtn = document.getElementById("tab-btn-portaria");
    const docBadge = document.getElementById("document-badge");

    resultSection.classList.remove("hidden");

    if (itensDesmarcados.length > 0) {
        // -------------------------------------------------------------
        // CASO DE NÃO CONFORMIDADE: Despacho de Devolutiva
        // -------------------------------------------------------------
        docBadge.textContent = "DESPACHO DE DILIGÊNCIA";
        docBadge.className = "badge badge-accent";
        
        let despacho = `DESPACHO DE DILIGÊNCIA - CIS/PCCTAE/IFBAIANO\n`;
        despacho += `Processo nº: ${numProcesso}\n`;
        despacho += `Interessado(a): ${nomeServidor}\n`;
        despacho += `SIAPE: ${siape}\n`;
        despacho += `Assunto: Análise documental de processo para ${tipoProcesso === 'afastamento' ? 'Afastamento Integral' : 'Alocação de Carga Horária'} (${nivelCurso})\n\n`;
        despacho += `Ao(À) Núcleo de Apoio à Gestão de Pessoas (NAGP),\n\n`;
        despacho += `Prezados(as) Colegas,\n\n`;
        despacho += `A Comissão Interna de Supervisão da Carreira (CIS/PCCTAE) do IF Baiano realizou a análise da documentação acostada ao processo em epígrafe. Em atenção às diretrizes da Resolução Consup nº 63/2020 e da Instrução Normativa nº 34/2020, constatou-se a necessidade de saneamento do feito devido à ausência ou inconformidade dos seguintes itens:\n\n`;
        
        itensDesmarcados.forEach((itemText, idx) => {
            despacho += `${idx + 1}. [PENDÊNCIA] ${itemText}\n`;
        });
        
        despacho += `\nDiante do exposto, restituímos o presente feito para que o(a) interessado(a) possa, no prazo regimental, proceder com a complementação documental e os ajustes apontados via SUAP.\n\n`;
        despacho += `Respeitosamente,\n\n`;
        despacho += `[Cidade - BA], ${formatarDataPorExtenso(dataParecer)}.\n\n`;
        despacho += `Comissão Interna de Supervisão (CIS/PCCTAE)\n`;
        despacho += `Instituto Federal de Educação, Ciência e Tecnologia Baiano`;

        txtDocumento.value = despacho;
        
        // Desabilita/Esconde Aba da Portaria já que houve diligência
        txtPortaria.value = "Não foi possível gerar a Minuta de Portaria pois existem pendências documentais listadas no Despacho de Diligência.";
        tabPortariaBtn.style.opacity = "0.5";
        
        // Mudar para aba do documento ativo
        mudarAba("documento");
        
    } else {
        // -------------------------------------------------------------
        // CASO DE CONFORMIDADE: Parecer de Deferimento + Portaria
        // -------------------------------------------------------------
        docBadge.textContent = "PARECER DE DEFERIMENTO";
        docBadge.className = "badge";
        tabPortariaBtn.style.opacity = "1";

        // Ajustar datas se for retroativo
        let dataInicioReal = dataInicioPretendida;
        let retroatividadeTexto = "";
        
        if (isRetroativo) {
            dataInicioReal = dataParecer;
            retroatividadeTexto = `, tendo em vista a impossibilidade jurídica de concessão de atos administrativos com efeitos retroativos, o que exige a adequação do termo inicial do afastamento para a data de assinatura do parecer autorizativo, conforme estabelecido no art. 37, caput, da CF/88 e no art. 60 da Lei nº 9.784/1999`;
        }

        // 1. GERAR PARECER DE DEFERIMENTO
        let parecer = `Parecer nº _____/${new Date(dataParecer).getFullYear()} - OA-CISPCTAE/RET/IFBAIANO\n`;
        parecer += `Processo nº: ${numProcesso}\n`;
        parecer += `Interessado(a): ${nomeServidor}\n`;
        parecer += `SIAPE: ${siape}\n`;
        parecer += `Assunto: Solicitação de ${tipoProcesso === 'afastamento' ? 'Afastamento Integral' : 'Alocação de Carga Horária'} para cursar ${nivelCurso}\n\n`;
        
        parecer += `A Comissão Interna de Supervisão da Carreira – CIS/PCCTAE do IF Baiano, designada pela PORTARIA 124/2026 - RET-GAB/RET/IFBAIANO, de 15 de abril de 2026, e suas alterações, ao analisar os documentos presentes no Processo nº ${numProcesso}, considerando as disposições da Resolução Consup nº 63/2020 e da Instrução Normativa nº 34/2020, que tratam sobre as ações de desenvolvimento em serviço e afastamentos de servidores da carreira PCCTAE, manifesta-se favoravelmente pelo deferimento do pleito.\n\n`;
        parecer += `O período deferido corresponde a ${formatarData(dataInicioReal)} a ${formatarData(dataFimPretendida)}${retroatividadeTexto}.\n\n`;
        
        parecer += `À vista do exposto, encaminha-se o processo ao Núcleo de Apoio à Gestão de Pessoas (NAGP) para providências de elaboração da portaria autorizativa e posterior encaminhamento ao Gabinete da Reitora para homologação e publicação.\n\n`;
        parecer += `[Cidade - BA], ${formatarDataPorExtenso(dataParecer)}.\n\n`;
        parecer += `(Assinado eletronicamente)\n\n`;
        parecer += `Membros da CIS/PCCTAE\n`;
        parecer += `IF Baiano`;

        txtDocumento.value = parecer;

        // 2. GERAR MINUTA DE PORTARIA
        let portaria = `MINUTA DE PORTARIA Nº ______ / ${new Date(dataParecer).getFullYear()} - RET-GAB/RET/IFBAIANO, DE ${formatarDataDiaMes(dataParecer)} DE ${new Date(dataParecer).getFullYear()}\n\n`;
        portaria += `O REITOR DO INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA BAIANO, no uso de suas atribuições delegadas pelo Decreto de 25/04/2018, publicado no Diário Oficial da União de 26/04/2018, e nos termos da Lei nº 11.892/2008, da Lei nº 8.112/1990, e considerando o constante no Processo nº ${numProcesso} e no Parecer da CIS/PCCTAE,\n\n`;
        
        if (tipoProcesso === 'afastamento') {
            portaria += `RESOLVE:\n\n`;
            portaria += `Art. 1º Conceder afastamento integral ao(à) servidor(a) ${nomeServidor.toUpperCase()}, ocupante do cargo efetivo de Técnico-Administrativo em Educação, matrícula SIAPE nº ${siape}, lotado(a) no Instituto Federal de Educação, Ciência e Tecnologia Baiano, para participar de Programa de Pós-Graduação Stricto Sensu em nível de ${nivelCurso}, no período de ${formatarData(dataInicioReal)} a ${formatarData(dataFimPretendida)}.\n\n`;
        } else {
            portaria += `RESOLVE:\n\n`;
            portaria += `Art. 1º Autorizar a alocação de carga horária semanal para fins de participação em ação de desenvolvimento em serviço ao(à) servidor(a) ${nomeServidor.toUpperCase()}, ocupante do cargo efetivo de Técnico-Administrativo em Educação, matrícula SIAPE nº ${siape}, lotado(a) no Instituto Federal de Educação, Ciência e Tecnologia Baiano, para frequentar curso de ${nivelCurso}, no período de ${formatarData(dataInicioReal)} a ${formatarData(dataFimPretendida)}.\n\n`;
        }
        
        portaria += `Art. 2º Esta Portaria entra em vigor na data de sua publicação.\n\n\n`;
        portaria += `AÉCIO JOSÉ ARAÚJO PASSOS DUARTE\n`;
        portaria += `Reitor`;

        txtPortaria.value = portaria;
        
        mudarAba("documento");
    }

    // Rolar a tela suavemente para a área de resultados
    resultSection.scrollIntoView({ behavior: 'smooth' });
}

/* ==========================================================================
   UTILITÁRIOS DE FORMATAÇÃO DE DATA
   ========================================================================== */

function formatarData(dataStr) {
    if (!dataStr) return "";
    const partes = dataStr.split("-");
    if (partes.length !== 3) return dataStr;
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

function formatarDataDiaMes(dataStr) {
    if (!dataStr) return "___";
    const meses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];
    const data = new Date(dataStr + "T00:00:00");
    return `${data.getDate()}`;
}

function formatarDataPorExtenso(dataStr) {
    if (!dataStr) return "";
    const meses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];
    // Adiciona o T00:00:00 para evitar desvios de fuso horário local
    const data = new Date(dataStr + "T00:00:00");
    const dia = data.getDate();
    const mes = meses[data.getMonth()];
    const ano = data.getFullYear();
    return `${dia} de ${mes} de ${ano}`;
}

/* ==========================================================================
   ACESSIVIDADE (WCAG)
   ========================================================================== */

function initAccessibility() {
    const btnContrast = document.getElementById("btn-contrast");
    
    // Recupera tema salvo
    const highContrastActive = localStorage.getItem("high-contrast") === "true";
    if (highContrastActive) {
        document.body.classList.add("high-contrast");
        btnContrast.setAttribute("aria-label", "Desativar alto contraste");
    }

    btnContrast.addEventListener("click", () => {
        const isActive = document.body.classList.toggle("high-contrast");
        localStorage.setItem("high-contrast", isActive);
        btnContrast.setAttribute("aria-label", isActive ? "Desativar alto contraste" : "Alternar alto contraste");
    });

    // Controle do Tamanho da Fonte
    let fontScale = parseFloat(localStorage.getItem("font-scale")) || 1.0;
    document.documentElement.style.setProperty("--font-scale", fontScale);

    document.getElementById("btn-font-inc").addEventListener("click", () => {
        if (fontScale < 1.4) {
            fontScale += 0.1;
            document.documentElement.style.setProperty("--font-scale", fontScale);
            localStorage.setItem("font-scale", fontScale);
        }
    });

    document.getElementById("btn-font-dec").addEventListener("click", () => {
        if (fontScale > 0.8) {
            fontScale -= 0.1;
            document.documentElement.style.setProperty("--font-scale", fontScale);
            localStorage.setItem("font-scale", fontScale);
        }
    });

    document.getElementById("btn-font-normal").addEventListener("click", () => {
        fontScale = 1.0;
        document.documentElement.style.setProperty("--font-scale", fontScale);
        localStorage.setItem("font-scale", fontScale);
    });
}

/* ==========================================================================
   TABS DE NAVEGAÇÃO DOS RESULTADOS
   ========================================================================== */

function initTabs() {
    const tabDoc = document.getElementById("tab-btn-documento");
    const tabPort = document.getElementById("tab-btn-portaria");

    tabDoc.addEventListener("click", () => mudarAba("documento"));
    tabPort.addEventListener("click", () => mudarAba("portaria"));
}

function mudarAba(aba) {
    const tabDoc = document.getElementById("tab-btn-documento");
    const tabPort = document.getElementById("tab-btn-portaria");
    const panelDoc = document.getElementById("panel-documento");
    const panelPort = document.getElementById("panel-portaria");

    if (aba === "documento") {
        tabDoc.classList.add("active");
        tabDoc.setAttribute("aria-selected", "true");
        panelDoc.classList.add("active");

        tabPort.classList.remove("active");
        tabPort.setAttribute("aria-selected", "false");
        panelPort.classList.remove("active");
    } else if (aba === "portaria") {
        tabPort.classList.add("active");
        tabPort.setAttribute("aria-selected", "true");
        panelPort.classList.add("active");

        tabDoc.classList.remove("active");
        tabDoc.setAttribute("aria-selected", "false");
        panelDoc.classList.remove("active");
    }
}

/* ==========================================================================
   COPIAR PARA ÁREA DE TRANSFERÊNCIA
   ========================================================================== */

function setupCopyButtons() {
    const setupCopy = (btnId, textId) => {
        const btn = document.getElementById(btnId);
        const textarea = document.getElementById(textId);

        btn.addEventListener("click", () => {
            if (!textarea.value || textarea.value.startsWith("Não foi possível")) return;
            
            navigator.clipboard.writeText(textarea.value).then(() => {
                const originalText = btn.textContent;
                btn.textContent = "✅ Copiado!";
                btn.style.backgroundColor = "var(--color-primary)";
                btn.style.color = "var(--color-text-white)";
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.backgroundColor = "";
                    btn.style.color = "";
                }, 2000);
            }).catch(err => {
                console.error("Erro ao copiar: ", err);
            });
        });
    };

    setupCopy("copy-documento", "text-documento");
    setupCopy("copy-portaria", "text-portaria");
}

/* ==========================================================================
   BANNER DE COOKIES / LGPD
   ========================================================================== */

function initCookieBanner() {
    const banner = document.getElementById("cookie-banner");
    const btnAccept = document.getElementById("btn-accept-cookie");

    const accepted = localStorage.getItem("lgpd-cookies-accepted") === "true";
    if (accepted) {
        banner.classList.add("hidden");
    }

    btnAccept.addEventListener("click", () => {
        localStorage.setItem("lgpd-cookies-accepted", "true");
        banner.classList.add("hidden");
    });
}

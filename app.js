/* ==========================================================================
   APP.JS - CIS/PCCTAE IF BAIANO - Analisador de Conformidade
   Versão 2.0 - Redesign com Stepper Wizard, Sidebar e Toast
   ========================================================================== */

/* ==========================================================================
   DADOS DE CHECKLIST
   ========================================================================== */

const CHECKLISTS = {
    alocacao: {
        titulo: "Alocação de Carga Horária (Ações de Desenvolvimento)",
        secoes: [
            {
                titulo: "Formulário de Inscrição e Requisitos Básicos",
                itens: [
                    { id: "al_1_1", texto: "Carga horária solicitada está dentro do limite máximo (Lato Sensu: até 8h semanais / Stricto Sensu: até 16h semanais)." },
                    { id: "al_1_2", texto: "Período de alocação compatível com o curso (Mestrado: 24m / Doutorado: 48m / Pós-Doc: 12m / Lato Sensu: 18m)." },
                    { id: "al_1_3", texto: "Não possui curso ou título no mesmo nível de qualificação pretendido." },
                    { id: "al_1_4", texto: "Não possui concessão simultânea de alocação de carga horária para outra ação de desenvolvimento." },
                    { id: "al_1_5", texto: "Ação de desenvolvimento prevista no PDP (Plano de Desenvolvimento de Pessoas) vigente." },
                    { id: "al_1_6", texto: "Consta expressamente a necessidade de desenvolvimento no plano do setor." },
                    { id: "al_1_7", texto: "Formulário assinado eletronicamente pelo solicitante, chefia imediata e Direção Geral/Diretor Sistêmico." }
                ]
            },
            {
                titulo: "Comprovante de Matrícula",
                itens: [
                    { id: "al_2_1", texto: "Comprovante de matrícula contém data recente (do semestre vigente)." },
                    { id: "al_2_2", texto: "Comprovante identifica corretamente o nome do(a) servidor(a)." },
                    { id: "al_2_3", texto: "Comprovante identifica corretamente o nome do curso e da instituição de ensino." }
                ]
            },
            {
                titulo: "Relatórios e Anuências do Setor",
                itens: [
                    { id: "al_3_3", texto: "Documento de Planejamento do Setor para o Atendimento das Demandas Institucionais anexado." }
                ]
            },
            {
                titulo: "Manifestação da DGP/NUCAP e Documentos Acadêmicos",
                itens: [
                    { id: "al_4_1", texto: "Manifestação favorável do NUCAP/DGP sobre o alinhamento ao PDP." },
                    { id: "al_4_2", texto: "Demonstração de incompatibilidade de horários (através de grade de horários oficial, declaração assinada pelo orientador/responsável da instituição e/ou mapa de deslocamento)." },
                    { id: "al_4_4", texto: "Comprovante de reconhecimento do curso pelo MEC/CAPES (Plataforma Sucupira/Carolina Bori)." }
                ]
            },
            {
                titulo: "Declarações de Nada Consta Setoriais",
                itens: [
                    { id: "al_5_1", texto: "Setor de Suprimento e Logística (CSL) — Nada Consta." },
                    { id: "al_5_2", texto: "Setor de Biblioteca (SB) — Nada Consta." },
                    { id: "al_5_3", texto: "Setor de Patrimônio (SP) — Nada Consta." },
                    { id: "al_5_4", texto: "Núcleo de Apoio à Gestão de Pessoas (NAGP) — Nada Consta." },
                    { id: "al_5_5", texto: "Coordenação de Atenção à Saúde e Qualidade de Vida (COASQ) — Nada Consta." },
                    { id: "al_5_6", texto: "Ausência de Processo Administrativo Disciplinar (PAD) em curso." },
                    { id: "al_5_7", texto: "Pró-Reitoria de Extensão (PROEX) — Nada Consta." },
                    { id: "al_5_8", texto: "Pró-Reitoria de Pesquisa, Inovação e Pós-Graduação (PROPES) — Nada Consta." }
                ]
            }
        ]
    },
    afastamento: {
        titulo: "Afastamento Integral (Pós-Graduação Stricto Sensu)",
        secoes: [
            {
                titulo: "Formulário de Inscrição e Restrições de Cargo",
                itens: [
                    { id: "af_1_1", texto: "Servidor não é ocupante de Função Gratificada (FG) ou Cargo de Direção (CD), ou solicitou dispensa/exoneração." },
                    { id: "af_1_2", texto: "Servidor não possui jornada com carga horária reduzida, ou solicitou retorno ao tempo integral." },
                    { id: "af_1_3", texto: "Não responde a Processo Administrativo Disciplinar (PAD)." },
                    { id: "af_1_4", texto: "Período solicitado respeita o limite (Mestrado: até 24m / Doutorado: até 48m / Pós-Doc: até 12m)." },
                    { id: "af_1_5", texto: "Tema/ação de desenvolvimento previsto no Plano de Desenvolvimento de Pessoas (PDP) do IF Baiano." },
                    { id: "af_1_6", texto: "O curso possui alinhamento direto com a área de atribuição do cargo efetivo do servidor." },
                    { id: "af_1_7", texto: "Não possui curso concluído no mesmo nível de titulação pretendido." },
                    { id: "af_1_8", texto: "Assinaturas do solicitante, chefia imediata e Direção Geral/Diretor Sistêmico no formulário." }
                ]
            },
            {
                titulo: "Requisitos Temporais (Declaração do NAGP)",
                itens: [
                    { id: "af_2_1", texto: "Tempo mínimo de efetivo exercício no IF Baiano atendido (3 anos para Mestrado / 4 anos para Doutorado e Pós-Doc)." },
                    { id: "af_2_2", texto: "Não está em usufruto de outro afastamento integral da instituição." },
                    { id: "af_2_3", texto: "Não se afastou por interesse particular nos últimos 2 anos (Mestrado/Doutorado) ou 4 anos (Pós-Doc)." },
                    { id: "af_2_4", texto: "Não usufruiu de licença para capacitação nos 2 anos anteriores à solicitação." },
                    { id: "af_2_5", texto: "Não retornou de outro afastamento para pós-graduação stricto sensu há menos de 2 anos (Mestrado/Doutorado) ou 4 anos (Pós-Doc)." },
                    { id: "af_2_6", texto: "Obteve resultado favorável na última Avaliação de Desempenho Anual." }
                ]
            },
            {
                titulo: "Comprovantes Acadêmicos e Matrícula",
                itens: [
                    { id: "af_3_1", texto: "Comprovante de matrícula oficial contendo data recente e assinatura da instituição de ensino." },
                    { id: "af_3_2", texto: "Documentação comprobatória de reconhecimento do curso pelo MEC/CAPES (Plataforma Sucupira/Carolina Bori)." },
                    { id: "af_3_3", texto: "Declaração de atividades acadêmicas contendo data recente e assinatura do orientador." },
                    { id: "af_3_4", texto: "Declaração do orientador atestando a necessidade do afastamento e a carga horária exigida." }
                ]
            },
            {
                titulo: "Relatórios e Nada Consta Setoriais",
                itens: [
                    { id: "af_4_1", texto: "Relatório de afastamentos anteriores do servidor extraído via SUAP/NAGP." },
                    { id: "af_4_2", texto: "Setor de Suprimento e Logística (CSL) — Nada Consta." },
                    { id: "af_4_3", texto: "Setor de Biblioteca (SB) — Nada Consta." },
                    { id: "af_4_4", texto: "Setor de Patrimônio (SP) — Nada Consta." },
                    { id: "af_4_5", texto: "Núcleo de Apoio à Gestão de Pessoas (NAGP) — Nada Consta." },
                    { id: "af_4_6", texto: "Coordenação de Atenção à Saúde e Qualidade de Vida (COASQ) — Nada Consta." },
                    { id: "af_4_7", texto: "Pró-Reitoria de Extensão (PROEX) — Nada Consta." },
                    { id: "af_4_8", texto: "Pró-Reitoria de Pesquisa, Inovação e Pós-Graduação (PROPES) — Nada Consta." }
                ]
            }
        ]
    }
};

/* ==========================================================================
   STATE - ESTADO DA APLICAÇÃO
   ========================================================================== */
let currentStep = 1;
let totalChecklistItems = 0;

/* ==========================================================================
   INICIALIZAÇÃO
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    // Data padrão do Parecer: Hoje
    document.getElementById("data-parecer").value = new Date().toISOString().split("T")[0];

    // Renderizar checklist padrão
    renderChecklist("afastamento");

    // Event Listeners
    document.getElementById("tipo-processo").addEventListener("change", (e) => {
        renderChecklist(e.target.value);
        verificarRetroatividade();
    });

    document.getElementById("data-inicio-pretendida").addEventListener("change", verificarRetroatividade);
    document.getElementById("data-parecer").addEventListener("change", verificarRetroatividade);

    // Botões do Checklist
    document.getElementById("btn-marcar-todos").addEventListener("click", () => alterarTodosChecks(true));
    document.getElementById("btn-desmarcar-todos").addEventListener("click", () => alterarTodosChecks(false));

    // Botão Analisar
    document.getElementById("btn-analisar").addEventListener("click", processarConformidade);

    // Navegação do Stepper
    document.getElementById("btn-step-1-next").addEventListener("click", () => {
        const form = document.getElementById("form-processo");
        if (!form.checkValidity()) { form.reportValidity(); return; }
        goToStep(2);
    });
    document.getElementById("btn-step-2-prev").addEventListener("click", () => goToStep(1));
    document.getElementById("btn-step-3-prev").addEventListener("click", () => goToStep(2));
    document.getElementById("btn-nova-analise").addEventListener("click", resetarAnalise);

    // Stepper click direto
    document.querySelectorAll(".step-item").forEach(item => {
        item.addEventListener("click", () => {
            const targetStep = parseInt(item.dataset.step);
            if (targetStep < currentStep || item.classList.contains("completed")) {
                goToStep(targetStep);
            }
        });
    });

    // Tabs
    initTabs();

    // Acessibilidade
    initAccessibility();

    // Cookie Banner
    initCookieBanner();

    // Cópia
    setupCopyButtons();

    // Sidebar
    initSidebar();
});

/* ==========================================================================
   STEPPER WIZARD
   ========================================================================== */
function goToStep(step) {
    // Esconde painel atual
    document.getElementById(`step-${currentStep}`).classList.remove("active");

    // Atualiza stepper nav
    document.querySelectorAll(".step-item").forEach(item => {
        const s = parseInt(item.dataset.step);
        item.classList.remove("active");
        if (s < step) {
            item.classList.add("completed");
        } else if (s === step) {
            item.classList.add("active");
            item.classList.remove("completed");
        } else {
            item.classList.remove("completed");
        }
    });

    // Conectores
    document.querySelectorAll(".step-connector").forEach((conn, idx) => {
        conn.classList.toggle("completed", idx + 1 < step);
    });

    // Mostra painel novo
    currentStep = step;
    const panel = document.getElementById(`step-${step}`);
    panel.classList.add("active");

    // Scroll suave ao topo do conteúdo
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetarAnalise() {
    document.getElementById("form-processo").reset();
    document.getElementById("data-parecer").value = new Date().toISOString().split("T")[0];
    renderChecklist(document.getElementById("tipo-processo").value);
    document.getElementById("retroatividade-warning").classList.add("hidden");
    goToStep(1);
    showToast("Formulário reiniciado. Pronto para uma nova análise.");
}

/* ==========================================================================
   CHECKLIST
   ========================================================================== */
function renderChecklist(tipo) {
    const container = document.getElementById("checklist-container");
    container.innerHTML = "";

    const checklist = CHECKLISTS[tipo];
    if (!checklist) return;

    totalChecklistItems = 0;

    checklist.secoes.forEach((secao) => {
        const secaoDiv = document.createElement("div");
        secaoDiv.className = "checklist-section";

        const secaoTitle = document.createElement("h3");
        secaoTitle.className = "checklist-section-title";
        secaoTitle.textContent = secao.titulo;
        secaoDiv.appendChild(secaoTitle);

        const listDiv = document.createElement("div");
        listDiv.className = "checklist-list";

        secao.itens.forEach((item) => {
            totalChecklistItems++;
            const itemDiv = document.createElement("div");
            itemDiv.className = "checklist-item";
            itemDiv.setAttribute("tabindex", "0");

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = item.id;
            checkbox.setAttribute("tabindex", "-1");

            const label = document.createElement("label");
            label.setAttribute("for", item.id);
            label.textContent = item.texto;

            const toggle = (e) => {
                if (e && e.target === checkbox) return; // Evitar duplo toggle
                checkbox.checked = !checkbox.checked;
                itemDiv.classList.toggle("checked", checkbox.checked);
                atualizarProgresso();
            };

            checkbox.addEventListener("change", () => {
                itemDiv.classList.toggle("checked", checkbox.checked);
                atualizarProgresso();
            });

            itemDiv.addEventListener("click", (e) => {
                if (e.target !== checkbox && e.target !== label) toggle();
            });

            itemDiv.addEventListener("keydown", (e) => {
                if (e.key === " " || e.key === "Enter") { e.preventDefault(); toggle(); }
            });

            itemDiv.appendChild(checkbox);
            itemDiv.appendChild(label);
            listDiv.appendChild(itemDiv);
        });

        secaoDiv.appendChild(listDiv);
        container.appendChild(secaoDiv);
    });

    atualizarProgresso();
}

function alterarTodosChecks(valor) {
    document.querySelectorAll('#checklist-container input[type="checkbox"]').forEach(cb => {
        cb.checked = valor;
        cb.closest(".checklist-item")?.classList.toggle("checked", valor);
    });
    atualizarProgresso();
}

function atualizarProgresso() {
    const total = totalChecklistItems;
    const checked = document.querySelectorAll('#checklist-container input[type="checkbox"]:checked').length;
    const pct = total > 0 ? Math.round((checked / total) * 100) : 0;

    document.getElementById("progress-fill").style.width = pct + "%";
    document.getElementById("progress-text").textContent = `${checked} / ${total} conformes`;
}

/* ==========================================================================
   RETROATIVIDADE
   ========================================================================== */
function verificarRetroatividade() {
    const dataInicioInput = document.getElementById("data-inicio-pretendida").value;
    const dataParecerInput = document.getElementById("data-parecer").value;
    const warningDiv = document.getElementById("retroatividade-warning");

    if (!dataInicioInput || !dataParecerInput) { warningDiv.classList.add("hidden"); return false; }

    if (new Date(dataInicioInput) < new Date(dataParecerInput)) {
        document.getElementById("warn-data-solicitada").textContent = formatarData(dataInicioInput);
        document.getElementById("warn-data-parecer").textContent = formatarData(dataParecerInput);
        warningDiv.classList.remove("hidden");
        return true;
    }
    warningDiv.classList.add("hidden");
    return false;
}

/* ==========================================================================
   PROCESSAMENTO E GERAÇÃO
   ========================================================================== */
function processarConformidade() {
    const tipoProcesso = document.getElementById("tipo-processo").value;
    const nivelCurso = document.getElementById("nivel-curso").value;
    const numProcesso = document.getElementById("numero-processo").value;
    const nomeServidor = document.getElementById("nome-servidor").value;
    const siape = document.getElementById("siape-servidor").value;
    const campusLotacao = document.getElementById("campus-lotacao").value;
    const setorLotacao = document.getElementById("setor-lotacao").value;
    const cargoServidor = document.getElementById("cargo-servidor").value;
    const dataInicioPretendida = document.getElementById("data-inicio-pretendida").value;
    const dataFimPretendida = document.getElementById("data-fim-pretendida").value;
    const dataParecer = document.getElementById("data-parecer").value;

    // Validar se os novos campos estão preenchidos antes de processar
    if (!campusLotacao || !setorLotacao || !cargoServidor) {
        showToast("Por favor, preencha a Lotação, o Setor e o Cargo do servidor.");
        return;
    }

    // Coleta pendências
    const itensDesmarcados = [];
    const checklist = CHECKLISTS[tipoProcesso];
    checklist.secoes.forEach(secao => {
        secao.itens.forEach(item => {
            const cb = document.getElementById(item.id);
            if (cb && !cb.checked) itensDesmarcados.push(item.texto);
        });
    });

    const isRetroativo = verificarRetroatividade();
    const txtDocumento = document.getElementById("text-documento");
    const txtPortaria = document.getElementById("text-portaria");
    const tabPortariaBtn = document.getElementById("tab-btn-portaria");
    const docBadge = document.getElementById("document-badge");

    if (itensDesmarcados.length > 0) {
        // DESPACHO DE DILIGÊNCIA
        docBadge.textContent = "DESPACHO DE DILIGÊNCIA";
        docBadge.className = "badge badge-accent";

        let d = `DESPACHO DE DILIGÊNCIA - CIS/PCCTAE/IFBAIANO\n`;
        d += `Processo nº: ${numProcesso}\n`;
        d += `Interessado(a): ${nomeServidor}\n`;
        d += `Cargo/Lotação: ${cargoServidor} - ${setorLotacao} / ${campusLotacao}\n`;
        d += `SIAPE: ${siape}\n`;
        d += `Assunto: Análise documental de processo para ${tipoProcesso === 'afastamento' ? 'Afastamento Integral' : 'Alocação de Carga Horária'} (${nivelCurso})\n\n`;
        d += `Ao(À) ${setorLotacao}\n`;
        d += `${campusLotacao} - IF Baiano\n\n`;
        d += `Prezados(as) Colegas,\n\n`;
        d += `A Comissão Interna de Supervisão da Carreira (CIS/PCCTAE) do IF Baiano realizou a análise da documentação acostada ao processo em epígrafe. Em atenção às diretrizes da Resolução Consup nº 63/2020 e da Instrução Normativa nº 34/2020, constatou-se a necessidade de saneamento do feito devido à ausência ou inconformidade dos seguintes itens:\n\n`;

        itensDesmarcados.forEach((txt, i) => { d += `${i + 1}. [PENDÊNCIA] ${txt}\n`; });

        d += `\nDiante do exposto, restituímos o presente feito para que o(a) interessado(a) possa, no prazo regimental, proceder com a complementação documental e os ajustes apontados via SUAP.\n\n`;
        d += `Respeitosamente,\n\n`;
        d += `[Cidade - BA], ${formatarDataPorExtenso(dataParecer)}.\n\n`;
        d += `Comissão Interna de Supervisão (CIS/PCCTAE)\n`;
        d += `Instituto Federal de Educação, Ciência e Tecnologia Baiano`;

        txtDocumento.value = d;
        txtPortaria.value = "Não foi possível gerar a Minuta de Portaria: existem pendências documentais listadas no Despacho de Diligência.";
        tabPortariaBtn.style.opacity = "0.5";
        tabPortariaBtn.style.pointerEvents = "none";

        // Ocultar aba do checklist concluído
        const tabChecklist = document.getElementById("tab-btn-checklist");
        if (tabChecklist) tabChecklist.style.display = "none";

        showToast(`Gerado Despacho de Diligência com ${itensDesmarcados.length} pendência(s).`);

    } else {
        // PARECER + PORTARIA
        docBadge.textContent = "PARECER DE DEFERIMENTO";
        docBadge.className = "badge";
        tabPortariaBtn.style.opacity = "1";
        tabPortariaBtn.style.pointerEvents = "auto";

        let dataInicioReal = dataInicioPretendida;
        let retroTexto = "";
        if (isRetroativo) {
            dataInicioReal = dataParecer;
            retroTexto = `, tendo em vista a impossibilidade jurídica de concessão de atos administrativos com efeitos retroativos, o que exige a adequação do termo inicial do afastamento para a data de assinatura do parecer autorizativo, conforme estabelecido no art. 37, caput, da CF/88 e no art. 60 da Lei nº 9.784/1999`;
        }

        let p = `Parecer nº _____/${new Date(dataParecer + "T00:00:00").getFullYear()} - OA-CISPCTAE/RET/IFBAIANO\n`;
        p += `Processo nº: ${numProcesso}\n`;
        p += `Interessado(a): ${nomeServidor}\n`;
        p += `Cargo/Lotação: ${cargoServidor} - ${setorLotacao} / ${campusLotacao}\n`;
        p += `SIAPE: ${siape}\n`;
        p += `Assunto: Solicitação de ${tipoProcesso === 'afastamento' ? 'Afastamento Integral' : 'Alocação de Carga Horária'} para cursar ${nivelCurso}\n\n`;
        p += `A Comissão Interna de Supervisão da Carreira – CIS/PCCTAE do IF Baiano, designada pela PORTARIA 124/2026 - RET-GAB/RET/IFBAIANO, de 15 de abril de 2026, e suas alterações, ao analisar os documentos presentes no Processo nº ${numProcesso}, considerando as disposições da Resolução Consup nº 63/2020 e da Instrução Normativa nº 34/2020, que tratam sobre as ações de desenvolvimento em serviço e afastamentos de servidores da carreira PCCTAE, manifesta-se favoravelmente pelo deferimento do pleito.\n\n`;
        p += `O período deferido corresponde a ${formatarData(dataInicioReal)} a ${formatarData(dataFimPretendida)}${retroTexto}.\n\n`;
        p += `À vista do exposto, encaminha-se o processo ao Gabinete da Reitora do IF Baiano para homologação, emissão da respectiva portaria autorizativa e demais providências cabíveis.\n\n`;
        p += `[Cidade - BA], ${formatarDataPorExtenso(dataParecer)}.\n\n`;
        p += `(Assinado eletronicamente)\n\n`;
        p += `Membros da CIS/PCCTAE\nIF Baiano`;

        txtDocumento.value = p;

        // PORTARIA
        let port = `MINUTA DE PORTARIA Nº ______ / ${new Date(dataParecer + "T00:00:00").getFullYear()} - RET-GAB/RET/IFBAIANO, DE ${formatarDataDiaMes(dataParecer)} DE ${new Date(dataParecer + "T00:00:00").getFullYear()}\n\n`;
        port += `A REITORA DO INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA BAIANO, no uso das suas atribuições delegadas pelo Decreto de 20/05/2026, publicado no DOU de 21/05/2026, Seção 2, página 1, e de acordo com as disposições contidas na Lei nº 8.112, de 11/12/1990 e na Lei nº 11.892, de 29/12/2008, e considerando o constante no Processo nº ${numProcesso} e no Parecer da CIS/PCCTAE,\n\n`;
        port += `RESOLVE:\n\n`;

        if (tipoProcesso === 'afastamento') {
            port += `Art. 1º Conceder afastamento integral ao(à) servidor(a) ${nomeServidor.toUpperCase()}, ocupante do cargo efetivo de ${cargoServidor}, matrícula SIAPE nº ${siape}, lotado(a) no(a) ${campusLotacao} do Instituto Federal de Educação, Ciência e Tecnologia Baiano, para participar de Programa de Pós-Graduação Stricto Sensu em nível de ${nivelCurso}, no período de ${formatarData(dataInicioReal)} a ${formatarData(dataFimPretendida)}.\n\n`;
        } else {
            port += `Art. 1º Autorizar a alocação de carga horária semanal para fins de participação em ação de desenvolvimento em serviço ao(à) servidor(a) ${nomeServidor.toUpperCase()}, ocupante do cargo efetivo de ${cargoServidor}, matrícula SIAPE nº ${siape}, lotado(a) no(a) ${campusLotacao} do Instituto Federal de Educação, Ciência e Tecnologia Baiano, para frequentar curso de ${nivelCurso}, no período de ${formatarData(dataInicioReal)} a ${formatarData(dataFimPretendida)}.\n\n`;
        }

        port += `Art. 2º Esta Portaria entra em vigor na data de sua publicação.\n\n\n`;
        port += `OZENICE SILVA DOS SANTOS\nReitora`;

        txtPortaria.value = port;

        // Exibir a aba do checklist concluído
        const tabChecklist = document.getElementById("tab-btn-checklist");
        if (tabChecklist) tabChecklist.style.display = "inline-flex";

        // Gerar o HTML do Checklist Concluído para impressão
        const checklist = CHECKLISTS[tipoProcesso];
        let checklistHtml = `
            <div class="print-checklist-document">
                <div style="text-align: center; margin-bottom: 20px; border-bottom: 2px solid #3E9A2D; padding-bottom: 10px;">
                    <img src="marca-if-baiano-horizontal.png" alt="IF Baiano" style="max-height: 60px; margin-bottom: 10px;" onerror="this.style.display='none';">
                    <h3 style="color: #3E9A2D; margin: 0; font-size: 1.4rem; font-weight: 700;">Checklist de Conformidade Documental</h3>
                    <p style="margin: 5px 0 0 0; font-size: 0.9rem; color: #555;">Comissão Interna de Supervisão da Carreira - CIS/PCCTAE</p>
                </div>
                
                <div style="margin-bottom: 25px; background-color: var(--bg-page); padding: 15px; border-radius: 6px; border: 1px solid var(--border-color); font-size: 0.95rem;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr><td style="padding: 4px 0; font-weight: bold; width: 150px;">Processo nº:</td><td style="padding: 4px 0;">${numProcesso}</td></tr>
                        <tr><td style="padding: 4px 0; font-weight: bold;">Interessado(a):</td><td style="padding: 4px 0;">${nomeServidor}</td></tr>
                        <tr><td style="padding: 4px 0; font-weight: bold;">Cargo/Lotação:</td><td style="padding: 4px 0;">${cargoServidor} - ${setorLotacao} / ${campusLotacao}</td></tr>
                        <tr><td style="padding: 4px 0; font-weight: bold;">SIAPE:</td><td style="padding: 4px 0;">${siape}</td></tr>
                        <tr><td style="padding: 4px 0; font-weight: bold;">Assunto:</td><td style="padding: 4px 0;">${tipoProcesso === 'afastamento' ? 'Afastamento Integral' : 'Alocação de Carga Horária'} (${nivelCurso})</td></tr>
                        <tr><td style="padding: 4px 0; font-weight: bold;">Data da Análise:</td><td style="padding: 4px 0;">${formatarData(dataParecer)}</td></tr>
                    </table>
                </div>
                
                <div style="display: flex; flex-direction: column; gap: 20px;">
        `;

        checklist.secoes.forEach(secao => {
            checklistHtml += `
                <div style="border: 1px solid var(--border-color); border-radius: 6px; overflow: hidden; break-inside: avoid;">
                    <div style="background-color: #3E9A2D; color: white; padding: 8px 12px; font-weight: bold; font-size: 0.95rem;">
                        ${secao.titulo}
                    </div>
                    <div style="padding: 12px; display: flex; flex-direction: column; gap: 8px; background-color: var(--bg-card);">
            `;
            secao.itens.forEach(item => {
                checklistHtml += `
                    <div style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.9rem; line-height: 1.4;">
                        <span style="color: #2E7D32; font-weight: bold; display: inline-flex; align-items: center; gap: 4px; flex-shrink: 0;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="color: #2E7D32; vertical-align: middle;">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            [ CONFORME ]
                        </span>
                        <span style="color: var(--text-color);">${item.texto}</span>
                    </div>
                `;
            });
            checklistHtml += `
                    </div>
                </div>
            `;
        });

        checklistHtml += `
                </div>
                
                <div style="margin-top: 30px; border-top: 1px solid var(--border-color); padding-top: 15px; text-align: center; font-size: 0.9rem; break-inside: avoid;">
                    <p>Resultado da Análise: <b>CONFORMIDADE DOCUMENTAL CONSTATADA</b></p>
                    <p style="font-size: 0.8rem; color: #666; margin-top: 5px;">Membros da CIS/PCCTAE - IF Baiano</p>
                    <p style="font-size: 0.75rem; color: #999; margin-top: 5px;">(Este checklist acompanha o Parecer de Deferimento nº _____/${new Date(dataParecer + "T00:00:00").getFullYear()} e deve ser anexado ao processo eletrônico no SUAP)</p>
                </div>
            </div>
        `;
        
        document.getElementById("print-checklist-content").innerHTML = checklistHtml;

        showToast("Parecer, Minuta e Checklist de Conformidade gerados com sucesso!");
    }

    mudarAba("documento");
    goToStep(3);
}

/* ==========================================================================
   UTILITÁRIOS DE DATA
   ========================================================================== */
function formatarData(str) {
    if (!str) return "";
    const p = str.split("-");
    return p.length === 3 ? `${p[2]}/${p[1]}/${p[0]}` : str;
}

function formatarDataDiaMes(str) {
    if (!str) return "___";
    const d = new Date(str + "T00:00:00");
    return `${d.getDate()}`;
}

function formatarDataPorExtenso(str) {
    if (!str) return "";
    const meses = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
    const d = new Date(str + "T00:00:00");
    return `${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()}`;
}

/* ==========================================================================
   TABS
   ========================================================================== */
function initTabs() {
    document.getElementById("tab-btn-documento").addEventListener("click", () => mudarAba("documento"));
    document.getElementById("tab-btn-portaria").addEventListener("click", () => mudarAba("portaria"));
    
    const tabChecklist = document.getElementById("tab-btn-checklist");
    if (tabChecklist) {
        tabChecklist.addEventListener("click", () => mudarAba("checklist"));
    }
}

function mudarAba(aba) {
    const tabs = { 
        documento: "tab-btn-documento", 
        portaria: "tab-btn-portaria",
        checklist: "tab-btn-checklist"
    };
    const panels = { 
        documento: "panel-documento", 
        portaria: "panel-portaria",
        checklist: "panel-checklist"
    };

    Object.keys(tabs).forEach(key => {
        const tabEl = document.getElementById(tabs[key]);
        const panelEl = document.getElementById(panels[key]);
        if (tabEl && panelEl) {
            const isActive = key === aba;
            tabEl.classList.toggle("active", isActive);
            tabEl.setAttribute("aria-selected", isActive);
            panelEl.classList.toggle("active", isActive);
        }
    });
}

/* ==========================================================================
   ACESSIBILIDADE
   ========================================================================== */
function initAccessibility() {
    const btnContrast = document.getElementById("btn-contrast");
    if (localStorage.getItem("high-contrast") === "true") {
        document.body.classList.add("high-contrast");
    }

    btnContrast.addEventListener("click", () => {
        const isActive = document.body.classList.toggle("high-contrast");
        localStorage.setItem("high-contrast", isActive);
    });

    let fontScale = parseFloat(localStorage.getItem("font-scale")) || 1.0;
    document.documentElement.style.setProperty("--font-scale", fontScale);

    const adjustFont = (delta) => {
        fontScale = Math.max(0.8, Math.min(1.4, fontScale + delta));
        document.documentElement.style.setProperty("--font-scale", fontScale);
        localStorage.setItem("font-scale", fontScale);
    };

    document.getElementById("btn-font-inc").addEventListener("click", () => adjustFont(0.1));
    document.getElementById("btn-font-dec").addEventListener("click", () => adjustFont(-0.1));
    document.getElementById("btn-font-normal").addEventListener("click", () => {
        fontScale = 1.0;
        document.documentElement.style.setProperty("--font-scale", 1.0);
        localStorage.setItem("font-scale", 1.0);
    });
}

/* ==========================================================================
   SIDEBAR DE LEGISLAÇÃO
   ========================================================================== */
function initSidebar() {
    const fab = document.getElementById("fab-library");
    const sidebar = document.getElementById("sidebar-library");
    const overlay = document.getElementById("sidebar-overlay");
    const btnClose = document.getElementById("btn-close-sidebar");

    const toggle = (open) => {
        sidebar.classList.toggle("open", open);
        overlay.classList.toggle("hidden", !open);
        document.body.style.overflow = open ? "hidden" : "";
    };

    fab.addEventListener("click", () => toggle(true));
    btnClose.addEventListener("click", () => toggle(false));
    overlay.addEventListener("click", () => toggle(false));

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && sidebar.classList.contains("open")) toggle(false);
    });
}

/* ==========================================================================
   CÓPIA PARA CLIPBOARD
   ========================================================================== */
function setupCopyButtons() {
    const setup = (btnId, textId) => {
        document.getElementById(btnId).addEventListener("click", () => {
            const text = document.getElementById(textId).value;
            if (!text || text.startsWith("Não foi possível")) return;

            navigator.clipboard.writeText(text).then(() => {
                showToast("Texto copiado para a área de transferência!");
            }).catch(() => {
                showToast("Erro ao copiar. Selecione o texto manualmente.");
            });
        });
    };
    setup("copy-documento", "text-documento");
    setup("copy-portaria", "text-portaria");
}

/* ==========================================================================
   TOAST NOTIFICATION
   ========================================================================== */
function showToast(message, duration = 3500) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    toast.classList.remove("hide");

    setTimeout(() => {
        toast.classList.add("hide");
        toast.classList.remove("show");
    }, duration);
}

/* ==========================================================================
   COOKIE BANNER / LGPD
   ========================================================================== */
function initCookieBanner() {
    const banner = document.getElementById("cookie-banner");
    if (localStorage.getItem("lgpd-cookies-accepted") === "true") {
        banner.classList.add("hidden");
    }
    document.getElementById("btn-accept-cookie").addEventListener("click", () => {
        localStorage.setItem("lgpd-cookies-accepted", "true");
        banner.classList.add("hidden");
    });
}

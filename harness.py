import os
import sys
import py_compile

def run_harness_tests():
    """Suíte de autoteste padronizada (Harness) do laboratório."""
    app_dir = os.path.dirname(os.path.abspath(__file__))
    app_name = os.path.basename(app_dir)
    print(f"=== [HARNESS TEST] Iniciando verificação de integridade em: {app_name} ===")
    
    passed = 0
    total = 0

    # Teste 1: Presença do README.md
    total += 1
    readme_path = os.path.join(app_dir, "README.md")
    if os.path.exists(readme_path):
        passed += 1
        print("  [PASS 1/3] Arquivo README.md presente e válido.")
    else:
        print("  [FAIL 1/3] Arquivo README.md ausente.")

    # Teste 2: Verificação de sintaxe Python nos scripts principais (se houver)
    total += 1
    py_files = [f for f in os.listdir(app_dir) if f.endswith(".py") and f != "harness.py"]
    py_success = True
    for pf in py_files:
        try:
            py_compile.compile(os.path.join(app_dir, pf), doraise=True)
        except Exception as e:
            py_success = False
            print(f"  [ERRO SINTAXE] Falha em {pf}: {e}")

    if py_success:
        passed += 1
        print("  [PASS 2/3] Sintaxe Python e integridade de arquivos validadas.")
    else:
        print("  [FAIL 2/3] Falha de compilação em scripts Python.")

    # Teste 3: Verificação de Favicon ou Ativos Web (se houver HTML)
    total += 1
    html_files = [f for f in os.listdir(app_dir) if f.endswith(".html")]
    if html_files:
        fav_exists = any(os.path.exists(os.path.join(app_dir, f)) for f in ["favicon.png", "favicon.ico", "favicon.svg"])
        if fav_exists:
            passed += 1
            print("  [PASS 3/3] Interface HTML acompanhada de Favicon oficial.")
        else:
            print("  [FAIL 3/3] Interface HTML sem Favicon.")
    # Teste 4: Verificação de Integridade das Modalidades e Checklists (app.js e index.html)
    total += 1
    app_js_path = os.path.join(app_dir, "app.js")
    index_html_path = os.path.join(app_dir, "index.html")
    if os.path.exists(app_js_path) and os.path.exists(index_html_path):
        with open(app_js_path, "r", encoding="utf-8") as f:
            app_js_content = f.read()
        with open(index_html_path, "r", encoding="utf-8") as f:
            index_html_content = f.read()
        
        has_prorrogacao_js = "prorrogacao:" in app_js_content and "pro_4_1" in app_js_content
        has_pdp_mention = "Plano de Desenvolvimento de Pessoas (PDP)" in app_js_content and "NUCAP" in app_js_content
        has_prorrogacao_html = 'value="prorrogacao"' in index_html_content and 'id="secao-campos-prorrogacao"' in index_html_content
        has_portaria_374 = "PORTARIA 374/2026 - RET-GAB/RET/IFBAIANO, de 30 de julho de 2026" in app_js_content
        no_old_portaria_124 = "PORTARIA 124/2026" not in app_js_content
        
        has_bold_pendencia = "tag-pendencia" in app_js_content and "tag-pendencia" in open(os.path.join(app_dir, "style.css"), "r", encoding="utf-8").read()
        
        if has_prorrogacao_js and has_pdp_mention and has_prorrogacao_html and has_portaria_374 and no_old_portaria_124 and has_bold_pendencia:
            passed += 1
            print("  [PASS 4/5] Modalidade Prorrogação, PDP, Portaria 374/2026 e PENDÊNCIA em negrito validados.")
        else:
            print(f"  [FAIL 4/5] Inconsistência: JS={has_prorrogacao_js}, PDP={has_pdp_mention}, HTML={has_prorrogacao_html}, Portaria374={has_portaria_374}, NoOld124={no_old_portaria_124}, BoldPendencia={has_bold_pendencia}.")
    else:
        print("  [FAIL 4/5] Arquivos app.js ou index.html ausentes.")

    # Teste 5: Verificação da Regra 11 (Veto a Emojis em arquivos textuais)
    total += 1
    emoji_found = False
    for fname in ["app.js", "index.html", "style.css", "README.md"]:
        fpath = os.path.join(app_dir, fname)
        if os.path.exists(fpath):
            with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()
                # Verifica caracteres de emojis conhecidos (faixas Unicode comuns de emojis)
                for char in content:
                    cp = ord(char)
                    if (0x1F600 <= cp <= 0x1F64F) or (0x1F300 <= cp <= 0x1F5FF) or (0x1F680 <= cp <= 0x1F6FF) or (0x1F900 <= cp <= 0x1F9FF) or (0x2600 <= cp <= 0x26FF and cp not in [0x2699]): # exclui símbolos aceitos
                        emoji_found = True
                        print(f"  [ALERTA REGRA 11] Possível emoji detectado em {fname}: {char} (U+{cp:X})")
                        break
    if not emoji_found:
        passed += 1
        print("  [PASS 5/5] Conformidade estrita com a Regra 11 (Zero Emojis) atestada.")
    else:
        print("  [FAIL 5/5] Emojis detectados violando a Regra 11.")

    print(f"Resultados: {passed}/{total} testes aprovados.")
    if passed == total:
        print(">>> RESULTADO FINAL: PASS (100% OK) <<<")
        return 0
    else:
        print(">>> RESULTADO FINAL: FAIL <<<")
        return 1

if __name__ == '__main__':
    sys.exit(run_harness_tests())



/* ========================================
   CONFIGURAÇÕES GERAIS
======================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    background: #101014;
    color: #eeeeee;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.7;
    position: relative;
    isolation: isolate;
}

/* ========================================
   PENTAGRAMA NO FUNDO
======================================== */

body::before {
    content: "";
    position: fixed;
    top: 50%;
    left: 50%;

    width: min(75vw, 850px);
    height: min(75vw, 850px);

    transform: translate(-50%, -50%);

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500'%3E%3Cg fill='none' stroke='%23a51c29' stroke-width='3'%3E%3Ccircle cx='250' cy='250' r='210'/%3E%3Ccircle cx='250' cy='250' r='190'/%3E%3Cpath d='M250 35 L376 423 L45 183 L455 183 L124 423 Z'/%3E%3C/g%3E%3C/svg%3E");

    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    opacity: 0.09;
    pointer-events: none;
    z-index: -1;
}

/* ========================================
   CABEÇALHO
======================================== */

.header {
    width: 100%;
    min-height: 70px;
    padding: 15px 5%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;

    background: #09090c;
    border-bottom: 1px solid #8e1824;

    position: sticky;
    top: 0;
    z-index: 100;
}

.logo {
    color: #d12c39;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1px;
}

nav {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

nav a {
    color: #eeeeee;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s;
}

nav a:hover {
    color: #d12c39;
}

/* ========================================
   CAPA / HERO
======================================== */

.hero {
    min-height: 480px;
    padding: 100px 8%;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    background:
        linear-gradient(rgba(10, 10, 14, 0.85), rgba(10, 10, 14, 0.95)),
        radial-gradient(circle, #4a1018, #101014 70%);

    border-bottom: 1px solid #4a151d;
}

.hero-content {
    max-width: 850px;
}

.subtitulo {
    color: #d12c39;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 13px;
    margin-bottom: 15px;
}

.hero h1 {
    color: #eeeeee;
    font-size: clamp(32px, 6vw, 60px);
    letter-spacing: 4px;
    margin-bottom: 20px;
}

.hero p {
    color: #cccccc;
    max-width: 700px;
    margin: 0 auto 25px;
}

.botao {
    display: inline-block;
    padding: 12px 25px;

    background: #a51c29;
    color: white;

    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;

    transition: background 0.3s, transform 0.3s;
}

.botao:hover {
    background: #d12c39;
    transform: translateY(-3px);
}

/* ========================================
   CONTEÚDO GERAL
======================================== */

.container {
    width: 90%;
    max-width: 1200px;
    margin: 55px auto;
    padding: 10px 0;
}

.container h2 {
    color: #d12c39;
    font-size: 28px;
    margin-bottom: 18px;
    border-bottom: 1px solid #512028;
    padding-bottom: 10px;
}

.container > p {
    color: #cccccc;
    margin-bottom: 15px;
    text-align: justify;
}

/* ========================================
   CARDS GERAIS E CLASSES
======================================== */

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 15px;
    width: 100%;
    align-items: stretch;
}

.card {
    background: rgba(25, 25, 34, 0.96);
    border: 1px solid #383838;
    border-radius: 5px;
    padding: 20px;
    min-width: 0;

    transition: transform 0.2s, border-color 0.2s;
}

.card:hover {
    transform: translateY(-3px);
    border-color: #a51c29;
}

.card h3 {
    color: #d12c39;
    font-size: 20px;
    margin-bottom: 12px;
}

.card h4 {
    color: #eeeeee;
    margin-top: 15px;
    margin-bottom: 8px;
}

.card p,
.card li {
    color: #cccccc;
    font-size: 14px;
    overflow-wrap: break-word;
}

.card ul {
    padding-left: 20px;
}

.classe-combatente {
    border-top: 3px solid #a51c29;
}

.classe-especialista {
    border-top: 3px solid #a58b35;
}

.classe-ocultista {
    border-top: 3px solid #6041a5;
}

/* ========================================
   CAMPOS DE PESQUISA
======================================== */

input[type="text"] {
    display: block;
    width: 100%;
    max-width: 500px;

    padding: 13px 15px;
    margin: 20px 0 12px;

    background: #191920;
    color: #eeeeee;

    border: 1px solid #444444;
    border-radius: 4px;

    font-size: 15px;
    outline: none;
}

input[type="text"]:focus {
    border-color: #d12c39;
    box-shadow: 0 0 5px rgba(209, 44, 57, 0.3);
}

input::placeholder {
    color: #999999;
}

.contador {
    color: #999999;
    font-size: 13px;
    margin-bottom: 15px;
}

/* ========================================
   CARDS DE ORIGENS
======================================== */

.origem-card {
    background: rgba(25, 25, 34, 0.96);
    border: 1px solid #383838;
    border-left: 3px solid #a51c29;

    border-radius: 5px;
    padding: 18px;

    min-width: 0;
    overflow-wrap: break-word;

    transition: transform 0.2s, border-color 0.2s;
}

.origem-card:hover {
    transform: translateY(-3px);
    border-color: #d12c39;
}

.origem-card h3 {
    color: #d12c39;
    font-size: 18px;
    margin-bottom: 10px;
}

.origem-card p {
    color: #cccccc;
    font-size: 14px;
    margin-bottom: 10px;
    overflow-wrap: break-word;
}

.origem-card strong {
    color: #eeeeee;
}

/* ========================================
   LEGENDA DOS ATRIBUTOS
======================================== */

.legenda {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 20px;

    padding: 15px;
    margin: 15px 0;

    background: rgba(25, 25, 34, 0.96);
    border: 1px solid #383838;
    border-radius: 5px;
}

.legenda span {
    color: #cccccc;
    font-size: 13px;
}

.legenda strong {
    color: #d12c39;
}

/* ========================================
   PERÍCIAS - CORREÇÃO DO ALINHAMENTO
======================================== */

.pericias-grid {
    display: grid;

    /* Cria colunas de tamanho adequado */
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));

    gap: 15px;
    width: 100%;
    align-items: stretch;
}

/* Card individual */
.pericia {
    background: rgba(25, 25, 34, 0.96);
    border: 1px solid #3b3b3b;
    border-radius: 5px;
    padding: 15px;

    /* CORREÇÃO: organiza o conteúdo verticalmente */
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;

    width: 100%;
    min-width: 0;
    box-sizing: border-box;

    transition: transform 0.2s ease, border-color 0.2s ease;
}

.pericia:hover {
    transform: translateY(-3px);
    border-color: #a51c29;
}

/* Nome e atributo na primeira linha */
.pericia-topo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;

    width: 100%;
    margin-bottom: 10px;
}

/* Nome da perícia */
.pericia-nome {
    color: #eeeeee;
    font-size: 16px;
    font-weight: bold;
    overflow-wrap: anywhere;
}

/* Atributo da perícia */
.pericia-atributo {
    color: #d12c39;
    font-size: 14px;
    font-weight: bold;
    white-space: nowrap;
}

/* Descrição abaixo do nome */
.pericia-descricao {
    display: block;
    width: 100%;
    margin: 0;

    color: #cccccc;
    font-size: 14px;
    line-height: 1.6;

    overflow-wrap: break-word;
    word-wrap: break-word;
    white-space: normal;

    box-sizing: border-box;
}

/* ========================================
   ETAPAS DE CRIAÇÃO
======================================== */

.passos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 15px;
}

.passo {
    position: relative;

    background: rgba(25, 25, 34, 0.96);
    border: 1px solid #383838;
    border-radius: 5px;

    padding: 20px;
    min-width: 0;

    transition: transform 0.2s, border-color 0.2s;
}

.passo:hover {
    transform: translateY(-3px);
    border-color: #a51c29;
}

.numero {
    display: inline-block;
    color: #d12c39;
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 10px;
}

.passo h3 {
    color: #eeeeee;
    font-size: 17px;
    margin-bottom: 10px;
}

.passo p {
    color: #cccccc;
    font-size: 14px;
    overflow-wrap: break-word;
}

/* ========================================
   MENSAGEM SEM RESULTADOS
======================================== */

.sem-resultados {
    grid-column: 1 / -1;
    width: 100%;
    padding: 20px;

    color: #aaaaaa;
    text-align: center;

    background: rgba(25, 25, 34, 0.96);
    border: 1px solid #383838;
    border-radius: 5px;
}

/* ========================================
   RODAPÉ
======================================== */

footer {
    padding: 30px 15px;
    margin-top: 60px;

    background: #09090c;
    border-top: 1px solid #8e1824;

    text-align: center;
}

footer p:first-child {
    color: #d12c39;
    font-weight: bold;
    font-size: 18px;
}

footer p,
footer small {
    color: #999999;
    font-size: 13px;
}

/* ========================================
   RESPONSIVIDADE
======================================== */

@media (max-width: 900px) {
    body::before {
        width: 85vw;
        height: 85vw;
    }

    .header {
        justify-content: center;
        text-align: center;
    }

    nav {
        justify-content: center;
    }
}

@media (max-width: 600px) {
    body::before {
        width: 100vw;
        height: 100vw;
        opacity: 0.06;
    }

    .container {
        width: 92%;
        margin: 35px auto;
    }

    .container h2 {
        font-size: 23px;
    }

    .hero {
        min-height: 400px;
        padding: 70px 5%;
    }

    .hero h1 {
        font-size: 32px;
    }

    .logo {
        font-size: 17px;
    }

    nav {
        gap: 12px;
    }

    nav a {
        font-size: 12px;
    }

    .cards,
    .pericias-grid,
    .passos {
        grid-template-columns: 1fr;
    }

    .pericia {
        padding: 14px;
    }

    .pericia-nome {
        font-size: 15px;
    }

    .pericia-descricao {
        font-size: 13px;
    }
}

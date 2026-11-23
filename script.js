
/* ==========================================
   ARQUIVO PARANORMAL
   Banco de dados e funcionalidades
========================================== */


/* ==========================================
   ORIGENS
========================================== */

const origens = [

    {
        nome: "Acadêmico",
        descricao: "Pessoa que dedicou grande parte da vida aos estudos, à pesquisa ou ao ensino. Pode ser um professor, cientista, historiador ou pesquisador que desenvolveu conhecimentos especializados antes de conhecer a existência do paranormal.",
        pericias: "Ciências e Investigação",
        habilidade: "Saber é Poder: permite gastar PE para receber um bônus em um teste baseado em Intelecto."
    },

    {
        nome: "Agente de Saúde",
        descricao: "Profissional que trabalha diretamente com a saúde e o bem-estar de outras pessoas. Pode ser médico, enfermeiro, socorrista ou outro trabalhador da área, acostumado a lidar com emergências, ferimentos e situações de risco.",
        pericias: "Intuição e Medicina",
        habilidade: "Técnica Medicinal: utiliza seus conhecimentos médicos para melhorar a recuperação de PV de alguém."
    },

    {
        nome: "Amnésico",
        descricao: "Indivíduo que perdeu parte ou a totalidade de suas memórias. Seu passado é desconhecido até mesmo para si próprio. Fragmentos de lembranças podem surgir inesperadamente, revelando pistas sobre sua verdadeira identidade e acontecimentos esquecidos.",
        pericias: "Duas perícias à escolha do mestre",
        habilidade: "Vislumbres do Passado: pode receber informações ou lembranças relacionadas à sua história, conforme as circunstâncias e a decisão do mestre."
    },

    {
        nome: "Artista",
        descricao: "Pessoa que encontrou na criatividade e na expressão artística sua principal forma de atuação. Pode ser músico, escritor, pintor, ator, escultor ou qualquer outro profissional ligado à arte. Sua sensibilidade permite interpretar e produzir diferentes formas de expressão.",
        pericias: "Artes e Enganação",
        habilidade: "Magnum Opus: possui uma obra artística de destaque, cuja criação e importância fazem parte de sua identidade."
    },

    {
        nome: "Atleta",
        descricao: "Indivíduo que dedicou sua vida ao esporte e ao aprimoramento físico. Treinamentos intensos desenvolveram sua coordenação, resistência, velocidade e capacidade de superar limites físicos.",
        pericias: "Acrobacia e Atletismo",
        habilidade: "110%: permite utilizar Pontos de Esforço para melhorar determinados testes relacionados ao desempenho físico."
    },

    {
        nome: "Chef",
        descricao: "Profissional da gastronomia que possui experiência no preparo de alimentos e na combinação de ingredientes. Seu conhecimento culinário permite transformar recursos simples em refeições elaboradas e utilizar a alimentação como uma forma de auxiliar outras pessoas.",
        pericias: "Fortitude e Profissão",
        habilidade: "Ingrediente Secreto: utiliza seus conhecimentos culinários para preparar uma refeição especial com benefícios conforme as regras da habilidade."
    },

    {
        nome: "Criminoso",
        descricao: "Pessoa que viveu envolvida com atividades ilegais, golpes, furtos ou organizações criminosas. Sua experiência no submundo proporcionou conhecimentos sobre infiltração, furtividade e maneiras de lidar com situações perigosas.",
        pericias: "Crime e Furtividade",
        habilidade: "O Crime Compensa: utiliza seus conhecimentos e contatos do submundo para obter vantagens em determinadas situações."
    },

    {
        nome: "Cultista Arrependido",
        descricao: "Antigo integrante de um culto que venerava ou realizava práticas relacionadas ao Outro Lado. Após abandonar suas antigas convicções, passou a utilizar parte dos conhecimentos adquiridos para combater as mesmas forças com as quais já esteve envolvido.",
        pericias: "Ocultismo e Religião",
        habilidade: "Traços do Outro Lado: recebe um poder paranormal, mas começa com sua Sanidade reduzida conforme as regras da origem."
    },

    {
        nome: "Desgarrado",
        descricao: "Pessoa que viveu afastada da sociedade, desenvolvendo hábitos de sobrevivência em ambientes hostis. Pode ter crescido isolada, abandonado a civilização ou aprendido a depender exclusivamente de si mesma.",
        pericias: "Fortitude e Sobrevivência",
        habilidade: "Calejado: possui resistência adicional, recebendo PV extras de acordo com as regras da habilidade."
    },

    {
        nome: "Engenheiro",
        descricao: "Profissional especializado em desenvolver, construir, projetar e solucionar problemas técnicos. Possui conhecimentos relacionados a estruturas, máquinas, sistemas e tecnologias, sendo capaz de compreender o funcionamento de diferentes equipamentos.",
        pericias: "Profissão e Tecnologia",
        habilidade: "Ferramenta Favorita: possui uma ferramenta com a qual desenvolveu grande familiaridade, recebendo benefícios relacionados ao seu uso."
    },

    {
        nome: "Executivo",
        descricao: "Indivíduo acostumado ao ambiente corporativo, à administração de recursos e à tomada de decisões. Sua experiência envolve negociação, organização, planejamento e gerenciamento de pessoas ou empresas.",
        pericias: "Diplomacia e Profissão",
        habilidade: "Processo Otimizado: utiliza sua experiência administrativa para obter vantagens em atividades relacionadas a processos e documentos."
    },

    {
        nome: "Investigador",
        descricao: "Pessoa que dedicou sua trajetória à descoberta de informações e à resolução de mistérios. Pode ser detetive, jornalista investigativo ou pesquisador. Está acostumada a analisar evidências, identificar contradições e procurar respostas onde outras pessoas não enxergam nada.",
        pericias: "Investigação e Percepção",
        habilidade: "Faro para Pistas: possui facilidade para encontrar e interpretar evidências durante investigações."
    },

    {
        nome: "Lutador",
        descricao: "Praticante de artes marciais ou modalidades de combate corporal. Seus treinamentos desenvolveram disciplina, reflexos, técnicas de ataque e conhecimento sobre o próprio corpo, tornando-o perigoso mesmo sem utilizar armas.",
        pericias: "Luta e Reflexos",
        habilidade: "Mão Pesada: recebe benefícios relacionados ao dano causado por ataques corpo a corpo."
    },

    {
        nome: "Magnata",
        descricao: "Pessoa que acumulou grande patrimônio financeiro e possui influência econômica. Sua condição financeira permite acesso a recursos, contatos e oportunidades que normalmente estariam fora do alcance de pessoas comuns.",
        pericias: "Diplomacia e Pilotagem",
        habilidade: "Patrocinador da Ordem: possui vantagens relacionadas ao limite de crédito e à disponibilidade de recursos financeiros."
    },

    {
        nome: "Mercenário",
        descricao: "Profissional que realiza operações de combate ou segurança em troca de pagamento. Possui experiência em situações de perigo, operações táticas e confrontos, estando acostumado a agir sob pressão.",
        pericias: "Iniciativa e Intimidação",
        habilidade: "Posição de Combate: possui recursos para melhorar seu posicionamento e movimentação durante confrontos, conforme as regras da habilidade."
    },

    {
        nome: "Militar",
        descricao: "Indivíduo que recebeu treinamento militar e possui experiência com armamentos, disciplina, hierarquia e operações táticas. Seu passado pode envolver missões, treinamentos intensivos e situações de combate.",
        pericias: "Pontaria e Tática",
        habilidade: "Para Bellum: utiliza seu treinamento militar para obter benefícios relacionados ao uso de armas de fogo."
    },

    {
        nome: "Operário",
        descricao: "Trabalhador que desenvolveu experiência em atividades manuais, industriais ou de construção. Está acostumado a utilizar ferramentas, operar equipamentos e realizar tarefas que exigem esforço físico e conhecimento prático.",
        pericias: "Fortitude e Profissão",
        habilidade: "Ferramenta de Trabalho: possui familiaridade com uma ferramenta de sua área de atuação, recebendo benefícios relacionados ao seu uso."
    },

    {
        nome: "Policial",
        descricao: "Profissional da segurança pública que possui experiência em patrulhamento, investigação de ocorrências e enfrentamento de situações perigosas. Seu treinamento envolve procedimentos policiais, percepção do ambiente e utilização de armamentos.",
        pericias: "Percepção e Pontaria",
        habilidade: "Patrulha: utiliza sua experiência profissional para obter benefícios relacionados à Defesa."
    },

    {
        nome: "Religioso",
        descricao: "Pessoa cuja vida foi profundamente influenciada pela religião e pela espiritualidade. Pode ser sacerdote, pastor, monge ou integrante de outra tradição religiosa. Sua trajetória envolve fé, aconselhamento e conhecimento de práticas espirituais.",
        pericias: "Religião e Vontade",
        habilidade: "Acalentar: utiliza palavras e convicções para ajudar outra pessoa a recuperar Sanidade, respeitando as condições da habilidade."
    },

    {
        nome: "Servidor Público",
        descricao: "Indivíduo que trabalha ou trabalhou em instituições governamentais. Possui experiência com procedimentos administrativos, atendimento à população, organização de documentos e funcionamento dos serviços públicos.",
        pericias: "Intuição e Vontade",
        habilidade: "Espírito Cívico: possui benefícios relacionados à capacidade de auxiliar outras pessoas."
    },

    {
        nome: "Teórico da Conspiração",
        descricao: "Pessoa obcecada por mistérios, teorias conspiratórias e acontecimentos inexplicáveis. Frequentemente investiga assuntos ignorados pela sociedade e acredita que existem forças ocultas influenciando o mundo.",
        pericias: "Investigação e Ocultismo",
        habilidade: "Eu Já Sabia: possui resistência adicional contra determinados efeitos de dano mental."
    },

    {
        nome: "T.I.",
        descricao: "Profissional da tecnologia da informação, acostumado a lidar com computadores, sistemas, redes e dispositivos eletrônicos. Sua experiência permite compreender ferramentas digitais e utilizar recursos tecnológicos para obter informações.",
        pericias: "Investigação e Tecnologia",
        habilidade: "Motor de Busca: utiliza a internet e recursos digitais para auxiliar na obtenção de informações durante investigações."
    },

    {
        nome: "Trabalhador Rural",
        descricao: "Pessoa acostumada à rotina do campo, ao trabalho com animais e à convivência com ambientes naturais. Desenvolveu conhecimentos práticos sobre sobrevivência, agricultura, criação de animais e adaptação à natureza.",
        pericias: "Adestramento e Sobrevivência",
        habilidade: "Desbravador: possui vantagens ao lidar com ambientes naturais e atividades relacionadas à exploração."
    },

    {
        nome: "Trambiqueiro",
        descricao: "Indivíduo que sobreviveu utilizando golpes, fraudes, falsificações e manipulação social. É acostumado a assumir diferentes identidades e enganar pessoas para conseguir aquilo que deseja.",
        pericias: "Crime e Enganação",
        habilidade: "Impostor: consegue utilizar sua capacidade de enganação para substituir determinadas perícias em situações específicas."
    },

    {
        nome: "Universitário",
        descricao: "Estudante do ensino superior que teve contato com acontecimentos relacionados ao paranormal. Sua formação acadêmica e sua rotina de estudos contribuíram para desenvolver conhecimentos e capacidade de dedicação.",
        pericias: "Atualidades e Investigação",
        habilidade: "Dedicação: recebe benefícios relacionados ao uso de Pontos de Esforço, conforme as condições da habilidade."
    },

    {
        nome: "Vítima",
        descricao: "Pessoa que sobreviveu a um encontro traumático com o paranormal. A experiência deixou marcas físicas ou psicológicas, mas também desenvolveu sua capacidade de reconhecer perigos e resistir a situações extremas.",
        pericias: "Reflexos e Vontade",
        habilidade: "Cicatrizes Psicológicas: sua experiência traumática proporciona benefícios relacionados à resistência contra efeitos mentais."
    }

];


/* ==========================================
   PERÍCIAS
========================================== */

const pericias = [

    {
        nome: "Acrobacia",
        atributo: "AGI",
        descricao: "Representa equilíbrio, coordenação motora e capacidade de realizar movimentos complexos. É utilizada para saltar, realizar manobras, atravessar superfícies estreitas e evitar quedas."
    },

    {
        nome: "Adestramento",
        atributo: "PRE",
        descricao: "Representa a capacidade de compreender, treinar e controlar animais. Pode ser utilizada para acalmar criaturas, ensinar comandos e lidar com animais em situações perigosas."
    },

    {
        nome: "Artes",
        atributo: "PRE",
        descricao: "Representa conhecimentos e habilidades relacionados à expressão artística. Pode envolver música, pintura, atuação, escultura, dança, escrita e outras formas de manifestação criativa."
    },

    {
        nome: "Atletismo",
        atributo: "FOR",
        descricao: "Representa capacidade física e preparo corporal. É utilizada para correr, escalar, nadar, saltar, carregar objetos pesados e realizar atividades que exigem esforço físico."
    },

    {
        nome: "Atualidades",
        atributo: "INT",
        descricao: "Representa conhecimento sobre acontecimentos recentes, notícias, política, sociedade, cultura e eventos importantes. Ajuda a reconhecer informações sobre o mundo atual."
    },

    {
        nome: "Ciências",
        atributo: "INT",
        descricao: "Representa conhecimentos científicos e capacidade de compreender fenômenos naturais. Pode envolver biologia, química, física, anatomia e análise de evidências científicas."
    },

    {
        nome: "Crime",
        atributo: "AGI",
        descricao: "Representa conhecimentos sobre atividades criminosas e técnicas utilizadas no submundo. Pode ser utilizada para arrombar fechaduras, realizar furtos, desarmar mecanismos e compreender práticas ilegais."
    },

    {
        nome: "Diplomacia",
        atributo: "PRE",
        descricao: "Representa capacidade de negociação, persuasão e comunicação respeitosa. É utilizada para convencer pessoas, estabelecer acordos, negociar e resolver conflitos sem recorrer à violência."
    },

    {
        nome: "Enganação",
        atributo: "PRE",
        descricao: "Representa a capacidade de mentir, manipular informações e disfarçar intenções. Pode ser utilizada para blefar, criar histórias falsas, fingir identidades e esconder a verdade."
    },

    {
        nome: "Fortitude",
        atributo: "VIG",
        descricao: "Representa resistência física e capacidade de suportar condições adversas. É utilizada para resistir a doenças, venenos, fadiga, ferimentos e outros efeitos que prejudicam o corpo."
    },

    {
        nome: "Furtividade",
        atributo: "AGI",
        descricao: "Representa capacidade de agir sem chamar atenção. É utilizada para se esconder, mover-se silenciosamente, evitar ser percebido e aproximar-se de alvos sem ser descoberto."
    },

    {
        nome: "Iniciativa",
        atributo: "AGI",
        descricao: "Representa rapidez de reação diante de situações inesperadas. É utilizada principalmente para determinar a ordem de ação dos personagens durante os confrontos."
    },

    {
        nome: "Intimidação",
        atributo: "PRE",
        descricao: "Representa capacidade de impor respeito ou medo por meio de ameaças, postura e pressão psicológica. Pode ser utilizada para assustar, coagir e pressionar outras pessoas."
    },

    {
        nome: "Intuição",
        atributo: "PRE",
        descricao: "Representa capacidade de interpretar comportamentos, perceber emoções e identificar intenções. Ajuda a reconhecer quando alguém está escondendo informações ou agindo de maneira suspeita."
    },

    {
        nome: "Investigação",
        atributo: "INT",
        descricao: "Representa capacidade de procurar, analisar e relacionar evidências. É fundamental para encontrar pistas, reconstruir acontecimentos, examinar locais e solucionar mistérios."
    },

    {
        nome: "Luta",
        atributo: "FOR",
        descricao: "Representa treinamento e habilidade em combate corpo a corpo. É utilizada para atacar utilizando socos, chutes, agarrões e armas de combate próximo."
    },

    {
        nome: "Medicina",
        atributo: "INT",
        descricao: "Representa conhecimentos médicos e capacidade de prestar atendimento a pessoas feridas. Pode ser utilizada para diagnosticar condições, tratar ferimentos e realizar procedimentos de primeiros socorros."
    },

    {
        nome: "Ocultismo",
        atributo: "INT",
        descricao: "Representa conhecimentos sobre fenômenos paranormais, rituais, símbolos, entidades e manifestações do Outro Lado. É essencial para compreender acontecimentos que desafiam as leis naturais."
    },

    {
        nome: "Percepção",
        atributo: "PRE",
        descricao: "Representa capacidade de observar o ambiente e identificar detalhes importantes. É utilizada para notar movimentos, ouvir sons, perceber ameaças e encontrar elementos que poderiam passar despercebidos."
    },

    {
        nome: "Pilotagem",
        atributo: "AGI",
        descricao: "Representa capacidade de conduzir veículos e controlar meios de transporte. Pode ser utilizada para dirigir carros, pilotar motocicletas e operar outros veículos conforme as regras."
    },

    {
        nome: "Pontaria",
        atributo: "AGI",
        descricao: "Representa precisão e habilidade no uso de armas de ataque à distância. É utilizada para acertar alvos com armas de fogo, arcos e outros equipamentos de disparo."
    },

    {
        nome: "Profissão",
        atributo: "INT",
        descricao: "Representa conhecimentos técnicos e experiência adquiridos em uma profissão específica. Sua aplicação depende da área escolhida, podendo envolver atividades administrativas, técnicas ou especializadas."
    },

    {
        nome: "Reflexos",
        atributo: "AGI",
        descricao: "Representa rapidez de reação e capacidade de evitar perigos. É utilizada para desviar de ataques, reagir a armadilhas, evitar explosões e escapar de situações repentinas."
    },

    {
        nome: "Religião",
        atributo: "PRE",
        descricao: "Representa conhecimentos sobre religiões, crenças, tradições, símbolos e práticas espirituais. Pode ser utilizada para identificar rituais religiosos e compreender tradições de diferentes culturas."
    },

    {
        nome: "Sobrevivência",
        atributo: "INT",
        descricao: "Representa conhecimentos necessários para sobreviver em ambientes naturais ou hostis. Pode ser utilizada para encontrar abrigo, identificar recursos, rastrear caminhos e orientar-se em regiões desconhecidas."
    },

    {
        nome: "Tática",
        atributo: "INT",
        descricao: "Representa conhecimento estratégico e capacidade de planejar ações. É utilizada para organizar operações, analisar posições, coordenar equipes e elaborar estratégias durante confrontos."
    },

    {
        nome: "Tecnologia",
        atributo: "INT",
        descricao: "Representa conhecimentos sobre dispositivos eletrônicos, computadores, sistemas e equipamentos tecnológicos. Pode ser utilizada para operar aparelhos, compreender sistemas e solucionar problemas técnicos."
    },

    {
        nome: "Vontade",
        atributo: "PRE",
        descricao: "Representa determinação, estabilidade emocional e força mental. É utilizada para resistir a pressões psicológicas, manter a concentração e enfrentar situações que ameaçam a mente."
    }

];


/* ==========================================
   ELEMENTOS DO HTML
========================================== */

const listaOrigens = document.getElementById("listaOrigens");

const listaPericias = document.getElementById("listaPericias");

const pesquisaOrigem = document.getElementById("pesquisaOrigem");

const pesquisaPericia = document.getElementById("pesquisaPericia");

const contadorOrigens = document.getElementById("contadorOrigens");

const contadorPericias = document.getElementById("contadorPericias");


/* ==========================================
   NORMALIZAÇÃO DA PESQUISA
========================================== */

// Permite pesquisar sem precisar utilizar acentos
// ou diferenciar letras maiúsculas e minúsculas.

function normalizarTexto(texto) {

    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

}


/* ==========================================
   EXIBIR ORIGENS
========================================== */

function mostrarOrigens(filtro = "") {

    listaOrigens.innerHTML = "";

    const termo = normalizarTexto(filtro);

    const resultado = origens.filter(origem => {

        const conteudo = normalizarTexto(
            origem.nome + " " +
            origem.descricao + " " +
            origem.pericias + " " +
            origem.habilidade
        );

        return conteudo.includes(termo);

    });


    resultado.forEach(origem => {

        const card = document.createElement("article");

        card.className = "card origem-card";

        const titulo = document.createElement("h3");
        titulo.textContent = origem.nome;

        const descricao = document.createElement("p");
        descricao.textContent = origem.descricao;

        const pericias = document.createElement("p");

        const tituloPericias = document.createElement("strong");
        tituloPericias.textContent = "Perícias: ";

        pericias.appendChild(tituloPericias);
        pericias.append(origem.pericias);

        const habilidade = document.createElement("p");

        const tituloHabilidade = document.createElement("strong");
        tituloHabilidade.textContent = "Habilidade: ";

        habilidade.appendChild(tituloHabilidade);
        habilidade.append(origem.habilidade);

        card.append(
            titulo,
            descricao,
            pericias,
            habilidade
        );

        listaOrigens.appendChild(card);

    });


    contadorOrigens.textContent =
        `${resultado.length} de ${origens.length} origens encontradas`;


    if (resultado.length === 0) {

        listaOrigens.innerHTML = `
            <p class="mensagem-vazia">
                Nenhuma origem encontrada.
                Tente pesquisar outro termo.
            </p>
        `;

    }

}


/* ==========================================
   EXIBIR PERÍCIAS
========================================== */

function mostrarPericias(filtro = "") {

    listaPericias.innerHTML = "";

    const termo = normalizarTexto(filtro);

    const resultado = pericias.filter(pericia => {

        const conteudo = normalizarTexto(
            pericia.nome + " " +
            pericia.atributo + " " +
            pericia.descricao
        );

        return conteudo.includes(termo);

    });


    resultado.forEach(pericia => {

        const item = document.createElement("article");

        item.className = "pericia";

        const topo = document.createElement("div");

        topo.className = "pericia-topo";

        const nome = document.createElement("strong");

        nome.textContent = pericia.nome;

        const atributo = document.createElement("span");

        atributo.className = "atributo";

        atributo.textContent = pericia.atributo;

        const descricao = document.createElement("p");

        descricao.textContent = pericia.descricao;

        topo.append(nome, atributo);

        item.append(topo, descricao);

        listaPericias.appendChild(item);

    });


    contadorPericias.textContent =
        `${resultado.length} de ${pericias.length} perícias encontradas`;


    if (resultado.length === 0) {

        listaPericias.innerHTML = `
            <p class="mensagem-vazia">
                Nenhuma perícia encontrada.
                Tente pesquisar outro termo.
            </p>
        `;

    }

}


/* ==========================================
   EVENTOS DE PESQUISA
========================================== */

pesquisaOrigem.addEventListener("input", function() {

    mostrarOrigens(this.value);

});


pesquisaPericia.addEventListener("input", function() {

    mostrarPericias(this.value);

});


/* ==========================================
   INICIALIZAÇÃO
========================================== */

mostrarOrigens();

mostrarPericias();

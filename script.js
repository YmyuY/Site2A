
/* ========================================
   FUNÇÃO PARA NORMALIZAR PESQUISAS
======================================== */

function normalizarTexto(texto) {
    return String(texto)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

/* ========================================
   ORIGENS
======================================== */

const origens = [
    {
        nome: "Acadêmico",
        descricao: "Você dedicou boa parte da vida aos estudos, desenvolvendo conhecimentos teóricos e habilidades de pesquisa. Seu passado acadêmico pode ajudar a compreender fenômenos e solucionar problemas.",
        pericias: "Ciências e Investigação",
        habilidade: "Saber é Poder: representa sua formação e capacidade de utilizar conhecimentos acadêmicos."
    },
    {
        nome: "Agente de Saúde",
        descricao: "Você trabalhou ajudando pessoas em situações de emergência e vulnerabilidade. A experiência com cuidados e atendimento desenvolveu sua capacidade de lidar com situações delicadas.",
        pericias: "Intuição e Medicina",
        habilidade: "Técnico de Campo: representa sua experiência com cuidados e atendimento."
    },
    {
        nome: "Amnésico",
        descricao: "Você perdeu parte ou a totalidade de suas memórias. Seu passado é um mistério, e descobrir quem você realmente é pode ser tão importante quanto enfrentar o paranormal.",
        pericias: "Duas a sua escolha",
        habilidade: "Vislumbres do Passado: representa lembranças fragmentadas que podem surgir em momentos inesperados."
    },
    {
        nome: "Artista",
        descricao: "Você dedicou sua vida a alguma forma de expressão artística. Sua criatividade, sensibilidade e capacidade de interpretar situações fazem parte de sua identidade.",
        pericias: "Artes e Enganação",
        habilidade: "Magnum Opus: representa sua dedicação e talento artístico."
    },
    {
        nome: "Atleta",
        descricao: "Você treinou intensamente para alcançar excelência física em uma modalidade esportiva. Seu condicionamento e disciplina podem ser importantes em situações perigosas.",
        pericias: "Acrobacia e Atletismo",
        habilidade: "110%: representa sua dedicação ao treinamento físico."
    },
    {
        nome: "Chef",
        descricao: "Você trabalha ou trabalhou profissionalmente na cozinha. Desenvolveu disciplina, organização e habilidade para preparar alimentos e lidar com ambientes exigentes.",
        pericias: "Fortitude e Profissão",
        habilidade: "Ingrediente Secreto: representa seu conhecimento e experiência culinária."
    },
    {
        nome: "Criminoso",
        descricao: "Você viveu envolvido com atividades ilegais, aprendendo a lidar com situações arriscadas, escapar de problemas e agir fora das regras convencionais.",
        pericias: "Crime e Enganação",
        habilidade: "O Crime Compensa: representa sua experiência no submundo."
    },
    {
        nome: "Cultista Arrependido",
        descricao: "Você já fez parte de um grupo dedicado ao paranormal, mas abandonou essa vida. Seu passado pode trazer conhecimentos valiosos, embora também possa representar uma ameaça.",
        pericias: "Ocultismo e Religião",
        habilidade: "Traços do Outro Lado: representa conhecimentos adquiridos durante sua ligação anterior com o paranormal."
    },
    {
        nome: "Desgarrado",
        descricao: "Você passou boa parte da vida longe da sociedade, sobrevivendo em ambientes isolados e aprendendo a depender de si mesmo.",
        pericias: "Fortitude e Sobrevivência",
        habilidade: "Calejado: representa sua experiência em condições difíceis."
    },
    {
        nome: "Engenheiro",
        descricao: "Você possui formação ou experiência na criação, manutenção e compreensão de estruturas, máquinas e sistemas. Seu raciocínio técnico pode ser útil em investigações.",
        pericias: "Profissão e Tecnologia",
        habilidade: "Ferramenta Favorita: representa sua familiaridade com instrumentos e equipamentos técnicos."
    },
    {
        nome: "Executivo",
        descricao: "Você trabalhou em ambientes corporativos, desenvolvendo habilidades de liderança, negociação e administração. Está acostumado a lidar com decisões importantes.",
        pericias: "Diplomacia e Profissão",
        habilidade: "Processo Otimizado: representa sua capacidade de organizar recursos e atividades."
    },
    {
        nome: "Investigador",
        descricao: "Você dedicou sua vida a descobrir informações, reunir evidências e solucionar mistérios. Sua atenção aos detalhes pode fazer a diferença em uma missão.",
        pericias: "Investigação e Percepção",
        habilidade: "Faro para Pistas: representa sua experiência em encontrar e interpretar evidências."
    },
    {
        nome: "Lutador",
        descricao: "Você possui experiência em artes marciais, lutas ou confrontos físicos. Aprendeu a utilizar o próprio corpo como instrumento de defesa e ataque.",
        pericias: "Luta e Reflexos",
        habilidade: "Mão Pesada: representa sua experiência em confrontos corporais."
    },
    {
        nome: "Magnata",
        descricao: "Você acumulou riqueza, influência ou poder ao longo da vida. Está acostumado a ambientes de prestígio e a lidar com recursos e pessoas importantes.",
        pericias: "Diplomacia e Pilotagem",
        habilidade: "Patrocinador da Ordem: representa sua capacidade de utilizar recursos para auxiliar em missões."
    },
    {
        nome: "Mercenário",
        descricao: "Você trabalhou oferecendo seus serviços em troca de pagamento, frequentemente em situações perigosas. Aprendeu a lidar com ameaças e a cumprir objetivos sob pressão.",
        pericias: "Iniciativa e Intimidação",
        habilidade: "Posição de Combate: representa sua experiência em situações de confronto."
    },
    {
        nome: "Militar",
        descricao: "Você possui experiência em treinamento militar, disciplina e operações estratégicas. Aprendeu a trabalhar em equipe e agir sob pressão.",
        pericias: "Pontaria e Tática",
        habilidade: "Para Bellum: representa seu treinamento e conhecimento militar."
    },
    {
        nome: "Operário",
        descricao: "Você trabalhou em atividades que exigiam esforço físico, resistência e familiaridade com ferramentas e equipamentos. Está acostumado a ambientes de trabalho difíceis.",
        pericias: "Fortitude e Profissão",
        habilidade: "Ferramenta de Trabalho: representa sua experiência com instrumentos e atividades práticas."
    },
    {
        nome: "Policial",
        descricao: "Você atuou na aplicação da lei, lidando com ocorrências, investigações e situações de risco. Desenvolveu disciplina e capacidade de agir em emergências.",
        pericias: "Percepção e Pontaria",
        habilidade: "Patrulha: representa sua experiência em operações policiais."
    },
    {
        nome: "Religioso",
        descricao: "Você possui uma trajetória ligada à fé, espiritualidade e práticas religiosas. Sua experiência pode ajudar a compreender tradições e lidar com situações emocionalmente difíceis.",
        pericias: "Religião e Vontade",
        habilidade: "Acalentar: representa sua capacidade de oferecer apoio e orientação."
    },
    {
        nome: "Servidor Público",
        descricao: "Você trabalhou em instituições públicas, lidando com procedimentos, documentos e atendimento. Conhece o funcionamento de estruturas administrativas.",
        pericias: "Intuição e Profissão",
        habilidade: "Espírito Cívico: representa sua experiência com serviços e instituições públicas."
    },
    {
        nome: "Teórico da Conspiração",
        descricao: "Você sempre investigou acontecimentos misteriosos e teorias alternativas. Embora muitos desacreditem suas ideias, algumas de suas descobertas podem estar relacionadas ao paranormal.",
        pericias: "Investigação e Ocultismo",
        habilidade: "Eu Já Sabia: representa sua familiaridade com teorias e acontecimentos incomuns."
    },
    {
        nome: "T.I.",
        descricao: "Você trabalha ou trabalhou com tecnologia da informação, computadores e sistemas eletrônicos. Possui facilidade para compreender dispositivos e solucionar problemas técnicos.",
        pericias: "Investigação e Tecnologia",
        habilidade: "Motor de Busca: representa sua capacidade de encontrar informações utilizando tecnologia."
    },
    {
        nome: "Trabalhador Rural",
        descricao: "Você cresceu ou trabalhou no campo, desenvolvendo conhecimentos sobre a natureza, animais e atividades rurais. Está acostumado a ambientes afastados e condições difíceis.",
        pericias: "Adestramento e Sobrevivência",
        habilidade: "Desbravador: representa sua familiaridade com ambientes naturais."
    },
    {
        nome: "Trambiqueiro",
        descricao: "Você sobreviveu aplicando golpes, enganando pessoas e utilizando sua criatividade para escapar de situações complicadas.",
        pericias: "Enganação e Crime",
        habilidade: "Impostor: representa sua capacidade de assumir identidades e enganar outras pessoas."
    },
    {
        nome: "Universitário",
        descricao: "Você está cursando ou cursou o ensino superior, dedicando-se a uma área específica de conhecimento. Sua formação pode contribuir para a compreensão de diferentes assuntos.",
        pericias: "Atualidades e Investigação",
        habilidade: "Dedicação: representa seu esforço e dedicação aos estudos."
    },
    {
        nome: "Vítima",
        descricao: "Você sobreviveu a um acontecimento traumático ou inexplicável. Essa experiência mudou sua vida e pode ter despertado seu interesse pelos mistérios do paranormal.",
        pericias: "Reflexos e Vontade",
        habilidade: "Cicatrizes Psicológicas: representa as marcas deixadas por suas experiências."
    }
];

/* ========================================
   PERÍCIAS
======================================== */

const pericias = [
    {
        nome: "Acrobacia",
        atributo: "AGI",
        descricao: "Representa sua coordenação motora, equilíbrio e capacidade de realizar movimentos complexos. É utilizada para saltar, equilibrar-se e executar manobras."
    },
    {
        nome: "Adestramento",
        atributo: "PRE",
        descricao: "Representa sua capacidade de lidar com animais, treiná-los e compreender seus comportamentos. É utilizada para controlar, acalmar ou ensinar animais."
    },
    {
        nome: "Artes",
        atributo: "PRE",
        descricao: "Representa seu conhecimento e habilidade em atividades artísticas, como música, pintura, atuação e outras formas de expressão."
    },
    {
        nome: "Atletismo",
        atributo: "FOR",
        descricao: "Representa sua capacidade física para correr, saltar, escalar, nadar e realizar atividades que exigem força e resistência corporal."
    },
    {
        nome: "Atualidades",
        atributo: "INT",
        descricao: "Representa seu conhecimento sobre acontecimentos recentes, notícias, política, cultura e informações relevantes do mundo."
    },
    {
        nome: "Ciências",
        atributo: "INT",
        descricao: "Representa seu conhecimento científico e sua capacidade de compreender fenômenos naturais, realizar análises e interpretar informações técnicas."
    },
    {
        nome: "Crime",
        atributo: "AGI",
        descricao: "Representa sua habilidade em atividades criminosas, como abrir fechaduras, furtar objetos, desarmar mecanismos e realizar ações clandestinas."
    },
    {
        nome: "Diplomacia",
        atributo: "PRE",
        descricao: "Representa sua capacidade de negociar, convencer e resolver conflitos por meio da conversa. É utilizada para estabelecer acordos e influenciar pessoas."
    },
    {
        nome: "Enganação",
        atributo: "PRE",
        descricao: "Representa sua capacidade de mentir, disfarçar intenções e manipular informações para convencer outras pessoas de algo falso."
    },
    {
        nome: "Fortitude",
        atributo: "VIG",
        descricao: "Representa sua resistência física e capacidade de suportar condições adversas, como doenças, venenos, cansaço e outros efeitos prejudiciais."
    },
    {
        nome: "Furtividade",
        atributo: "AGI",
        descricao: "Representa sua capacidade de se movimentar silenciosamente e evitar ser percebido. É utilizada para se esconder e passar despercebido."
    },
    {
        nome: "Iniciativa",
        atributo: "AGI",
        descricao: "Representa sua velocidade de reação e capacidade de agir rapidamente diante de situações inesperadas, especialmente durante confrontos."
    },
    {
        nome: "Intimidação",
        atributo: "PRE",
        descricao: "Representa sua capacidade de ameaçar, pressionar ou assustar outras pessoas para conseguir informações ou influenciar suas decisões."
    },
    {
        nome: "Intuição",
        atributo: "PRE",
        descricao: "Representa sua capacidade de perceber intenções, interpretar comportamentos e identificar quando algo parece errado em determinada situação."
    },
    {
        nome: "Investigação",
        atributo: "INT",
        descricao: "Representa sua capacidade de procurar pistas, analisar evidências, examinar locais e conectar informações para solucionar mistérios."
    },
    {
        nome: "Luta",
        atributo: "FOR",
        descricao: "Representa sua capacidade de combater utilizando o próprio corpo ou armas de combate corpo a corpo, como socos, chutes e golpes."
    },
    {
        nome: "Medicina",
        atributo: "INT",
        descricao: "Representa seu conhecimento sobre o corpo humano, doenças, ferimentos e procedimentos de primeiros socorros e atendimento médico."
    },
    {
        nome: "Ocultismo",
        atributo: "INT",
        descricao: "Representa seu conhecimento sobre o paranormal, rituais, manifestações, entidades e fenômenos relacionados ao Outro Lado."
    },
    {
        nome: "Percepção",
        atributo: "PRE",
        descricao: "Representa sua capacidade de observar o ambiente e identificar detalhes, sons, movimentos e mudanças que poderiam passar despercebidos."
    },
    {
        nome: "Pilotagem",
        atributo: "AGI",
        descricao: "Representa sua habilidade para conduzir veículos e controlar diferentes meios de transporte em situações comuns ou perigosas."
    },
    {
        nome: "Pontaria",
        atributo: "AGI",
        descricao: "Representa sua precisão e capacidade de utilizar armas de ataque à distância, como armas de fogo, arcos e outros equipamentos."
    },
    {
        nome: "Profissão",
        atributo: "INT",
        descricao: "Representa seu conhecimento e experiência em uma atividade profissional específica, permitindo executar tarefas relacionadas à sua ocupação."
    },
    {
        nome: "Reflexos",
        atributo: "AGI",
        descricao: "Representa sua velocidade de reação e capacidade de responder rapidamente a perigos, esquivar-se e escapar de situações repentinas."
    },
    {
        nome: "Religião",
        atributo: "PRE",
        descricao: "Representa seu conhecimento sobre crenças, tradições religiosas, símbolos, rituais e práticas espirituais de diferentes culturas."
    },
    {
        nome: "Sobrevivência",
        atributo: "INT",
        descricao: "Representa seu conhecimento sobre técnicas de sobrevivência em ambientes naturais e hostis. Pode ser utilizada para encontrar abrigo, identificar recursos, rastrear caminhos e orientar-se em regiões desconhecidas."
    },
    {
        nome: "Tática",
        atributo: "INT",
        descricao: "Representa seu conhecimento estratégico e capacidade de planejar ações. É utilizada para organizar operações, analisar posições, coordenar equipes e elaborar estratégias durante confrontos."
    },
    {
        nome: "Tecnologia",
        atributo: "INT",
        descricao: "Representa seu conhecimento sobre dispositivos eletrônicos, computadores, sistemas e equipamentos tecnológicos. Pode ser utilizada para operar aparelhos, compreender sistemas e solucionar problemas técnicos."
    },
    {
        nome: "Vontade",
        atributo: "PRE",
        descricao: "Representa sua determinação, estabilidade emocional e força mental. É utilizada para resistir a pressões psicológicas, manter a concentração e enfrentar situações que ameaçam a mente."
    }
];

/* ========================================
   EXIBIR ORIGENS
======================================== */

function mostrarOrigens(filtro = "") {
    const listaOrigens = document.getElementById("listaOrigens");
    const contadorOrigens = document.getElementById("contadorOrigens");

    listaOrigens.innerHTML = "";

    const termo = normalizarTexto(filtro);

    const origensFiltradas = origens.filter(origem => {
        return (
            normalizarTexto(origem.nome).includes(termo) ||
            normalizarTexto(origem.descricao).includes(termo) ||
            normalizarTexto(origem.pericias).includes(termo) ||
            normalizarTexto(origem.habilidade).includes(termo)
        );
    });

    origensFiltradas.forEach(origem => {
        const card = document.createElement("article");
        card.className = "origem-card";

        const titulo = document.createElement("h3");
        titulo.textContent = origem.nome;

        const descricao = document.createElement("p");
        descricao.textContent = origem.descricao;

        const periciasTexto = document.createElement("p");
        const periciasTitulo = document.createElement("strong");
        periciasTitulo.textContent = "Perícias: ";
        periciasTexto.appendChild(periciasTitulo);
        periciasTexto.appendChild(document.createTextNode(origem.pericias));

        const habilidadeTexto = document.createElement("p");
        const habilidadeTitulo = document.createElement("strong");
        habilidadeTitulo.textContent = "Habilidade: ";
        habilidadeTexto.appendChild(habilidadeTitulo);
        habilidadeTexto.appendChild(document.createTextNode(origem.habilidade));

        card.appendChild(titulo);
        card.appendChild(descricao);
        card.appendChild(periciasTexto);
        card.appendChild(habilidadeTexto);

        listaOrigens.appendChild(card);
    });

    contadorOrigens.textContent =
        `${origensFiltradas.length} de ${origens.length} origens encontradas`;

    if (origensFiltradas.length === 0) {
        listaOrigens.innerHTML =
            '<p class="sem-resultados">Nenhuma origem encontrada.</p>';
    }
}

/* ========================================
   EXIBIR PERÍCIAS
======================================== */

function mostrarPericias(filtro = "") {
    const listaPericias = document.getElementById("listaPericias");
    const contadorPericias = document.getElementById("contadorPericias");

    listaPericias.innerHTML = "";

    const termo = normalizarTexto(filtro);

    const periciasFiltradas = pericias.filter(pericia => {
        return (
            normalizarTexto(pericia.nome).includes(termo) ||
            normalizarTexto(pericia.atributo).includes(termo) ||
            normalizarTexto(pericia.descricao).includes(termo)
        );
    });

    periciasFiltradas.forEach(pericia => {

        // Cria o card
        const item = document.createElement("article");
        item.className = "pericia";

        // Cria a linha superior
        const topo = document.createElement("div");
        topo.className = "pericia-topo";

        // Nome da perícia
        const nome = document.createElement("strong");
        nome.className = "pericia-nome";
        nome.textContent = pericia.nome;

        // Atributo correspondente
        const atributo = document.createElement("span");
        atributo.className = "pericia-atributo";
        atributo.textContent = pericia.atributo;

        // Descrição
        const descricao = document.createElement("p");
        descricao.className = "pericia-descricao";
        descricao.textContent = pericia.descricao;

        // Organiza os elementos
        topo.appendChild(nome);
        topo.appendChild(atributo);

        item.appendChild(topo);
        item.appendChild(descricao);

        listaPericias.appendChild(item);
    });

    // Atualiza o contador
    contadorPericias.textContent =
        `${periciasFiltradas.length} de ${pericias.length} perícias encontradas`;

    // Mensagem caso não existam resultados
    if (periciasFiltradas.length === 0) {
        listaPericias.innerHTML =
            '<p class="sem-resultados">Nenhuma perícia encontrada.</p>';
    }
}

/* ========================================
   EVENTOS DE PESQUISA
======================================== */

const campoOrigem = document.getElementById("pesquisaOrigem");
const campoPericia = document.getElementById("pesquisaPericia");

campoOrigem.addEventListener("input", function () {
    mostrarOrigens(this.value);
});

campoPericia.addEventListener("input", function () {
    mostrarPericias(this.value);
});

/* ========================================
   INICIALIZAÇÃO DO SITE
======================================== */

mostrarOrigens();
mostrarPericias();

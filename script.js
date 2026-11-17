
const origens = [
    {
        nome: "Acadêmico",
        descricao: "Pesquisador ou professor.",
        pericias: "Ciências e Investigação",
        habilidade: "Saber é Poder: gaste 2 PE para receber +5 em um teste baseado em Intelecto."
    },
    {
        nome: "Agente de Saúde",
        descricao: "Profissional da área da saúde.",
        pericias: "Intuição e Medicina",
        habilidade: "Técnica Medicinal: soma Intelecto aos PV recuperados ao curar alguém."
    },
    {
        nome: "Amnésico",
        descricao: "Pessoa que perdeu suas memórias.",
        pericias: "Duas perícias à escolha do mestre",
        habilidade: "Vislumbres do Passado: pode reconhecer informações relacionadas ao passado."
    },
    {
        nome: "Artista",
        descricao: "Pessoa ligada à arte e criatividade.",
        pericias: "Artes e Enganação",
        habilidade: "Magnum Opus: possui uma obra de destaque."
    },
    {
        nome: "Atleta",
        descricao: "Pessoa dedicada ao esporte.",
        pericias: "Acrobacia e Atletismo",
        habilidade: "110%: pode gastar PE para melhorar testes físicos."
    },
    {
        nome: "Chef",
        descricao: "Profissional da gastronomia.",
        pericias: "Fortitude e Profissão",
        habilidade: "Ingrediente Secreto: prepara uma refeição especial."
    },
    {
        nome: "Criminoso",
        descricao: "Pessoa envolvida com atividades ilícitas.",
        pericias: "Crime e Furtividade",
        habilidade: "O Crime Compensa: utiliza conhecimentos do submundo."
    },
    {
        nome: "Cultista Arrependido",
        descricao: "Ex-integrante de um culto paranormal.",
        pericias: "Ocultismo e Religião",
        habilidade: "Traços do Outro Lado: recebe um poder paranormal, mas começa com metade da Sanidade normal."
    },
    {
        nome: "Desgarrado",
        descricao: "Pessoa acostumada a viver isolada.",
        pericias: "Fortitude e Sobrevivência",
        habilidade: "Calejado: recebe PV adicionais conforme o NEX."
    },
    {
        nome: "Engenheiro",
        descricao: "Especialista em construção e tecnologia.",
        pericias: "Profissão e Tecnologia",
        habilidade: "Ferramenta Favorita: possui facilidade com uma ferramenta escolhida."
    },
    {
        nome: "Executivo",
        descricao: "Pessoa ligada à administração e negócios.",
        pericias: "Diplomacia e Profissão",
        habilidade: "Processo Otimizado: melhora testes relacionados a processos e documentos."
    },
    {
        nome: "Investigador",
        descricao: "Pessoa especializada em investigações.",
        pericias: "Investigação e Percepção",
        habilidade: "Faro para Pistas: recebe bônus para procurar pistas."
    },
    {
        nome: "Lutador",
        descricao: "Praticante de artes marciais.",
        pericias: "Luta e Reflexos",
        habilidade: "Mão Pesada: recebe bônus no dano corpo a corpo."
    },
    {
        nome: "Magnata",
        descricao: "Pessoa com grande patrimônio.",
        pericias: "Diplomacia e Pilotagem",
        habilidade: "Patrocinador da Ordem: possui limite de crédito maior."
    },
    {
        nome: "Mercenário",
        descricao: "Profissional de operações militares.",
        pericias: "Iniciativa e Intimidação",
        habilidade: "Posição de Combate: pode obter uma ação de movimento adicional."
    },
    {
        nome: "Militar",
        descricao: "Pessoa com treinamento militar.",
        pericias: "Pontaria e Tática",
        habilidade: "Para Bellum: recebe bônus de dano com armas de fogo."
    },
    {
        nome: "Operário",
        descricao: "Trabalhador de atividade prática e braçal.",
        pericias: "Fortitude e Profissão",
        habilidade: "Ferramenta de Trabalho: possui treinamento com uma ferramenta escolhida."
    },
    {
        nome: "Policial",
        descricao: "Profissional da segurança pública.",
        pericias: "Percepção e Pontaria",
        habilidade: "Patrulha: recebe bônus em Defesa."
    },
    {
        nome: "Religioso",
        descricao: "Pessoa ligada à religião e espiritualidade.",
        pericias: "Religião e Vontade",
        habilidade: "Acalentar: ajuda a recuperar a Sanidade de um alvo."
    },
    {
        nome: "Servidor Público",
        descricao: "Trabalhador de órgão governamental.",
        pericias: "Intuição e Vontade",
        habilidade: "Espírito Cívico: melhora o bônus concedido ao ajudar alguém."
    },
    {
        nome: "Teórico da Conspiração",
        descricao: "Pessoa que investiga teorias e conspirações.",
        pericias: "Investigação e Ocultismo",
        habilidade: "Eu Já Sabia: recebe resistência a dano mental."
    },
    {
        nome: "T.I.",
        descricao: "Profissional de tecnologia da informação.",
        pericias: "Investigação e Tecnologia",
        habilidade: "Motor de Busca: utiliza a internet para auxiliar investigações."
    },
    {
        nome: "Trabalhador Rural",
        descricao: "Pessoa acostumada à vida no campo.",
        pericias: "Adestramento e Sobrevivência",
        habilidade: "Desbravador: recebe benefícios em ambientes naturais."
    },
    {
        nome: "Trambiqueiro",
        descricao: "Pessoa especializada em golpes e enganações.",
        pericias: "Crime e Enganação",
        habilidade: "Impostor: pode utilizar Enganação no lugar de outra perícia em certas situações."
    },
    {
        nome: "Universitário",
        descricao: "Estudante que teve contato com o paranormal.",
        pericias: "Atualidades e Investigação",
        habilidade: "Dedicação: recebe benefícios relacionados aos Pontos de Esforço."
    },
    {
        nome: "Vítima",
        descricao: "Pessoa que sobreviveu a um encontro paranormal.",
        pericias: "Reflexos e Vontade",
        habilidade: "Cicatrizes Psicológicas: sua experiência ajuda a resistir a efeitos mentais."
    }
];

const pericias = [
    ["Acrobacia", "AGI"],
    ["Adestramento", "PRE"],
    ["Artes", "PRE"],
    ["Atletismo", "FOR"],
    ["Atualidades", "INT"],
    ["Ciências", "INT"],
    ["Crime", "AGI"],
    ["Diplomacia", "PRE"],
    ["Enganação", "PRE"],
    ["Fortitude", "VIG"],
    ["Furtividade", "AGI"],
    ["Iniciativa", "AGI"],
    ["Intimidação", "PRE"],
    ["Intuição", "PRE"],
    ["Investigação", "INT"],
    ["Luta", "FOR"],
    ["Medicina", "INT"],
    ["Ocultismo", "INT"],
    ["Percepção", "PRE"],
    ["Pilotagem", "AGI"],
    ["Pontaria", "AGI"],
    ["Profissão", "INT"],
    ["Reflexos", "AGI"],
    ["Religião", "PRE"],
    ["Sobrevivência", "INT"],
    ["Tática", "INT"],
    ["Tecnologia", "INT"],
    ["Vontade", "PRE"]
];

const listaOrigens = document.getElementById("listaOrigens");
const listaPericias = document.getElementById("listaPericias");

function mostrarOrigens(filtro = "") {
    listaOrigens.innerHTML = "";

    const resultado = origens.filter(origem =>
        (
            origem.nome + " " +
            origem.descricao + " " +
            origem.pericias + " " +
            origem.habilidade
        ).toLowerCase().includes(filtro.toLowerCase())
    );

    resultado.forEach(origem => {
        const card = document.createElement("article");
        card.className = "card";

        card.innerHTML = `
            <h3>${origem.nome}</h3>
            <p>${origem.descricao}</p>
            <p><strong>Perícias:</strong> ${origem.pericias}</p>
            <p><strong>Habilidade:</strong> ${origem.habilidade}</p>
        `;

        listaOrigens.appendChild(card);
    });

    if (resultado.length === 0) {
        listaOrigens.textContent = "Nenhuma origem encontrada.";
    }
}

function mostrarPericias(filtro = "") {
    listaPericias.innerHTML = "";

    const resultado = pericias.filter(pericia =>
        pericia[0].toLowerCase().includes(filtro.toLowerCase()) ||
        pericia[1].toLowerCase().includes(filtro.toLowerCase())
    );

    resultado.forEach(pericia => {
        const item = document.createElement("div");
        item.className = "pericia";

        item.innerHTML = `
            <strong>${pericia[0]}</strong>
            <span>${pericia[1]}</span>
        `;

        listaPericias.appendChild(item);
    });

    if (resultado.length === 0) {
        listaPericias.textContent = "Nenhuma perícia encontrada.";
    }
}

document.getElementById("pesquisaOrigem")
.addEventListener("input", function() {
    mostrarOrigens(this.value);
});

document.getElementById("pesquisaPericia")
.addEventListener("input", function() {
    mostrarPericias(this.value);
});

mostrarOrigens();
mostrarPericias();

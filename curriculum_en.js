// ========================================================
// POLYGLOT RPG - CURRÍCULO COMPLETO EM INGLÊS (30 AULAS)
// ========================================================

const curriculumEN = [
  // ========================================================
  // MÓDULO 1: FUNDAMENTOS CORPORATIVOS & ONBOARDING
  // ========================================================
  {
    id: 1,
    module: 1,
    title: "Apresentação Pessoal & Cargo",
    category: "Primeiros Passos",
    icon: "👋",
    pos: "pos-center",
    rewardItem: { icon: "🗡️", name: "Lâmina da Fala", slot: "Arma" },
    introGuide: {
      title: "Como se Apresentar com Confiança",
      objective: "Dizer quem você é e sua função sem traduzir palavra por palavra do português.",
      explanation: "Em inglês, ao falar sua profissão, você <strong>DEVE usar o artigo 'a' ou 'an'</strong> antes do cargo. Exemplo: <em>'I am a software developer'</em> (literalmente: 'Eu sou UM desenvolvedor'). Em português dizemos apenas 'Eu sou desenvolvedor', mas em inglês omitir o 'a' soa incompleto e incorreto.",
      goldenRule: "💡 Regra de Ouro: Cargo sempre leva 'a' ou 'an' (ex: a manager, an engineer, a lawyer).",
      keyVocab: [
        { target: "I am a...", native: "Eu sou um(a)... (para profissões)" },
        { target: "developer / engineer", native: "desenvolvedor(a) / engenheiro(a)" },
        { target: "glad to be here", native: "feliz em estar aqui" },
        { target: "role / position", native: "cargo / função" }
      ],
      corporateTip: "Em reuniões de boas-vindas, use sempre 'Glad to be here' ou 'Pleased to meet you' para soar formal e polido."
    },
    exercises: [
      {
        type: "word-order",
        prompt: "Monte a frase em inglês:",
        source: "Eu sou um desenvolvedor de software.",
        correct: ["I", "am", "a", "software", "developer"],
        pool: ["I", "am", "a", "software", "developer", "working", "with", "program"],
        explanation: "Em inglês, os adjetivos e qualificadores vêm antes: 'software developer', e nunca esqueça do artigo 'a'."
      },
      {
        type: "choice",
        prompt: "Como você diz educadamente que está feliz em estar na equipe?",
        options: [
          "I am glad to be here.",
          "I am here for working.",
          "I have doubt about team."
        ],
        correct: 0,
        explanation: "'I am glad to be here' é a expressão padrão corporativa para demonstrar entusiasmo genuíno."
      },
      {
        type: "speak",
        prompt: "Pronuncie em voz alta:",
        target: "I am pleased to join the company",
        trans: "Tenho o prazer de ingressar na empresa",
        explanation: "'Pleased to join' soa executivo e elegante em qualquer reunião de boas-vindas."
      }
    ]
  },
  {
    id: 2,
    module: 1,
    title: "Abertura & Condução de Reunião",
    category: "Comunicação",
    icon: "🎙️",
    pos: "pos-right",
    rewardItem: { icon: "🛡️", name: "Escudo do Alinhamento", slot: "Armadura" },
    introGuide: {
      title: "Iniciando Reuniões Pontualmente",
      objective: "Conduzir o início de reuniões com autoridade e naturalidade.",
      explanation: "Para começar reuniões, falantes nativos usam expressões polidas como <em>'Thank you all for joining'</em> (Obrigado a todos por comparecerem) e <em>'Let's get started'</em> (Vamos começar).",
      goldenRule: "💡 Regra de Ouro: Use 'Let's' (abreviação de 'Let us') para convidar o grupo à ação de forma cooperativa.",
      keyVocab: [
        { target: "get started", native: "começar / dar início" },
        { target: "agenda", native: "pauta da reunião" },
        { target: "joining", native: "participando / comparecendo" }
      ],
      corporateTip: "Nunca comece reuniões dizendo 'Can I start?'. Comece com firmeza: 'Good morning everyone, let's get started!'."
    },
    exercises: [
      {
        type: "word-order",
        prompt: "Monte a frase de início de reunião:",
        source: "Obrigado a todos por participarem hoje.",
        correct: ["Thank", "you", "all", "for", "joining", "today"],
        pool: ["Thank", "you", "all", "for", "joining", "today", "to", "come"],
        explanation: "A preposição 'for' exige o verbo com '-ing' depois: 'for joining'."
      },
      {
        type: "choice",
        prompt: "Como você diz 'Vamos dar início à pauta'?",
        options: [
          "Let's get started with the agenda.",
          "Make start now please.",
          "We open the paper today."
        ],
        correct: 0,
        explanation: "'Get started with the agenda' é a frase ideal utilizada por líderes em reuniões internacionais."
      }
    ]
  },
  {
    id: 3,
    module: 1,
    title: "E-mails Corporativos & Prazos",
    category: "Comunicação",
    icon: "📧",
    pos: "pos-left",
    rewardItem: { icon: "✉️", name: "Pergaminho do Remetente", slot: "Amuleto" },
    introGuide: {
      title: "Escrevendo E-mails Profissionais em Inglês",
      objective: "Solicitar ações, anexar arquivos e estipular prazos (deadlines) sem ser rude.",
      explanation: "Em e-mails internacionais, usamos <em>'Please find attached'</em> para indicar arquivos anexos e <em>'Please let me know'</em> para pedir retorno. Prazos são introduzidos pela preposição <strong>'by'</strong> (ex: <em>'by Friday'</em> significa 'até sexta-feira no mais tardar').",
      goldenRule: "💡 Preposição de prazo: Use 'by' para indicar prazo limite ('by tomorrow', 'by the end of the day').",
      keyVocab: [
        { target: "please find attached", native: "segue em anexo" },
        { target: "deadline", native: "prazo limite" },
        { target: "follow up", native: "acompanhar / dar seguimento" }
      ],
      corporateTip: "Evite escrever 'I want this fast'. Prefira 'Could you please provide this by tomorrow afternoon?'."
    },
    exercises: [
      {
        type: "word-order",
        prompt: "Monte a frase formal de e-mail:",
        source: "Por favor, veja em anexo o relatório solicitado.",
        correct: ["Please", "find", "attached", "the", "requested", "report"],
        pool: ["Please", "find", "attached", "the", "requested", "report", "with", "see"],
        explanation: "'Please find attached the requested report' é a saudação padrão de anexos no mundo corporativo."
      },
      {
        type: "choice",
        prompt: "Como você pede um retorno até sexta-feira com educação?",
        options: [
          "Please let me know your thoughts by Friday.",
          "Give me answer before weekend now.",
          "I need paper on friday mandatory."
        ],
        correct: 0,
        explanation: "'Please let me know your thoughts by Friday' combina firmeza de prazo com máxima elegância."
      }
    ]
  },
  {
    id: 4,
    module: 1,
    title: "Networking & Small Talk",
    category: "Comunicação",
    icon: "🤝",
    pos: "pos-right",
    rewardItem: { icon: "📿", name: "Amuleto da Conexão", slot: "Amuleto" },
    introGuide: {
      title: "Dominando o Small Talk em Eventos Globais",
      objective: "Quebrar o gelo antes de reuniões ou em conferências internacionais.",
      explanation: "O 'Small talk' (conversa fiada amigável) é indispensável para criar rapport. Nativos costumam perguntar sobre a viagem ou a conferência: <em>'How was your flight?'</em> ou <em>'How is your week going so far?'</em>.",
      goldenRule: "💡 Crie conexão antes de falar de negócios: 2 minutos de conversa amigável abrem portas para grandes contratos.",
      keyVocab: [
        { target: "small talk", native: "conversa informal inicial / quebra-gelo" },
        { target: "so far", native: "até agora" },
        { target: "how was your flight", native: "como foi seu voo / viagem?" }
      ],
      corporateTip: "Nunca fale de política ou religião no small talk corporativo. Foque em clima, eventos da indústria e viagens."
    },
    exercises: [
      {
        type: "word-order",
        prompt: "Pergunte como está a semana do seu colega:",
        source: "Como está sendo a sua semana até agora?",
        correct: ["How", "is", "your", "week", "going", "so", "far"],
        pool: ["How", "is", "your", "week", "going", "so", "far", "today", "doing"],
        explanation: "'How is your week going so far?' é uma das perguntas mais naturais e frequentes no ambiente internacional."
      },
      {
        type: "choice",
        prompt: "Como responder educadamente se perguntarem sobre o evento?",
        options: [
          "It has been a great conference so far, very insightful.",
          "I am tired and want go hotel.",
          "Boring speakers today."
        ],
        correct: 0,
        explanation: "'Very insightful' (com muitos aprendizados valiosos) demonstra interesse profissional elevado."
      }
    ]
  },
  {
    id: 5,
    module: 1,
    title: "Comunicação no Slack & Teams",
    category: "Comunicação",
    icon: "💬",
    pos: "pos-center",
    rewardItem: { icon: "⚡", name: "Faísca do Mensageiro", slot: "Arma" },
    introGuide: {
      title: "Comunicação Ágil no Slack e Teams",
      objective: "Comunicar-se de forma assíncrona, rápida e clara em canais corporativos.",
      explanation: "No Slack e Teams, as mensagens devem ser concisas. Use expressões como <em>'Just a heads-up'</em> (Apenas um aviso prévio), <em>'FYI'</em> (For Your Information) e <em>'I will keep you posted'</em> (Vou te mantendo atualizado).",
      goldenRule: "💡 Seja assíncrono: Envie o contexto completo na primeira mensagem em vez de apenas mandar 'Oi' e esperar a resposta.",
      keyVocab: [
        { target: "heads-up", native: "aviso / alerta prévio" },
        { target: "keep you posted", native: "manter você informado(a)" },
        { target: "ping me", native: "me chama / me manda uma mensagem" }
      ],
      corporateTip: "Evite o 'naked ping' (mandar apenas 'Hi John' e sumir). Mande 'Hi John, quick question about the budget...'."
    },
    exercises: [
      {
        type: "word-order",
        prompt: "Mande um aviso rápido no canal do time:",
        source: "Apenas um aviso de que a reunião foi remarcada.",
        correct: ["Just", "a", "heads-up", "that", "the", "meeting", "was", "rescheduled"],
        pool: ["Just", "a", "heads-up", "that", "the", "meeting", "was", "rescheduled", "cancel", "done"],
        explanation: "'Just a heads-up' é a expressão mais comum no Slack corporativo internacional."
      },
      {
        type: "choice",
        prompt: "Como avisar que você manterá o gerente informado do progresso?",
        options: [
          "I will keep you posted on the progress.",
          "I write letter to you later.",
          "Wait for my news today."
        ],
        correct: 0,
        explanation: "'I will keep you posted' transmite proatividade e responsabilidade."
      }
    ]
  },
  {
    id: 6,
    module: 1,
    isBoss: true,
    title: "BOSS 1: Dr. Victor Voss",
    category: "Prova de Módulo",
    icon: "👑",
    pos: "pos-center",
    bossData: {
      name: "Dr. Victor Voss (Recrutador Global)",
      avatar: "👔",
      hp: 100,
      introPhrase: "Let's see if your English can handle a high-stakes executive interview!",
      hurtPhrase: "Impressive answer... but let's see how you handle deadlines!",
      defeatPhrase: "You passed the global onboarding! Welcome to the executive team!"
    },
    rewardItem: { icon: "👔", name: "Gravata Dourada da Liderança", slot: "Amuleto" },
    introGuide: {
      title: "PROVA FINAL DO MÓDULO 1: O RECRUTADOR GLOBAL",
      objective: "Derrotar o Dr. Victor Voss respondendo perguntas cruciais de apresentação e liderança.",
      explanation: "Este é o primeiro CHEFE DE FASE. O Boss possui 100 de HP. Cada resposta correta causa dano ao Boss. Se você errar, o Boss contra-ataca e tira 1 coração seu! Vença a prova para receber um item lendário e avançar ao Módulo 2.",
      goldenRule: "⚔️ Atenção total à gramática formal e à postura corporativa!",
      keyVocab: [
        { target: "track record", native: "histórico profissional de sucesso" },
        { target: "strength", native: "ponto forte / virtude" }
      ],
      corporateTip: "Respire fundo e mantenha a calma. Você treinou para este momento!"
    },
    exercises: [
      {
        type: "word-order",
        prompt: "Responda à pergunta do Recrutador:",
        source: "Tenho cinco anos de experiência relevante.",
        correct: ["I", "have", "five", "years", "of", "relevant", "experience"],
        pool: ["I", "have", "five", "years", "of", "relevant", "experience", "working", "done"],
        explanation: "Expressão essencial: 'years of relevant experience' demonstra maturidade profissional."
      },
      {
        type: "choice",
        prompt: "O recrutador pergunta seus pontos fortes. Qual é a melhor resposta?",
        options: [
          "My main strength is problem solving and teamwork.",
          "I just need money and a job.",
          "I don't have mistakes in life."
        ],
        correct: 0,
        explanation: "'Problem solving and teamwork' é exatamente o que líderes e recrutadores buscam ouvir."
      },
      {
        type: "speak",
        prompt: "Diga a frase final com firmeza para vencer o Boss:",
        target: "I look forward to contributing to your team",
        trans: "Estou ansioso para contribuir com a sua equipe",
        explanation: "'Look forward to contributing' encerra entrevistas com chave de ouro!"
      }
    ]
  },

  // ========================================================
  // MÓDULO 2: MAGO DO CÓDIGO (TI, ENGENHARIA & DEVOPS)
  // ========================================================
  {
    id: 7,
    module: 2,
    title: "Daily Standup & Metodologia Ágil",
    category: "TI & Dev",
    icon: "☕",
    pos: "pos-center",
    rewardItem: { icon: "📜", name: "Manto do Scrum Master", slot: "Armadura" },
    introGuide: {
      title: "Como Fazer sua Daily em Inglês",
      objective: "Explicar o que fez ontem, o que fará hoje e se há algum bloqueio.",
      explanation: "A fórmula de ouro da Daily em inglês é:<br>1. <em>'Yesterday I worked on...'</em> (Ontem trabalhei em...)<br>2. <em>'Today I will focus on...'</em> (Hoje vou focar em...)<br>3. <em>'No blockers on my side'</em> (Sem impedimentos do meu lado).",
      goldenRule: "💡 Preposição: Trabalhar em algo é 'work ON', nunca 'work in' nesse contexto.",
      keyVocab: [
        { target: "blocker", native: "impedimento / travamento" },
        { target: "worked on", native: "trabalhou em..." },
        { target: "focus on", native: "focar em..." }
      ],
      corporateTip: "Dailies duram menos de 2 minutos. Seja direto: o que fez, o que fará e se precisa de ajuda."
    },
    exercises: [
      {
        type: "word-order",
        prompt: "Monte seu status da daily:",
        source: "Ontem eu trabalhei na autenticação de login.",
        correct: ["Yesterday", "I", "worked", "on", "the", "login", "authentication"],
        pool: ["Yesterday", "I", "worked", "on", "the", "login", "authentication", "in", "make"],
        explanation: "Lembre-se: 'worked ON the login authentication'."
      },
      {
        type: "choice",
        prompt: "Como você avisa que não tem nenhum impedimento?",
        options: [
          "I have no blockers on my side.",
          "I am not blocked by nothing.",
          "Stop everything now."
        ],
        correct: 0,
        explanation: "'I have no blockers on my side' é o padrão universal em times ágeis globais."
      }
    ]
  },
  {
    id: 8,
    module: 2,
    title: "Pull Requests & Code Review",
    category: "TI & Dev",
    icon: "🐛",
    pos: "pos-left",
    rewardItem: { icon: "🔮", name: "Orbe da Refatoração", slot: "Arma" },
    introGuide: {
      title: "Comunicação em Code Review & Bugs",
      objective: "Solicitar revisão de PR e reportar bugs em produção.",
      explanation: "Ao pedir review, usamos: <em>'Could you please review my PR?'</em>. E ao reportar bugs, usamos o verbo <em>'reproduce'</em> (reproduzir o erro): <em>'I was able to reproduce the bug'</em>.",
      goldenRule: "💡 Polidez técnica: Use 'Could you take a look?' em vez de ordens diretas como 'Look at this'.",
      keyVocab: [
        { target: "pull request", native: "solicitação de merge de código" },
        { target: "reproduce", native: "reproduzir o comportamento do bug" },
        { target: "deploy", native: "publicação em ambiente de teste/produção" }
      ],
      corporateTip: "Sempre mencione o link da issue e o impacto quando relatar um bug no Slack/Teams."
    },
    exercises: [
      {
        type: "word-order",
        prompt: "Peça revisão educadamente no Slack:",
        source: "Você poderia dar uma olhada no meu pull request?",
        correct: ["Could", "you", "please", "review", "my", "pull", "request"],
        pool: ["Could", "you", "please", "review", "my", "pull", "request", "see", "code"],
        explanation: "'Could you please review my pull request?' soa muito profissional e gentil com seus pares."
      },
      {
        type: "choice",
        prompt: "Como avisar que o bug já foi corrigido e testado?",
        options: [
          "The bug is fixed and tested in staging.",
          "Bug die in my machine.",
          "I make delete of the error."
        ],
        correct: 0,
        explanation: "'Fixed and tested in staging' informa status claro e tranquiliza o time."
      }
    ]
  },
  {
    id: 9,
    module: 2,
    title: "Arquitetura & Microsserviços",
    category: "TI & Dev",
    icon: "🏛️",
    pos: "pos-right",
    rewardItem: { icon: "💎", name: "Cristal da Escalabilidade", slot: "Amuleto" },
    introGuide: {
      title: "Discutindo Arquitetura de Software em Inglês",
      objective: "Debater escalabilidade, desacoplamento de serviços e latência.",
      explanation: "Em discussões técnicas de alto nível, os termos mais frequentes são: <em>'decouple services'</em> (desacoplar serviços), <em>'throughput'</em> (capacidade de processamento) e <em>'bottleneck'</em> (gargalo de performance).",
      goldenRule: "💡 Trade-offs: Todo engenheiro sênior fala sobre compromissos técnicos ('trade-offs between latency and cost').",
      keyVocab: [
        { target: "scalable", native: "escalável" },
        { target: "latency", native: "tempo de resposta / latência" },
        { target: "trade-off", native: "equilíbrio entre vantagens e desvantagens" }
      ],
      corporateTip: "Nunca diga 'My solution is perfect'. Diga 'This solution optimizes for read latency, but has higher memory footprint'."
    },
    exercises: [
      {
        type: "word-order",
        prompt: "Explique a vantagem da arquitetura:",
        source: "Essa arquitetura garante alta disponibilidade e baixa latência.",
        correct: ["This", "architecture", "ensures", "high", "availability", "and", "low", "latency"],
        pool: ["This", "architecture", "ensures", "high", "availability", "and", "low", "latency", "slow", "down"],
        explanation: "'High availability and low latency' é a meta de ouro de qualquer sistema distribuído moderno."
      },
      {
        type: "choice",
        prompt: "Como sugerir a separação de um monolito em serviços menores?",
        options: [
          "We should decouple this module into an independent service.",
          "Cut program in many pieces now.",
          "Monolith is garbage destroy it."
        ],
        correct: 0,
        explanation: "'Decouple into an independent service' soa cirúrgico e fundamentado."
      }
    ]
  },
  {
    id: 10,
    module: 2,
    title: "DevOps, CI/CD & Cloud",
    category: "TI & Dev",
    icon: "☁️",
    pos: "pos-center",
    rewardItem: { icon: "🛡️", name: "Escudo do Servidor Nuvem", slot: "Armadura" },
    introGuide: {
      title: "Pipelines, Containers e Deploy em Nuvem",
      objective: "Descrever esteiras de integração contínua (CI/CD) e infraestrutura na nuvem.",
      explanation: "Ao falar de infraestrutura, usamos termos como <em>'pipeline triggered'</em> (pipeline acionado), <em>'container registry'</em> e <em>'provisioning infrastructure'</em>.",
      goldenRule: "💡 'Automated testing': Destaque testes automatizados para aprovar deploys sem medo.",
      keyVocab: [
        { target: "pipeline", native: "esteira de automação CI/CD" },
        { target: "cloud provider", native: "provedor de nuvem (AWS/GCP/Azure)" },
        { target: "staging environment", native: "ambiente de homologação" }
      ],
      corporateTip: "Antes de subir em produção, garanta que o código foi validado no 'staging environment'."
    },
    exercises: [
      {
        type: "word-order",
        prompt: "Monte a frase de automação de testes:",
        source: "A esteira de integração contínua roda todos os testes automatizados.",
        correct: ["The", "CI", "pipeline", "runs", "all", "automated", "tests"],
        pool: ["The", "CI", "pipeline", "runs", "all", "automated", "tests", "makes", "code"],
        explanation: "'The CI pipeline runs all automated tests' é o fluxo essencial de DevOps."
      },
      {
        type: "choice",
        prompt: "Como reportar que a imagem Docker foi compilada com sucesso?",
        options: [
          "The Docker container image was built successfully.",
          "Image make finish good.",
          "Container is happy today."
        ],
        correct: 0,
        explanation: "'The Docker container image was built successfully' é a comunicação padrão de engenheiros DevOps."
      }
    ]
  },
  {
    id: 11,
    module: 2,
    title: "Estimativas & Prazos (Deadlines)",
    category: "TI & Dev",
    icon: "⏱️",
    pos: "pos-left",
    rewardItem: { icon: "⏳", name: "Ampulheta da Pontualidade", slot: "Acessório" },
    introGuide: {
      title: "Negociando Prazos e Estimativas em TI",
      objective: "Estimar tarefas e alertar riscos de atraso com antecedência sem criar atritos.",
      explanation: "Quando uma funcionalidade vai demorar mais que o previsto, avise cedo: <em>'Due to unexpected complexity, we might need two more days'</em>.",
      goldenRule: "💡 Under-promise and over-deliver: É muito melhor pedir 3 dias e entregar em 2 do que prometer 1 e atrasar.",
      keyVocab: [
        { target: "rough estimate", native: "estimativa aproximada" },
        { target: "scope creep", native: "aumento descontrolado do escopo" },
        { target: "deliverable", native: "entregável / funcionalidade a entregar" }
      ],
      corporateTip: "Use 'scope creep' quando o cliente ou PM começar a pedir coisas novas no meio da sprint."
    },
    exercises: [
      {
        type: "word-order",
        prompt: "Monte a estimativa realista para a sprint:",
        source: "Minha estimativa inicial é de três dias úteis.",
        correct: ["My", "rough", "estimate", "is", "three", "business", "days"],
        pool: ["My", "rough", "estimate", "is", "three", "business", "days", "hours", "done"],
        explanation: "'Three business days' (três dias úteis) deixa claro que finais de semana não contam."
      },
      {
        type: "choice",
        prompt: "Como alertar educadamente sobre aumento de escopo?",
        options: [
          "This additional feature might cause scope creep and delay the release.",
          "Do not ask more things you are annoying.",
          "Stop work because boss changed mind."
        ],
        correct: 0,
        explanation: "'Scope creep and delay the release' é o argumento técnico irrefutável contra acúmulo de tarefas."
      }
    ]
  },
  {
    id: 12,
    module: 2,
    title: "Post-Mortem & Causa Raiz (RCA)",
    category: "TI & Dev",
    icon: "📋",
    pos: "pos-right",
    rewardItem: { icon: "📘", name: "Grimório da Resiliência", slot: "Armadura" },
    introGuide: {
      title: "Como Escrever e Conduzir um Post-Mortem",
      objective: "Analisar incidentes graves com foco em aprendizado e prevenção futura (Blameless).",
      explanation: "Em empresas de tecnologia de elite (Google, Netflix, Amazon), os post-mortems são <em>'blameless'</em> (sem culpar pessoas). O foco é entender o que falhou no processo: <em>'Action items to prevent recurrence'</em>.",
      goldenRule: "💡 'Root Cause Analysis' (RCA): Descubra a causa raiz, nunca aponte dedos para o colega que fez o commit.",
      keyVocab: [
        { target: "blameless post-mortem", native: "análise pós-incidente sem culpados" },
        { target: "recurrence", native: "recorrência / reincidência do erro" },
        { target: "action items", native: "plano de ações preventivas" }
      ],
      corporateTip: "Use sempre a voz passiva: 'The configuration file was corrupted', não 'John broke the file'."
    },
    exercises: [
      {
        type: "word-order",
        prompt: "Monte a conclusão do post-mortem:",
        source: "Definimos itens de ação para prevenir a recorrência desse incidente.",
        correct: ["We", "defined", "action", "items", "to", "prevent", "recurrence"],
        pool: ["We", "defined", "action", "items", "to", "prevent", "recurrence", "stop", "bug"],
        explanation: "'Action items to prevent recurrence' é a frase definitiva que encerra qualquer post-mortem com nota 10."
      },
      {
        type: "choice",
        prompt: "Qual é o princípio fundamental de um post-mortem profissional?",
        options: [
          "We focus on fixing the system processes, not blaming individuals.",
          "We fire whoever wrote the bug.",
          "We hide the logs from management."
        ],
        correct: 0,
        explanation: "'Focus on fixing system processes, not blaming individuals' reflete a mais alta maturidade de engenharia."
      }
    ]
  },
  {
    id: 13,
    module: 2,
    isBoss: true,
    title: "BOSS 2: Bugzilla 404",
    category: "Prova de Módulo Tech",
    icon: "👾",
    pos: "pos-center",
    bossData: {
      name: "Bugzilla 404 (Tech Lead Severo)",
      avatar: "👾",
      hp: 100,
      introPhrase: "The production database is down! Defend your architecture!",
      hurtPhrase: "Good rollback strategy... but what about the database lock?!",
      defeatPhrase: "System restored! Zero downtime achieved. You are a Senior Dev!"
    },
    rewardItem: { icon: "⚡", name: "Cajado do Deploy Perfeito", slot: "Arma" },
    introGuide: {
      title: "PROVA FINAL DO MÓDULO 2: INCIDENTE EM PRODUÇÃO",
      objective: "Resolver um incidente crítico com o Tech Lead em tempo real.",
      explanation: "O servidor de produção caiu e o Tech Lead Severo (Bugzilla 404) está cobrando explicações em inglês técnico. Acerte as respostas para desferir ataques e restaurar a estabilidade do sistema!",
      goldenRule: "⚔️ Concentre-se em clareza técnica: logs, rollback e resolução de causa raiz.",
      keyVocab: [
        { target: "root cause", native: "causa raiz do problema" },
        { target: "rollback", native: "reversão da versão com falha" }
      ],
      corporateTip: "Em incidentes graves, nunca aponte culpados; foque na causa raiz ('root cause analysis')."
    },
    exercises: [
      {
        type: "word-order",
        prompt: "Explique a ação imediata tomada durante o incidente:",
        source: "Nós revertemos o deploy para a versão anterior.",
        correct: ["We", "rolled", "back", "the", "deploy", "to", "the", "previous", "version"],
        pool: ["We", "rolled", "back", "the", "deploy", "to", "the", "previous", "version", "down", "bug"],
        explanation: "'Roll back' (ou 'rolled back' no passado) é o termo exato da engenharia de software para reversão."
      },
      {
        type: "choice",
        prompt: "O Tech Lead pergunta a causa raiz. Qual a resposta mais técnica?",
        options: [
          "We identified a memory leak in the microservice.",
          "Computer got tired and stopped.",
          "Someone pushed bad things yesterday."
        ],
        correct: 0,
        explanation: "'Memory leak in the microservice' descreve o problema com precisão cirúrgica."
      },
      {
        type: "speak",
        prompt: "Comunique ao time a vitória contra o incidente:",
        target: "All services are up and running smoothly",
        trans: "Todos os serviços estão no ar e funcionando perfeitamente",
        explanation: "'Up and running smoothly' é a frase definitiva que acalma qualquer diretoria de TI!"
      }
    ]
  },

  // ========================================================
  // MÓDULO 3: GUERREIRO DAS VENDAS (B2B, PITCH & NEGOCIAÇÃO)
  // ========================================================
  {
    id: 14,
    module: 3,
    title: "Cold Outreach & Prospecção",
    category: "Vendas",
    icon: "🎯",
    pos: "pos-center",
    rewardItem: { icon: "🏹", name: "Arco da Prospecção Certeira", slot: "Arma" },
    introGuide: {
      title: "Como Fazer Prospecção Fria (Cold Outreach)",
      objective: "Abordar tomadores de decisão (C-Levels) sem soar invasivo ou genérico.",
      explanation: "No e-mail de prospecção fria, o segredo é a personalização rápida: <em>'I noticed your company is expanding...'</em> (Notei que sua empresa está expandindo). Nunca comece falando do seu produto na primeira frase.",
      goldenRule: "💡 WIIFM (What's In It For Me): O prospect só quer saber como você resolve um problema doloroso dele.",
      keyVocab: [
        { target: "prospect", native: "potencial cliente / lead qualificado" },
        { target: "outreach", native: "contato proativo de prospecção" },
        { target: "value proposition", native: "proposta de valor diferenciada" }
      ],
      corporateTip: "Mantenha o primeiro e-mail abaixo de 100 palavras. C-Levels leem pelo celular entre uma reunião e outra."
    },
    exercises: [
      {
        type: "word-order",
        prompt: "Abra a mensagem de prospecção com relevância:",
        source: "Notei que a sua empresa está expandindo globalmente.",
        correct: ["I", "noticed", "your", "company", "is", "expanding", "globally"],
        pool: ["I", "noticed", "your", "company", "is", "expanding", "globally", "selling", "much"],
        explanation: "'I noticed your company is expanding globally' mostra que você pesquisou antes de entrar em contato."
      },
      {
        type: "choice",
        prompt: "Qual é a melhor chamada para ação (Call to Action - CTA) em um cold email?",
        options: [
          "Would you be open to a brief 10-minute chat next Tuesday?",
          "Buy my software right now on this link.",
          "Why are you not answering my message?"
        ],
        correct: 0,
        explanation: "'Would you be open to a brief 10-minute chat?' pede pouco tempo e tem alta taxa de conversão."
      }
    ]
  },
  {
    id: 15,
    module: 3,
    title: "Discovery Call & Diagnóstico",
    category: "Vendas",
    icon: "📞",
    pos: "pos-left",
    rewardItem: { icon: "💍", name: "Anel da Persuasão", slot: "Acessório" },
    introGuide: {
      title: "Como Conduzir uma Discovery Call",
      objective: "Identificar as dores do cliente (pain points) antes de tentar vender.",
      explanation: "Em vendas B2B internacionais, nunca começamos falando do nosso produto. Começamos perguntando sobre os desafios do cliente: <em>'What are your main challenges today?'</em>.",
      goldenRule: "💡 Perguntas abertas: Use 'What' e 'How' para fazer o prospect falar 80% do tempo.",
      keyVocab: [
        { target: "pain points", native: "dores / problemas do cliente" },
        { target: "streamline", native: "otimizar / agilizar processos" },
        { target: "bottleneck", native: "gargalo operacional" }
      ],
      corporateTip: "Quem pergunta conduz a conversa. Descubra quanto dinheiro o cliente perde com o problema atual."
    },
    exercises: [
      {
        type: "word-order",
        prompt: "Faça a pergunta-chave de qualificação:",
        source: "Quais são os seus maiores desafios atualmente?",
        correct: ["What", "are", "your", "biggest", "challenges", "right", "now"],
        pool: ["What", "are", "your", "biggest", "challenges", "right", "now", "problem", "much"],
        explanation: "'What are your biggest challenges right now?' abre espaço para o cliente revelar suas dores."
      },
      {
        type: "choice",
        prompt: "Como explicar o retorno sobre investimento (ROI)?",
        options: [
          "Our solution will help reduce your operational costs.",
          "Buy now because price goes up.",
          "Give me money and I give software."
        ],
        correct: 0,
        explanation: "'Reduce operational costs' fala direto com a prioridade número 1 de qualquer CFO ou decisor."
      }
    ]
  },
  {
    id: 16,
    module: 3,
    title: "Apresentação de Demo & Proposta",
    category: "Vendas",
    icon: "📊",
    pos: "pos-right",
    rewardItem: { icon: "🛡️", name: "Broquel da Demonstração", slot: "Armadura" },
    introGuide: {
      title: "Como Fazer Demos que Vendem",
      objective: "Apresentar o produto conectando cada tela a um benefício financeiro ou de tempo.",
      explanation: "Demos fracas mostram botões; demos de elite mostram resultados. Use a frase mágica: <em>'What this means for your business is...'</em> (O que isso significa para a sua empresa é...).",
      goldenRule: "💡 Feature vs Benefit: Recursos dizem o que o produto faz; benefícios dizem quanto dinheiro o cliente economiza.",
      keyVocab: [
        { target: "seamless integration", native: "integração perfeita / sem atritos" },
        { target: "turnkey solution", native: "solução pronta para uso imediato" },
        { target: "efficiency gain", native: "ganho de eficiência" }
      ],
      corporateTip: "Nunca mostre todas as opções do sistema. Mostre apenas as 3 que resolvem a maior dor do cliente."
    },
    exercises: [
      {
        type: "word-order",
        prompt: "Conecte a funcionalidade ao ganho de negócio:",
        source: "Essa ferramenta vai economizar dez horas por semana da sua equipe.",
        correct: ["This", "tool", "will", "save", "your", "team", "ten", "hours", "weekly"],
        pool: ["This", "tool", "will", "save", "your", "team", "ten", "hours", "weekly", "slow", "cost"],
        explanation: "'Save your team ten hours weekly' quantifica o valor economizado com clareza cristalina."
      },
      {
        type: "choice",
        prompt: "Como destacar a facilidade de integração técnica?",
        options: [
          "Our platform integrates seamlessly with your existing tech stack.",
          "It connects with computer somehow.",
          "You must rewrite all code to use us."
        ],
        correct: 0,
        explanation: "'Integrates seamlessly with your existing tech stack' acalma qualquer receio do time de TI do cliente."
      }
    ]
  },
  {
    id: 17,
    module: 3,
    title: "Objeção: 'Está muito caro'",
    category: "Vendas",
    icon: "💰",
    pos: "pos-center",
    rewardItem: { icon: "💎", name: "Amuleto do Valor Supremo", slot: "Amuleto" },
    introGuide: {
      title: "Como Contornar Objeções de Preço",
      objective: "Defender o preço demonstrando o custo de não resolver o problema (Cost of Inaction).",
      explanation: "Quando o prospect diz <em>'It is too expensive'</em>, nunca dê desconto imediato. Responda com: <em>'Compared to what?'</em> e mostre o custo do desperdício atual: <em>'The cost of inaction is much higher'</em>.",
      goldenRule: "💡 Desconto sem concessão desvaloriza o produto. Se der desconto, peça algo em troca (ex: contrato anual ou estudo de caso).",
      keyVocab: [
        { target: "cost of inaction", native: "o custo de não fazer nada e manter o problema" },
        { target: "ROI (Return on Investment)", native: "retorno sobre o investimento" },
        { target: "budget constraint", native: "limitação orçamentária" }
      ],
      corporateTip: "Mude o foco do 'custo de compra' para o 'lucro gerado'."
    },
    exercises: [
      {
        type: "word-order",
        prompt: "Contorne a objeção de preço:",
        source: "O custo de não resolver o problema é muito maior.",
        correct: ["The", "cost", "of", "inaction", "is", "much", "higher"],
        pool: ["The", "cost", "of", "inaction", "is", "much", "higher", "cheap", "bad"],
        explanation: "'The cost of inaction is much higher' faz o cliente perceber o prejuízo invisível que tem todo dia."
      },
      {
        type: "choice",
        prompt: "O cliente diz que está acima do orçamento. Como responder?",
        options: [
          "I understand. Let's look at how quickly this solution pays for itself.",
          "Okay I give you 50% discount right now.",
          "Then you cannot afford our product, bye."
        ],
        correct: 0,
        explanation: "'Let's look at how quickly this solution pays for itself' redireciona a conversa para o payback do investimento."
      }
    ]
  },
  {
    id: 18,
    module: 3,
    title: "Fechamento de Vendas (Closing)",
    category: "Vendas",
    icon: "🖋️",
    pos: "pos-left",
    rewardItem: { icon: "🖊️", name: "Caneta de Ouro do Fechador", slot: "Arma" },
    introGuide: {
      title: "Técnicas de Fechamento de Vendas B2B",
      objective: "Fazer o pedido de fechamento sem parecer agressivo (Assumptive Close).",
      explanation: "Grandes vendedores não perguntam 'Você quer comprar?'. Eles perguntam sobre o próximo passo natural: <em>'What would be the best date to begin implementation?'</em> (Qual seria a melhor data para iniciarmos a implementação?).",
      goldenRule: "💡 'Silence after the close': Depois de fazer a pergunta de fechamento, CALA-SE. O primeiro que falar perde a vantagem na negociação.",
      keyVocab: [
        { target: "sign off", native: "aprovar e assinar formalmente" },
        { target: "procurement", native: "departamento de compras / suprimentos" },
        { target: "implementation kickoff", native: "reunião inicial de início do projeto" }
      ],
      corporateTip: "Pergunte sempre quem mais precisa assinar o contrato antes de enviar a minuta."
    },
    exercises: [
      {
        type: "word-order",
        prompt: "Faça o convite de fechamento formal:",
        source: "Podemos avançar com a assinatura do contrato hoje?",
        correct: ["Can", "we", "proceed", "with", "signing", "the", "contract", "today"],
        pool: ["Can", "we", "proceed", "with", "signing", "the", "contract", "today", "buy", "paper"],
        explanation: "'Can we proceed with signing the contract today?' é direto, respeitoso e decisivo."
      },
      {
        type: "choice",
        prompt: "Como mapear outros decisores antes da assinatura final?",
        options: [
          "Besides yourself, who else needs to be involved in the final sign-off?",
          "Are you the only boss or is there someone else?",
          "Do you have power to sign alone?"
        ],
        correct: 0,
        explanation: "'Besides yourself, who else needs to be involved in the final sign-off?' é a forma mais diplomática de mapear o comitê de compras."
      }
    ]
  },
  {
    id: 19,
    module: 3,
    title: "Upsell, Cross-Sell & Retenção",
    category: "Vendas",
    icon: "📈",
    pos: "pos-right",
    rewardItem: { icon: "👑", name: "Coroa do Key Account", slot: "Elmo" },
    introGuide: {
      title: "Expandindo Contas e Garantindo Retenção",
      objective: "Oferecer planos superiores (upsell) com base no sucesso atual do cliente.",
      explanation: "Vender para um cliente que já confia em você é 5 vezes mais fácil do que adquirir um novo. Apresente dados de uso: <em>'Since your team has achieved great results with plan A, moving to enterprise tier will unlock...'</em>.",
      goldenRule: "💡 Net Revenue Retention (NRR): O crescimento sustentável das empresas vem da expansão de clientes atuais.",
      keyVocab: [
        { target: "upsell", native: "migração para plano superior com mais capacidade" },
        { target: "churn rate", native: "taxa de cancelamento de clientes" },
        { target: "enterprise tier", native: "plano corporativo de grande porte" }
      ],
      corporateTip: "Faça reuniões trimestrais de revisão (QBR - Quarterly Business Review) para mostrar o valor gerado antes de propor o upsell."
    },
    exercises: [
      {
        type: "word-order",
        prompt: "Proponha o upgrade de plano:",
        source: "Atualizar para o plano corporativo vai desbloquear recursos avançados de segurança.",
        correct: ["Upgrading", "to", "enterprise", "will", "unlock", "advanced", "security", "features"],
        pool: ["Upgrading", "to", "enterprise", "will", "unlock", "advanced", "security", "features", "pay", "more"],
        explanation: "'Upgrading to enterprise will unlock advanced security features' justifica o valor do plano superior."
      },
      {
        type: "choice",
        prompt: "Como comemorar os resultados do cliente antes de falar de renovação?",
        options: [
          "We are thrilled to see your team exceed their goals this quarter.",
          "Give me more contract now please.",
          "You used too much our tool pay extra."
        ],
        correct: 0,
        explanation: "'We are thrilled to see your team exceed their goals' constrói parceria sólida."
      }
    ]
  },
  {
    id: 20,
    module: 3,
    isBoss: true,
    title: "BOSS 3: Lord Shark",
    category: "Prova Comercial",
    icon: "🦈",
    pos: "pos-center",
    bossData: {
      name: "Lord Shark (Investidor Cético)",
      avatar: "🦈",
      hp: 100,
      introPhrase: "You have 2 minutes. Why should I invest one million dollars in your deal?!",
      hurtPhrase: "That ROI metric makes sense... but your competitors are cheaper!",
      defeatPhrase: "Brilliant pitch! You closed the contract. Here is my signature!"
    },
    rewardItem: { icon: "💎", name: "Broche de Diamante do Fechador", slot: "Acessório" },
    introGuide: {
      title: "PROVA FINAL DO MÓDULO 3: O TUBARÃO DOS NEGÓCIOS",
      objective: "Vencer as objeções duras do investidor Lord Shark e fechar a venda.",
      explanation: "Lord Shark é implacável com números e custos. Ele vai tentar derrubar sua proposta dizendo que o preço é alto. Responda demonstrando valor e retorno sobre investimento!",
      goldenRule: "⚔️ Nunca dê descontos logo de cara. Justifique o valor gerado (value proposition).",
      keyVocab: [
        { target: "competitive advantage", native: "vantagem competitiva" },
        { target: "payback period", native: "tempo de retorno do investimento" }
      ],
      corporateTip: "Quando o cliente diz 'It's too expensive', responda: 'Compared to what? Let's look at the ROI'."
    },
    exercises: [
      {
        type: "word-order",
        prompt: "Contorne a objeção de preço com base em ROI:",
        source: "O retorno sobre investimento será alcançado em seis meses.",
        correct: ["The", "return", "on", "investment", "will", "be", "reached", "in", "six", "months"],
        pool: ["The", "return", "on", "investment", "will", "be", "reached", "in", "six", "months", "fast", "money"],
        explanation: "'Return on investment will be reached in six months' prova viabilidade financeira imediata."
      },
      {
        type: "choice",
        prompt: "Como conduzir o fechamento definitivo do contrato?",
        options: [
          "Shall we proceed with signing the agreement today?",
          "Do you buy or no?",
          "I wait until next year."
        ],
        correct: 0,
        explanation: "'Shall we proceed with signing the agreement today?' é o clássico 'assumptive close' dos grandes negociadores."
      },
      {
        type: "speak",
        prompt: "Diga a frase de vitória da negociação:",
        target: "We look forward to a successful long-term partnership",
        trans: "Esperamos uma parceria de longo prazo muito bem-sucedida",
        explanation: "Fecha o negócio consolidando uma parceria estratégica duradoura!"
      }
    ]
  },

  // ========================================================
  // MÓDULO 4: PALADINO DO DIREITO (CONTRATOS & COMPLIANCE)
  // ========================================================
  {
    id: 21,
    module: 4,
    title: "Contratos & NDAs",
    category: "Direito",
    icon: "⚖️",
    pos: "pos-center",
    rewardItem: { icon: "📜", name: "Pergaminho da Conformidade", slot: "Armadura" },
    introGuide: {
      title: "Linguagem Contratual & NDAs",
      objective: "Dominar o vocabulário formal de contratos e termos de confidencialidade.",
      explanation: "No inglês jurídico, usamos verbos como <em>'shall'</em> para expressar obrigações contratuais mandatórias (em vez de 'must' ou 'should'): <em>'Both parties shall maintain confidentiality'</em>.",
      goldenRule: "💡 'Shall' em contratos significa 'fica obrigado a cumprir'.",
      keyVocab: [
        { target: "parties", native: "as partes contratantes" },
        { target: "confidentiality", native: "confidencialidade / sigilo" },
        { target: "breach of contract", native: "quebra de contrato" }
      ],
      corporateTip: "Verifique sempre cláusulas de 'Jurisdiction' (foro de eleição) e 'Indemnification' (indenização)."
    },
    exercises: [
      {
        type: "word-order",
        prompt: "Monte a cláusula mandatória de NDA:",
        source: "Ambas as partes devem manter total confidencialidade.",
        correct: ["Both", "parties", "shall", "maintain", "strict", "confidentiality"],
        pool: ["Both", "parties", "shall", "maintain", "strict", "confidentiality", "must", "keep"],
        explanation: "No inglês jurídico, 'Both parties shall maintain strict confidentiality' é a fórmula padrão."
      },
      {
        type: "choice",
        prompt: "Como você expressa 'rescisão por quebra de contrato'?",
        options: [
          "Termination due to breach of contract.",
          "Ending because someone was bad.",
          "Breaking paper now."
        ],
        correct: 0,
        explanation: "'Termination due to breach of contract' é o termo técnico irrevogável."
      }
    ]
  },
  {
    id: 22,
    module: 4,
    title: "Contratos de Serviços (SOW & SLA)",
    category: "Direito",
    icon: "📄",
    pos: "pos-left",
    rewardItem: { icon: "🛡️", name: "Escudo do SLA Blindado", slot: "Armadura" },
    introGuide: {
      title: "Acordos de Nível de Serviço (SLA) & Escopo (SOW)",
      objective: "Definir prazos de entrega, marcos (milestones) e penalidades por descumprimento de SLA.",
      explanation: "Um <strong>SLA (Service Level Agreement)</strong> estipula garantias como 99.9% de uptime e tempo de resposta de suporte. Se descumprido, aplicam-se créditos de serviço (<em>'service credits'</em>).",
      goldenRule: "💡 Uptime e penalidades: Deixe claro no contrato o que acontece se o serviço ficar fora do ar.",
      keyVocab: [
        { target: "service level agreement (SLA)", native: "acordo de nível de serviço" },
        { target: "milestones", native: "marcos e etapas de entrega" },
        { target: "service credits", native: "créditos/descontos por falha de SLA" }
      ],
      corporateTip: "Defina claramente as exceções de SLA (ex: 'manutenção programada' não conta como indisponibilidade)."
    },
    exercises: [
      {
        type: "word-order",
        prompt: "Monte a garantia de disponibilidade:",
        source: "O fornecedor garante noventa e nove por cento de disponibilidade do serviço.",
        correct: ["The", "vendor", "guarantees", "ninety-nine", "percent", "service", "uptime"],
        pool: ["The", "vendor", "guarantees", "ninety-nine", "percent", "service", "uptime", "server", "good"],
        explanation: "'The vendor guarantees ninety-nine percent service uptime' é a redação clássica de SLAs."
      },
      {
        type: "choice",
        prompt: "Como definir o prazo de pagamento após o recebimento da fatura?",
        options: [
          "Invoices shall be paid within thirty days of receipt.",
          "Give money whenever you feel like it.",
          "Pay cash immediately on hand."
        ],
        correct: 0,
        explanation: "'Invoices shall be paid within thirty days of receipt' (Net 30) é a regra universal de faturamento B2B."
      }
    ]
  },
  {
    id: 23,
    module: 4,
    title: "Limitação de Responsabilidade & Indenização",
    category: "Direito",
    icon: "🛡️",
    pos: "pos-right",
    rewardItem: { icon: "⚔️", name: "Gládio da Imunidade Legal", slot: "Arma" },
    introGuide: {
      title: "Blindagem Jurídica: Liability & Indemnification",
      objective: "Limitar o risco financeiro da empresa contra danos indiretos e processos de terceiros.",
      explanation: "A cláusula mais disputada em qualquer contrato é a <em>'Limitation of Liability'</em> (Limitação de Responsabilidade). Ela estipula um teto (cap): <em>'In no event shall liability exceed the fees paid in the last 12 months'</em>.",
      goldenRule: "💡 Consequential damages: Sempre exclua expressamente danos indiretos, lucros cessantes e danos punitivos.",
      keyVocab: [
        { target: "limitation of liability", native: "limitação de responsabilidade civil" },
        { target: "indemnification", native: "indenização e defesa contra processos" },
        { target: "loss of profits", native: "lucros cessantes / perda de faturamento" }
      ],
      corporateTip: "Nunca assine um contrato com 'Unlimited Liability' (responsabilidade ilimitada)."
    },
    exercises: [
      {
        type: "word-order",
        prompt: "Redija a limitação contra lucros cessantes:",
        source: "Nenhuma das partes será responsável por lucros cessantes.",
        correct: ["Neither", "party", "shall", "be", "liable", "for", "loss", "of", "profits"],
        pool: ["Neither", "party", "shall", "be", "liable", "for", "loss", "of", "profits", "pay", "bad"],
        explanation: "'Neither party shall be liable for loss of profits' protege sua empresa de pedidos astronômicos de indenização."
      },
      {
        type: "choice",
        prompt: "Como estabelecer o teto máximo de responsabilidade financeira?",
        options: [
          "Total liability shall be capped at the total amount paid under this agreement.",
          "We pay infinite money if anything breaks.",
          "Zero responsibility for crimes."
        ],
        correct: 0,
        explanation: "'Capped at the total amount paid' é o padrão ouro de mercado para limitar riscos."
      }
    ]
  },
  {
    id: 24,
    module: 4,
    title: "Propriedade Intelectual (IP)",
    category: "Direito",
    icon: "💡",
    pos: "pos-center",
    rewardItem: { icon: "📜", name: "Patente de Ouro do Criador", slot: "Amuleto" },
    introGuide: {
      title: "Cessão de Propriedade Intelectual e Código-Fonte",
      objective: "Garantir a titularidade de software, patentes, marcas e segredos industriais.",
      explanation: "Em contratos de tecnologia, a cláusula de <strong>IP (Intellectual Property)</strong> define quem é o dono do código criado. Usa-se a expressão <em>'work made for hire'</em> (trabalho sob encomenda) ou cessão irrevogável de direitos.",
      goldenRule: "💡 'Retained IP': O desenvolvedor ou fornecedor deve resguardar suas ferramentas pré-existentes (pre-existing IP).",
      keyVocab: [
        { target: "intellectual property (IP)", native: "propriedade intelectual" },
        { target: "assign rights", native: "ceder / transferir direitos autorais" },
        { target: "trade secret", native: "segredo industrial / comercial" }
      ],
      corporateTip: "Se você cria software sob medida, certifique-se de que o cliente não exija direitos sobre as bibliotecas open-source que você usou."
    },
    exercises: [
      {
        type: "word-order",
        prompt: "Monte a cláusula de cessão de direitos autorais:",
        source: "Todos os direitos de propriedade intelectual pertencerão exclusivamente ao cliente.",
        correct: ["All", "intellectual", "property", "rights", "shall", "belong", "exclusively", "to", "the", "client"],
        pool: ["All", "intellectual", "property", "rights", "shall", "belong", "exclusively", "to", "the", "client", "mine", "code"],
        explanation: "'Shall belong exclusively to the client' estabelece a titularidade inequívoca da propriedade intelectual."
      },
      {
        type: "choice",
        prompt: "Como resguardar a propriedade intelectual que a sua empresa já possuía antes do contrato?",
        options: [
          "Each party retains ownership of its pre-existing intellectual property.",
          "Everything in the world is owned by client.",
          "Give all secrets to everyone."
        ],
        correct: 0,
        explanation: "'Retains ownership of its pre-existing IP' impede que o cliente tome posse das suas ferramentas internas."
      }
    ]
  },
  {
    id: 25,
    module: 4,
    title: "Privacidade de Dados & Compliance (GDPR)",
    category: "Direito",
    icon: "🔒",
    pos: "pos-left",
    rewardItem: { icon: "🛡️", name: "Muralha do DPO", slot: "Armadura" },
    introGuide: {
      title: "Privacidade de Dados, LGPD & GDPR",
      objective: "Compreender os termos de conformidade e tratamento de dados pessoais (DPA).",
      explanation: "O <strong>GDPR (na Europa)</strong> e a <strong>LGPD (no Brasil)</strong> exigem um Data Processing Agreement (DPA). As figuras principais são o <em>'Data Controller'</em> (Controlador) e o <em>'Data Processor'</em> (Operador).",
      goldenRule: "💡 'Data Breach': Se houver vazamento de dados, a notificação deve ser feita em prazo estrito (72 horas no GDPR).",
      keyVocab: [
        { target: "personally identifiable information (PII)", native: "dados pessoais sensíveis / identificáveis" },
        { target: "data breach", native: "vazamento / violação de dados" },
        { target: "compliance", native: "conformidade com leis e regulamentos" }
      ],
      corporateTip: "Sempre mencione que sua infraestrutura conta com criptografia em repouso e em trânsito (encryption at rest and in transit)."
    },
    exercises: [
      {
        type: "word-order",
        prompt: "Monte a cláusula de notificação de vazamento:",
        source: "O operador notificará o controlador sobre qualquer violação de dados.",
        correct: ["The", "processor", "shall", "notify", "the", "controller", "of", "any", "data", "breach"],
        pool: ["The", "processor", "shall", "notify", "the", "controller", "of", "any", "data", "breach", "leak", "hide"],
        explanation: "'Shall notify the controller of any data breach' é exigência mandatória da legislação internacional."
      },
      {
        type: "choice",
        prompt: "Como garantir a conformidade técnica com o GDPR?",
        options: [
          "Personal data shall be encrypted both in transit and at rest.",
          "Put all passwords in a public text file.",
          "Sell customer emails to marketing agencies."
        ],
        correct: 0,
        explanation: "'Encrypted both in transit and at rest' é a prova técnica número 1 em auditorias de segurança."
      }
    ]
  },
  {
    id: 26,
    module: 4,
    title: "Rescisão & Resolução de Disputas",
    category: "Direito",
    icon: "📑",
    pos: "pos-right",
    rewardItem: { icon: "👑", name: "Tiara da Arbitragem", slot: "Elmo" },
    introGuide: {
      title: "Rescisão de Contrato & Foro de Eleição",
      objective: "Definir como encerrar um contrato e qual tribunal resolverá qualquer conflito.",
      explanation: "Contratos corporativos prevêem duas rescisões:<br>1. <em>'Termination for Cause'</em> (por quebra grave de cláusula).<br>2. <em>'Termination for Convenience'</em> (sem culpa, com aviso prévio de 30 ou 60 dias).",
      goldenRule: "💡 'Arbitration clause': Em disputas internacionais, a arbitragem é mais rápida e confidencial que a justiça comum.",
      keyVocab: [
        { target: "written notice", native: "notificação formal por escrito" },
        { target: "cure period", native: "prazo para sanar a falha antes da rescisão (ex: 30 dias)" },
        { target: "arbitration tribunal", native: "tribunal arbitral" }
      ],
      corporateTip: "Sempre inclua um 'cure period' de 30 dias para ter a chance de corrigir qualquer eventual falha antes de levar um processo."
    },
    exercises: [
      {
        type: "word-order",
        prompt: "Monte a cláusula de rescisão com aviso prévio:",
        source: "Qualquer das partes pode rescindir com aviso prévio de trinta dias.",
        correct: ["Either", "party", "may", "terminate", "with", "thirty", "days", "written", "notice"],
        pool: ["Either", "party", "may", "terminate", "with", "thirty", "days", "written", "notice", "stop", "paper"],
        explanation: "'With thirty days written notice' (aviso prévio por escrito) é a regra pacífica de rescisão amigável."
      },
      {
        type: "choice",
        prompt: "Como definir a câmara de arbitragem para resolver conflitos internacionais?",
        options: [
          "Any dispute shall be settled by binding international arbitration.",
          "We fight in street if we disagree.",
          "Only my local judge decides everything."
        ],
        correct: 0,
        explanation: "'Binding international arbitration' vincula as partes à decisão irrecorrível de árbitros especializados."
      }
    ]
  },
  {
    id: 27,
    module: 4,
    isBoss: true,
    title: "BOSS 4: Justitia Lex",
    category: "Prova Jurídica",
    icon: "⚖️",
    pos: "pos-center",
    bossData: {
      name: "Justitia Lex (Árbitro Internacional)",
      avatar: "⚖️",
      hp: 100,
      introPhrase: "The arbitration tribunal is in session. Defend your legal compliance!",
      hurtPhrase: "Valid legal precedent! But how do you handle cross-border liability?!",
      defeatPhrase: "Case dismissed in your favor! You are a Master of Legal English!"
    },
    rewardItem: { icon: "👑", name: "Coroa da Jurisprudência Dourada", slot: "Elmo" },
    introGuide: {
      title: "PROVA FINAL DO MÓDULO 4: O TRIBUNAL INTERNACIONAL",
      objective: "Defender seu contrato e empresa perante a corte arbitral internacional.",
      explanation: "Este é o desafio supremo do Paladino da Lei. Justitia Lex julgará cada cláusula e responsabilidade civil. Acerte a redação jurídica para vencer o julgamento!",
      goldenRule: "⚔️ Precisão cirúrgica de termos: liability, compliance e governing law.",
      keyVocab: [
        { target: "governing law", native: "legislação aplicável ao contrato" },
        { target: "liability", native: "responsabilidade jurídica / passivo" }
      ],
      corporateTip: "Mencione sempre que as obrigações foram cumpridas em boa-fé ('good faith')."
    },
    exercises: [
      {
        type: "word-order",
        prompt: "Apresente o argumento de conformidade legal:",
        source: "Este acordo é regido pelas leis internacionais.",
        correct: ["This", "agreement", "is", "governed", "by", "international", "laws"],
        pool: ["This", "agreement", "is", "governed", "by", "international", "laws", "ruled", "under"],
        explanation: "'Is governed by' é a fórmula padrão utilizada em cláusulas de 'Governing Law'."
      },
      {
        type: "choice",
        prompt: "Como você afirma que não há responsabilidade indenizatória?",
        options: [
          "The company shall not be held liable for indirect damages.",
          "We have zero guilty about anything.",
          "Not my fault at all."
        ],
        correct: 0,
        explanation: "'Shall not be held liable for indirect damages' é a cláusula de limitação de responsabilidade."
      },
      {
        type: "speak",
        prompt: "Conclua a defesa perante a corte:",
        target: "All contractual obligations have been fulfilled in good faith",
        trans: "Todas as obrigações contratuais foram cumpridas de boa-fé",
        explanation: "'Fulfilled in good faith' encerra a sustentação oral com autoridade máxima!"
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.curriculumEN = curriculumEN;
}


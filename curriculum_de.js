// ========================================================
// POLYGLOT RPG - CURRÍCULO COMPLETO EM ALEMÃO (30 AULAS)
// ========================================================

const curriculumDE = [
  {
    "id": 1,
    "module": 1,
    "title": "Apresentação Pessoal & Cargo",
    "category": "Primeiros Passos",
    "icon": "👋",
    "pos": "pos-center",
    "rewardItem": {
      "icon": "🗡️",
      "name": "Lâmina da Fala Germânica",
      "slot": "Arma"
    },
    "introGuide": {
      "title": "Como se Apresentar em Alemão Corporativo",
      "objective": "Dizer seu nome, cargo e expressar satisfação em integrar a equipe.",
      "explanation": "Em alemão, ao falar sua profissão, você <strong>NÃO usa artigo indefinido</strong>! Diz-se diretamente: <em>'Ich bin Softwareentwickler'</em> (e NUNCA <s>'Ich bin ein Softwareentwickler'</s>). Essa é a primeira grande diferença em relação ao inglês e ao português.",
      "goldenRule": "💡 Regra de Ouro: Profissões em alemão não levam artigo ('Ich bin Projektleiter', 'Ich bin Jurist').",
      "keyVocab": [
        {
          "target": "Ich bin...",
          "native": "Eu sou... (direto com a profissão, sem artigo)"
        },
        {
          "target": "Softwareentwickler",
          "native": "desenvolvedor de software"
        },
        {
          "target": "Freut mich, Sie kennenzulernen",
          "native": "muito prazer em conhecê-lo(a) (formal)"
        },
        {
          "target": "Schön, im Team zu sein",
          "native": "bom estar na equipe"
        }
      ],
      "corporateTip": "No ambiente profissional alemão, use sempre o tratamento formal 'Sie' até que alguém explicitamente lhe ofereça o 'Du' (Duzen)."
    },
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Monte a frase de apresentação profissional:",
        "source": "Eu sou desenvolvedor de software e estou feliz em estar aqui.",
        "correct": [
          "Ich",
          "bin",
          "Softwareentwickler",
          "und",
          "freue",
          "mich",
          "hier",
          "zu",
          "sein"
        ],
        "pool": [
          "Ich",
          "bin",
          "Softwareentwickler",
          "und",
          "freue",
          "mich",
          "hier",
          "zu",
          "sein",
          "ein",
          "haben"
        ],
        "explanation": "Em alemão, 'Ich bin Softwareentwickler' não leva artigo 'ein', e 'freue mich hier zu sein' é a forma reflexiva correta."
      },
      {
        "type": "choice",
        "prompt": "Qual é a forma correta e formal de dizer seu cargo em alemão?",
        "options": [
          "Ich bin Projektleiter bei der Firma.",
          "Ich bin ein Projektleiter bei der Firma.",
          "Ich habe Projektleiter heute."
        ],
        "correct": 0,
        "explanation": "Em alemão profissional, omite-se o artigo indefinido ao indicar a própria profissão."
      },
      {
        "type": "speak",
        "prompt": "Pronuncie com postura executiva:",
        "target": "Guten Tag, freut mich sehr, Sie kennenzulernen",
        "trans": "Bom dia, é um grande prazer conhecê-lo(a)",
        "explanation": "Tratamento formal impecável para começar qualquer primeira conversa com clientes ou líderes alemães."
      }
    ]
  },
  {
    "id": 2,
    "module": 1,
    "title": "Abertura & Condução de Reunião",
    "category": "Comunicação",
    "icon": "🎙️",
    "pos": "pos-right",
    "rewardItem": {
      "icon": "🛡️",
      "name": "Escudo da Ordem Germânica",
      "slot": "Armadura"
    },
    "introGuide": {
      "title": "Pontualidade e Estrutura de Reunião (Meetings leiten)",
      "objective": "Abrir reuniões no horário e apresentar a pauta com firmeza.",
      "explanation": "No mundo corporativo alemão (DACH), a pontualidade é sagrada (Pünktlichkeit). Para começar uma reunião pontualmente, usamos <em>'Vielen Dank für Ihre Teilnahme'</em> (Muito obrigado pela presença) e <em>'Lassen Sie uns anfangen'</em> (Vamos começar).",
      "goldenRule": "💡 Regra de Ouro: 'Die Tagesordnung' é a palavra-chave para a pauta/agenda da reunião.",
      "keyVocab": [
        {
          "target": "Vielen Dank für Ihre Teilnahme",
          "native": "muito obrigado pela presença de todos"
        },
        {
          "target": "die Tagesordnung",
          "native": "a pauta da reunião (agenda)"
        },
        {
          "target": "Lassen Sie uns beginnen",
          "native": "vamos começar / dar início"
        }
      ],
      "corporateTip": "Nunca comece uma reunião alemã com atraso ou enrolação. Vá direto aos pontos da 'Tagesordnung'."
    },
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Monte a frase de início de reunião:",
        "source": "Vamos começar com o primeiro ponto da pauta.",
        "correct": [
          "Lassen",
          "Sie",
          "uns",
          "mit",
          "der",
          "Tagesordnung",
          "beginnen"
        ],
        "pool": [
          "Lassen",
          "Sie",
          "uns",
          "mit",
          "der",
          "Tagesordnung",
          "beginnen",
          "machen",
          "Start"
        ],
        "explanation": "'Lassen Sie uns mit der Tagesordnung beginnen' convida todos à ação de maneira formal e elegante."
      },
      {
        "type": "choice",
        "prompt": "Como você agradece formalmente a presença dos participantes?",
        "options": [
          "Vielen Dank für Ihre Teilnahme heute.",
          "Danke für kommen zusammen.",
          "Gut dass ihr da seid Leute."
        ],
        "correct": 0,
        "explanation": "'Vielen Dank für Ihre Teilnahme' é o padrão de excelência corporativo."
      },
      {
        "type": "speak",
        "prompt": "Pronuncie a abertura oficial da reunião:",
        "target": "Guten Morgen, wir beginnen pünktlich mit dem Meeting",
        "trans": "Bom dia, começamos pontualmente com a reunião",
        "explanation": "Pontualidade e clareza transmitem total credibilidade no ambiente DACH."
      }
    ]
  },
  {
    "id": 3,
    "module": 1,
    "title": "E-mails Corporativos & Prazos",
    "category": "Comunicação Escrita",
    "icon": "✉️",
    "pos": "pos-left",
    "rewardItem": {
      "icon": "📜",
      "name": "Pergaminho da Correspondência",
      "slot": "Arma"
    },
    "introGuide": {
      "title": "Redação de E-mails e Cumprimento de Prazos",
      "objective": "Escrever e-mails comerciais claros, formais e solicitar prazos com respeito.",
      "explanation": "E-mails formais em alemão começam com <em>'Sehr geehrte Damen und Herren'</em> (quando não sabe o nome) ou <em>'Sehr geehrte Frau Müller' / 'Sehr geehrter Herr Schmidt'</em>. Para prazos, a palavra essencial é <strong>die Frist</strong> (o prazo).",
      "goldenRule": "💡 Regra de Ouro: 'Sehr geehrter Herr...' (masculino com -er) e 'Sehr geehrte Frau...' (feminino com -e).",
      "keyVocab": [
        {
          "target": "Sehr geehrte(r)...",
          "native": "Prezado(a)... (abertura formal de e-mail)"
        },
        {
          "target": "die Frist",
          "native": "o prazo limite (deadline)"
        },
        {
          "target": "die Frist einhalten",
          "native": "cumprir o prazo estipulado"
        },
        {
          "target": "Mit freundlichen Grüßen",
          "native": "Atenciosamente (fechamento padrão)"
        }
      ],
      "corporateTip": "Termine sempre e-mails comerciais com 'Mit freundlichen Grüßen'. Nunca abrevie para 'MfG' em contextos formais."
    },
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Monte a frase de compromisso com o prazo:",
        "source": "Nós vamos cumprir o prazo com certeza.",
        "correct": [
          "Wir",
          "werden",
          "die",
          "Frist",
          "sicher",
          "einhalten"
        ],
        "pool": [
          "Wir",
          "werden",
          "die",
          "Frist",
          "sicher",
          "einhalten",
          "machen",
          "Zeit"
        ],
        "explanation": "Em alemão, no tempo futuro com 'werden', o verbo principal ('einhalten') vai para o final da frase."
      },
      {
        "type": "choice",
        "prompt": "Qual é o fechamento formal mais utilizado em e-mails executivos alemães?",
        "options": [
          "Mit freundlichen Grüßen",
          "Tschüss und bis bald",
          "Liebe Grüße von mir"
        ],
        "correct": 0,
        "explanation": "'Mit freundlichen Grüßen' é a despedida protocolar e indispensável nos negócios."
      },
      {
        "type": "speak",
        "prompt": "Pronuncie a solicitação de status do documento:",
        "target": "Könnten Sie mir bitte den Bericht bis morgen zusenden?",
        "trans": "Você poderia por favor me enviar o relatório até amanhã?",
        "explanation": "'Könnten Sie mir bitte... zusenden' usa o modo Konjunktiv II para máxima educação."
      }
    ]
  },
  {
    "id": 4,
    "module": 1,
    "title": "Networking & Small Talk",
    "category": "Relacionamento",
    "icon": "🤝",
    "pos": "pos-center",
    "rewardItem": {
      "icon": "💍",
      "name": "Anel do Networking Germânico",
      "slot": "Acessório"
    },
    "introGuide": {
      "title": "Small Talk Construtivo no Mercado Alemão",
      "objective": "Interagir em conferências, feiras e coffee breaks sem cometer gafes culturais.",
      "explanation": "Diferente de culturas latinas, executivos alemães são mais reservados e focam o small talk na viagem ('die Anreise'), na conferência ou no setor de mercado ('die Branche'). Evite perguntas pessoais sobre família ou finanças no primeiro contato.",
      "goldenRule": "💡 Regra de Ouro: 'Hatten Sie eine gute Anreise?' (Fez uma boa viagem?) é o melhor abridor de conversas.",
      "keyVocab": [
        {
          "target": "die Anreise",
          "native": "a viagem até o evento / trajeto"
        },
        {
          "target": "die Branche",
          "native": "o setor de mercado / indústria"
        },
        {
          "target": "die Visitenkarte",
          "native": "o cartão de visitas"
        }
      ],
      "corporateTip": "Ao receber um cartão de visitas, leia-o atentamente antes de guardar no bolso ou na pasta."
    },
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Monte a pergunta cordial de boas-vindas:",
        "source": "Você teve uma boa viagem até aqui?",
        "correct": [
          "Hatten",
          "Sie",
          "eine",
          "gute",
          "Anreise",
          "hierher"
        ],
        "pool": [
          "Hatten",
          "Sie",
          "eine",
          "gute",
          "Anreise",
          "hierher",
          "gemacht",
          "Auto"
        ],
        "explanation": "'Hatten Sie eine gute Anreise?' demonstra cortesia profissional sem ser invasivo."
      },
      {
        "type": "choice",
        "prompt": "Como você pergunta educadamente em qual setor a outra pessoa trabalha?",
        "options": [
          "In welcher Branche sind Sie tätig?",
          "Was machst du für Geld?",
          "Wo arbeitest du Mann?"
        ],
        "correct": 0,
        "explanation": "'In welcher Branche sind Sie tätig?' é a expressão elegante para 'Em qual setor você atua?'."
      },
      {
        "type": "speak",
        "prompt": "Ofereça seu contato profissional:",
        "target": "Hier ist meine Visitenkarte, lassen Sie uns in Kontakt bleiben",
        "trans": "Aqui está meu cartão de visitas, vamos manter contato",
        "explanation": "'Lassen Sie uns in Kontakt bleiben' estabelece a ponte perfeita para o pós-evento."
      }
    ]
  },
  {
    "id": 5,
    "module": 1,
    "title": "Comunicação no Slack & Teams",
    "category": "Comunicação Ágil",
    "icon": "💬",
    "pos": "pos-right",
    "rewardItem": {
      "icon": "🧤",
      "name": "Manopla da Sincronia",
      "slot": "Armadura"
    },
    "introGuide": {
      "title": "Comunicação Rápida em Chats Corporativos",
      "objective": "Mandar mensagens objetivas e alinhar tópicos sem gerar ruídos.",
      "explanation": "No chat profissional (Slack / Teams), os alemães valorizam clareza imediata. A expressão mais importante para propor um bate-papo rápido de alinhamento é <em>'kurz abstimmen'</em> (alinhar brevemente).",
      "goldenRule": "💡 Regra de Ouro: 'Bescheid geben' significa avisar / dar um retorno.",
      "keyVocab": [
        {
          "target": "sich abstimmen",
          "native": "alinhar-se / entrar em acordo"
        },
        {
          "target": "Bescheid geben",
          "native": "dar uma resposta / avisar"
        },
        {
          "target": "gleich wieder da",
          "native": "já volto (AFK - Be right back)"
        }
      ],
      "corporateTip": "Em vez de apenas mandar 'Oi', já envie a sua dúvida ou solicitação na mesma mensagem no Slack."
    },
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Monte o pedido de alinhamento rápido no chat:",
        "source": "Podemos nos alinhar rapidamente sobre isso?",
        "correct": [
          "Können",
          "wir",
          "uns",
          "dazu",
          "kurz",
          "abstimmen"
        ],
        "pool": [
          "Können",
          "wir",
          "uns",
          "dazu",
          "kurz",
          "abstimmen",
          "reden",
          "jetzt"
        ],
        "explanation": "'Sich kurz abstimmen' é o verbo indispensável no dia a dia corporativo para reuniões rápidas."
      },
      {
        "type": "choice",
        "prompt": "Como você avisa no Teams que dará um retorno logo mais?",
        "options": [
          "Ich gebe Ihnen gleich Bescheid.",
          "Ich rufe später Polizei.",
          "Ich weiß nicht was tun."
        ],
        "correct": 0,
        "explanation": "'Bescheid geben' é a expressão nativa consagrada para 'dar um retorno / avisar'."
      },
      {
        "type": "speak",
        "prompt": "Avisando a equipe no canal geral:",
        "target": "Ich bin für dreißig Minuten in der Mittagspause",
        "trans": "Estou em pausa de almoço por trinta minutos",
        "explanation": "Transparência de status mantém a equipe informada e o ritmo de trabalho fluido."
      }
    ]
  },
  {
    "id": 6,
    "module": 1,
    "isBoss": true,
    "title": "BOSS 1: Herr Klaus Richter",
    "category": "Chefe de Módulo",
    "icon": "👹",
    "pos": "pos-center",
    "bossData": {
      "name": "Herr Klaus Richter (Diretor de RH)",
      "avatar": "👨‍💼",
      "hp": 100,
      "introPhrase": "Guten Tag! Ich prüfe Ihre geschäftliche deutsche Kommunikation. Zeigen Sie mir, dass Sie bereit für den DACH-Markt sind!",
      "hurtPhrase": "Gutes Argument... aber reicht Ihre Präzision auch für verbindliche Deadlines?!",
      "defeatPhrase": "Ausgezeichnet! Ihre deutsche Etikette hat mich vollends überzeugt! Willkommen im DACH-Team!"
    },
    "rewardItem": {
      "icon": "👑",
      "name": "Elmo da Etiqueta Germânica",
      "slot": "Elmo"
    },
    "introGuide": {
      "title": "PROVA FINAL DO MÓDULO 1: O DIRETOR RIGOROSO",
      "objective": "Superar a sabatina do Diretor de RH alemão combinando pontualidade, formalidade e etiqueta corporativa.",
      "explanation": "Herr Klaus Richter avaliará se você domina a apresentação profissional, a abertura de reuniões e os compromissos de prazos. Cada resposta errada custa HP. Mantenha o foco!",
      "goldenRule": "⚔️ Atenção total: tratamento formal 'Sie', ausência de artigos em cargos e clareza absoluta.",
      "keyVocab": [
        {
          "target": "die Pünktlichkeit",
          "native": "a pontualidade estrita"
        },
        {
          "target": "die Zuverlässigkeit",
          "native": "a confiabilidade e solidez"
        }
      ],
      "corporateTip": "Responda com confiança e nunca use gírias desnecessárias na presença da diretoria."
    },
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Apresente-se com máxima formalidade ao Diretor:",
        "source": "É uma grande honra trabalhar com vocês.",
        "correct": [
          "Es",
          "ist",
          "mir",
          "eine",
          "große",
          "Ehre",
          "mit",
          "Ihnen",
          "zu",
          "arbeiten"
        ],
        "pool": [
          "Es",
          "ist",
          "mir",
          "eine",
          "große",
          "Ehre",
          "mit",
          "Ihnen",
          "zu",
          "arbeiten",
          "du",
          "sein"
        ],
        "explanation": "'Es ist mir eine große Ehre mit Ihnen zu arbeiten' demonstra deferência e respeito supremo."
      },
      {
        "type": "choice",
        "prompt": "O Diretor pergunta se você conseguirá entregar o projeto na data prevista. O que responder?",
        "options": [
          "Wir garantieren, dass wir die Frist zuverlässig einhalten werden.",
          "Vielleicht wenn wir Zeit haben morgen.",
          "Keine Ahnung, ich frage mein Team."
        ],
        "correct": 0,
        "explanation": "'Die Frist zuverlässig einhalten' é a garantia de entrega com seriedade germânica."
      },
      {
        "type": "speak",
        "prompt": "Diga a frase de conclusão com firmeza inabalável:",
        "target": "Vielen Dank für Ihr Vertrauen in unsere Kompetenz",
        "trans": "Muito obrigado por sua confiança em nossa competência",
        "explanation": "O golpe de misericórdia verbal que conquista o respeito eterno de Klaus Richter!"
      }
    ]
  },
  {
    "id": 7,
    "module": 2,
    "title": "Daily Standup & Metodologia Ágil",
    "category": "Metodologias Ágeis",
    "icon": "🧙‍♂️",
    "pos": "pos-center",
    "rewardItem": {
      "icon": "🪄",
      "name": "Cajado do Scrum Master",
      "slot": "Arma"
    },
    "introGuide": {
      "title": "Como Conduzir sua Daily Standup em Alemão",
      "objective": "Explicar o que você fez ontem, o que fará hoje e reportar impedimentos.",
      "explanation": "A estrutura de uma Daily em empresas de tecnologia na Alemanha e Suíça gira em torno dos três pilares ágeis: o que foi concluído (no pretérito perfeito: <em>'Gestern habe ich...'</em>), a tarefa atual (<em>'Heute arbeite ich an...'</em>) e os bloqueadores (<em>'Ich habe einen Blocker / Hindernis'</em>).",
      "goldenRule": "💡 Regra de Ouro: 'arbeiten an' exige caso Dativo: 'Ich arbeite an dem (am) Ticket'.",
      "keyVocab": [
        {
          "target": "Gestern habe ich... fertiggestellt",
          "native": "ontem eu concluí / finalizei..."
        },
        {
          "target": "Heute arbeite ich am...",
          "native": "hoje estou trabalhando no(a)..."
        },
        {
          "target": "der Blocker / das Hindernis",
          "native": "o impedimento / bloqueador técnico"
        }
      ],
      "corporateTip": "Mantenha seu relato com menos de 90 segundos. Se precisar de ajuda detalhada, diga: 'Lass uns das nach der Daily besprechen'."
    },
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Monte a atualização clássica da Daily:",
        "source": "Ontem eu corrigi o bug e hoje trabalho na nova funcionalidade.",
        "correct": [
          "Gestern",
          "habe",
          "ich",
          "den",
          "Bug",
          "behoben",
          "und",
          "heute",
          "arbeite",
          "ich",
          "am",
          "Feature"
        ],
        "pool": [
          "Gestern",
          "habe",
          "ich",
          "den",
          "Bug",
          "behoben",
          "und",
          "heute",
          "arbeite",
          "ich",
          "am",
          "Feature",
          "machen",
          "Code"
        ],
        "explanation": "'Gestern habe ich den Bug behoben' usa o particípio 'behoben' (corrigido) e 'am Feature' com Dativo."
      },
      {
        "type": "choice",
        "prompt": "Como você avisa na Daily que está travado por um erro de banco de dados?",
        "options": [
          "Ich habe einen Blocker wegen eines Datenbankfehlers.",
          "Ich habe keine Lust auf Code.",
          "Mein Computer schläft heute."
        ],
        "correct": 0,
        "explanation": "'Ich habe einen Blocker wegen...' é o jargão técnico padrão em equipes ágeis internacionais."
      },
      {
        "type": "speak",
        "prompt": "Pronuncie sua atualização de status sem impedimentos:",
        "target": "Alles läuft nach Plan und ich habe derzeit keine Blocker",
        "trans": "Tudo corre conforme o planejado e no momento não tenho impedimentos",
        "explanation": "Fluência e serenidade técnica que tranquilizam todo o time ágil."
      }
    ]
  },
  {
    "id": 8,
    "module": 2,
    "title": "Pull Requests & Code Review",
    "category": "Desenvolvimento",
    "icon": "🔍",
    "pos": "pos-left",
    "rewardItem": {
      "icon": "🔮",
      "name": "Orbe do Código Limpo",
      "slot": "Armadura"
    },
    "introGuide": {
      "title": "Revisão de Código Construtiva e Pull Requests",
      "objective": "Solicitar reviews no GitHub/GitLab e sugerir refatorações elegantes.",
      "explanation": "No Code Review, a etiqueta técnica alemã preconiza sugestões construtivas. Em vez de ordenar, usamos o Konjunktiv II: <em>'Könntest du bitte den PR reviewen?'</em> ou <em>'Meiner Meinung nach sollten wir diese Funktion refaktorisieren'</em>.",
      "goldenRule": "💡 Regra de Ouro: 'sollten wir' (deveríamos nós) torna a sugestão técnica colaborativa e profissional.",
      "keyVocab": [
        {
          "target": "den Pull Request reviewen",
          "native": "revisar o pull request"
        },
        {
          "target": "refaktorisieren",
          "native": "refatorar o código"
        },
        {
          "target": "der Merge-Konflikt",
          "native": "o conflito de mesclagem (merge conflict)"
        }
      ],
      "corporateTip": "Antes de pedir aprovação, verifique se todos os testes unitários (Unit-Tests) passaram com sucesso."
    },
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Peça gentilmente para um colega revisar seu código:",
        "source": "Você poderia por favor revisar meu Pull Request?",
        "correct": [
          "Könntest",
          "du",
          "bitte",
          "meinen",
          "Pull",
          "Request",
          "überprüfen"
        ],
        "pool": [
          "Könntest",
          "du",
          "bitte",
          "meinen",
          "Pull",
          "Request",
          "überprüfen",
          "gesehen",
          "Code"
        ],
        "explanation": "'Könntest du bitte... überprüfen' usa o acusativo masculino ('meinen PR')."
      },
      {
        "type": "choice",
        "prompt": "Como apontar educadamente que uma função está longa demais?",
        "options": [
          "Wir sollten diese Funktion in kleinere Module aufteilen.",
          "Dein Code ist sehr hässlich.",
          "Schmeiß das ganze Programm weg."
        ],
        "correct": 0,
        "explanation": "'In kleinere Module aufteilen' (dividir em módulos menores) é a crítica técnica perfeita."
      },
      {
        "type": "speak",
        "prompt": "Aprovando o PR com louvor:",
        "target": "Der Code sieht hervorragend aus, ich habe den PR freigegeben",
        "trans": "O código parece excelente, já aprovei o PR",
        "explanation": "'Freigegeben' (liberado/aprovado) encerra o ciclo de review no GitHub/GitLab."
      }
    ]
  },
  {
    "id": 9,
    "module": 2,
    "title": "Arquitetura & Microsserviços",
    "category": "Engenharia",
    "icon": "🏛️",
    "pos": "pos-right",
    "rewardItem": {
      "icon": "👘",
      "name": "Manto do Arquiteto de Sistemas",
      "slot": "Armadura"
    },
    "introGuide": {
      "title": "Decisões de Arquitetura e Microsserviços",
      "objective": "Discutir escalabilidade, desacoplamento e escolhas de design de software.",
      "explanation": "Arquitetura de software na Alemanha exige precisão terminológica. Palavras-chave como <em>'die Skalierbarkeit'</em> (escalabilidade), <em>'lose Kopplung'</em> (baixo acoplamento) e <em>'hohe Verfügbarkeit'</em> (alta disponibilidade) são vitais para defender soluções perante os Principal Engineers.",
      "goldenRule": "💡 Regra de Ouro: 'die Architektur' e substantivos terminados em '-keit' são sempre femininos ('die Skalierbarkeit').",
      "keyVocab": [
        {
          "target": "die Skalierbarkeit",
          "native": "a escalabilidade do sistema"
        },
        {
          "target": "die lose Kopplung",
          "native": "o baixo acoplamento entre serviços"
        },
        {
          "target": "die Datenbankabfrage optimieren",
          "native": "otimizar a consulta ao banco de dados"
        }
      ],
      "corporateTip": "Sempre justifique escolhas arquiteturais com base em métricas de latência e consumo de memória."
    },
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Defenda a separação em microsserviços:",
        "source": "Microsserviços garantem melhor escalabilidade e manutenibilidade.",
        "correct": [
          "Microservices",
          "gewährleisten",
          "eine",
          "bessere",
          "Skalierbarkeit",
          "und",
          "Wartbarkeit"
        ],
        "pool": [
          "Microservices",
          "gewährleisten",
          "eine",
          "bessere",
          "Skalierbarkeit",
          "und",
          "Wartbarkeit",
          "schlecht",
          "bauen"
        ],
        "explanation": "'Gewährleisten' é o verbo formal supremo para 'garantir/assegurar' requisitos técnicos."
      },
      {
        "type": "choice",
        "prompt": "Como você argumenta que uma requisição está sobrecarregando o banco de dados?",
        "options": [
          "Diese Abfrage verursacht einen Engpass in der Datenbank.",
          "Die Datenbank hat Hunger heute.",
          "Der Computer ist traurig."
        ],
        "correct": 0,
        "explanation": "'Der Engpass' significa 'gargalo' (bottleneck), conceito fundamental de engenharia de performance."
      },
      {
        "type": "speak",
        "prompt": "Explique a resiliência do sistema:",
        "target": "Unser System garantiert eine Hochverfügbarkeit von über 99 Prozent",
        "trans": "Nosso sistema garante uma alta disponibilidade superior a 99 por cento",
        "explanation": "Terminologia pura de engenharia de confiabilidade e arquitetura moderna."
      }
    ]
  },
  {
    "id": 10,
    "module": 2,
    "title": "DevOps, CI/CD & Cloud",
    "category": "Infraestrutura",
    "icon": "☁️",
    "pos": "pos-center",
    "rewardItem": {
      "icon": "💍",
      "name": "Anel da Infraestrutura Cloud",
      "slot": "Acessório"
    },
    "introGuide": {
      "title": "Pipelines, Deployments e Resposta a Falhas",
      "objective": "Gerenciar deploys em nuvem (AWS/Azure) e atuar prontamente em quebras de pipeline.",
      "explanation": "Em ambientes de Cloud e DevOps, quando algo dá errado na esteira, dizemos: <em>'Die Pipeline ist fehlgeschlagen'</em> (a pipeline falhou). Para reverter a versão com segurança, usamos <em>'einen Rollback durchführen'</em> (executar um rollback).",
      "goldenRule": "💡 Regra de Ouro: 'durchführen' (realizar/executar) é um verbo separável ('Wir führen einen Rollback durch').",
      "keyVocab": [
        {
          "target": "die Pipeline ist fehlgeschlagen",
          "native": "a pipeline quebrou / falhou"
        },
        {
          "target": "einen Rollback durchführen",
          "native": "fazer o rollback da versão anterior"
        },
        {
          "target": "die Produktionsumgebung",
          "native": "o ambiente de produção (Prod)"
        }
      ],
      "corporateTip": "Nunca faça deploy em produção na sexta-feira à tarde ('Kein Deployment am Freitagnachmittag')."
    },
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Monte a ordem de emergência do DevOps:",
        "source": "A pipeline falhou e precisamos fazer um rollback imediatamente.",
        "correct": [
          "Die",
          "Pipeline",
          "ist",
          "fehlgeschlagen",
          "und",
          "wir",
          "müssen",
          "sofort",
          "einen",
          "Rollback",
          "durchführen"
        ],
        "pool": [
          "Die",
          "Pipeline",
          "ist",
          "fehlgeschlagen",
          "und",
          "wir",
          "müssen",
          "sofort",
          "einen",
          "Rollback",
          "durchführen",
          "löschen",
          "Server"
        ],
        "explanation": "Na oração subordinada ou com modal, o infinitivo com prefixo inseparado 'durchführen' vai no fim."
      },
      {
        "type": "choice",
        "prompt": "Como você avisa que o novo release está rodando em produção?",
        "options": [
          "Das Release läuft erfolgreich in der Produktionsumgebung.",
          "Wir haben Code im Internet geworfen.",
          "Alles fertig auf Server ohne Fehler."
        ],
        "correct": 0,
        "explanation": "'Die Produktionsumgebung' é o termo técnico preciso para ambiente de produção."
      },
      {
        "type": "speak",
        "prompt": "Confirme a integridade dos contêineres:",
        "target": "Alle Kubernetes-Cluster laufen stabil und ohne Warnungen",
        "trans": "Todos os clusters de Kubernetes estão operando estáveis e sem alertas",
        "explanation": "Status de DevOps impecável, demonstrando domínio total da infraestrutura."
      }
    ]
  },
  {
    "id": 11,
    "module": 2,
    "title": "Estimativas & Prazos (Deadlines)",
    "category": "Gestão Ágil",
    "icon": "⏱️",
    "pos": "pos-left",
    "rewardItem": {
      "icon": "⏳",
      "name": "Ampulheta do Esforço Ágil",
      "slot": "Acessório"
    },
    "introGuide": {
      "title": "Como Negociar Estimativas de Esforço com o PO",
      "objective": "Defender estimativas realistas de Story Points e prevenir débitos técnicos.",
      "explanation": "Ao estimar tarefas de desenvolvimento, os alemães usam a palavra <em>'aufwendig'</em> (trabalhoso / complexo). Se o escopo for grande demais para o sprint, dizemos: <em>'Das ist technisch zu aufwendig für diesen Sprint'</em>.",
      "goldenRule": "💡 Regra de Ouro: 'der Aufwand' (o esforço/dispêndio) é o termo central para estimativas.",
      "keyVocab": [
        {
          "target": "der Aufwand",
          "native": "o esforço / custo em horas ou pontos"
        },
        {
          "target": "technisch aufwendig",
          "native": "tecnicamente complexo e trabalhoso"
        },
        {
          "target": "den Umfang reduzieren",
          "native": "reduzir o escopo da entrega"
        }
      ],
      "corporateTip": "Sempre acrescente uma margem de segurança para testes automatizados e edge cases."
    },
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Negocie o escopo com o Product Owner:",
        "source": "O esforço é muito alto, deveríamos reduzir o escopo.",
        "correct": [
          "Der",
          "Aufwand",
          "ist",
          "zu",
          "hoch",
          "wir",
          "sollten",
          "den",
          "Umfang",
          "reduzieren"
        ],
        "pool": [
          "Der",
          "Aufwand",
          "ist",
          "zu",
          "hoch",
          "wir",
          "sollten",
          "den",
          "Umfang",
          "reduzieren",
          "schnell",
          "Story"
        ],
        "explanation": "'Den Umfang reduzieren' (reduzir o escopo) e 'Der Aufwand ist zu hoch' compõem o diálogo ágil maduro."
      },
      {
        "type": "choice",
        "prompt": "Qual é a melhor resposta quando o prazo proposto é matematicamente inviável?",
        "options": [
          "Aus technischer Sicht ist diese Deadline leider nicht realistisch.",
          "Ich mache keine Überstunden für dich.",
          "Niemals im Leben ist das fertig."
        ],
        "correct": 0,
        "explanation": "'Aus technischer Sicht ist diese Deadline nicht realistisch' é profissional e incontestável."
      },
      {
        "type": "speak",
        "prompt": "Definindo a estimativa final do Sprint:",
        "target": "Wir schätzen diese Aufgabe auf fünf Story Points",
        "trans": "Nós estimamos esta tarefa em cinco Story Points",
        "explanation": "Comunicação objetiva de pontuação durante a reunião de Planning."
      }
    ]
  },
  {
    "id": 12,
    "module": 2,
    "title": "Post-Mortem & Causa Raiz (RCA)",
    "category": "Qualidade",
    "icon": "🔬",
    "pos": "pos-right",
    "rewardItem": {
      "icon": "📖",
      "name": "Tomo da Resiliência do Sistema",
      "slot": "Arma"
    },
    "introGuide": {
      "title": "Análise de Causa Raiz e Cultura Sem Culpa",
      "objective": "Escrever relatórios pós-incidente focando na correção de processos e estabilidade.",
      "explanation": "Na engenharia alemã, uma falha é oportunidade de melhoria contínua (Kontinuierliche Verbesserung). A expressão chave é <strong>die Ursachenanalyse</strong> (análise de causa raiz / RCA) e a definição de <em>'Präventivmaßnahmen'</em> (medidas preventivas).",
      "goldenRule": "💡 Regra de Ouro: 'die Ursache' significa a causa fundamental da falha.",
      "keyVocab": [
        {
          "target": "die Ursachenanalyse",
          "native": "a análise de causa raiz (Root Cause Analysis)"
        },
        {
          "target": "die Ausfallzeit",
          "native": "o tempo de inatividade / downtime"
        },
        {
          "target": "Präventivmaßnahmen ergreifen",
          "native": "tomar medidas preventivas definitivas"
        }
      ],
      "corporateTip": "Nunca aponte o dedo para pessoas no Post-Mortem. Foco total em bugs de sistema e processos."
    },
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Monte a conclusão do relatório de Post-Mortem:",
        "source": "Nós identificamos a causa raiz e tomamos medidas preventivas.",
        "correct": [
          "Wir",
          "haben",
          "die",
          "Hauptursache",
          "identifiziert",
          "und",
          "Präventivmaßnahmen",
          "ergriffen"
        ],
        "pool": [
          "Wir",
          "haben",
          "die",
          "Hauptursache",
          "identifiziert",
          "und",
          "Präventivmaßnahmen",
          "ergriffen",
          "jemand",
          "Schuld"
        ],
        "explanation": "'Maßnahmen ergreifen' (tomar medidas) no particípio 'ergriffen' é a forma culta correta."
      },
      {
        "type": "choice",
        "prompt": "Como você resume a razão do downtime sem culpar indivíduos?",
        "options": [
          "Ein Speicherleck führte zum Ausfall des Microservices.",
          "Der Junior-Entwickler hat alles kaputtgemacht.",
          "Ich war das nicht, keine Ahnung."
        ],
        "correct": 0,
        "explanation": "Apontar o fato técnico ('Ein Speicherleck' = memory leak) mantém a cultura blameless."
      },
      {
        "type": "speak",
        "prompt": "Garantindo a estabilidade futura aos diretores:",
        "target": "Automatisierte Tests werden zukünftige Regressionen verhindern",
        "trans": "Testes automatizados irão prevenir regressões futuras",
        "explanation": "Solução estruturada que encerra o incidente com total maturidade de engenharia."
      }
    ]
  },
  {
    "id": 13,
    "module": 2,
    "isBoss": true,
    "title": "BOSS 2: Der Serverabsturz & Tech Lead",
    "category": "Chefe de Módulo",
    "icon": "👾",
    "pos": "pos-center",
    "bossData": {
      "name": "Bugzilla 404 & Tech Lead Severo",
      "avatar": "🤖",
      "hp": 100,
      "introPhrase": "Alarm Stufe Rot! Die Server brennen, der Speicher läuft über und die Kunden protestieren! Was tust du, Mago do Código?!",
      "hurtPhrase": "Der Bug wackelt, aber die Datenbank schwankt noch immer! Zeig mir die Ursachenanalyse!",
      "defeatPhrase": "Hervorragende Reaktion! Der Fehler ist isoliert, der Rollback geglückt und die Systeme laufen stabil!"
    },
    "rewardItem": {
      "icon": "🪄",
      "name": "Varinha do Arcano Tech",
      "slot": "Arma"
    },
    "introGuide": {
      "title": "PROVA FINAL DO MÓDULO 2: APAGÃO EM PRODUÇÃO",
      "objective": "Salvar os servidores alemães de um colapso em cadeia utilizando comandos técnicos precisos em alemão.",
      "explanation": "O monstro dos bugs e o Tech Lead mais exigente de Berlim estão na sua tela. Acerte a sequência de diagnóstico, rollback e estabilização de microsserviços para zerar o HP do Boss!",
      "goldenRule": "⚔️ Concentração total: Rollback, Root Cause e isolamento de contêineres.",
      "keyVocab": [
        {
          "target": "der Systemausfall",
          "native": "a queda geral do sistema"
        },
        {
          "target": "die Wiederherstellung",
          "native": "a recuperação e restauração dos serviços"
        }
      ],
      "corporateTip": "Respire fundo, analise os logs e execute o procedimento padrão de recuperação."
    },
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordene o comando emergencial de restauração:",
        "source": "Isole o serviço com falha e inicie o rollback imediatamente.",
        "correct": [
          "Isolieren",
          "Sie",
          "den",
          "Dienst",
          "und",
          "starten",
          "Sie",
          "sofort",
          "den",
          "Rollback"
        ],
        "pool": [
          "Isolieren",
          "Sie",
          "den",
          "Dienst",
          "und",
          "starten",
          "Sie",
          "sofort",
          "den",
          "Rollback",
          "Feuer",
          "löschen"
        ],
        "explanation": "Modo imperativo formal com 'Sie': 'Isolieren Sie...' e 'Starten Sie...'."
      },
      {
        "type": "choice",
        "prompt": "Os clientes estão vendo tela de erro 500. Como comunicar à diretoria em alemão?",
        "options": [
          "Das Incident-Team arbeitet mit höchster Priorität an der Wiederherstellung.",
          "Es ist alles verloren, rennt um euer Leben.",
          "Warten wir bis Montag früh ab."
        ],
        "correct": 0,
        "explanation": "Comunicação de crise impecável: 'arbeitet mit höchster Priorität an der Wiederherstellung'."
      },
      {
        "type": "speak",
        "prompt": "Declare a vitória definitiva sobre o incidente:",
        "target": "Alle Dienste sind wieder online und die Latenz ist normal",
        "trans": "Todos os serviços estão online novamente e a latência está normal",
        "explanation": "O Boss é derrotado e os sistemas voltam à glória operacional!"
      }
    ]
  },
  {
    "id": 14,
    "module": 3,
    "title": "Cold Outreach & Prospecção",
    "category": "Prospecção B2B",
    "icon": "⚔️",
    "pos": "pos-center",
    "rewardItem": {
      "icon": "🗡️",
      "name": "Lança da Prospecção Afiada",
      "slot": "Arma"
    },
    "introGuide": {
      "title": "Como Prospectar Clientes Corporativos na Alemanha",
      "objective": "Abrir conversas B2B pelo LinkedIn e e-mail com executivos germânicos.",
      "explanation": "Prospecção na Alemanha (Kaltakquise) requer respeito extremo ao tempo do decisor e proposta de valor clara desde a primeira linha (<em>'Mehrwert'</em>). O objetivo nunca é vender de cara, mas conseguir um breve alinhamento de 15 minutos: <em>'Hätten Sie nächste Woche 15 Minuten Zeit für einen kurzen Austausch?'</em>.",
      "goldenRule": "💡 Regra de Ouro: 'der Mehrwert' (o valor agregado) é a palavra mágica para executivos alemães.",
      "keyVocab": [
        {
          "target": "der Mehrwert",
          "native": "o valor agregado / benefício tangível"
        },
        {
          "target": "der kurze Austausch",
          "native": "uma breve troca de ideias / conversa rápida"
        },
        {
          "target": "die Herausforderung",
          "native": "o desafio / dor do negócio"
        }
      ],
      "corporateTip": "Nunca use clichês vazios como 'sou o melhor do mercado'. Mostre números e casos de sucesso verificáveis."
    },
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Monte o convite perfeito de prospecção executiva:",
        "source": "Você teria quinze minutos para uma breve conversa na próxima semana?",
        "correct": [
          "Hätten",
          "Sie",
          "nächste",
          "Woche",
          "fünfzehn",
          "Minuten",
          "Zeit",
          "für",
          "einen",
          "Austausch"
        ],
        "pool": [
          "Hätten",
          "Sie",
          "nächste",
          "Woche",
          "fünfzehn",
          "Minuten",
          "Zeit",
          "für",
          "einen",
          "Austausch",
          "kaufen",
          "Geld"
        ],
        "explanation": "'Hätten Sie Zeit für einen Austausch?' usa o Konjunktiv II de máxima polidez."
      },
      {
        "type": "choice",
        "prompt": "Qual a melhor abertura para uma mensagem de prospecção via LinkedIn?",
        "options": [
          "Ich habe gesehen, dass Ihr Unternehmen im Bereich Cloud expandiert.",
          "Kaufen Sie mein Produkt sofort, es ist sehr billig.",
          "Hallo Kumpel, wie geht es dir denn so?"
        ],
        "correct": 0,
        "explanation": "Personalização baseada em fatos públicos do negócio gera taxa de resposta até 4x maior."
      },
      {
        "type": "speak",
        "prompt": "Proponha valor claro ao cliente:",
        "target": "Wir helfen Unternehmen dabei, operative Kosten signifikant zu senken",
        "trans": "Ajudamos empresas a reduzir custos operacionais de forma significativa",
        "explanation": "'Operative Kosten signifikant senken' é música para os ouvidos de qualquer CFO!"
      }
    ]
  },
  {
    "id": 15,
    "module": 3,
    "title": "Discovery Call & Diagnóstico",
    "category": "Qualificação",
    "icon": "🎯",
    "pos": "pos-right",
    "rewardItem": {
      "icon": "🛡️",
      "name": "Escudo do Diagnóstico B2B",
      "slot": "Armadura"
    },
    "introGuide": {
      "title": "Discovery Call: Perguntas que Revelam a Dor Real",
      "objective": "Conduzir a reunião de diagnóstico investigando processos, gargalos e orçamento.",
      "explanation": "Na reunião de descoberta (Bedarfsanalyse), o vendedor experiente escuta 80% do tempo e fala apenas 20%. Perguntas abertas como <em>'Welche Herausforderungen haben Sie aktuell?'</em> (Quais desafios vocês enfrentam atualmente?) revelam as reais prioridades do decisor.",
      "goldenRule": "💡 Regra de Ouro: 'die Bedarfsanalyse' é a análise profunda das reais necessidades do cliente.",
      "keyVocab": [
        {
          "target": "die Bedarfsanalyse",
          "native": "o diagnóstico de necessidades"
        },
        {
          "target": "der Engpass",
          "native": "o gargalo operacional"
        },
        {
          "target": "das Budget",
          "native": "o orçamento disponível"
        }
      ],
      "corporateTip": "Nunca apresente seu produto antes de o cliente ter expressado com clareza a dor que deseja solucionar."
    },
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Formule a pergunta crucial de diagnóstico:",
        "source": "Qual é o seu maior desafio no processo atual?",
        "correct": [
          "Was",
          "ist",
          "Ihre",
          "größte",
          "Herausforderung",
          "im",
          "aktuellen",
          "Prozess"
        ],
        "pool": [
          "Was",
          "ist",
          "Ihre",
          "größte",
          "Herausforderung",
          "im",
          "aktuellen",
          "Prozess",
          "Geld",
          "Problem"
        ],
        "explanation": "'Ihre größte Herausforderung' foca na principal dor do cliente corporativo."
      },
      {
        "type": "choice",
        "prompt": "Como você investiga o impacto financeiro da ineficiência atual?",
        "options": [
          "Welche finanziellen Auswirkungen hat dieser Engpass auf Ihr Quartal?",
          "Haben Sie überhaupt Geld für Software?",
          "Warum arbeiten Sie so langsam?"
        ],
        "correct": 0,
        "explanation": "'Welche finanziellen Auswirkungen hat dieser Engpass...' conecta a dor técnica diretamente ao faturamento."
      },
      {
        "type": "speak",
        "prompt": "Resuma o entendimento com autoridade:",
        "target": "Ich verstehe vollkommen, dass Effizienz für Sie oberste Priorität hat",
        "trans": "Compreendo perfeitamente que a eficiência é prioridade máxima para vocês",
        "explanation": "Empatia e alinhamento executivo constroem confiança inquebrável."
      }
    ]
  },
  {
    "id": 16,
    "module": 3,
    "title": "Apresentação de Demo & Proposta",
    "category": "Demonstração",
    "icon": "📊",
    "pos": "pos-left",
    "rewardItem": {
      "icon": "⚔️",
      "name": "Espada da Demonstração Comercial",
      "slot": "Arma"
    },
    "introGuide": {
      "title": "Demonstração de Alto Impacto e Proposta de Valor",
      "objective": "Demonstrar a solução conectando cada funcionalidade aos problemas do cliente.",
      "explanation": "Uma demo B2B na Alemanha não é um tour de botões; é uma demonstração de retorno sobre investimento (ROI). Use frases como: <em>'Hier sehen Sie, wie unsere Lösung Ihren Arbeitsaufwand halbiert'</em> (Aqui você vê como nossa solução corta seu esforço pela metade).",
      "goldenRule": "💡 Regra de Ouro: Foque na 'Effizienzsteigerung' (aumento de eficiência) e na facilidade de adoção.",
      "keyVocab": [
        {
          "target": "die Effizienzsteigerung",
          "native": "o ganho de eficiência operacional"
        },
        {
          "target": "die Rendite / der ROI",
          "native": "o retorno sobre o investimento"
        },
        {
          "target": "das maßgeschneiderte Angebot",
          "native": "a proposta comercial sob medida"
        }
      ],
      "corporateTip": "Mostre a tela final do resultado nos primeiros 5 minutos da apresentação para prender a atenção do board."
    },
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Apresente o benefício principal na tela de demonstração:",
        "source": "Nossa solução automatiza este fluxo de trabalho completamente.",
        "correct": [
          "Unsere",
          "Lösung",
          "automatisiert",
          "diesen",
          "Workflow",
          "vollständig"
        ],
        "pool": [
          "Unsere",
          "Lösung",
          "automatisiert",
          "diesen",
          "Workflow",
          "vollständig",
          "macht",
          "schnell"
        ],
        "explanation": "'Unsere Lösung automatisiert diesen Workflow vollständig' destaca o benefício tangível."
      },
      {
        "type": "choice",
        "prompt": "Como você introduz o envio da proposta comercial formal?",
        "options": [
          "Wir haben ein maßgeschneidertes Angebot für Sie ausgearbeitet.",
          "Hier ist ein Zettel mit dem Preis.",
          "Sagen Sie wie viel Sie zahlen wollen."
        ],
        "correct": 0,
        "explanation": "'Ein maßgeschneidertes Angebot' (proposta sob medida) valoriza o projeto do cliente."
      },
      {
        "type": "speak",
        "prompt": "Destaque a rápida amortização do investimento:",
        "target": "Die Investition amortisiert sich bereits innerhalb weniger Monate",
        "trans": "O investimento se amortiza já dentro de poucos meses",
        "explanation": "'Amortisiert sich' é o argumento definitivo para aprovação financeira pelo comitê."
      }
    ]
  },
  {
    "id": 17,
    "module": 3,
    "title": "Objeção: 'Está muito caro'",
    "category": "Negociação",
    "icon": "🛡️",
    "pos": "pos-center",
    "rewardItem": {
      "icon": "🛡️",
      "name": "Armadura da Persuasão",
      "slot": "Armadura"
    },
    "introGuide": {
      "title": "Como Superar a Objeção de Preço ('Zu teuer!')",
      "objective": "Reenquadrar custo como investimento de longo prazo e defender o valor da solução.",
      "explanation": "Quando um diretor alemão diz <em>'Das ist uns zu teuer'</em> (Isso está muito caro para nós), um negociador despreparado dá desconto. O Guerreiro das Vendas reenquadra o debate para o <strong>Custo Total de Propriedade (TCO)</strong> e para os custos ocultos de não agir (Cost of Inaction).",
      "goldenRule": "💡 Regra de Ouro: 'Qualität zahlt sich aus' (A qualidade se paga com o tempo).",
      "keyVocab": [
        {
          "target": "zu teuer",
          "native": "muito caro / acima do orçamento"
        },
        {
          "target": "die Gesamtkosten",
          "native": "os custos totais (TCO - Total Cost of Ownership)"
        },
        {
          "target": "die Einsparung",
          "native": "a economia financeira real gerada"
        }
      ],
      "corporateTip": "Nunca conceda desconto sem pedir uma contrapartida em troca (ex: contrato plurianual ou pagamento à vista)."
    },
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Reenquadre a discussão de preço para custo total:",
        "source": "Devemos considerar as economias de longo prazo.",
        "correct": [
          "Wir",
          "müssen",
          "die",
          "langfristigen",
          "Einsparungen",
          "berücksichtigen"
        ],
        "pool": [
          "Wir",
          "müssen",
          "die",
          "langfristigen",
          "Einsparungen",
          "berücksichtigen",
          "billig",
          "kaufen"
        ],
        "explanation": "'Die langfristigen Einsparungen berücksichtigen' leva a conversa para o retorno a longo prazo."
      },
      {
        "type": "choice",
        "prompt": "O cliente pede 30% de desconto imediato. Como negociar estrategicamente?",
        "options": [
          "Wir können über den Preis sprechen, wenn wir einen Mehrjahresvertrag vereinbaren.",
          "Okay, wir schenken Ihnen das Produkt fast.",
          "Nein, Sie sind geizig."
        ],
        "correct": 0,
        "explanation": "Condicionar o desconto a um contrato de longo prazo ('Mehrjahresvertrag') protege a margem da empresa."
      },
      {
        "type": "speak",
        "prompt": "Defenda a excelência técnica perante o comitê:",
        "target": "Deutsche Ingenieurskunst und Qualität zahlen sich langfristig immer aus",
        "trans": "Engenharia de precisão e qualidade sempre se pagam a longo prazo",
        "explanation": "Argumento de alto impacto que neutraliza hesitações sobre o valor do investimento."
      }
    ]
  },
  {
    "id": 18,
    "module": 3,
    "title": "Fechamento de Vendas (Closing)",
    "category": "Fechamento",
    "icon": "🖋️",
    "pos": "pos-right",
    "rewardItem": {
      "icon": "🧤",
      "name": "Manopla do Fechamento de Ouro",
      "slot": "Armadura"
    },
    "introGuide": {
      "title": "Técnicas de Fechamento B2B sem Pressionar",
      "objective": "Conduzir a assinatura do contrato com assertividade e elegância.",
      "explanation": "Executivos alemães detestam táticas agressivas de fechamento 'de vendedor'. O fechamento correto é um passo natural do alinhamento: <em>'Können wir den Vertrag so finalisieren?'</em> (Podemos finalizar o contrato desta forma?) e <em>'Wann können wir mit der Unterzeichnung rechnen?'</em>.",
      "goldenRule": "💡 Regra de Ouro: 'die Unterzeichnung' é a assinatura formal do contrato.",
      "keyVocab": [
        {
          "target": "den Vertrag finalisieren",
          "native": "finalizar os termos do contrato"
        },
        {
          "target": "die Unterzeichnung",
          "native": "a assinatura formal do documento"
        },
        {
          "target": "der Vertragsabschluss",
          "native": "o fechamento do negócio / contrato"
        }
      ],
      "corporateTip": "Envie a minuta do contrato acompanhada de um resumo executivo com os 3 pontos principais acordados."
    },
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Faça a pergunta de fechamento elegante:",
        "source": "Podemos enviar o contrato para assinatura agora?",
        "correct": [
          "Können",
          "wir",
          "den",
          "Vertrag",
          "zur",
          "Unterzeichnung",
          "weiterleiten"
        ],
        "pool": [
          "Können",
          "wir",
          "den",
          "Vertrag",
          "zur",
          "Unterzeichnung",
          "weiterleiten",
          "Papier",
          "Geld"
        ],
        "explanation": "'Den Vertrag zur Unterzeichnung weiterleiten' é a forma diplomática máxima de pedir a assinatura."
      },
      {
        "type": "choice",
        "prompt": "Como você pergunta educadamente qual o fluxo interno de aprovação do cliente?",
        "options": [
          "Wie sieht der interne Freigabeprozess in Ihrem Haus aus?",
          "Wer unterschreibt das Papier bei euch?",
          "Habt ihr überhaupt die Macht dazu?"
        ],
        "correct": 0,
        "explanation": "'Der interne Freigabeprozess in Ihrem Haus' mapeia todas as etapas até a vitória."
      },
      {
        "type": "speak",
        "prompt": "Celebre o início da parceria com o novo cliente:",
        "target": "Herzlich willkommen als Partner, wir freuen uns auf die Zusammenarbeit",
        "trans": "Sejam muito bem-vindos como parceiros, estamos felizes com a colaboração",
        "explanation": "Selando o acordo com calor profissional e respeito mútuo!"
      }
    ]
  },
  {
    "id": 19,
    "module": 3,
    "title": "Upsell, Cross-Sell & Retenção",
    "category": "Expansão de Contas",
    "icon": "📈",
    "pos": "pos-left",
    "rewardItem": {
      "icon": "🚩",
      "name": "Estandarte da Expansão Comercial",
      "slot": "Arma"
    },
    "introGuide": {
      "title": "Expansão de Contas Existentes e Fidelização",
      "objective": "Apresentar novos módulos, licenças adicionais e garantir renovações contratuais.",
      "explanation": "Vender para quem já confia na sua empresa custa 5x menos que adquirir novos clientes. Para propor expansão no mercado DACH, utilizamos o conceito de <em>'die Erweiterung'</em> (extensão / upgrade) e <em>'Lizenzen aufstocken'</em> (adicionar mais licenças à medida que a equipe cresce).",
      "goldenRule": "💡 Regra de Ouro: 'die Kundenbindung' é a retenção e fidelização duradoura do cliente.",
      "keyVocab": [
        {
          "target": "die Kundenbindung",
          "native": "a retenção / fidelização do cliente"
        },
        {
          "target": "Lizenzen aufstocken",
          "native": "aumentar / adicionar licenças de usuários"
        },
        {
          "target": "die Vertragsverlängerung",
          "native": "a renovação contratual periódica"
        }
      ],
      "corporateTip": "Realize reuniões de QBR (Quarterly Business Review) a cada 3 meses para comprovar o valor já entregue."
    },
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Proponha a expansão de licenças para as novas equipes:",
        "source": "Podemos facilmente adicionar licenças para suas novas equipes.",
        "correct": [
          "Wir",
          "können",
          "die",
          "Lizenzen",
          "für",
          "Ihre",
          "neuen",
          "Teams",
          "problemlos",
          "aufstocken"
        ],
        "pool": [
          "Wir",
          "können",
          "die",
          "Lizenzen",
          "für",
          "Ihre",
          "neuen",
          "Teams",
          "problemlos",
          "aufstocken",
          "billig",
          "geben"
        ],
        "explanation": "'Lizenzen aufstocken' é o verbo corporativo nativo para expandir o número de assentos."
      },
      {
        "type": "choice",
        "prompt": "Como você propõe uma reunião trimestral de alinhamento estratégico (QBR)?",
        "options": [
          "Lassen Sie uns die Ergebnisse des Quartals gemeinsam überprüfen.",
          "Wollen wir Kaffee trinken und nichts tun?",
          "Ihr müsst mehr Geld bei uns ausgeben."
        ],
        "correct": 0,
        "explanation": "'Die Ergebnisse gemeinsam überprüfen' foca nos resultados obtidos pela empresa cliente."
      },
      {
        "type": "speak",
        "prompt": "Agradecendo a lealdade na renovação anual:",
        "target": "Vielen Dank für Ihre kontinuierliche Partnerschaft und Treue",
        "trans": "Muito obrigado por sua contínua parceria e lealdade",
        "explanation": "Relacionamento de longo prazo consolidado com maestria germânica."
      }
    ]
  },
  {
    "id": 20,
    "module": 3,
    "isBoss": true,
    "title": "BOSS 3: Herr Dr. Weber",
    "category": "Chefe de Módulo",
    "icon": "🦈",
    "pos": "pos-center",
    "bossData": {
      "name": "Herr Dr. Weber (Diretor de Compras)",
      "avatar": "🧐",
      "hp": 100,
      "introPhrase": "Ihr Angebot ist 20 % über unserem Budget und die Konkurrenz bietet ähnliches! Warum zum Teufel sollte ich bei Ihnen unterschreiben?!",
      "hurtPhrase": "Ein starkes Argument bezüglich TCO... aber können wir die Zahlungsziele anpassen?!",
      "defeatPhrase": "Einverstanden! Ihre Argumente haben Hand und Fuß. Wir unterzeichnen den Rahmenvertrag!"
    },
    "rewardItem": {
      "icon": "👑",
      "name": "Coroa do Negociador Implacável",
      "slot": "Elmo"
    },
    "introGuide": {
      "title": "PROVA FINAL DO MÓDULO 3: O DIRETOR DE COMPRAS IMPLACÁVEL",
      "objective": "Vencer o confronto contra o temido Diretor de Suprimentos (Einkaufsleiter) e fechar o contrato.",
      "explanation": "Herr Dr. Weber é famoso no mercado por esmagar fornecedores e exigir descontos absurdos. Você precisará defender o ROI, justificar cada cláusula de valor e fechar o contrato sem sangrar a margem!",
      "goldenRule": "⚔️ Ataque com métricas de TCO e contrapropostas estratégicas de longo prazo.",
      "keyVocab": [
        {
          "target": "der Rahmenvertrag",
          "native": "o contrato-quadro / acordo corporativo master"
        },
        {
          "target": "Hand und Fuß haben",
          "native": "fazer todo sentido / ter sólida consistência (expressão idiomática alemã)"
        }
      ],
      "corporateTip": "Não se intimide com o tom severo. Os compradores alemães respeitam quem defende seu valor com fatos."
    },
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Desmonte o argumento da concorrência barata:",
        "source": "Nosso suporte exclusivo e estabilidade superam qualquer concorrente mais barato.",
        "correct": [
          "Unser",
          "Support",
          "und",
          "unsere",
          "Stabilität",
          "übertreffen",
          "jeden",
          "billigeren",
          "Wettbewerber"
        ],
        "pool": [
          "Unser",
          "Support",
          "und",
          "unsere",
          "Stabilität",
          "übertreffen",
          "jeden",
          "billigeren",
          "Wettbewerber",
          "haben",
          "schlecht"
        ],
        "explanation": "'Übertreffen' (superar/ultrapassar) com acusativo masculino ('jeden billigeren Wettbewerber')."
      },
      {
        "type": "choice",
        "prompt": "Weber exige 20% de corte agora ou cancelará o negócio. Qual sua resposta?",
        "options": [
          "Wenn wir das Zahlungsziel anpassen und drei Jahre vereinbaren, kommen wir zusammen.",
          "Ja sofort, bitte tun Sie uns nichts!",
          "Vergessen Sie es, Sie verstehen nichts von Business."
        ],
        "correct": 0,
        "explanation": "Trocar o prazo de pagamento e extensão para 3 anos protege o caixa e garante o cliente por anos."
      },
      {
        "type": "speak",
        "prompt": "Dê o golpe final na mesa de negociação:",
        "target": "Lassen Sie uns den Rahmenvertrag heute gemeinsam besiegeln",
        "trans": "Vamos selar juntos o contrato-quadro hoje",
        "explanation": "'Besiegeln' (selar/concluir o pacto) encerra a batalha com vitória retumbante do Guerreiro!"
      }
    ]
  },
  {
    "id": 21,
    "module": 4,
    "title": "Contratos & NDAs",
    "category": "Direito Contratual",
    "icon": "⚖️",
    "pos": "pos-center",
    "rewardItem": {
      "icon": "⚔️",
      "name": "Lâmina da Confidencialidade",
      "slot": "Arma"
    },
    "introGuide": {
      "title": "NDAs e Acordos de Confidencialidade (Vertraulichkeit)",
      "objective": "Compreender e redigir cláusulas de sigilo comercial e acordos bilaterais.",
      "explanation": "No direito empresarial germânico, um Acordo de Não-Divulgação (NDA) é chamado de <strong>Geheimhaltungsvereinbarung</strong>. A obrigação basilar é proteger <em>'vertrauliche Informationen'</em> (informações confidenciais) e definir o dever de sigilo: <em>'beide Parteien verpflichten sich zur Geheimhaltung'</em>.",
      "goldenRule": "💡 Regra de Ouro: 'sich verpflichten zu' exige Dativo: 'sich zur Geheimhaltung verpflichten'.",
      "keyVocab": [
        {
          "target": "die Geheimhaltungsvereinbarung",
          "native": "o acordo de confidencialidade (NDA)"
        },
        {
          "target": "vertrauliche Informationen",
          "native": "informações confidenciais e sigilosas"
        },
        {
          "target": "sich verpflichten zu...",
          "native": "comprometer-se a / obrigar-se juridicamente a..."
        }
      ],
      "corporateTip": "Sempre delimite claramente o que constitui informação confidencial e o prazo de vigência do sigilo."
    },
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Monte a cláusula fundamental do NDA:",
        "source": "Ambas as partes obrigam-se ao sigilo absoluto.",
        "correct": [
          "Beide",
          "Parteien",
          "verpflichten",
          "sich",
          "zur",
          "vollständigen",
          "Geheimhaltung"
        ],
        "pool": [
          "Beide",
          "Parteien",
          "verpflichten",
          "sich",
          "zur",
          "vollständigen",
          "Geheimhaltung",
          "machen",
          "reden"
        ],
        "explanation": "'Sich zur vollständigen Geheimhaltung verpflichten' é a fórmula jurídica exata."
      },
      {
        "type": "choice",
        "prompt": "Qual termo define formalmente o período de vigência de um termo de confidencialidade?",
        "options": [
          "Die Laufzeit der Geheimhaltungsvereinbarung beträgt fünf Jahre.",
          "Wir sprechen nicht für immer.",
          "Das Papier schläft nach einiger Zeit."
        ],
        "correct": 0,
        "explanation": "'Die Laufzeit... beträgt fünf Jahre' é o padrão de redação jurídica contratual."
      },
      {
        "type": "speak",
        "prompt": "Declare a assinatura do termo de sigilo:",
        "target": "Die Geheimhaltungsvereinbarung wurde von beiden Parteien unterzeichnet",
        "trans": "O acordo de confidencialidade foi assinado por ambas as partes",
        "explanation": "Segurança jurídica confirmada com o particípio 'unterzeichnet'."
      }
    ]
  },
  {
    "id": 22,
    "module": 4,
    "title": "Contratos de Serviços (SOW & SLA)",
    "category": "Prestação de Serviços",
    "icon": "📑",
    "pos": "pos-left",
    "rewardItem": {
      "icon": "🛡️",
      "name": "Escudo da Conformidade de SLA",
      "slot": "Armadura"
    },
    "introGuide": {
      "title": "Contratos de Prestação de Serviços e SLAs",
      "objective": "Definir níveis de serviço garantidos, obrigações do contratante e do prestador.",
      "explanation": "No direito germânico (BGB), distingue-se com precisão um contrato de prestação de serviços (<em>Dienstvertrag</em>) de uma empreitada de resultado (<em>Werkvertrag</em>). No mundo digital, o anexo de SLA garante a disponibilidade técnica (<em>die Verfügbarkeit</em>) sob pena de créditos contratuais.",
      "goldenRule": "💡 Regra de Ouro: 'die Leistungsbeschreibung' é o escopo técnico do trabalho (Statement of Work - SOW).",
      "keyVocab": [
        {
          "target": "die Leistungsbeschreibung",
          "native": "o descritivo de serviços a executar (SOW)"
        },
        {
          "target": "die Verfügbarkeit",
          "native": "o índice de disponibilidade do sistema (uptime)"
        },
        {
          "target": "der Auftragnehmer",
          "native": "o prestador de serviços / contratado"
        }
      ],
      "corporateTip": "Nunca prometa 100% de SLA sem ressalvar janelas de manutenção programada (Wartungsfenster)."
    },
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Monte a garantia de nível de serviço no contrato:",
        "source": "O prestador garante uma disponibilidade de noventa e nove por cento.",
        "correct": [
          "Der",
          "Auftragnehmer",
          "garantiert",
          "eine",
          "Verfügbarkeit",
          "von",
          "neunundneunzig",
          "Prozent"
        ],
        "pool": [
          "Der",
          "Auftragnehmer",
          "garantiert",
          "eine",
          "Verfügbarkeit",
          "von",
          "neunundneunzig",
          "Prozent",
          "immer",
          "Server"
        ],
        "explanation": "'Der Auftragnehmer garantiert...' estabelece a obrigação objetiva de desempenho."
      },
      {
        "type": "choice",
        "prompt": "Como você redige a cláusula sobre manutenções preventivas programadas?",
        "options": [
          "Geplante Wartungsarbeiten werden mindestens 48 Stunden im Voraus angekündigt.",
          "Wir schalten die Server ab wenn wir Lust haben.",
          "Keine Ahnung wann das System offline ist."
        ],
        "correct": 0,
        "explanation": "'Geplante Wartungsarbeiten im Voraus angekündigt' resguarda o prestador contra violação de SLA."
      },
      {
        "type": "speak",
        "prompt": "Afirme o cumprimento integral do escopo contratual:",
        "target": "Alle Leistungen wurden gemäß der Leistungsbeschreibung vollständig erbracht",
        "trans": "Todos os serviços foram integralmente prestados de acordo com o escopo",
        "explanation": "Chancela jurídica de cumprimento das obrigações pactuadas."
      }
    ]
  },
  {
    "id": 23,
    "module": 4,
    "title": "Limitação de Responsabilidade & Indenização",
    "category": "Gestão de Riscos",
    "icon": "🛡️",
    "pos": "pos-right",
    "rewardItem": {
      "icon": "🦺",
      "name": "Peitoral da Blindagem Jurídica",
      "slot": "Armadura"
    },
    "introGuide": {
      "title": "Cláusulas de Limitação de Responsabilidade (Haftung)",
      "objective": "Limitar a responsabilidade civil da empresa e blindar contra perdas indiretas.",
      "explanation": "A cláusula mais sensível de qualquer contrato internacional é a <strong>Haftungsbeschränkung</strong> (limitação de responsabilidade). É padrão excluir responsabilidade por lucros cessantes (<em>entgangener Gewinn</em>) e fixar um teto de indenização (<em>Haftungsobergrenze</em>).",
      "goldenRule": "💡 Regra de Ouro: Na Alemanha, a responsabilidade por dolo (Vorsatz) e negligência grave (grobe Fahrlässigkeit) não pode ser excluída por contrato.",
      "keyVocab": [
        {
          "target": "die Haftungsbeschränkung",
          "native": "a cláusula de limitação de responsabilidade"
        },
        {
          "target": "der entgangene Gewinn",
          "native": "lucros cessantes / perda de lucros esperados"
        },
        {
          "target": "die Fahrlässigkeit",
          "native": "a negligência / imprudência civil"
        }
      ],
      "corporateTip": "Fixe a responsabilidade financeira máxima no valor total pago pelo cliente nos últimos 12 meses."
    },
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Monte a cláusula que exclui indenização por lucros cessantes:",
        "source": "A responsabilidade por lucros cessantes é expressamente excluída.",
        "correct": [
          "Die",
          "Haftung",
          "für",
          "entgangenen",
          "Gewinn",
          "ist",
          "ausdrücklich",
          "ausgeschlossen"
        ],
        "pool": [
          "Die",
          "Haftung",
          "für",
          "entgangenen",
          "Gewinn",
          "ist",
          "ausdrücklich",
          "ausgeschlossen",
          "zahlen",
          "Geld"
        ],
        "explanation": "'Ausdrücklich ausgeschlossen' (expressamente excluída) é a fórmula jurídica à prova de litígios."
      },
      {
        "type": "choice",
        "prompt": "Como você redige o teto financeiro máximo de indenização do contrato?",
        "options": [
          "Die Gesamthaftung ist auf die in den letzten zwölf Monaten gezahlten Gebühren begrenzt.",
          "Wir zahlen für alles was passiert auf der Welt.",
          "Es gibt keine Grenze für unser Geld."
        ],
        "correct": 0,
        "explanation": "O 'Liability Cap' limitado aos valores dos últimos 12 meses protege a saúde financeira do negócio."
      },
      {
        "type": "speak",
        "prompt": "Afirme a exclusão de responsabilidade por caso fortuito:",
        "target": "Höhere Gewalt entbindet beide Parteien von ihren Leistungspflichten",
        "trans": "Casos de força maior desobrigam ambas as partes de seus deveres contratuais",
        "explanation": "'Höhere Gewalt' (força maior) é a clássica salvaguarda jurídica global."
      }
    ]
  },
  {
    "id": 24,
    "module": 4,
    "title": "Propriedade Intelectual (IP)",
    "category": "Direitos Autorais",
    "icon": "💡",
    "pos": "pos-center",
    "rewardItem": {
      "icon": "🧤",
      "name": "Manoplas da Patente Germânica",
      "slot": "Armadura"
    },
    "introGuide": {
      "title": "Propriedade Intelectual, Marcas e Software (Urheberrecht)",
      "objective": "Proteger os ativos de software, código-fonte e licenças de uso.",
      "explanation": "Na Alemanha, o <em>Urheberrecht</em> (direito moral de autor) é inalienável e não pode ser transferido. O que se transfere são os <strong>Nutzungsrechte</strong> (direitos de uso e exploração econômica). Isso é crucial para empresas de software e agências.",
      "goldenRule": "💡 Regra de Ouro: Transfere-se o 'ausschließliche Nutzungsrecht' (direito exclusivo de uso comercial).",
      "keyVocab": [
        {
          "target": "das geistige Eigentum",
          "native": "a propriedade intelectual (IP)"
        },
        {
          "target": "die Nutzungsrechte",
          "native": "os direitos de uso e exploração"
        },
        {
          "target": "der Quellcode",
          "native": "o código-fonte protegido por direitos autorais"
        }
      ],
      "corporateTip": "Especifique se o cliente adquire o direito de modificar o código ou apenas de executá-lo como SaaS."
    },
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Monte a cessão contratual de direitos de exploração:",
        "source": "O cliente recebe o direito exclusivo de uso do software.",
        "correct": [
          "Der",
          "Kunde",
          "erhält",
          "das",
          "ausschließliche",
          "Nutzungsrecht",
          "an",
          "der",
          "Software"
        ],
        "pool": [
          "Der",
          "Kunde",
          "erhält",
          "das",
          "ausschließliche",
          "Nutzungsrecht",
          "an",
          "der",
          "Software",
          "kaufen",
          "alle"
        ],
        "explanation": "'Das ausschließliche Nutzungsrecht' concede exclusividade de uso comercial ao contratante."
      },
      {
        "type": "choice",
        "prompt": "Como garantir expressamente que a propriedade do código-fonte permanece com o desenvolvedor?",
        "options": [
          "Alle Rechte am Quellcode verbleiben vollumfänglich beim Entwickler.",
          "Jeder darf den Code kopieren und verschenken.",
          "Der Code gehört jetzt dem Internet."
        ],
        "correct": 0,
        "explanation": "'Verbleiben vollumfänglich beim Entwickler' blinda o ativo tecnológico do criador."
      },
      {
        "type": "speak",
        "prompt": "Afirme a proteção contra infração de patentes:",
        "target": "Die Software verletzt keinerlei Schutzrechte Dritter",
        "trans": "O software não viola quaisquer direitos de propriedade de terceiros",
        "explanation": "Garantia formal de não-infração de propriedade intelectual (IP Warranty)."
      }
    ]
  },
  {
    "id": 25,
    "module": 4,
    "title": "Privacidade de Dados & Compliance (DSGVO)",
    "category": "Proteção de Dados",
    "icon": "🔒",
    "pos": "pos-right",
    "rewardItem": {
      "icon": "💍",
      "name": "Amuleto da Proteção DSGVO",
      "slot": "Acessório"
    },
    "introGuide": {
      "title": "Compliance e a Rigorosa Lei DSGVO (GDPR Europeia)",
      "objective": "Navegar pelas exigências da lei alemã de proteção de dados com rigor e conformidade.",
      "explanation": "A Alemanha possui uma das legislações de privacidade mais rigorosas do planeta: a <strong>Datenschutz-Grundverordnung (DSGVO)</strong>. Qualquer processamento de dados pessoais (<em>personenbezogene Daten</em>) exige base legal e a assinatura de um contrato de processamento: o <strong>Auftragsverarbeitungsvertrag (AVV)</strong>.",
      "goldenRule": "💡 Regra de Ouro: 'personenbezogene Daten' são quaisquer dados que identifiquem uma pessoa física.",
      "keyVocab": [
        {
          "target": "die Datenschutz-Grundverordnung (DSGVO)",
          "native": "o regulamento geral de proteção de dados (GDPR)"
        },
        {
          "target": "personenbezogene Daten",
          "native": "dados pessoais de usuários"
        },
        {
          "target": "der Auftragsverarbeitungsvertrag (AVV)",
          "native": "o contrato de operador de dados (DPA)"
        }
      ],
      "corporateTip": "Garanta que os servidores estejam localizados dentro do Espaço Econômico Europeu (EEE) para evitar litígios transfronteiriços."
    },
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Monte a cláusula de conformidade estrita com a privacidade:",
        "source": "O tratamento de dados pessoais ocorre em total conformidade com a DSGVO.",
        "correct": [
          "Die",
          "Verarbeitung",
          "personenbezogener",
          "Daten",
          "erfolgt",
          "in",
          "voller",
          "Übereinstimmung",
          "mit",
          "der",
          "DSGVO"
        ],
        "pool": [
          "Die",
          "Verarbeitung",
          "personenbezogener",
          "Daten",
          "erfolgt",
          "in",
          "voller",
          "Übereinstimmung",
          "mit",
          "der",
          "DSGVO",
          "ohne",
          "Gesetz"
        ],
        "explanation": "'Erfolgt in voller Übereinstimmung mit der DSGVO' atesta conformidade regulatória total perante as autoridades."
      },
      {
        "type": "choice",
        "prompt": "Qual documento anexo deve ser assinado obrigatoriamente para tratamento de dados na Europa?",
        "options": [
          "Ein rechtsgültiger Auftragsverarbeitungsvertrag gemäß Artikel 28 DSGVO.",
          "Ein einfacher handschriftlicher Brief.",
          "Eine mündliche Zusage beim Mittagessen."
        ],
        "correct": 0,
        "explanation": "O 'Auftragsverarbeitungsvertrag' (AVV) é o instrumento legal compulsório pelo Art. 28 da DSGVO."
      },
      {
        "type": "speak",
        "prompt": "Garanta a conformidade perante os auditores europeus:",
        "target": "Wir setzen strenge technische und organisatorische Maßnahmen zum Schutz der Daten um",
        "trans": "Implementamos rigorosas medidas técnicas e organizacionais para a proteção dos dados",
        "explanation": "As chamadas 'TOMs' (Technische und organisatorische Maßnahmen) são a prova máxima de compliance."
      }
    ]
  },
  {
    "id": 26,
    "module": 4,
    "title": "Rescisão & Resolução de Disputas",
    "category": "Contencioso",
    "icon": "📜",
    "pos": "pos-left",
    "rewardItem": {
      "icon": "🔨",
      "name": "Martelo do Árbitro Internacional",
      "slot": "Arma"
    },
    "introGuide": {
      "title": "Rescisão Contratual e Cláusula de Arbitragem",
      "objective": "Redigir rescisões motivadas, notificações de quebra de contrato e eleição de foro arbitral.",
      "explanation": "No encerramento de relações jurídicas, a rescisão extraordinária por justa causa é chamada de <strong>Kündigung aus wichtigem Grund</strong>. Para evitar litígios morosos no tribunal comum, contratos internacionais elegem a arbitragem: <em>'die Schiedsklausel'</em>.",
      "goldenRule": "💡 Regra de Ouro: 'das anwendbare Recht' define qual legislação nacional governa o contrato.",
      "keyVocab": [
        {
          "target": "die Kündigung aus wichtigem Grund",
          "native": "a rescisão motivada por justa causa"
        },
        {
          "target": "die Schiedsgerichtsbarkeit",
          "native": "o tribunal arbitral para disputas comerciais"
        },
        {
          "target": "das anwendbare Recht",
          "native": "o direito / legislação aplicável ao contrato"
        }
      ],
      "corporateTip": "Estipule sempre um período de cura prévio (Heilungsfrist / Cure Period) antes de formalizar a rescisão imediata."
    },
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Monte a cláusula de eleição de legislação aplicável:",
        "source": "Este contrato é regido exclusivamente pelo direito material alemão.",
        "correct": [
          "Dieser",
          "Vertrag",
          "unterliegt",
          "ausschließlich",
          "dem",
          "materiellen",
          "deutschen",
          "Recht"
        ],
        "pool": [
          "Dieser",
          "Vertrag",
          "unterliegt",
          "ausschließlich",
          "dem",
          "materiellen",
          "deutschen",
          "Recht",
          "alle",
          "Richter"
        ],
        "explanation": "'Unterliegt ausschließlich dem materiellen deutschen Recht' fixa a governança jurídica com exatidão."
      },
      {
        "type": "choice",
        "prompt": "Como você redige uma notificação formal concedendo prazo para a outra parte corrigir uma falha contratual?",
        "options": [
          "Wir setzen Ihnen eine Frist von 14 Tagen zur Behebung der Vertragsverletzung.",
          "Ihr habt den Vertrag kaputtgemacht, wir gehen sofort zum Gericht.",
          "Zahlt uns jetzt sofort Geld oder wir streiken."
        ],
        "correct": 0,
        "explanation": "A fixação de prazo razoável ('Frist zur Behebung der Vertragsverletzung') é requisito formal de validade."
      },
      {
        "type": "speak",
        "prompt": "Proponha a solução amigável antes do processo arbitral:",
        "target": "Beide Parteien streben zunächst eine gütliche Einigung an",
        "trans": "Ambas as partes buscam preliminarmente uma resolução amigável",
        "explanation": "'Gütliche Einigung' (acordo amigável) demonstra maturidade de alto nível na advocacia corporativa."
      }
    ]
  },
  {
    "id": 27,
    "module": 4,
    "isBoss": true,
    "title": "BOSS 4: Das Internationale Schiedsgericht",
    "category": "Chefe de Módulo",
    "icon": "🏛️",
    "pos": "pos-center",
    "bossData": {
      "name": "Justitia Lex (O Tribunal Arbitral)",
      "avatar": "👩‍⚖️",
      "hp": 100,
      "introPhrase": "Die Schiedskammer tritt zusammen! Als Paladino do Direito, verteidigen Sie Ihre Mandantschaft gemäß den Grundsätzen von Treu und Glauben!",
      "hurtPhrase": "Ihre juristische Argumentation bezüglich der Haftungsbeschränkung ist stichhaltig!",
      "defeatPhrase": "Urteil verkündet! Das Schiedsgericht entscheidet einstimmig zu Ihren Gunsten! Sie sind ein wahrer Meister des Rechts!"
    },
    "rewardItem": {
      "icon": "👑",
      "name": "Coroa da Jurisprudência Dourada",
      "slot": "Elmo"
    },
    "introGuide": {
      "title": "PROVA FINAL DO MÓDULO 4: A CORTE ARBITRAL INTERNACIONAL",
      "objective": "Sustentar a defesa jurídica da sua empresa perante a câmara arbitral da Alemanha e da Suíça.",
      "explanation": "Justitia Lex julgará a validade das suas cláusulas, o cumprimento das obrigações contratuais e a imunidade contra passivos indenizatórios. Acerte os termos jurídicos alemães para conquistar o troféu máximo do jogo!",
      "goldenRule": "⚔️ Precisão verbal inabalável: Haftungsausschluss, DSGVO e Treu und Glauben.",
      "keyVocab": [
        {
          "target": "nach Treu und Glauben",
          "native": "segundo o princípio da boa-fé objetiva"
        },
        {
          "target": "das Schiedsurteil",
          "native": "a sentença / decisão proferida pelo tribunal arbitral"
        }
      ],
      "corporateTip": "Lembre-se: em direito contratual alemão, o princípio basilar do § 242 BGB é 'Treu und Glauben' (boa-fé)."
    },
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Apresente o argumento máximo de cumprimento de boa-fé perante o Tribunal:",
        "source": "Todas as obrigações contratuais foram cumpridas em estrita boa-fé.",
        "correct": [
          "Alle",
          "vertraglichen",
          "Pflichten",
          "wurden",
          "nach",
          "Treu",
          "und",
          "Glauben",
          "vollständig",
          "erfüllt"
        ],
        "pool": [
          "Alle",
          "vertraglichen",
          "Pflichten",
          "wurden",
          "nach",
          "Treu",
          "und",
          "Glauben",
          "vollständig",
          "erfüllt",
          "Geld",
          "Gericht"
        ],
        "explanation": "'Nach Treu und Glauben erfüllt' é o ápice da doutrina jurídica alemã (§ 242 BGB)."
      },
      {
        "type": "choice",
        "prompt": "A parte adversa exige indenização desproporcional. Como contestar perante o juiz arbitral?",
        "options": [
          "Schadensersatzansprüche sind durch die vertragliche Haftungsobergrenze wirksam ausgeschlossen.",
          "Die Gegenseite lügt und hat keine Ahnung vom Gesetz.",
          "Wir haben das Geld sowieso schon ausgegeben."
        ],
        "correct": 0,
        "explanation": "Invocar a eficácia da cláusula de limitação contratual desmantela a petição da parte adversária."
      },
      {
        "type": "speak",
        "prompt": "Conclua sua sustentação oral diante de Justitia Lex:",
        "target": "Wir beantragen die vollständige Abweisung der Klage mit Kostenfolge",
        "trans": "Requeremos a total improcedência da ação com condenação em custas",
        "explanation": "Vitória judicial retumbante! Você é o Paladino do Direito Supremo da Polyglot RPG!"
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.curriculumDE = curriculumDE;
}


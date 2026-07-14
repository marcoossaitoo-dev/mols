import { Project, TeamMember, Solution } from '../types';

import fintrackImg from '../assets/images/fintrack_clean_1783963022346.jpg';
import conceptHairImg from '../assets/images/concept_hair_clean_1783963032805.jpg';
import prosaudeImg from '../assets/images/prosaude_clean_1783963044855.jpg';
import classicalPilatesImg from '../assets/images/classical_pilates_clean_1783963053422.jpg';
import gfEsteticaImg from '../assets/images/gf_estetica_clean_1783963062408.jpg';
import kauanWagnitzImg from '../assets/images/kauan_wagnitz_clean_1783963072227.jpg';

export const projectsData: Project[] = [
  {
    id: 'fintrack',
    name: 'FinTrack',
    category: ['Sistemas', 'Produtos próprios'],
    description:
      'Sistema de gestão financeira pessoal para organizar receitas, despesas, carteiras, metas e relatórios em um só lugar.',
    fullDescription:
      'O FinTrack é uma aplicação web desenvolvida para simplificar o controle financeiro pessoal. O sistema permite registrar receitas e despesas, acompanhar diferentes formas de pagamento, organizar metas financeiras e analisar os resultados por meio de relatórios e indicadores. Todo o projeto foi pensado para oferecer uma experiência simples, responsiva e intuitiva, tanto no desktop quanto no mobile.',
    tags: ['Finanças', 'Gestão', 'Dashboard'],
    features: [
      'Controle completo de receitas e despesas',
      'Organização de carteiras e formas de pagamento',
      'Criação e acompanhamento de metas financeiras',
      'Relatórios com filtros e exportação em PDF',
      'Dashboard responsivo com indicadores financeiros',
      'Autenticação e armazenamento seguro dos dados'
    ],
    client: 'Produto próprio',
    year: '2026',
    darkTheme: true,
    accentColor: '#0A47D1',
    url: 'https://fintrack-henna-zeta.vercel.app/',
    imageUrl: fintrackImg,
    techStack: [
      {
        name: 'React + TypeScript',
        description:
          'Construção de uma interface moderna, tipada e organizada em componentes reutilizáveis.'
      },
      {
        name: 'Tailwind CSS',
        description:
          'Estilização responsiva e consistente para desktop e dispositivos móveis.'
      },
      {
        name: 'Supabase',
        description:
          'Autenticação, banco de dados e proteção das informações de cada usuário.'
      },
      {
        name: 'Vite',
        description:
          'Ambiente de desenvolvimento e build rápido para a aplicação.'
      }
    ],
    transformation: {
      before: [
        'Informações financeiras espalhadas',
        'Dificuldade para acompanhar gastos',
        'Pouca visibilidade sobre metas e resultados'
      ],
      after: [
        'Receitas e despesas centralizadas',
        'Visão clara das finanças pessoais',
        'Metas, carteiras e relatórios integrados'
      ],
      stats: [
        { label: 'Gestão financeira', value: 'Centralizada' },
        { label: 'Experiência', value: 'Responsiva' }
      ]
    },
    intelligence: {
      advantages: [
        'Receitas, despesas, carteiras e metas reunidas em uma única plataforma',
        'Acompanhamento claro da evolução financeira por relatórios e indicadores',
        'Organização das formas de pagamento para entender melhor o fluxo do dinheiro',
        'Metas financeiras monitoradas com uma visão mais objetiva do progresso',
        'Acesso responsivo ao controle financeiro no desktop e no celular'
      ]
    }
  },
  {
  id: 'atelier-aurea',
  name: 'Ateliê Áurea',
  category: ['Landing Pages', 'Demonstrativo'],
  description:
    'Landing page conceitual desenvolvida para apresentar um salão de beleza, seus serviços e facilitar o contato para agendamentos.',
  fullDescription:
    'O Ateliê Áurea é um projeto conceitual criado para demonstrar como um salão de beleza pode fortalecer sua presença digital por meio de uma landing page moderna, responsiva e elegante. O projeto reúne os principais serviços, apresenta o ambiente e transmite o posicionamento da marca em uma interface organizada, conduzindo o visitante de forma intuitiva até o contato pelo WhatsApp para solicitar informações ou realizar um agendamento.',
  tags: ['Beleza', 'Agendamento', 'Presença digital'],
  features: [
    'Apresentação clara dos serviços do salão',
    'Contato direto para agendamento pelo WhatsApp',
    'Identidade visual sofisticada e alinhada à marca',
    'Layout responsivo para desktop e dispositivos móveis',
    'Navegação objetiva e focada na conversão'
    ],
    client: 'Projeto demonstrativo',
    year: '2026',
    darkTheme: false,
    accentColor: '#082B63',
    url: 'https://concept-hair-git-second-marcoossaitoo-devs-projects.vercel.app/',
    imageUrl: conceptHairImg,
    techStack: [
      {
        name: 'React',
        description:
          'Construção da interface em componentes reutilizáveis e organizados.'
      },
      {
        name: 'Framer Motion',
        description:
          'Animações e transições suaves para tornar a navegação mais fluida.'
      },
      {
        name: 'Tailwind CSS',
        description:
          'Estilização responsiva e consistente com a identidade visual do salão.'
      }
    ],
    transformation: {
      before: [
        'Informações concentradas nas redes sociais',
        'Ausência de uma vitrine digital própria',
        'Contato dependente das mensagens do Instagram'
      ],
      after: [
        'Serviços e informações apresentados em um único lugar',
        'Presença digital mais profissional',
        'Contato direto para agendamentos pelo WhatsApp'
      ],
      stats: [
        { label: 'Presença digital', value: 'Centralizada' },
        { label: 'Contato', value: 'Direto' }
      ]
    },
    intelligence: {
      advantages: [
        'Serviços do salão apresentados de forma clara fora das redes sociais',
        'Vitrine digital própria para transmitir sofisticação e posicionamento de marca',
        'Contato pelo WhatsApp integrado ao fluxo de agendamento',
        'Navegação objetiva para conduzir o visitante até os serviços principais',
        'Experiência responsiva para quem pesquisa pelo salão no celular'
      ]
    }
  },
  {
    id: 'clinica-medica',
    name: 'Clínica Médica',
    category: ['Landing Pages'],
    description:
      'Landing page conceitual desenvolvida para apresentar uma clínica multidisciplinar, suas especialidades e facilitar o contato dos pacientes.',
    fullDescription:
      'Este projeto conceitual demonstra como uma clínica multidisciplinar pode fortalecer sua presença digital por meio de uma landing page moderna, responsiva e organizada. A proposta reúne as principais informações da clínica em um único lugar, apresenta as especialidades médicas de forma clara e facilita o contato dos pacientes pelo WhatsApp.',
    tags: ['Saúde', 'Clínica', 'Landing Page'],
    features: [
      'Apresentação organizada das especialidades',
      'Contato direto pelo WhatsApp',
      'Layout responsivo para desktop e dispositivos móveis',
      'Design pensado para transmitir confiança e credibilidade',
      'Navegação simples e intuitiva'
    ],
    client: 'Projeto demonstrativo',
    year: '2026',
    darkTheme: false,
    accentColor: '#0A47D1',
    url: 'https://prosaude-ten.vercel.app',
    imageUrl: prosaudeImg,
    techStack: [
      {
        name: 'React',
        description:
          'Interface construída em componentes reutilizáveis.'
      },
      {
        name: 'Tailwind CSS',
        description:
          'Estilização moderna, consistente e totalmente responsiva.'
      },
      {
        name: 'Vite',
        description:
          'Ferramenta de desenvolvimento e build de alta performance.'
      }
    ],
    transformation: {
      before: [
        'Informações distribuídas entre diferentes canais',
        'Ausência de uma presença digital estruturada',
        'Contato menos intuitivo para novos pacientes'
      ],
      after: [
        'Informações centralizadas em uma única página',
        'Apresentação mais profissional da clínica',
        'Contato simplificado pelo WhatsApp'
      ],
      stats: [
        { label: 'Projeto', value: 'Conceitual' },
        { label: 'Foco', value: 'Experiência do paciente' }
      ]
    },
    intelligence: {
      advantages: [
        'Especialidades médicas organizadas em uma página fácil de consultar',
        'Informações da clínica centralizadas para reduzir dúvidas do paciente',
        'Contato por WhatsApp mais acessível para novos agendamentos',
        'Design institucional pensado para transmitir confiança antes da primeira consulta',
        'Navegação simples para pacientes encontrarem rapidamente o próximo passo'
      ]
    }
  },
  {
    id: 'pilates-studio',
    name: 'Estúdio de Pilates',
    category: ['Landing Pages'],
    description:
      'Landing page conceitual desenvolvida para apresentar um estúdio de pilates e facilitar o contato para novos agendamentos.',
    fullDescription:
      'Este projeto conceitual demonstra como uma landing page pode fortalecer a presença digital de um estúdio de pilates. O objetivo foi criar uma interface elegante e responsiva que apresente os diferenciais do estúdio, transmita confiança e facilite o contato dos visitantes por meio do WhatsApp.',
    tags: ['Pilates', 'Bem-estar', 'Landing Page'],
    features: [
      'Apresentação clara dos serviços e diferenciais',
      'Contato direto pelo WhatsApp',
      'Layout responsivo para desktop e dispositivos móveis',
      'Design minimalista e sofisticado',
      'Experiência de navegação intuitiva'
    ],
    client: 'Projeto demonstrativo',
    year: '2026',
    darkTheme: false,
    accentColor: '#082B63',
    url: 'https://classical-pilates.vercel.app',
    imageUrl: classicalPilatesImg,
    techStack: [
      {
        name: 'React',
        description:
          'Interface construída em componentes reutilizáveis.'
      },
      {
        name: 'Framer Motion',
        description:
          'Animações suaves para tornar a experiência mais fluida.'
      },
      {
        name: 'Tailwind CSS',
        description:
          'Estilização moderna, consistente e totalmente responsiva.'
      }
    ],
    transformation: {
      before: [
        'Informações dispersas entre redes sociais',
        'Pouca presença digital estruturada',
        'Contato menos intuitivo para novos alunos'
      ],
      after: [
        'Informações centralizadas em uma única página',
        'Apresentação mais profissional do estúdio',
        'Contato simplificado pelo WhatsApp'
      ],
      stats: [
        { label: 'Projeto', value: 'Conceitual' },
        { label: 'Segmento', value: 'Bem-estar' }
      ]
    },
    intelligence: {
      advantages: [
        'Diferenciais do estúdio apresentados em uma estrutura clara e acolhedora',
        'Contato por WhatsApp facilitado para interessados em novas aulas',
        'Presença digital própria para não depender apenas das redes sociais',
        'Experiência minimalista alinhada ao segmento de bem-estar',
        'Informações centralizadas para novos alunos entenderem a proposta do estúdio'
      ]
    }
  },
  {
    id: 'estetica-conceito',
    name: 'Clínica de Estética',
    category: ['Landing Pages'],
    description:
      'Landing page conceitual desenvolvida para apresentar procedimentos estéticos e facilitar o contato com novos clientes.',
    fullDescription:
      'Este projeto conceitual demonstra como uma clínica de estética pode fortalecer sua presença digital por meio de uma landing page moderna, elegante e responsiva. A proposta reúne os principais procedimentos em uma interface organizada, transmitindo credibilidade e conduzindo o visitante de forma simples até o contato pelo WhatsApp.',
    tags: ['Estética', 'Beleza', 'Landing Page'],
    features: [
      'Apresentação organizada dos procedimentos',
      'Contato direto pelo WhatsApp',
      'Layout responsivo para desktop e dispositivos móveis',
      'Design moderno alinhado ao segmento de estética',
      'Navegação simples e intuitiva'
    ],
    client: 'Projeto demonstrativo',
    year: '2026',
    darkTheme: false,
    accentColor: '#0A47D1',
    url: 'https://gf-estetica.vercel.app',
    imageUrl: gfEsteticaImg,
    techStack: [
      {
        name: 'React',
        description:
          'Interface desenvolvida em componentes reutilizáveis.'
      },
      {
        name: 'Tailwind CSS',
        description:
          'Estilização moderna, consistente e totalmente responsiva.'
      },
      {
        name: 'Vite',
        description:
          'Ferramenta de desenvolvimento e build otimizada.'
      }
    ],
    transformation: {
      before: [
        'Pouca presença digital estruturada',
        'Informações distribuídas entre diferentes canais',
        'Contato menos intuitivo para novos clientes'
      ],
      after: [
        'Procedimentos apresentados em uma única página',
        'Presença digital mais profissional',
        'Contato simplificado pelo WhatsApp'
      ],
      stats: [
        { label: 'Projeto', value: 'Conceitual' },
        { label: 'Segmento', value: 'Estética' }
      ]
    },
    intelligence: {
      advantages: [
        'Procedimentos estéticos organizados para facilitar a escolha do cliente',
        'Presença digital mais profissional para fortalecer a percepção da clínica',
        'Contato direto pelo WhatsApp no momento em que o visitante demonstra interesse',
        'Navegação intuitiva para apresentar tratamentos sem dispersar a atenção',
        'Interface responsiva para consultas rápidas pelo celular'
      ]
    }
  },
  {
    id: 'nutricao-esportiva',
    name: 'Nutrição Esportiva',
    category: ['Landing Pages'],
    description:
      'Landing page conceitual desenvolvida para apresentar os serviços de um nutricionista esportivo e facilitar o contato com novos pacientes.',
    fullDescription:
      'Este projeto conceitual demonstra como uma landing page pode fortalecer a presença digital de um profissional da nutrição esportiva. A proposta apresenta os serviços, a metodologia de atendimento e os diferenciais do profissional em uma interface moderna e responsiva, conduzindo o visitante de forma simples até o contato pelo WhatsApp.',
    tags: ['Nutrição', 'Esporte', 'Landing Page'],
    features: [
      'Apresentação clara dos serviços e especialidades',
      'Contato direto pelo WhatsApp',
      'Layout responsivo para desktop e dispositivos móveis',
      'Design moderno alinhado ao segmento esportivo',
      'Navegação simples e intuitiva'
    ],
    client: 'Projeto demonstrativo',
    year: '2026',
    darkTheme: true,
    accentColor: '#082B63',
    url: 'https://kauan-wagnitz-nutri-o-esportiva.vercel.app',
    imageUrl: kauanWagnitzImg,
    techStack: [
      {
        name: 'React',
        description:
          'Interface desenvolvida em componentes reutilizáveis.'
      },
      {
        name: 'Framer Motion',
        description:
          'Animações suaves para enriquecer a experiência de navegação.'
      },
      {
        name: 'Tailwind CSS',
        description:
          'Estilização moderna, consistente e totalmente responsiva.'
      }
    ],
    transformation: {
      before: [
        'Pouca presença digital estruturada',
        'Informações distribuídas entre diferentes canais',
        'Contato menos intuitivo para novos pacientes'
      ],
      after: [
        'Serviços apresentados em uma única página',
        'Presença digital mais profissional',
        'Contato simplificado pelo WhatsApp'
      ],
      stats: [
        { label: 'Projeto', value: 'Conceitual' },
        { label: 'Segmento', value: 'Nutrição' }
      ]
    },
    intelligence: {
      advantages: [
        'Serviços e metodologia de atendimento apresentados de forma objetiva',
        'Posicionamento digital alinhado ao público de nutrição esportiva',
        'Contato por WhatsApp simplificado para novos pacientes interessados',
        'Diferenciais do profissional organizados em uma jornada de leitura clara',
        'Experiência moderna e responsiva para visitantes que chegam pelo celular'
      ]
    }
  }
];

export const teamData: TeamMember[] = [
  {
    name: 'Matheus Di Santo',
    role: 'Estratégia, atendimento e desenvolvimento',
    email: 'smatheussd@gmail.com',
    phone: '5516997295436',
    phoneFormatted: '(16) 99729-5436'
  },
  {
    name: 'Marcos Saito',
    role: 'Tecnologia e desenvolvimento',
    email: 'marcoossaito-dev@gmail.com',
    phone: '5516997575401',
    phoneFormatted: '(16) 99757-5401'
  }
];

export const solutionsData: Solution[] = [
  {
    title: 'Sites institucionais',
    description: 'Sites profissionais que comunicam credibilidade, apresentam sua marca de forma extraordinária e geram confiança absoluta.',
    iconName: 'Monitor'
  },
  {
    title: 'Landing pages',
    description: 'Páginas estratégicas ultra-otimizadas com foco em conversão para campanhas digitais, produtos, serviços ou lançamentos.',
    iconName: 'FileText'
  },
  {
    title: 'Sistemas digitais',
    description: 'Soluções personalizadas integradas que organizam processos internos, otimizam fluxos de trabalho e reduzem custos operacionais.',
    iconName: 'Code'
  },
  {
    title: 'Produtos próprios',
    description: 'Sistemas desenvolvidos internamente pela Mols, como o FinTrack, demonstrando nossa alta capacidade técnica e excelência em engenharia.',
    iconName: 'Sparkles'
  }
];

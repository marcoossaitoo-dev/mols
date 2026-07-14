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
    name: 'FinTrack LP',
    category: 'Landing Pages',
    description: 'Landing page otimizada para apresentar o sistema financeiro e captar leads diretamente via WhatsApp.',
    fullDescription: 'O FinTrack LP foi projetado para demonstrar os benefícios do sistema de gestão financeira. O foco do projeto é converter visitantes em leads quentes através de CTAs estratégicos que direcionam o usuário para o WhatsApp com mensagens pré-configuradas, agilizando o atendimento comercial.',
    tags: ['Landing Page', 'Captação', 'Vendas'],
    features: [
      'Design focado em conversão e escaneabilidade',
      'CTAs direcionados ao WhatsApp comercial',
      'Mensagens pré-configuradas para agilizar o atendimento',
      'Layout ultra-rápido para evitar perda de leads'
    ],
    client: 'Mols Labs',
    year: '2025',
    darkTheme: true,
    accentColor: '#0A47D1',
    url: 'https://fintrack-henna-zeta.vercel.app/',
    imageUrl: fintrackImg,
    techStack: [
      { name: 'React 19', description: 'Concurrent rendering and optimized state management.' },
      { name: 'TailwindCSS', description: 'Utility-first styling for rapid, consistent UI.' },
      { name: 'Vite', description: 'High-performance build tooling.' }
    ],
    transformation: {
      before: ['Muitos cliques para contato', 'Atrito no momento da captação', 'Dúvidas repetitivas dos clientes'],
      after: ['Redirecionamento ágil para WhatsApp', 'Informações e preços centralizados', 'Layout focado na quebra de objeções'],
      stats: [
        { label: 'Alcance & Engajamento', value: '+215%' },
        { label: 'Agilidade no Serviço', value: '+140%' }
      ]
    }
  },
  {
    id: 'concepthair',
    name: 'Concept Hair',
    category: 'Landing Pages',
    description: 'Página premium com redirecionamento otimizado para o WhatsApp do salão, agilizando agendamentos.',
    fullDescription: 'Desenvolvida para o profissional Jhonatas, esta landing page redefine a presença digital do salão. A página atua como uma vitrine de alto luxo que converte visitantes em clientes, utilizando botões estratégicos de WhatsApp com mensagens pré-definidas para agilizar a marcação de horários.',
    tags: ['Branding', 'Agendamento Ágil', 'Luxo'],
    features: [
      'Identidade visual sofisticada e premium',
      'Botões de WhatsApp com mensagens pré-configuradas',
      'Redução do tempo de espera no atendimento inicial',
      'Design focado na jornada rápida de marcação'
    ],
    client: 'Jhonatas Concept',
    year: '2024',
    darkTheme: false,
    accentColor: '#082B63',
    url: 'https://concept-hair.vercel.app',
    imageUrl: conceptHairImg,
    techStack: [
      { name: 'React', description: 'Component-based architecture.' },
      { name: 'Framer Motion', description: 'Fluid page transitions and micro-animations.' },
      { name: 'TailwindCSS', description: 'Precision styling matching brand identity.' }
    ],
    transformation: {
      before: ['Espera na resposta do direct', 'Dúvidas repetitivas de preços', 'Falta de vitrine profissional'],
      after: ['Vitrine digital de alto padrão', 'Contato direto para agendamento', 'Posicionamento premium imediato'],
      stats: [
        { label: 'Alcance & Engajamento', value: '+300%' },
        { label: 'Agilidade no Agendamento', value: '+180%' }
      ]
    }
  },
  {
    id: 'prosaude',
    name: 'Prosaúde',
    category: 'Landing Pages',
    description: 'Página institucional focada em direcionar pacientes para agendamentos ágeis via WhatsApp.',
    fullDescription: 'O projeto Prosaúde foi desenvolvido para facilitar a vida do paciente. A interface clean elimina distrações e destaca os botões de contato, que abrem o WhatsApp da clínica com mensagens pré-preenchidas, informando exatamente qual especialidade o paciente busca.',
    tags: ['Saúde', 'Clínica', 'Agendamento'],
    features: [
      'CTAs claros focados no público idoso e geral',
      'Redirecionamento para WhatsApp com texto pré-pronto',
      'Carregamento otimizado para conexões 3G/4G',
      'Estrutura voltada para conversão local'
    ],
    client: 'Prosaúde',
    year: '2025',
    darkTheme: false,
    accentColor: '#0A47D1',
    url: 'https://prosaude-ten.vercel.app',
    imageUrl: prosaudeImg,
    techStack: [
      { name: 'React 19', description: 'Modern UI rendering.' },
      { name: 'TailwindCSS', description: 'Accessible and clean styling.' },
      { name: 'Vite', description: 'Rapid development and optimized build.' }
    ],
    transformation: {
      before: ['Dificuldade de achar o telefone', 'Pacientes confusos sobre serviços e preços', 'Ligações perdidas'],
      after: ['Um clique para o WhatsApp da recepção', 'Mensagem indicando a necessidade médica', 'Maior volume de marcações'],
      stats: [
        { label: 'Alcance & Engajamento', value: '+350%' },
        { label: 'Agilidade no Agendamento', value: '+200%' }
      ]
    }
  },
  {
    id: 'classical-pilates',
    name: 'Classical Pilates',
    category: 'Landing Pages',
    description: 'Landing page premium para estúdio de pilates, enviando alunos qualificados direto ao WhatsApp.',
    fullDescription: 'Uma presença digital elegante para o Classical Pilates. O site transmite os princípios do método e foca exclusivamente em converter o visitante, levando-o ao WhatsApp do estúdio com uma mensagem pronta para agendar uma aula experimental.',
    tags: ['Pilates', 'Estúdio', 'WhatsApp'],
    features: [
      'Identidade visual minimalista e elegante',
      'CTAs estratégicos para agendamento via WhatsApp',
      'Mensagens pré-configuradas para aula experimental',
      'Foco total na captação mobile'
    ],
    client: 'Classical Pilates',
    year: '2025',
    darkTheme: false,
    accentColor: '#082B63',
    url: 'https://classical-pilates.vercel.app',
    imageUrl: classicalPilatesImg,
    techStack: [
      { name: 'React', description: 'Component-based interactive UI.' },
      { name: 'Framer Motion', description: 'Fluid, elegant entrance animations.' },
      { name: 'TailwindCSS', description: 'Custom typography and spacing.' }
    ],
    transformation: {
      before: ['Contato manual trabalhoso', 'Dúvidas primárias frequentes', 'Atrito na marcação de aula experimental'],
      after: ['Botão direto para o WhatsApp', 'Mensagem de aula experimental pronta', 'Conversão acelerada de alunos'],
      stats: [
        { label: 'Alcance & Engajamento', value: '+320%' },
        { label: 'Agilidade no Agendamento', value: '+150%' }
      ]
    }
  },
  {
    id: 'gf-estetica',
    name: 'GF Estética',
    category: 'Landing Pages',
    description: 'Vitrine digital de estética focada em direcionamento direto para triagem via WhatsApp.',
    fullDescription: 'O site da GF Estética foi concebido como um portfólio comercial ativo. Com uma navegação fluida, ele apresenta os procedimentos e utiliza links parametrizados do WhatsApp para que a cliente já chegue solicitando o serviço correto.',
    tags: ['Estética', 'Beleza', 'Conversão'],
    features: [
      'Apresentação clara dos procedimentos estéticos',
      'Links de WhatsApp específicos para cada tratamento',
      'Mensagens pré-formatadas para a clínica',
      'Layout mobile-first de altíssima velocidade'
    ],
    client: 'GF Estética',
    year: '2025',
    darkTheme: false,
    accentColor: '#0A47D1',
    url: 'https://gf-estetica.vercel.app',
    imageUrl: gfEsteticaImg,
    techStack: [
      { name: 'React 19', description: 'Modern UI framework.' },
      { name: 'TailwindCSS', description: 'Utility classes for rapid styling.' },
      { name: 'Vite', description: 'Fast delivery.' }
    ],
    transformation: {
      before: ['Clientes confusos sobre procedimentos', 'Demora na triagem inicial e repasse de preços', 'Contato demorado'],
      after: ['Cliente já chega solicitando o serviço', 'Mensagem de WhatsApp pré-preenchida', 'Agendamento imediato na estética'],
      stats: [
        { label: 'Alcance & Engajamento', value: '+210%' },
        { label: 'Agilidade no Serviço', value: '10x maior' }
      ]
    }
  },
  {
    id: 'kauan-wagnitz',
    name: 'Kauan Wagnitz Nutrição',
    category: 'Landing Pages',
    description: 'Página de alta performance convertendo visitantes em pacientes diretamente pelo WhatsApp.',
    fullDescription: 'Uma landing page de impacto projetada para o nutricionista esportivo Kauan Wagnitz. Focada totalmente em conversão, a página apresenta os resultados do profissional e encaminha os interessados para o WhatsApp já com uma mensagem de pré-consulta.',
    tags: ['Nutrição', 'Esporte', 'WhatsApp'],
    features: [
      'Design dinâmico focado em prova social',
      'Botões de conversão estratégicos pela página',
      'WhatsApp configurado com mensagem de triagem',
      'Remoção de qualquer barreira entre lead e profissional'
    ],
    client: 'Kauan Wagnitz',
    year: '2025',
    darkTheme: true,
    accentColor: '#082B63',
    url: 'https://kauan-wagnitz-nutri-o-esportiva.vercel.app',
    imageUrl: kauanWagnitzImg,
    techStack: [
      { name: 'React', description: 'Fast client-side rendering.' },
      { name: 'Framer Motion', description: 'Dynamic scroll animations.' },
      { name: 'TailwindCSS', description: 'Dark mode optimization.' }
    ],
    transformation: {
      before: ['Fricção no agendamento', 'Perguntas repetitivas sobre métodos e preços', 'Vazamento de tráfego orgânico'],
      after: ['Contato em um único clique', 'Mensagem pronta facilitando o lead', 'Captura efetiva de interessados'],
      stats: [
        { label: 'Alcance & Engajamento', value: '+400%' },
        { label: 'Agilidade de Resposta', value: '+320%' }
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

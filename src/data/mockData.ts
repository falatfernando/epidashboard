import type { StateData, ClusterData, TransmissionArc, DrugMutationData, Isolate, TransmissionNode, KpiMetrics } from '../types/tbData';

// Brazil States with SVG paths (viewBox 0 0 600 600 normalized layout for SVG rendering)
export const BRAZIL_STATES: StateData[] = [
  {
    uf: 'AM',
    name: 'Amazonas',
    region: 'Norte',
    totalSequenced: 312,
    totalCasesReported: 3450,
    wgsCoveragePercent: 9.0,
    mdrCount: 38,
    mdrPercent: 12.2,
    activeClustersCount: 6,
    topLineage: 'Linhagem 4 (Euro-Americana / LAM)',
    riskLevel: 'Crítico',
    center: [160, 200],
    path: 'M100,140 L220,130 L250,180 L240,260 L170,270 L110,230 Z'
  },
  {
    uf: 'PA',
    name: 'Pará',
    region: 'Norte',
    totalSequenced: 245,
    totalCasesReported: 4120,
    wgsCoveragePercent: 5.9,
    mdrCount: 22,
    mdrPercent: 9.0,
    activeClustersCount: 4,
    topLineage: 'Linhagem 4 (Euro-Americana / LAM)',
    riskLevel: 'Moderado',
    center: [280, 190],
    path: 'M220,130 L320,140 L340,220 L270,250 L240,260 L250,180 Z'
  },
  {
    uf: 'AP',
    name: 'Aapá',
    region: 'Norte',
    totalSequenced: 48,
    totalCasesReported: 520,
    wgsCoveragePercent: 9.2,
    mdrCount: 3,
    mdrPercent: 6.3,
    activeClustersCount: 1,
    topLineage: 'Linhagem 4 (Euro-Americana / LAM)',
    riskLevel: 'Baixo',
    center: [300, 110],
    path: 'M290,90 L330,95 L320,140 L290,125 Z'
  },
  {
    uf: 'RR',
    name: 'Roraima',
    region: 'Norte',
    totalSequenced: 64,
    totalCasesReported: 680,
    wgsCoveragePercent: 9.4,
    mdrCount: 8,
    mdrPercent: 12.5,
    activeClustersCount: 2,
    topLineage: 'Linhagem 4 (Euro-Americana / LAM)',
    riskLevel: 'Crítico',
    center: [170, 90],
    path: 'M150,60 L210,65 L220,130 L160,120 Z'
  },
  {
    uf: 'AC',
    name: 'Acre',
    region: 'Norte',
    totalSequenced: 52,
    totalCasesReported: 490,
    wgsCoveragePercent: 10.6,
    mdrCount: 4,
    mdrPercent: 7.7,
    activeClustersCount: 1,
    topLineage: 'Linhagem 4 (Harlem)',
    riskLevel: 'Sob Monitoramento',
    center: [80, 240],
    path: 'M40,220 L100,210 L110,250 L50,260 Z'
  },
  {
    uf: 'RO',
    name: 'Rondônia',
    region: 'Norte',
    totalSequenced: 88,
    totalCasesReported: 980,
    wgsCoveragePercent: 9.0,
    mdrCount: 7,
    mdrPercent: 8.0,
    activeClustersCount: 2,
    topLineage: 'Linhagem 4 (Euro-Americana / LAM)',
    riskLevel: 'Moderado',
    center: [150, 270],
    path: 'M110,230 L170,240 L180,300 L120,290 Z'
  },
  {
    uf: 'TO',
    name: 'Tocantins',
    region: 'Norte',
    totalSequenced: 62,
    totalCasesReported: 610,
    wgsCoveragePercent: 10.1,
    mdrCount: 3,
    mdrPercent: 4.8,
    activeClustersCount: 1,
    topLineage: 'Linhagem 4 (Euro-Americana / LAM)',
    riskLevel: 'Baixo',
    center: [330, 250],
    path: 'M310,210 L350,210 L340,290 L300,280 Z'
  },
  {
    uf: 'MA',
    name: 'Maranhão',
    region: 'Nordeste',
    totalSequenced: 110,
    totalCasesReported: 2200,
    wgsCoveragePercent: 5.0,
    mdrCount: 9,
    mdrPercent: 8.2,
    activeClustersCount: 2,
    topLineage: 'Linhagem 4 (Euro-Americana / LAM)',
    riskLevel: 'Moderado',
    center: [360, 180],
    path: 'M340,150 L400,160 L390,220 L340,210 Z'
  },
  {
    uf: 'PI',
    name: 'Piauí',
    region: 'Nordeste',
    totalSequenced: 55,
    totalCasesReported: 920,
    wgsCoveragePercent: 6.0,
    mdrCount: 3,
    mdrPercent: 5.5,
    activeClustersCount: 1,
    topLineage: 'Linhagem 4 (Euro-Americana / LAM)',
    riskLevel: 'Baixo',
    center: [395, 215],
    path: 'M390,170 L425,175 L410,250 L380,240 Z'
  },
  {
    uf: 'CE',
    name: 'Ceará',
    region: 'Nordeste',
    totalSequenced: 185,
    totalCasesReported: 3800,
    wgsCoveragePercent: 4.9,
    mdrCount: 16,
    mdrPercent: 8.6,
    activeClustersCount: 3,
    topLineage: 'Linhagem 4 (Euro-Americana / LAM)',
    riskLevel: 'Moderado',
    center: [450, 160],
    path: 'M425,145 L480,140 L470,185 L420,180 Z'
  },
  {
    uf: 'RN',
    name: 'Rio Grande do Norte',
    region: 'Nordeste',
    totalSequenced: 42,
    totalCasesReported: 1150,
    wgsCoveragePercent: 3.7,
    mdrCount: 3,
    mdrPercent: 7.1,
    activeClustersCount: 1,
    topLineage: 'Linhagem 4 (Euro-Americana / LAM)',
    riskLevel: 'Baixo',
    center: [495, 165],
    path: 'M480,150 L520,155 L515,180 L480,175 Z'
  },
  {
    uf: 'PB',
    name: 'Paraíba',
    region: 'Nordeste',
    totalSequenced: 58,
    totalCasesReported: 1300,
    wgsCoveragePercent: 4.5,
    mdrCount: 4,
    mdrPercent: 6.9,
    activeClustersCount: 1,
    topLineage: 'Linhagem 4 (Euro-Americana / LAM)',
    riskLevel: 'Baixo',
    center: [495, 190],
    path: 'M480,180 L525,180 L520,200 L475,200 Z'
  },
  {
    uf: 'PE',
    name: 'Pernambuco',
    region: 'Nordeste',
    totalSequenced: 210,
    totalCasesReported: 4850,
    wgsCoveragePercent: 4.3,
    mdrCount: 24,
    mdrPercent: 11.4,
    activeClustersCount: 4,
    topLineage: 'Linhagem 4 (Euro-Americana / LAM)',
    riskLevel: 'Crítico',
    center: [480, 215],
    path: 'M420,205 L525,205 L520,225 L415,225 Z'
  },
  {
    uf: 'AL',
    name: 'Alagoas',
    region: 'Nordeste',
    totalSequenced: 45,
    totalCasesReported: 1100,
    wgsCoveragePercent: 4.1,
    mdrCount: 4,
    mdrPercent: 8.9,
    activeClustersCount: 1,
    topLineage: 'Linhagem 4 (Euro-Americana / LAM)',
    riskLevel: 'Sob Monitoramento',
    center: [490, 240],
    path: 'M470,230 L510,230 L505,250 L465,245 Z'
  },
  {
    uf: 'SE',
    name: 'Sergipe',
    region: 'Nordeste',
    totalSequenced: 38,
    totalCasesReported: 850,
    wgsCoveragePercent: 4.5,
    mdrCount: 3,
    mdrPercent: 7.9,
    activeClustersCount: 1,
    topLineage: 'Linhagem 4 (Euro-Americana / LAM)',
    riskLevel: 'Baixo',
    center: [475, 260],
    path: 'M460,250 L490,250 L485,270 L455,265 Z'
  },
  {
    uf: 'BA',
    name: 'Bahia',
    region: 'Nordeste',
    totalSequenced: 275,
    totalCasesReported: 5200,
    wgsCoveragePercent: 5.3,
    mdrCount: 22,
    mdrPercent: 8.0,
    activeClustersCount: 3,
    topLineage: 'Linhagem 4 (Euro-Americana / LAM)',
    riskLevel: 'Moderado',
    center: [430, 290],
    path: 'M380,245 L475,250 L460,340 L380,310 Z'
  },
  {
    uf: 'MT',
    name: 'Mato Grosso',
    region: 'Centro-Oeste',
    totalSequenced: 120,
    totalCasesReported: 1650,
    wgsCoveragePercent: 7.3,
    mdrCount: 9,
    mdrPercent: 7.5,
    activeClustersCount: 2,
    topLineage: 'Linhagem 4 (Harlem)',
    riskLevel: 'Moderado',
    center: [230, 310],
    path: 'M180,270 L300,270 L290,370 L190,360 Z'
  },
  {
    uf: 'GO',
    name: 'Goiás',
    region: 'Centro-Oeste',
    totalSequenced: 115,
    totalCasesReported: 1400,
    wgsCoveragePercent: 8.2,
    mdrCount: 8,
    mdrPercent: 7.0,
    activeClustersCount: 2,
    topLineage: 'Linhagem 4 (Euro-Americana / LAM)',
    riskLevel: 'Baixo',
    center: [330, 340],
    path: 'M295,300 L365,300 L355,380 L290,370 Z'
  },
  {
    uf: 'DF',
    name: 'Distrito Federal',
    region: 'Centro-Oeste',
    totalSequenced: 95,
    totalCasesReported: 580,
    wgsCoveragePercent: 16.4,
    mdrCount: 6,
    mdrPercent: 6.3,
    activeClustersCount: 2,
    topLineage: 'Linhagem 4 (Euro-Americana / LAM)',
    riskLevel: 'Sob Monitoramento',
    center: [345, 330],
    path: 'M340,325 L355,325 L355,340 L340,340 Z'
  },
  {
    uf: 'MS',
    name: 'Mato Grosso do Sul',
    region: 'Centro-Oeste',
    totalSequenced: 98,
    totalCasesReported: 1350,
    wgsCoveragePercent: 7.3,
    mdrCount: 11,
    mdrPercent: 11.2,
    activeClustersCount: 2,
    topLineage: 'Linhagem 4 (Euro-Americana / LAM)',
    riskLevel: 'Crítico',
    center: [240, 400],
    path: 'M190,360 L280,365 L270,440 L195,430 Z'
  },
  {
    uf: 'MG',
    name: 'Minas Gerais',
    region: 'Sudeste',
    totalSequenced: 230,
    totalCasesReported: 4200,
    wgsCoveragePercent: 5.5,
    mdrCount: 17,
    mdrPercent: 7.4,
    activeClustersCount: 3,
    topLineage: 'Linhagem 4 (Euro-Americana / LAM)',
    riskLevel: 'Moderado',
    center: [390, 360],
    path: 'M350,310 L440,330 L430,410 L350,390 Z'
  },
  {
    uf: 'ES',
    name: 'Espírito Santo',
    region: 'Sudeste',
    totalSequenced: 65,
    totalCasesReported: 1450,
    wgsCoveragePercent: 4.5,
    mdrCount: 5,
    mdrPercent: 7.7,
    activeClustersCount: 1,
    topLineage: 'Linhagem 4 (Euro-Americana / LAM)',
    riskLevel: 'Baixo',
    center: [450, 390],
    path: 'M435,370 L465,375 L455,410 L430,405 Z'
  },
  {
    uf: 'RJ',
    name: 'Rio de Janeiro',
    region: 'Sudeste',
    totalSequenced: 420,
    totalCasesReported: 14200,
    wgsCoveragePercent: 3.0,
    mdrCount: 52,
    mdrPercent: 12.4,
    activeClustersCount: 7,
    topLineage: 'Linhagem 4 (Euro-Americana / LAM)',
    riskLevel: 'Crítico',
    center: [420, 425],
    path: 'M395,410 L445,415 L430,445 L390,435 Z'
  },
  {
    uf: 'SP',
    name: 'São Paulo',
    region: 'Sudeste',
    totalSequenced: 615,
    totalCasesReported: 19800,
    wgsCoveragePercent: 3.1,
    mdrCount: 58,
    mdrPercent: 9.4,
    activeClustersCount: 8,
    topLineage: 'Linhagem 2 (Beijing) & L4',
    riskLevel: 'Crítico',
    center: [330, 420],
    path: 'M270,390 L395,400 L370,460 L260,440 Z'
  },
  {
    uf: 'PR',
    name: 'Paraná',
    region: 'Sul',
    totalSequenced: 140,
    totalCasesReported: 2450,
    wgsCoveragePercent: 5.7,
    mdrCount: 10,
    mdrPercent: 7.1,
    activeClustersCount: 2,
    topLineage: 'Linhagem 4 (Euro-Americana / LAM)',
    riskLevel: 'Baixo',
    center: [280, 465],
    path: 'M250,445 L330,455 L315,490 L240,475 Z'
  },
  {
    uf: 'SC',
    name: 'Santa Catarina',
    region: 'Sul',
    totalSequenced: 110,
    totalCasesReported: 2100,
    wgsCoveragePercent: 5.2,
    mdrCount: 8,
    mdrPercent: 7.3,
    activeClustersCount: 2,
    topLineage: 'Linhagem 4 (Harlem)',
    riskLevel: 'Moderado',
    center: [290, 500],
    path: 'M260,485 L320,490 L310,520 L255,515 Z'
  },
  {
    uf: 'RS',
    name: 'Rio Grande do Sul',
    region: 'Sul',
    totalSequenced: 235,
    totalCasesReported: 5900,
    wgsCoveragePercent: 4.0,
    mdrCount: 27,
    mdrPercent: 11.5,
    activeClustersCount: 5,
    topLineage: 'Linhagem 4 (Euro-Americana / LAM)',
    riskLevel: 'Crítico',
    center: [265, 545],
    path: 'M240,515 L310,520 L290,580 L220,560 Z'
  }
];

// Active WGS Genomic Clusters in Brazil
export const ACTIVE_CLUSTERS: ClusterData[] = [
  {
    id: 'CL-SP-01',
    code: 'BR-SP-MDR-01',
    name: 'Cluster Prisional Metropolitano SP-01',
    ufPrimary: 'SP',
    ufsSecondary: ['RJ', 'MG'],
    setting: 'Sistema Prisional',
    caseCount: 48,
    snpDistanceMax: 2,
    lineage: 'Linhagem 4 (Euro-Americana / LAM)',
    resistanceProfile: 'MDR-TB',
    keyMutations: ['rpoB S531L', 'katG S315T', 'pncA Q10P'],
    firstDetected: '2024-03-12',
    lastDetected: '2026-07-28',
    alertLevel: 'Crítico',
    growthRatePct: 34.2,
    description: 'Surto de alta transmissibilidade em estabelecimento penal da RMSP com disseminação para familiares no RJ e MG via visitas. Identificada resistência combinada a RIF e INH.',
    coordinates: [330, 420]
  },
  {
    id: 'CL-AM-03',
    code: 'BR-AM-IND-03',
    name: 'Cluster Transfronteiriço Manaus / Alto Solimões',
    ufPrimary: 'AM',
    ufsSecondary: ['RR', 'PA'],
    setting: 'População Indígena / Fronteira',
    caseCount: 34,
    snpDistanceMax: 3,
    lineage: 'Linhagem 4 (Euro-Americana / LAM)',
    resistanceProfile: 'Pre-XDR-TB',
    keyMutations: ['rpoB S531L', 'katG S315T', 'gyrA D94G'],
    firstDetected: '2024-08-19',
    lastDetected: '2026-07-20',
    alertLevel: 'Crítico',
    growthRatePct: 22.8,
    description: 'Cluster genômico com alta taxa de resistência a fluoroquinolonas entre comunidades ribeirinhas e migração fluviais entre Tabatinga e Manaus.',
    coordinates: [160, 200]
  },
  {
    id: 'CL-RJ-02',
    code: 'BR-RJ-URB-02',
    name: 'Cluster Periferia Baixada Fluminense',
    ufPrimary: 'RJ',
    ufsSecondary: ['ES'],
    setting: 'Comunidade Urbana',
    caseCount: 52,
    snpDistanceMax: 1,
    lineage: 'Linhagem 4 (Harlem)',
    resistanceProfile: 'MDR-TB',
    keyMutations: ['rpoB H526D', 'katG S315T', 'inhA promoter -15C>T'],
    firstDetected: '2024-01-10',
    lastDetected: '2026-08-01',
    alertLevel: 'Crítico',
    growthRatePct: 41.0,
    description: 'Expansão contínua em áreas de alta densidade populacional com diagnóstico tardio fenotípico prévio. Sequenciamento rápido permitiu transição antecipada para o esquema BPaLM.',
    coordinates: [420, 425]
  },
  {
    id: 'CL-RS-05',
    code: 'BR-RS-HOSP-05',
    name: 'Cluster Nosocomial Porto Alegre / Pelotas',
    ufPrimary: 'RS',
    ufsSecondary: ['SC'],
    setting: 'Unidade Hospitalar',
    caseCount: 29,
    snpDistanceMax: 2,
    lineage: 'Linhagem 4 (Euro-Americana / LAM)',
    resistanceProfile: 'XDR-TB',
    keyMutations: ['rpoB S531L', 'katG S315T', 'gyrA D94G', 'rrs A1401G'],
    firstDetected: '2025-02-14',
    lastDetected: '2026-06-15',
    alertLevel: 'Crítico',
    growthRatePct: 18.5,
    description: 'Super-transmissão nosocomial entre pacientes imunocomprometidos e coinfectados TB/HIV em centro de referência universitário no RS.',
    coordinates: [265, 545]
  },
  {
    id: 'CL-PE-01',
    code: 'BR-PE-URB-01',
    name: 'Cluster Recife / Olinda Metropolitano',
    ufPrimary: 'PE',
    ufsSecondary: ['PB', 'AL'],
    setting: 'Comunidade Urbana',
    caseCount: 38,
    snpDistanceMax: 4,
    lineage: 'Linhagem 4 (Euro-Americana / LAM)',
    resistanceProfile: 'MDR-TB',
    keyMutations: ['rpoB S531L', 'katG S315T'],
    firstDetected: '2024-11-05',
    lastDetected: '2026-07-11',
    alertLevel: 'Moderado',
    growthRatePct: 12.4,
    description: 'Cadeia de transmissão associada a transporte público intermunicipal na Região Metropolitana do Recife com ramificações em João Pessoa.',
    coordinates: [480, 215]
  },
  {
    id: 'CL-SP-04',
    code: 'BR-SP-BEIJ-04',
    name: 'Cluster Linhagem Beijing Importada / Porto de Santos',
    ufPrimary: 'SP',
    ufsSecondary: ['PR'],
    setting: 'Abrigo / Vulnerabilidade',
    caseCount: 21,
    snpDistanceMax: 0,
    lineage: 'Linhagem 2 (Beijing)',
    resistanceProfile: 'Pre-XDR-TB',
    keyMutations: ['rpoB S531L', 'katG S315T', 'gyrA A90V'],
    firstDetected: '2025-06-20',
    lastDetected: '2026-07-29',
    alertLevel: 'Crítico',
    growthRatePct: 65.0,
    description: 'Surto emergente da genotipagem Beijing (raro no Brasil), associado a rotas marítimas internacionais e trabalhadores portuários.',
    coordinates: [335, 435]
  },
  {
    id: 'CL-BA-02',
    code: 'BR-BA-PRIS-02',
    name: 'Cluster Prisional Salvador / Feira de Santana',
    ufPrimary: 'BA',
    ufsSecondary: ['SE'],
    setting: 'Sistema Prisional',
    caseCount: 31,
    snpDistanceMax: 2,
    lineage: 'Linhagem 4 (Euro-Americana / LAM)',
    resistanceProfile: 'Sensível',
    keyMutations: [],
    firstDetected: '2025-01-08',
    lastDetected: '2026-07-02',
    alertLevel: 'Moderado',
    growthRatePct: 9.1,
    description: 'Cluster sensível com alta taxa de ataque em unidades prisionais do Recôncavo Baiano.',
    coordinates: [430, 290]
  },
  {
    id: 'CL-MS-01',
    code: 'BR-MS-FRON-01',
    name: 'Cluster Corumbá / Pedro Juan Caballero',
    ufPrimary: 'MS',
    ufsSecondary: ['MT', 'PR'],
    setting: 'População Indígena / Fronteira',
    caseCount: 27,
    snpDistanceMax: 3,
    lineage: 'Linhagem 4 (Euro-Americana / LAM)',
    resistanceProfile: 'MDR-TB',
    keyMutations: ['rpoB S531L', 'inhA promoter -15C>T'],
    firstDetected: '2024-09-30',
    lastDetected: '2026-06-30',
    alertLevel: 'Moderado',
    growthRatePct: 14.2,
    description: 'Disseminação binacional em faixa de fronteira com o Paraguai e Bolívia com descontinuidade de tratamento fenotípico.',
    coordinates: [240, 400]
  }
];

// Inter-State Transmission Arcs (Genomic Linkages)
export const TRANSMISSION_ARCS: TransmissionArc[] = [
  {
    id: 'ARC-01',
    fromUF: 'AM',
    toUF: 'SP',
    fromCoords: [160, 200],
    toCoords: [330, 420],
    casesCount: 14,
    clusterId: 'CL-SP-01',
    snpDistance: 1,
    lineage: 'Linhagem 4 (LAM)'
  },
  {
    id: 'ARC-02',
    fromUF: 'RJ',
    toUF: 'MG',
    fromCoords: [420, 425],
    toCoords: [390, 360],
    casesCount: 11,
    clusterId: 'CL-RJ-02',
    snpDistance: 2,
    lineage: 'Linhagem 4 (Harlem)'
  },
  {
    id: 'ARC-03',
    fromUF: 'PE',
    toUF: 'PB',
    fromCoords: [480, 215],
    toCoords: [495, 190],
    casesCount: 8,
    clusterId: 'CL-PE-01',
    snpDistance: 3,
    lineage: 'Linhagem 4 (LAM)'
  },
  {
    id: 'ARC-04',
    fromUF: 'RS',
    toUF: 'SC',
    fromCoords: [265, 545],
    toCoords: [290, 500],
    casesCount: 7,
    clusterId: 'CL-RS-05',
    snpDistance: 1,
    lineage: 'Linhagem 4 (LAM)'
  },
  {
    id: 'ARC-05',
    fromUF: 'SP',
    toUF: 'PR',
    fromCoords: [330, 420],
    toCoords: [280, 465],
    casesCount: 9,
    clusterId: 'CL-SP-04',
    snpDistance: 0,
    lineage: 'Linhagem 2 (Beijing)'
  },
  {
    id: 'ARC-06',
    fromUF: 'BA',
    toUF: 'SE',
    fromCoords: [430, 290],
    toCoords: [475, 260],
    casesCount: 6,
    clusterId: 'CL-BA-02',
    snpDistance: 2,
    lineage: 'Linhagem 4 (LAM)'
  },
  {
    id: 'ARC-07',
    fromUF: 'MS',
    toUF: 'MT',
    fromCoords: [240, 400],
    toCoords: [230, 310],
    casesCount: 5,
    clusterId: 'CL-MS-01',
    snpDistance: 3,
    lineage: 'Linhagem 4 (LAM)'
  }
];

// Drug Resistance Mutations Data
export const DRUG_MUTATIONS: DrugMutationData[] = [
  {
    gene: 'rpoB',
    mutation: 'S531L',
    drug: 'Rifampicina',
    category: 'Primeira Linha',
    count: 215,
    prevalencePct: 72.5,
    phenotypicConcordancePct: 99.1,
    clinicalImpact: 'Confere alta resistência à Rifampicina. Requer substituição imediata por Bedaquilina/Delamanid no regime.'
  },
  {
    gene: 'katG',
    mutation: 'S315T',
    drug: 'Isoniazida',
    category: 'Primeira Linha',
    count: 198,
    prevalencePct: 66.8,
    phenotypicConcordancePct: 98.6,
    clinicalImpact: 'Resistência de alto nível à Isoniazida. Invalida o uso mesmo em altas doses.'
  },
  {
    gene: 'inhA',
    mutation: 'promoter -15C>T',
    drug: 'Isoniazida & Etionamida',
    category: 'Primeira Linha',
    count: 54,
    prevalencePct: 18.2,
    phenotypicConcordancePct: 96.4,
    clinicalImpact: 'Baixo nível de resistência à Isoniazida, mas com resistência cruzada à Etionamida.'
  },
  {
    gene: 'gyrA',
    mutation: 'D94G',
    drug: 'Levofloxacino / Moxifloxacino',
    category: 'Segunda Linha',
    count: 42,
    prevalencePct: 14.1,
    phenotypicConcordancePct: 97.8,
    clinicalImpact: 'Resistência a Fluoroquinolonas. Reclassifica o caso como Pre-XDR TB.'
  },
  {
    gene: 'pncA',
    mutation: 'Q10P / V139A variants',
    drug: 'Pirazinamida',
    category: 'Primeira Linha',
    count: 88,
    prevalencePct: 29.6,
    phenotypicConcordancePct: 94.2,
    clinicalImpact: 'Perda de suscetibilidade à Pirazinamida; teste fenotípico costuma ser instável, WGS é o padrão ouro.'
  },
  {
    gene: 'rrs',
    mutation: 'A1401G',
    drug: 'Amicacina / Capreomicina',
    category: 'Segunda Linha',
    count: 18,
    prevalencePct: 6.0,
    phenotypicConcordancePct: 98.9,
    clinicalImpact: 'Resistência aos injetáveis de segunda linha; marca de XDR-TB clássico.'
  },
  {
    gene: 'embB',
    mutation: 'M306V',
    drug: 'Etambutol',
    category: 'Primeira Linha',
    count: 76,
    prevalencePct: 25.6,
    phenotypicConcordancePct: 91.5,
    clinicalImpact: 'Resistência moderada ao Etambutol.'
  }
];

// Mock Isolates Data (Sample subset of 40 isolates for the table)
export const MOCK_ISOLATES: Isolate[] = Array.from({ length: 42 }).map((_, i) => {
  const ufs = ['SP', 'RJ', 'AM', 'RS', 'PE', 'BA', 'MS', 'CE', 'MG', 'PA'];
  const uf = ufs[i % ufs.length];
  const isMDR = i % 4 === 0;
  const isPreXDR = i % 11 === 0;
  const isXDR = i % 23 === 0;
  
  let resistance: 'Sensível' | 'Monorresistente' | 'MDR-TB' | 'Pre-XDR-TB' | 'XDR-TB' = 'Sensível';
  let mutations: string[] = [];

  if (isXDR) {
    resistance = 'XDR-TB';
    mutations = ['rpoB S531L', 'katG S315T', 'gyrA D94G', 'rrs A1401G'];
  } else if (isPreXDR) {
    resistance = 'Pre-XDR-TB';
    mutations = ['rpoB S531L', 'katG S315T', 'gyrA D94G'];
  } else if (isMDR) {
    resistance = 'MDR-TB';
    mutations = ['rpoB S531L', 'katG S315T'];
  } else if (i % 3 === 0) {
    resistance = 'Monorresistente';
    mutations = ['katG S315T'];
  }

  const lineages: any[] = [
    'Linhagem 4 (Euro-Americana / LAM)',
    'Linhagem 4 (Harlem)',
    'Linhagem 4 (Ghana / X-type)',
    'Linhagem 2 (Beijing)'
  ];

  const clusters = ['CL-SP-01', 'CL-AM-03', 'CL-RJ-02', 'CL-RS-05', 'CL-PE-01', null];
  const settings: any[] = ['Sistema Prisional', 'Comunidade Urbana', 'Unidade Hospitalar', 'População Indígena / Fronteira'];
  const municipios: Record<string, string> = {
    SP: 'São Paulo', RJ: 'Rio de Janeiro', AM: 'Manaus', RS: 'Porto Alegre',
    PE: 'Recife', BA: 'Salvador', MS: 'Campo Grande', CE: 'Fortaleza', MG: 'Belo Horizonte', PA: 'Belém'
  };

  const day = (i % 28) + 1;
  const month = (i % 6) + 1;
  
  return {
    id: `ISO-BR-2026-${(1000 + i).toString()}`,
    sampleId: `LAC-${uf}-26-${(4500 + i).toString()}`,
    lacenId: `LACEN-${uf}`,
    dateCollected: `2026-0${month > 6 ? 6 : month}-${day < 10 ? '0' + day : day}`,
    dateSequenced: `2026-0${month > 6 ? 6 : month}-${(day + 2) < 10 ? '0' + (day + 2) : day + 2}`,
    uf,
    municipio: municipios[uf] || 'Capital',
    age: 18 + (i * 3) % 55,
    gender: i % 2 === 0 ? 'M' : 'F',
    lineage: lineages[i % lineages.length],
    sublineage: `L4.1.2.${(i % 5) + 1}`,
    resistanceProfile: resistance,
    mutations,
    clusterId: clusters[i % clusters.length],
    snpToRoot: (i % 4),
    setting: settings[i % settings.length],
    coverageDepth: 95 + (i * 7) % 60,
    fastqQuality: 34 + (i % 4),
    hivStatus: i % 5 === 0 ? 'Positivo' : 'Negativo',
    previousTreatment: i % 3 === 0
  };
});

// Transmission Network graph nodes
export const TRANSMISSION_NODES: TransmissionNode[] = [
  {
    id: 'ND-01',
    label: 'Index SP-01 (Prisional Centro)',
    uf: 'SP',
    setting: 'Sistema Prisional',
    isolateCount: 18,
    snpDivergence: 0,
    isIndexCase: true,
    connections: ['ND-02', 'ND-03', 'ND-04']
  },
  {
    id: 'ND-02',
    label: 'Contatos Familiares (Zona Leste SP)',
    uf: 'SP',
    setting: 'Comunidade Urbana',
    isolateCount: 12,
    snpDivergence: 1,
    connections: ['ND-05']
  },
  {
    id: 'ND-03',
    label: 'Transferência Inter-Prisional (Vale do Paraíba)',
    uf: 'SP',
    setting: 'Sistema Prisional',
    isolateCount: 9,
    snpDivergence: 1,
    connections: ['ND-06']
  },
  {
    id: 'ND-04',
    label: 'Disseminação Interestadual (Baixada Fluminense)',
    uf: 'RJ',
    setting: 'Comunidade Urbana',
    isolateCount: 14,
    snpDivergence: 2,
    connections: ['ND-07']
  },
  {
    id: 'ND-05',
    label: 'UBS Sapopemba (Adesão Incompleta)',
    uf: 'SP',
    setting: 'Comunidade Urbana',
    isolateCount: 5,
    snpDivergence: 2,
    connections: []
  },
  {
    id: 'ND-06',
    label: 'Penitenciária Taubaté',
    uf: 'SP',
    setting: 'Sistema Prisional',
    isolateCount: 7,
    snpDivergence: 2,
    connections: []
  },
  {
    id: 'ND-07',
    label: 'Hospital Estadual Duque de Caxias',
    uf: 'RJ',
    setting: 'Unidade Hospitalar',
    isolateCount: 8,
    snpDivergence: 3,
    connections: []
  }
];

// Overview KPIs
export const OVERVIEW_KPIS: KpiMetrics = {
  totalSequenced: 2840,
  sequencedTrendPct: 24.5,
  activeClusters: 42,
  criticalClusters: 8,
  mdrXdrCount: 247,
  mdrXdrRatePct: 8.7,
  avgDaysToDetectionWGS: 4.2,
  avgDaysToDetectionPheno: 58.0,
  daysSaved: 53.8,
  interstateArcsCount: 14,
  roiEstimatedSavingsBRL: 42500000 // R$ 42.5 Milhões
};

// Lineage Distribution Pie Chart Data
export const LINEAGE_DISTRIBUTION = [
  { name: 'Linhagem 4 (LAM / Euro-Americana)', value: 68.4, count: 1942, color: '#0d9488' },
  { name: 'Linhagem 4 (Harlem)', value: 16.2, count: 460, color: '#0284c7' },
  { name: 'Linhagem 4 (Ghana / X-type)', value: 7.1, count: 202, color: '#6366f1' },
  { name: 'Linhagem 2 (Beijing)', value: 5.3, count: 151, color: '#f59e0b' },
  { name: 'Outras (Linhagem 1 & 3)', value: 3.0, count: 85, color: '#64748b' }
];

// Temporal trend data
export const TEMPORAL_TREND = [
  { period: 'Q1 2024', sequenciados: 280, mdr: 22, clustersAtivos: 18, tempoDias: 52 },
  { period: 'Q2 2024', sequenciados: 340, mdr: 28, clustersAtivos: 22, tempoDias: 45 },
  { period: 'Q3 2024', sequenciados: 410, mdr: 35, clustersAtivos: 26, tempoDias: 36 },
  { period: 'Q4 2024', sequenciados: 490, mdr: 42, clustersAtivos: 31, tempoDias: 24 },
  { period: 'Q1 2025', sequenciados: 560, mdr: 49, clustersAtivos: 34, tempoDias: 14 },
  { period: 'Q2 2025', sequenciados: 630, mdr: 54, clustersAtivos: 38, tempoDias: 8.5 },
  { period: 'Q3 2025', sequenciados: 680, mdr: 59, clustersAtivos: 40, tempoDias: 5.2 },
  { period: 'Q4 2025', sequenciados: 720, mdr: 63, clustersAtivos: 41, tempoDias: 4.8 },
  { period: 'Q1 2026', sequenciados: 790, mdr: 68, clustersAtivos: 42, tempoDias: 4.2 },
  { period: 'Q2 2026', sequenciados: 840, mdr: 74, clustersAtivos: 42, tempoDias: 4.2 }
];

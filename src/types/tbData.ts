export type Region = 'Norte' | 'Nordeste' | 'Centro-Oeste' | 'Sudeste' | 'Sul';

export type ResistanceProfile = 'Sensível' | 'Monorresistente' | 'MDR-TB' | 'Pre-XDR-TB' | 'XDR-TB';

export type LineageGroup = 
  | 'Linhagem 4 (Euro-Americana / LAM)'
  | 'Linhagem 4 (Harlem)'
  | 'Linhagem 4 (Ghana / X-type)'
  | 'Linhagem 2 (Beijing)'
  | 'Linhagem 1 (Indo-Oceânica)'
  | 'Linhagem 3 (Leste-Africano-Indiana)';

export type AlertLevel = 'Crítico' | 'Moderado' | 'Baixo' | 'Sob Monitoramento';

export type SettingType = 'Sistema Prisional' | 'Comunidade Urbana' | 'Unidade Hospitalar' | 'População Indígena / Fronteira' | 'Abrigo / Vulnerabilidade';

export interface StateData {
  uf: string;
  name: string;
  region: Region;
  totalSequenced: number;
  totalCasesReported: number;
  wgsCoveragePercent: number;
  mdrCount: number;
  mdrPercent: number;
  activeClustersCount: number;
  topLineage: string;
  path: string; // SVG path data or relative map coordinates
  center: [number, number]; // [x, y] on map projection
  riskLevel: AlertLevel;
}

export interface ClusterData {
  id: string;
  code: string;
  name: string;
  ufPrimary: string;
  ufsSecondary: string[];
  setting: SettingType;
  caseCount: number;
  snpDistanceMax: number; // Maximum SNP distance within cluster (e.g., 3 SNPs)
  lineage: LineageGroup;
  resistanceProfile: ResistanceProfile;
  keyMutations: string[]; // e.g. ['rpoB S531L', 'katG S315T']
  firstDetected: string;
  lastDetected: string;
  alertLevel: AlertLevel;
  growthRatePct: number; // quarterly growth
  description: string;
  coordinates: [number, number]; // [x, y] map position
}

export interface TransmissionArc {
  id: string;
  fromUF: string;
  toUF: string;
  fromCoords: [number, number];
  toCoords: [number, number];
  casesCount: number;
  clusterId: string;
  snpDistance: number;
  lineage: string;
}

export interface DrugMutationData {
  gene: string;
  mutation: string;
  drug: string;
  category: 'Primeira Linha' | 'Segunda Linha';
  count: number;
  prevalencePct: number;
  phenotypicConcordancePct: number;
  clinicalImpact: string;
}

export interface Isolate {
  id: string;
  sampleId: string;
  lacenId: string;
  dateCollected: string;
  dateSequenced: string;
  uf: string;
  municipio: string;
  age: number;
  gender: 'M' | 'F';
  lineage: LineageGroup;
  sublineage: string;
  resistanceProfile: ResistanceProfile;
  mutations: string[];
  clusterId: string | null;
  snpToRoot: number;
  setting: SettingType;
  coverageDepth: number;
  fastqQuality: number;
  hivStatus: 'Positivo' | 'Negativo' | 'Não Informado';
  previousTreatment: boolean;
}

export interface TransmissionNode {
  id: string;
  label: string;
  uf: string;
  setting: SettingType;
  isolateCount: number;
  snpDivergence: number;
  isIndexCase?: boolean;
  connections: string[]; // array of target node IDs
}

export interface FilterState {
  region: string;
  uf: string;
  period: string;
  resistanceProfile: string;
  lineage: string;
  alertLevel: string;
  setting: string;
  searchQuery: string;
}

export interface KpiMetrics {
  totalSequenced: number;
  sequencedTrendPct: number;
  activeClusters: number;
  criticalClusters: number;
  mdrXdrCount: number;
  mdrXdrRatePct: number;
  avgDaysToDetectionWGS: number;
  avgDaysToDetectionPheno: number;
  daysSaved: number;
  interstateArcsCount: number;
  roiEstimatedSavingsBRL: number;
}

import React from 'react';
import { Dna, ShieldAlert, Clock, TrendingUp, DollarSign, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import type { KpiMetrics } from '../types/tbData';

interface KpiSectionProps {
  kpis: KpiMetrics;
  onOpenProvocation: () => void;
}

export const KpiSection: React.FC<KpiSectionProps> = ({ kpis, onOpenProvocation }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
      gap: '16px',
      marginBottom: '24px'
    }}>

      {/* KPI 1: Isolados Sequenciados */}
      <div className="offwhite-card" style={{ padding: '18px 20px', borderRadius: 'var(--radius-md)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            Total Sequenciado por WGS
          </span>
          <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'var(--accent-teal-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-teal-dark)' }}>
            <Dna size={20} />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <span style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
            {kpis.totalSequenced.toLocaleString('pt-BR')}
          </span>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-emerald)', display: 'inline-flex', alignItems: 'center', gap: '2px' }}>
            <TrendingUp size={12} /> +{kpis.sequencedTrendPct}%
          </span>
        </div>

        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '6px' }}>
          Meta Piloto MS: 15% dos casos confirmados nos LACENs de referência
        </p>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', backgroundColor: 'var(--accent-teal)' }} />
      </div>

      {/* KPI 2: Clusters Genômicos Ativos */}
      <div className="offwhite-card" style={{ padding: '18px 20px', borderRadius: 'var(--radius-md)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            Clusters Genômicos Ativos
          </span>
          <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'var(--accent-rose-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-rose)' }}>
            <ShieldAlert size={20} />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <span style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
            {kpis.activeClusters}
          </span>
          <span className="badge badge-critico" style={{ fontSize: '0.7rem' }}>
            {kpis.criticalClusters} Críticos (&lt;2 SNPs)
          </span>
        </div>

        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '6px' }}>
          Detecção de micro-surto (&lt;5 SNPs de distância em genoma completo)
        </p>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', backgroundColor: 'var(--accent-rose)' }} />
      </div>

      {/* KPI 3: Resistência MDR / XDR */}
      <div className="offwhite-card" style={{ padding: '18px 20px', borderRadius: 'var(--radius-md)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            Prevalência MDR / XDR-TB
          </span>
          <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'var(--accent-amber-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-amber)' }}>
            <Dna size={20} />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <span style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
            {kpis.mdrXdrCount}
          </span>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-amber)' }}>
            ({kpis.mdrXdrRatePct}%)
          </span>
        </div>

        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '6px' }}>
          Identificação precoce de mutações *rpoB*, *katG*, *gyrA*
        </p>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', backgroundColor: 'var(--accent-amber)' }} />
      </div>

      {/* KPI 4: Tempo de Resposta Epidemiológica */}
      <div className="offwhite-card" style={{ padding: '18px 20px', borderRadius: 'var(--radius-md)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            Tempo para Diagnóstico
          </span>
          <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'var(--accent-emerald-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-emerald)' }}>
            <Clock size={20} />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <span style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent-emerald)', letterSpacing: '-0.03em' }}>
            {kpis.avgDaysToDetectionWGS} dias
          </span>
          <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
            {kpis.avgDaysToDetectionPheno} dias (Fenotípico)
          </span>
        </div>

        <p style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', fontWeight: 600, marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <CheckCircle2 size={13} /> Redução de {kpis.daysSaved} dias no diagnóstico!
        </p>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', backgroundColor: 'var(--accent-emerald)' }} />
      </div>

      {/* KPI 5: ROI / Provocação Financeira ao SUS */}
      <div className="offwhite-card" style={{
        padding: '18px 20px',
        borderRadius: 'var(--radius-md)',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#faf8ff',
        borderColor: '#e0e7ff',
        cursor: 'pointer'
      }} onClick={onOpenProvocation}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-indigo)' }}>
            Economia Estimada SUS (ROI)
          </span>
          <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'var(--accent-indigo-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-indigo)' }}>
            <DollarSign size={20} />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <span style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-indigo)', letterSpacing: '-0.03em' }}>
            R$ 42,5 Mi
          </span>
          <span style={{ fontSize: '0.725rem', color: 'var(--accent-indigo)', fontWeight: 700, display: 'inline-flex', alignItems: 'center' }}>
            Ver Análise <ArrowUpRight size={12} />
          </span>
        </div>

        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
          Economia em diárias de UTI, falha terapêutica e transmissão evitada
        </p>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', backgroundColor: 'var(--accent-indigo)' }} />
      </div>

    </div>
  );
};

import React from 'react';
import { DRUG_MUTATIONS, LINEAGE_DISTRIBUTION, TEMPORAL_TREND } from '../data/mockData';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend, LineChart, Line, CartesianGrid } from 'recharts';
import { Dna, Activity, ShieldCheck, Clock, Zap } from 'lucide-react';

export const ResistanceGenomics: React.FC = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px', marginBottom: '24px' }}>
      
      {/* Chart 1: Mutações de Resistência mais Prevalentes */}
      <div className="offwhite-card" style={{ padding: '20px', borderRadius: 'var(--radius-lg)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Dna size={18} color="var(--accent-teal)" />
              Perfis de Mutações de Resistência Identificadas (WGS)
            </h3>
            <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
              Detecção direta de genótipos de resistência por sequenciamento completo
            </p>
          </div>
          <span className="badge badge-teal">
            <ShieldCheck size={12} />
            98.2% Concordância Fenotípica
          </span>
        </div>

        <div style={{ width: '100%', height: '240px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={DRUG_MUTATIONS} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="mutation" tick={{ fontSize: 11, fill: '#475569' }} interval={0} angle={-15} textAnchor="end" />
              <YAxis tick={{ fontSize: 11, fill: '#475569' }} label={{ value: 'Isolados (N)', angle: -90, position: 'insideLeft', fontSize: 11 }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.775rem' }}
                formatter={(val: any, _name: any, item: any) => [`${val} isolados (${item.payload.prevalencePct}%)`, `Gene: ${item.payload.gene} (${item.payload.drug})`]}
              />
              <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                {DRUG_MUTATIONS.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.category === 'Primeira Linha' ? 'var(--accent-teal)' : 'var(--accent-rose)'} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: 'var(--accent-teal)' }} />
            <span>Fármacos de 1ª Linha (Rifampicina, Isoniazida, Pirazinamida)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: 'var(--accent-rose)' }} />
            <span>Fármacos de 2ª Linha (Fluoroquinolonas, Injetáveis)</span>
          </div>
        </div>
      </div>

      {/* Chart 2: Linhagens Genômicas em Circulação */}
      <div className="offwhite-card" style={{ padding: '20px', borderRadius: 'var(--radius-lg)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Activity size={18} color="var(--accent-indigo)" />
              Distribuição de Linhagens de M. tuberculosis
            </h3>
            <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
              Prevalência de sub-linhagens na amostragem nacional (2,840 isolados)
            </p>
          </div>
        </div>

        <div style={{ width: '100%', height: '240px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={LINEAGE_DISTRIBUTION}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={85}
                paddingAngle={4}
                dataKey="value"
              >
                {LINEAGE_DISTRIBUTION.map((entry, index) => (
                  <Cell key={`pie-cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.775rem' }}
                formatter={(val: any, name: any, item: any) => [`${val}% (${item.payload.count} isolados)`, name]}
              />
              <Legend 
                layout="vertical" 
                verticalAlign="middle" 
                align="right"
                wrapperStyle={{ fontSize: '0.725rem', paddingLeft: '10px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Chart 3: Tendência Temporal do Tempo para Resposta (WGS vs Fenotípico) */}
      <div className="offwhite-card" style={{ padding: '20px', borderRadius: 'var(--radius-lg)', gridColumn: '1 / -1' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={18} color="var(--accent-emerald)" />
              Redução Drástica do Tempo até a Resposta Epidemiológica (2024 - 2026)
            </h3>
            <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
              Comparativo de tempo para diagnóstico e ajuste terapêutico (Dias corridos a partir da coleta do escarro)
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="badge badge-baixo">
              <Zap size={12} />
              Tempo WGS Atual: 4.2 Dias
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              vs 58 dias no teste bacteriológico tradicional
            </span>
          </div>
        </div>

        <div style={{ width: '100%', height: '220px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={TEMPORAL_TREND} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="period" tick={{ fontSize: 11, fill: '#475569' }} />
              <YAxis yAxisId="left" tick={{ fontSize: 11, fill: '#475569' }} label={{ value: 'Tempo Médio (Dias)', angle: -90, position: 'insideLeft', fontSize: 10 }} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: '#475569' }} label={{ value: 'Isolados Sequenciados', angle: 90, position: 'insideRight', fontSize: 10 }} />
              <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.775rem' }} />
              <Legend wrapperStyle={{ fontSize: '0.75rem' }} />
              <Line yAxisId="left" type="monotone" dataKey="tempoDias" name="Tempo até Resposta WGS (Dias)" stroke="var(--accent-emerald)" strokeWidth={3} dot={{ r: 4 }} />
              <Line yAxisId="right" type="monotone" dataKey="sequenciados" name="Isolados Sequenciados (N)" stroke="var(--accent-teal)" strokeWidth={2} strokeDasharray="4 4" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

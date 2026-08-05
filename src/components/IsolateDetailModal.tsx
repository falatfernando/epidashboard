import React from 'react';
import type { Isolate } from '../types/tbData';
import { X, Dna, FileCheck, ShieldCheck, Activity, MapPin } from 'lucide-react';

interface IsolateDetailModalProps {
  isolate: Isolate | null;
  onClose: () => void;
}

export const IsolateDetailModal: React.FC<IsolateDetailModalProps> = ({ isolate, onClose }) => {
  if (!isolate) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="offwhite-card" 
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '28px',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-hover)'
        }}
      >
        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'var(--accent-teal-light)', color: 'var(--accent-teal-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Dna size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Laudo Epidemiológico de Sequenciamento Completo (WGS)
              </div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                {isolate.id}
              </h2>
            </div>
          </div>

          <button 
            onClick={onClose}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: '4px' }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Status Badge Row */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <span className="badge badge-teal">
            <MapPin size={12} /> {isolate.uf} - {isolate.municipio}
          </span>
          <span className="badge badge-monitoramento">
            {isolate.lacenId}
          </span>
          <span className={`badge ${isolate.resistanceProfile === 'Sensível' ? 'badge-baixo' : 'badge-critico'}`}>
            {isolate.resistanceProfile}
          </span>
          {isolate.clusterId && (
            <span className="badge badge-moderado">
              Pertence ao Cluster {isolate.clusterId}
            </span>
          )}
        </div>

        {/* Patient Metadata Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', padding: '16px', backgroundColor: 'var(--bg-card-subtle)', borderRadius: 'var(--radius-md)', marginBottom: '20px', fontSize: '0.8rem' }}>
          <div>
            <span style={{ color: 'var(--text-muted)', display: 'block' }}>Amostra Original LACEN</span>
            <strong style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{isolate.sampleId}</strong>
          </div>
          <div>
            <span style={{ color: 'var(--text-muted)', display: 'block' }}>Data da Coleta / WGS</span>
            <strong>{isolate.dateCollected} / {isolate.dateSequenced}</strong>
          </div>
          <div>
            <span style={{ color: 'var(--text-muted)', display: 'block' }}>Dados do Paciente</span>
            <strong>{isolate.age} anos • Sexo {isolate.gender} • HIV {isolate.hivStatus}</strong>
          </div>
          <div>
            <span style={{ color: 'var(--text-muted)', display: 'block' }}>Histórico de Tratamento</span>
            <strong>{isolate.previousTreatment ? 'Tratamento Prévio Relatado' : 'Caso Novo (Sem prévio)'}</strong>
          </div>
        </div>

        {/* WGS Quality & Coverage Panel */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <FileCheck size={16} color="var(--accent-teal)" />
            Métricas de Qualidade de Sequenciamento (QC Fastq / Alignment)
          </h4>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', textAlign: 'center' }}>
            <div style={{ padding: '12px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', backgroundColor: '#ffffff' }}>
              <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', display: 'block' }}>Profundidade de Cobertura</span>
              <strong style={{ fontSize: '1.1rem', color: 'var(--accent-teal-dark)' }}>{isolate.coverageDepth}x</strong>
            </div>

            <div style={{ padding: '12px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', backgroundColor: '#ffffff' }}>
              <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', display: 'block' }}>Qualidade Média Phred</span>
              <strong style={{ fontSize: '1.1rem', color: 'var(--accent-emerald)' }}>Q{isolate.fastqQuality}</strong>
            </div>

            <div style={{ padding: '12px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', backgroundColor: '#ffffff' }}>
              <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', display: 'block' }}>Mapeamento Ref. H37Rv</span>
              <strong style={{ fontSize: '1.1rem', color: 'var(--accent-indigo)' }}>99.4%</strong>
            </div>
          </div>
        </div>

        {/* Genomic Lineage & Mutation Profiling */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Dna size={16} color="var(--accent-indigo)" />
            Perfil Genotípico de Resistência & Variantes Encontradas
          </h4>

          {isolate.mutations.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {isolate.mutations.map((mut) => (
                <div 
                  key={mut}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: '#fff1f2',
                    border: '1px solid rgba(225, 29, 72, 0.2)',
                    fontSize: '0.8rem'
                  }}
                >
                  <div>
                    <strong style={{ color: 'var(--accent-rose)', fontFamily: 'var(--font-mono)' }}>{mut}</strong>
                    <div style={{ fontSize: '0.725rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                      Mutações identificadas por alinhamento de alta sensibilidade
                    </div>
                  </div>

                  <span className="badge badge-critico" style={{ fontSize: '0.675rem' }}>
                    Resistência Confirmada
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ padding: '14px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--accent-emerald-light)', color: 'var(--accent-emerald)', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={18} />
              Nenhuma mutação de resistência identificada nos genes alvo (rpoB, katG, inhA, gyrA, pncA, rrs, embB). Genótipo suscetível aos fármacos de primeira linha.
            </div>
          )}
        </div>

        {/* Recommended Clinical Management Guidance */}
        <div style={{ padding: '16px', borderRadius: 'var(--radius-md)', backgroundColor: '#faf8ff', border: '1px solid #e0e7ff' }}>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--accent-indigo)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Activity size={16} /> Recomendações Condutas SUS (Baseadas no WGS)
          </h4>
          <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
            {isolate.resistanceProfile === 'MDR-TB' || isolate.resistanceProfile === 'Pre-XDR-TB' || isolate.resistanceProfile === 'XDR-TB'
              ? 'Indicação imediata de substituição do esquema RHZE básico para o regime BPaLM (Bedaquilina, Pretomanida, Linezolida e Moxifloxacino) via referência estadual. Notificar busca ativa de contatos no cluster.'
              : 'Manter esquema padrão de primeira linha (2RHZE/4RH). Iniciar monitoramento genômico continuado de contatos.'}
          </p>
        </div>

      </div>
    </div>
  );
};

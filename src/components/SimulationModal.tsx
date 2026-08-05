import React, { useState } from 'react';
import { X, Sparkles, ShieldCheck } from 'lucide-react';

interface SimulationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SimulationModal: React.FC<SimulationModalProps> = ({ isOpen, onClose }) => {
  const [coveragePct, setCoveragePct] = useState(25);
  const [turnaroundDays, setTurnaroundDays] = useState(4);

  if (!isOpen) return null;

  // Live simulation math
  const casesPrevented = Math.round(180 * (coveragePct / 15) * (7 / turnaroundDays));
  const daysSavedTotal = Math.round(casesPrevented * 42);
  const savingsBRL = (casesPrevented * 38500).toLocaleString('pt-BR');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="offwhite-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '700px',
          padding: '28px',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-hover)'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'var(--accent-indigo-light)', color: 'var(--accent-indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sparkles size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Simulador Epidemiológico de Impacto WGS
              </h3>
              <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)' }}>
                Modelagem dinâmica do efeito do Sequenciamento de Genoma Completo na prevenção de surtos.
              </p>
            </div>
          </div>

          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
            <X size={22} />
          </button>
        </div>

        {/* Controls Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
          
          {/* Slider 1: Cobertura WGS */}
          <div style={{ padding: '14px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-card-subtle)', border: '1px solid var(--border-color)' }}>
            <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
              <span>Meta Cobertura WGS nos LACENs:</span>
              <strong style={{ color: 'var(--accent-teal-dark)' }}>{coveragePct}% dos Casos</strong>
            </label>
            <input 
              type="range" 
              min="5" 
              max="50" 
              value={coveragePct} 
              onChange={(e) => setCoveragePct(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--accent-teal)' }}
            />
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Média atual no projeto piloto: 8.5%</span>
          </div>

          {/* Slider 2: Tempo de Resposta */}
          <div style={{ padding: '14px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-card-subtle)', border: '1px solid var(--border-color)' }}>
            <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
              <span>Tempo Médio WGS (Laudo LACEN):</span>
              <strong style={{ color: 'var(--accent-emerald)' }}>{turnaroundDays} Dias</strong>
            </label>
            <input 
              type="range" 
              min="2" 
              max="15" 
              value={turnaroundDays} 
              onChange={(e) => setTurnaroundDays(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--accent-emerald)' }}
            />
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Método fenotípico tradicional: 58 dias</span>
          </div>

        </div>

        {/* Simulated Impact Output */}
        <div style={{ padding: '20px', borderRadius: 'var(--radius-md)', backgroundColor: '#f0fdf4', border: '1.5px solid #bbf7d0', marginBottom: '20px' }}>
          <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--accent-emerald)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ShieldCheck size={18} /> Resultados Projetados da Intervenção (Período de 12 Meses):
          </h4>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '12px' }}>
            
            <div style={{ padding: '12px', borderRadius: 'var(--radius-sm)', backgroundColor: '#ffffff', border: '1px solid #d1fae5' }}>
              <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', display: 'block' }}>Casos Secundários Evitados</span>
              <strong style={{ fontSize: '1.3rem', color: 'var(--accent-emerald)' }}>{casesPrevented} pacientes</strong>
            </div>

            <div style={{ padding: '12px', borderRadius: 'var(--radius-sm)', backgroundColor: '#ffffff', border: '1px solid #d1fae5' }}>
              <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', display: 'block' }}>Dias de Internação Poupados</span>
              <strong style={{ fontSize: '1.3rem', color: 'var(--accent-teal-dark)' }}>{daysSavedTotal} dias</strong>
            </div>

            <div style={{ padding: '12px', borderRadius: 'var(--radius-sm)', backgroundColor: '#ffffff', border: '1px solid #d1fae5' }}>
              <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', display: 'block' }}>Economia Direta no SUS</span>
              <strong style={{ fontSize: '1.3rem', color: 'var(--accent-indigo)' }}>R$ {savingsBRL}</strong>
            </div>

          </div>
        </div>

        <button className="btn btn-primary" onClick={onClose} style={{ width: '100%' }}>
          Concluir Simulação & Aplicar Cenário
        </button>

      </div>
    </div>
  );
};

import React from 'react';
import { Dna, ShieldAlert, FileSpreadsheet, Sparkles, Activity, Layers } from 'lucide-react';

interface HeaderProps {
  onOpenProvocation: () => void;
  onOpenSimulation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenProvocation, onOpenSimulation }) => {
  return (
    <header className="offwhite-card" style={{ padding: '20px 28px', marginBottom: '20px', borderRadius: 'var(--radius-lg)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        
        {/* Brand & Lab Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* LaPAM Lab Logo */}
          <div style={{
            padding: '6px 12px',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src="./lapam_logo.png" 
              alt="Logo LaPAM" 
              style={{ height: '44px', width: 'auto', objectFit: 'contain' }} 
            />
          </div>

          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            backgroundColor: 'var(--accent-teal-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-teal-dark)',
            boxShadow: '0 4px 12px rgba(13, 148, 136, 0.15)'
          }}>
            <Dna size={26} />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                VigiTB Genoma BR
              </h1>
              <span className="badge badge-teal">
                <Activity size={12} />
                Sistema Piloto de Vigilância WGS
              </span>
              <span className="badge badge-monitoramento">
                <Layers size={12} />
                Rede LACEN / SUS
              </span>
              <span style={{ fontSize: '0.725rem', fontWeight: 700, color: 'var(--accent-indigo)', backgroundColor: 'var(--accent-indigo-light)', padding: '3px 8px', borderRadius: '12px' }}>
                Desenvolvido por LaPAM
              </span>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '4px', maxWidth: '720px' }}>
              Plataforma Nacional de Monitoramento Epidemiológico por Sequenciamento de Genoma Completo (WGS) para <em>Mycobacterium tuberculosis</em> no Brasil.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button 
            className="btn btn-secondary"
            onClick={onOpenSimulation}
            style={{ fontSize: '0.825rem' }}
          >
            <Sparkles size={16} color="var(--accent-indigo)" />
            Simulador de Surto
          </button>

          <button 
            className="btn btn-primary"
            onClick={onOpenProvocation}
            style={{ fontSize: '0.825rem', backgroundColor: 'var(--accent-teal-dark)' }}
          >
            <ShieldAlert size={16} />
            Provocação & Impacto no SUS
          </button>

          <button 
            className="btn btn-secondary"
            onClick={() => alert('Relatório Epidemiológico Genômico (PDF/CSV) exportado com sucesso!')}
            style={{ fontSize: '0.825rem' }}
            title="Exportar dados epidemiológicos"
          >
            <FileSpreadsheet size={16} />
            Exportar
          </button>
        </div>

      </div>
    </header>
  );
};

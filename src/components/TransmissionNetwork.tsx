import React from 'react';
import { TRANSMISSION_NODES } from '../data/mockData';
import { Network, GitBranch, ArrowRight, Users, Building, Home, Hospital } from 'lucide-react';

export const TransmissionNetwork: React.FC = () => {
  const getSettingIcon = (setting: string) => {
    switch (setting) {
      case 'Sistema Prisional': return <Building size={14} color="var(--accent-rose)" />;
      case 'Comunidade Urbana': return <Home size={14} color="var(--accent-teal)" />;
      case 'Unidade Hospitalar': return <Hospital size={14} color="var(--accent-amber)" />;
      default: return <Users size={14} color="var(--accent-indigo)" />;
    }
  };

  return (
    <div className="offwhite-card" style={{ padding: '24px', borderRadius: 'var(--radius-lg)', marginBottom: '24px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Network size={20} color="var(--accent-teal)" />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Grafo de Transmissão Genômica & Cadeia de Surtos
            </h3>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Rastreamento fino de transmissão baseada em acúmulo de mutações de nucleotídeo único (SNPs) entre casos index e contatos.
          </p>
        </div>

        <span className="badge badge-critico">
          <GitBranch size={12} />
          Surto SP-01: 48 Isolados (0 - 3 SNPs)
        </span>
      </div>

      {/* Visual Network Flow Diagram */}
      <div style={{
        backgroundColor: '#fafbfc',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-md)',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>

        {/* Index Case Node */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          padding: '14px 18px',
          backgroundColor: '#fff1f2',
          border: '1.5px solid var(--accent-rose)',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-subtle)'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent-rose)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            fontSize: '0.85rem'
          }}>
            SNP-0
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <strong style={{ fontSize: '0.925rem', color: 'var(--text-primary)' }}>
                {TRANSMISSION_NODES[0].label}
              </strong>
              <span className="badge badge-critico" style={{ fontSize: '0.675rem' }}>Caso Index Primário</span>
            </div>
            <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
              UF-SP • Sistema Prisional • 18 Isolados Genome-Idênticos (0 SNPs de diferença) • Res. MDR (rpoB S531L + katG S315T)
            </p>
          </div>
        </div>

        {/* Downstream Transmission Level 1 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <ArrowRight size={18} color="var(--accent-teal)" style={{ transform: 'rotate(90deg)' }} />
          <span style={{ fontSize: '0.725rem', fontWeight: 700, color: 'var(--accent-teal-dark)', backgroundColor: 'var(--accent-teal-light)', padding: '2px 8px', borderRadius: '10px' }}>
            Divergência de 1 SNP (Primeira Geração de Transmissão)
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {TRANSMISSION_NODES.slice(1, 4).map((node) => (
            <div
              key={node.id}
              style={{
                padding: '14px',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-subtle)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {getSettingIcon(node.setting)}
                  {node.label}
                </div>
                <span className="badge badge-teal" style={{ fontSize: '0.675rem' }}>
                  {node.isolateCount} Casos
                </span>
              </div>

              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'flex', justifyContent: 'space-between' }}>
                <span>UF: <strong>{node.uf}</strong></span>
                <span>Divergência: <strong>{node.snpDivergence} SNP</strong></span>
              </div>
            </div>
          ))}
        </div>

        {/* Downstream Transmission Level 2 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <ArrowRight size={18} color="var(--accent-indigo)" style={{ transform: 'rotate(90deg)' }} />
          <span style={{ fontSize: '0.725rem', fontWeight: 700, color: 'var(--accent-indigo)', backgroundColor: 'var(--accent-indigo-light)', padding: '2px 8px', borderRadius: '10px' }}>
            Divergência de 2-3 SNPs (Segunda Geração / Disseminação Hospitalar & Comunitária)
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
          {TRANSMISSION_NODES.slice(4).map((node) => (
            <div
              key={node.id}
              style={{
                padding: '12px',
                backgroundColor: '#f8fafc',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.775rem'
              }}
            >
              <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                {getSettingIcon(node.setting)}
                {node.label}
              </div>
              <div style={{ color: 'var(--text-secondary)', display: 'flex', justifyContent: 'space-between' }}>
                <span>UF: <strong>{node.uf}</strong></span>
                <span>Isolados: <strong>{node.isolateCount}</strong></span>
                <span style={{ color: 'var(--accent-rose)', fontWeight: 600 }}>{node.snpDivergence} SNPs</span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

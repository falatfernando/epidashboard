import React, { useState } from 'react';
import type { Isolate, FilterState } from '../types/tbData';
import { MOCK_ISOLATES } from '../data/mockData';
import { Database, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

interface IsolatesTableProps {
  filters: FilterState;
  onSelectIsolate: (isolate: Isolate) => void;
}

export const IsolatesTable: React.FC<IsolatesTableProps> = ({ filters, onSelectIsolate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  // Filter logic
  const filtered = MOCK_ISOLATES.filter((iso) => {
    if (filters.uf !== 'TODOS' && iso.uf !== filters.uf) return false;
    if (filters.resistanceProfile !== 'TODOS' && iso.resistanceProfile !== filters.resistanceProfile) return false;
    if (filters.lineage !== 'TODOS' && iso.lineage !== filters.lineage) return false;
    if (filters.setting !== 'TODOS' && iso.setting !== filters.setting) return false;
    if (filters.searchQuery.trim() !== '') {
      const q = filters.searchQuery.toLowerCase();
      const matchId = iso.id.toLowerCase().includes(q) || iso.sampleId.toLowerCase().includes(q);
      const matchMut = iso.mutations.some(m => m.toLowerCase().includes(q));
      const matchCluster = iso.clusterId?.toLowerCase().includes(q);
      if (!matchId && !matchMut && !matchCluster) return false;
    }
    return true;
  });

  const totalPages = Math.ceil(filtered.length / pageSize) || 1;
  const startIndex = (currentPage - 1) * pageSize;
  const currentData = filtered.slice(startIndex, startIndex + pageSize);

  const getResistanceBadgeClass = (res: string) => {
    switch (res) {
      case 'XDR-TB': return 'badge-critico';
      case 'Pre-XDR-TB': return 'badge-critico';
      case 'MDR-TB': return 'badge-moderado';
      case 'Monorresistente': return 'badge-monitoramento';
      default: return 'badge-baixo';
    }
  };

  return (
    <div className="offwhite-card" style={{ padding: '24px', borderRadius: 'var(--radius-lg)', marginBottom: '24px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Database size={20} color="var(--accent-teal)" />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Explorador de Amostras Genômicas Sequenciadas (WGS)
            </h3>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Registro individualizado de sequenciamentos nos LACENs com mapeamento de SNPs, linhagem e perfil genotípico de resistência.
          </p>
        </div>

        <span className="badge badge-teal">
          Exibindo {filtered.length} amostras filtradas de {MOCK_ISOLATES.length}
        </span>
      </div>

      {/* Table Component */}
      <div style={{ overflowX: 'auto', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--bg-card-subtle)', borderBottom: '1px solid var(--border-color)', color: 'var(--text-secondary)', fontWeight: 700 }}>
              <th style={{ padding: '12px 14px' }}>ID Amostra / LACEN</th>
              <th style={{ padding: '12px 14px' }}>UF / Município</th>
              <th style={{ padding: '12px 14px' }}>Data Sequenciamento</th>
              <th style={{ padding: '12px 14px' }}>Linhagem / Sub-linhagem</th>
              <th style={{ padding: '12px 14px' }}>Perfil de Resistência</th>
              <th style={{ padding: '12px 14px' }}>Cluster / SNPs</th>
              <th style={{ padding: '12px 14px' }}>Mutações Chave</th>
              <th style={{ padding: '12px 14px', textAlign: 'center' }}>Ações</th>
            </tr>
          </thead>

          <tbody>
            {currentData.map((iso, idx) => (
              <tr 
                key={iso.id}
                style={{
                  borderBottom: idx < currentData.length - 1 ? '1px solid var(--border-color)' : 'none',
                  backgroundColor: idx % 2 === 0 ? '#ffffff' : '#fafbfc',
                  transition: 'background-color 0.15s ease'
                }}
              >
                {/* ID / LACEN */}
                <td style={{ padding: '12px 14px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  <div style={{ color: 'var(--text-primary)' }}>{iso.id}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{iso.sampleId}</div>
                </td>

                {/* UF / Municipio */}
                <td style={{ padding: '12px 14px' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{iso.uf}</div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-secondary)' }}>{iso.municipio}</div>
                </td>

                {/* Data */}
                <td style={{ padding: '12px 14px', color: 'var(--text-secondary)' }}>
                  {iso.dateSequenced}
                </td>

                {/* Linhagem */}
                <td style={{ padding: '12px 14px' }}>
                  <div style={{ fontWeight: 600, color: 'var(--accent-teal-dark)' }}>
                    {iso.lineage.split(' ')[0]} {iso.lineage.split(' ')[1]}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Sub: {iso.sublineage}</div>
                </td>

                {/* Perfil de Resistência */}
                <td style={{ padding: '12px 14px' }}>
                  <span className={`badge ${getResistanceBadgeClass(iso.resistanceProfile)}`}>
                    {iso.resistanceProfile}
                  </span>
                </td>

                {/* Cluster */}
                <td style={{ padding: '12px 14px' }}>
                  {iso.clusterId ? (
                    <div>
                      <strong style={{ color: 'var(--accent-indigo)', fontSize: '0.75rem' }}>{iso.clusterId}</strong>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{iso.snpToRoot} SNPs de raiz</div>
                    </div>
                  ) : (
                    <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>Caso Esporádico</span>
                  )}
                </td>

                {/* Mutações */}
                <td style={{ padding: '12px 14px' }}>
                  {iso.mutations.length > 0 ? (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                      {iso.mutations.map(m => (
                        <span key={m} style={{
                          fontSize: '0.675rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '1px 6px',
                          borderRadius: '4px',
                          backgroundColor: '#f1f5f9',
                          color: 'var(--text-primary)',
                          border: '1px solid #cbd5e1'
                        }}>
                          {m}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span style={{ fontSize: '0.725rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>Sensível</span>
                  )}
                </td>

                {/* Action */}
                <td style={{ padding: '12px 14px', textAlign: 'center' }}>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => onSelectIsolate(iso)}
                    style={{ fontSize: '0.725rem', padding: '4px 8px' }}
                    title="Ver relatório de genoma completo"
                  >
                    <Eye size={13} /> Laudo WGS
                  </button>
                </td>
              </tr>
            ))}

            {currentData.length === 0 && (
              <tr>
                <td colSpan={8} style={{ padding: '32px', textAlign: 'center', color: 'var(--text-muted)' }}>
                  Nenhuma amostra encontrada para os filtros selecionados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
        <div>
          Página <strong>{currentPage}</strong> de <strong>{totalPages}</strong> ({filtered.length} total)
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            style={{ opacity: currentPage === 1 ? 0.5 : 1 }}
          >
            <ChevronLeft size={14} /> Anterior
          </button>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            style={{ opacity: currentPage === totalPages ? 0.5 : 1 }}
          >
            Próxima <ChevronRight size={14} />
          </button>
        </div>
      </div>

    </div>
  );
};

import React from 'react';
import { Filter, RotateCcw, Search, Sparkles } from 'lucide-react';
import type { FilterState } from '../types/tbData';

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (updated: Partial<FilterState>) => void;
  onResetFilters: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ filters, onFilterChange, onResetFilters }) => {

  const applyPreset = (preset: string) => {
    if (preset === 'prisional') {
      onFilterChange({ setting: 'Sistema Prisional', alertLevel: 'Crítico', resistanceProfile: 'TODOS' });
    } else if (preset === 'mdr') {
      onFilterChange({ resistanceProfile: 'MDR-TB', alertLevel: 'TODOS', setting: 'TODOS' });
    } else if (preset === 'amazonia') {
      onFilterChange({ region: 'Norte', setting: 'População Indígena / Fronteira' });
    } else if (preset === 'beijing') {
      onFilterChange({ lineage: 'Linhagem 2 (Beijing)', alertLevel: 'TODOS' });
    }
  };

  return (
    <div className="offwhite-card" style={{ padding: '16px 24px', marginBottom: '24px', borderRadius: 'var(--radius-md)' }}>
      
      {/* Title & Presets Row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Filter size={18} color="var(--accent-teal)" />
          <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            Filtros Epidemiológicos & Genômicos
          </span>
        </div>

        {/* Quick Presets */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>Cenários Críticos:</span>
          <button 
            className="btn btn-secondary btn-sm"
            onClick={() => applyPreset('prisional')}
            style={{ fontSize: '0.75rem', borderRadius: '12px' }}
          >
            <Sparkles size={12} color="var(--accent-rose)" /> Surtos Prisionais
          </button>
          <button 
            className="btn btn-secondary btn-sm"
            onClick={() => applyPreset('mdr')}
            style={{ fontSize: '0.75rem', borderRadius: '12px' }}
          >
            Resistência MDR/XDR
          </button>
          <button 
            className="btn btn-secondary btn-sm"
            onClick={() => applyPreset('amazonia')}
            style={{ fontSize: '0.75rem', borderRadius: '12px' }}
          >
            Fronteira Amazônica
          </button>
          <button 
            className="btn btn-secondary btn-sm"
            onClick={() => applyPreset('beijing')}
            style={{ fontSize: '0.75rem', borderRadius: '12px' }}
          >
            Linhagem Beijing
          </button>
          <button 
            onClick={onResetFilters}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--accent-teal-dark)',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              marginLeft: '8px'
            }}
          >
            <RotateCcw size={12} /> Limpar
          </button>
        </div>
      </div>

      {/* Select Controls Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
        gap: '12px',
        alignItems: 'center'
      }}>

        {/* Region */}
        <div>
          <label style={{ display: 'block', fontSize: '0.725rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
            Região Geográfica
          </label>
          <select 
            value={filters.region} 
            onChange={(e) => onFilterChange({ region: e.target.value, uf: 'TODOS' })}
            style={selectStyle}
          >
            <option value="TODOS">Todas as Regiões</option>
            <option value="Norte">Norte</option>
            <option value="Nordeste">Nordeste</option>
            <option value="Centro-Oeste">Centro-Oeste</option>
            <option value="Sudeste">Sudeste</option>
            <option value="Sul">Sul</option>
          </select>
        </div>

        {/* UF / Estado */}
        <div>
          <label style={{ display: 'block', fontSize: '0.725rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
            Estado (UF)
          </label>
          <select 
            value={filters.uf} 
            onChange={(e) => onFilterChange({ uf: e.target.value })}
            style={selectStyle}
          >
            <option value="TODOS">Todos os Estados (27)</option>
            <option value="SP">São Paulo (SP)</option>
            <option value="RJ">Rio de Janeiro (RJ)</option>
            <option value="AM">Amazonas (AM)</option>
            <option value="RS">Rio Grande do Sul (RS)</option>
            <option value="PE">Pernambuco (PE)</option>
            <option value="BA">Bahia (BA)</option>
            <option value="PA">Pará (PA)</option>
            <option value="MS">Mato Grosso do Sul (MS)</option>
            <option value="CE">Ceará (CE)</option>
            <option value="MG">Minas Gerais (MG)</option>
          </select>
        </div>

        {/* Período */}
        <div>
          <label style={{ display: 'block', fontSize: '0.725rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
            Ano / Período
          </label>
          <select 
            value={filters.period} 
            onChange={(e) => onFilterChange({ period: e.target.value })}
            style={selectStyle}
          >
            <option value="TODOS">Todo o Período (2024-2026)</option>
            <option value="2026">2026 (Ano Atual)</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
          </select>
        </div>

        {/* Perfil de Resistência */}
        <div>
          <label style={{ display: 'block', fontSize: '0.725rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
            Perfil de Resistência
          </label>
          <select 
            value={filters.resistanceProfile} 
            onChange={(e) => onFilterChange({ resistanceProfile: e.target.value })}
            style={selectStyle}
          >
            <option value="TODOS">Todos os Perfis</option>
            <option value="Sensível">Sensível</option>
            <option value="Monorresistente">Monorresistente</option>
            <option value="MDR-TB">MDR-TB (Multirresistente)</option>
            <option value="Pre-XDR-TB">Pre-XDR-TB</option>
            <option value="XDR-TB">XDR-TB (Extensamente)</option>
          </select>
        </div>

        {/* Linhagem Genômica */}
        <div>
          <label style={{ display: 'block', fontSize: '0.725rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
            Linhagem Mycobacterium
          </label>
          <select 
            value={filters.lineage} 
            onChange={(e) => onFilterChange({ lineage: e.target.value })}
            style={selectStyle}
          >
            <option value="TODOS">Todas as Linhagens</option>
            <option value="Linhagem 4 (Euro-Americana / LAM)">Linhagem 4 (LAM)</option>
            <option value="Linhagem 4 (Harlem)">Linhagem 4 (Harlem)</option>
            <option value="Linhagem 2 (Beijing)">Linhagem 2 (Beijing)</option>
            <option value="Linhagem 4 (Ghana / X-type)">Linhagem 4 (Ghana)</option>
          </select>
        </div>

        {/* Ambiente de Risco */}
        <div>
          <label style={{ display: 'block', fontSize: '0.725rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
            Ambiente / Vulnerabilidade
          </label>
          <select 
            value={filters.setting} 
            onChange={(e) => onFilterChange({ setting: e.target.value })}
            style={selectStyle}
          >
            <option value="TODOS">Todos os Ambientes</option>
            <option value="Sistema Prisional">Sistema Prisional</option>
            <option value="Comunidade Urbana">Comunidade Urbana</option>
            <option value="Unidade Hospitalar">Unidade Hospitalar</option>
            <option value="População Indígena / Fronteira">População Indígena / Fronteira</option>
            <option value="Abrigo / Vulnerabilidade">Abrigos / Vulneráveis</option>
          </select>
        </div>

        {/* Search Input */}
        <div>
          <label style={{ display: 'block', fontSize: '0.725rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
            Busca por Amostra / Mutation
          </label>
          <div style={{ position: 'relative' }}>
            <input 
              type="text"
              placeholder="Ex: rpoB S531L, CL-SP-01..."
              value={filters.searchQuery}
              onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
              style={{
                ...selectStyle,
                paddingLeft: '30px'
              }}
            />
            <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          </div>
        </div>

      </div>

    </div>
  );
};

const selectStyle: React.CSSProperties = {
  width: '100%',
  padding: '7px 10px',
  borderRadius: 'var(--radius-sm)',
  border: '1px solid var(--border-color)',
  backgroundColor: 'var(--bg-card-subtle)',
  color: 'var(--text-primary)',
  fontSize: '0.8rem',
  fontWeight: 500,
  outline: 'none',
  cursor: 'pointer',
  transition: 'border-color 0.15s ease'
};

import React, { useState } from 'react';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { KpiSection } from './components/KpiSection';
import { BrazilMap } from './components/BrazilMap';
import { ResistanceGenomics } from './components/ResistanceGenomics';
import { TransmissionNetwork } from './components/TransmissionNetwork';
import { IsolatesTable } from './components/IsolatesTable';
import { ProvocationModal } from './components/ProvocationModal';
import { SimulationModal } from './components/SimulationModal';
import { IsolateDetailModal } from './components/IsolateDetailModal';
import type { FilterState, Isolate, ClusterData } from './types/tbData';
import { OVERVIEW_KPIS } from './data/mockData';
import { Map, Dna, Network, Database, ShieldAlert, ExternalLink } from 'lucide-react';

export const App: React.FC = () => {
  // Navigation tab state
  const [activeTab, setActiveTab] = useState<'map' | 'genomics' | 'network' | 'table'>('map');

  // Filter state
  const [filters, setFilters] = useState<FilterState>({
    region: 'TODOS',
    uf: 'TODOS',
    period: 'TODOS',
    resistanceProfile: 'TODOS',
    lineage: 'TODOS',
    alertLevel: 'TODOS',
    setting: 'TODOS',
    searchQuery: ''
  });

  // Modal states
  const [isProvocationOpen, setIsProvocationOpen] = useState(false);
  const [isSimulationOpen, setIsSimulationOpen] = useState(false);
  const [selectedIsolate, setSelectedIsolate] = useState<Isolate | null>(null);

  const handleFilterChange = (updated: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...updated }));
  };

  const handleResetFilters = () => {
    setFilters({
      region: 'TODOS',
      uf: 'TODOS',
      period: 'TODOS',
      resistanceProfile: 'TODOS',
      lineage: 'TODOS',
      alertLevel: 'TODOS',
      setting: 'TODOS',
      searchQuery: ''
    });
  };

  const handleSelectState = (uf: string) => {
    handleFilterChange({ uf });
  };

  const handleSelectCluster = (cluster: ClusterData) => {
    handleFilterChange({ uf: cluster.ufPrimary, resistanceProfile: cluster.resistanceProfile });
  };

  return (
    <div style={{ minHeight: '100vh', padding: '24px 32px', maxWidth: '1440px', margin: '0 auto' }}>
      
      {/* Header */}
      <Header 
        onOpenProvocation={() => setIsProvocationOpen(true)}
        onOpenSimulation={() => setIsSimulationOpen(true)}
      />

      {/* Top Filter Bar */}
      <FilterBar 
        filters={filters}
        onFilterChange={handleFilterChange}
        onResetFilters={handleResetFilters}
      />

      {/* Key Performance Indicators */}
      <KpiSection 
        kpis={OVERVIEW_KPIS}
        onOpenProvocation={() => setIsProvocationOpen(true)}
      />

      {/* Main Tab Bar Navigation */}
      <div className="offwhite-card" style={{ padding: '6px', marginBottom: '20px', borderRadius: 'var(--radius-md)', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        
        <button
          onClick={() => setActiveTab('map')}
          style={{
            padding: '10px 18px',
            borderRadius: 'var(--radius-sm)',
            border: 'none',
            backgroundColor: activeTab === 'map' ? 'var(--accent-teal)' : 'transparent',
            color: activeTab === 'map' ? '#ffffff' : 'var(--text-secondary)',
            fontWeight: activeTab === 'map' ? 700 : 500,
            fontSize: '0.85rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.15s ease'
          }}
        >
          <Map size={16} /> Mapa do Brasil & Clusters Genômicos
        </button>

        <button
          onClick={() => setActiveTab('genomics')}
          style={{
            padding: '10px 18px',
            borderRadius: 'var(--radius-sm)',
            border: 'none',
            backgroundColor: activeTab === 'genomics' ? 'var(--accent-teal)' : 'transparent',
            color: activeTab === 'genomics' ? '#ffffff' : 'var(--text-secondary)',
            fontWeight: activeTab === 'genomics' ? 700 : 500,
            fontSize: '0.85rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.15s ease'
          }}
        >
          <Dna size={16} /> Mutações de Resistência & Linhagens
        </button>

        <button
          onClick={() => setActiveTab('network')}
          style={{
            padding: '10px 18px',
            borderRadius: 'var(--radius-sm)',
            border: 'none',
            backgroundColor: activeTab === 'network' ? 'var(--accent-teal)' : 'transparent',
            color: activeTab === 'network' ? '#ffffff' : 'var(--text-secondary)',
            fontWeight: activeTab === 'network' ? 700 : 500,
            fontSize: '0.85rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.15s ease'
          }}
        >
          <Network size={16} /> Cadeia de Transmissão (SNPs)
        </button>

        <button
          onClick={() => setActiveTab('table')}
          style={{
            padding: '10px 18px',
            borderRadius: 'var(--radius-sm)',
            border: 'none',
            backgroundColor: activeTab === 'table' ? 'var(--accent-teal)' : 'transparent',
            color: activeTab === 'table' ? '#ffffff' : 'var(--text-secondary)',
            fontWeight: activeTab === 'table' ? 700 : 500,
            fontSize: '0.85rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.15s ease'
          }}
        >
          <Database size={16} /> Tabela de Isolados WGS
        </button>

      </div>

      {/* Tab Content Display */}
      {activeTab === 'map' && (
        <BrazilMap 
          filters={filters}
          onSelectState={handleSelectState}
          onSelectCluster={handleSelectCluster}
        />
      )}

      {activeTab === 'genomics' && (
        <ResistanceGenomics />
      )}

      {activeTab === 'network' && (
        <TransmissionNetwork />
      )}

      {activeTab === 'table' && (
        <IsolatesTable 
          filters={filters}
          onSelectIsolate={(iso) => setSelectedIsolate(iso)}
        />
      )}

      {/* Bottom Provocation Banner */}
      <div 
        className="offwhite-card"
        onClick={() => setIsProvocationOpen(true)}
        style={{
          padding: '20px 24px',
          borderRadius: 'var(--radius-lg)',
          backgroundColor: '#faf8ff',
          borderColor: '#e0e7ff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          marginTop: '32px',
          gap: '16px',
          flexWrap: 'wrap'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'var(--accent-indigo-light)', color: 'var(--accent-indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ShieldAlert size={24} />
          </div>

          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--accent-indigo)' }}>
              Provocação Estratégica ao Ministério da Saúde & LACENs
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
              Como o Sequenciamento de Genoma Completo (WGS) pode gerar uma economia de R$ 42,5 Milhões e interromper surtos ocultos de tuberculose no Brasil.
            </p>
          </div>
        </div>

        <button className="btn btn-primary" style={{ backgroundColor: 'var(--accent-indigo)', fontSize: '0.825rem' }}>
          Ver Proposta de Implementação SUS <ExternalLink size={14} />
        </button>
      </div>

      {/* Footer */}
      <footer style={{ marginTop: '40px', paddingBottom: '20px', textAlign: 'center', fontSize: '0.775rem', color: 'var(--text-muted)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '8px' }}>
          <img src="/lapam_logo.png" alt="Logo LaPAM" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
          <strong style={{ color: 'var(--text-primary)', fontSize: '0.85rem' }}>LaPAM</strong>
        </div>
        <p>
          VigiTB Genoma BR • Protótipo de Vigilância Genômica da Tuberculose por WGS no Brasil.
        </p>
        <p style={{ marginTop: '4px' }}>
          Desenvolvido por <strong>LaPAM</strong> como provocação técnica para adoção nacional da epidemiologia genômica no Sistema Único de Saúde (SUS).
        </p>
      </footer>

      {/* Modals */}
      <ProvocationModal 
        isOpen={isProvocationOpen}
        onClose={() => setIsProvocationOpen(false)}
      />

      <SimulationModal 
        isOpen={isSimulationOpen}
        onClose={() => setIsSimulationOpen(false)}
      />

      <IsolateDetailModal 
        isolate={selectedIsolate}
        onClose={() => setSelectedIsolate(null)}
      />

    </div>
  );
};

export default App;

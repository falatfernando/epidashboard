import React, { useState } from 'react';
import type { StateData, ClusterData, FilterState } from '../types/tbData';
import { BRAZIL_STATES, ACTIVE_CLUSTERS, TRANSMISSION_ARCS } from '../data/mockData';
import { MapPin, Radio, GitCommit, Layers, ShieldAlert, Sparkles, Crosshair } from 'lucide-react';

interface BrazilMapProps {
  filters: FilterState;
  onSelectState: (uf: string) => void;
  onSelectCluster: (cluster: ClusterData) => void;
}

export const BrazilMap: React.FC<BrazilMapProps> = ({ filters, onSelectState, onSelectCluster }) => {
  const [mapMode, setMapMode] = useState<'clusters' | 'arcs' | 'heatmap'>('clusters');
  const [hoveredState, setHoveredState] = useState<StateData | null>(null);
  const [hoveredCluster, setHoveredCluster] = useState<ClusterData | null>(null);
  const [selectedClusterState, setSelectedClusterState] = useState<ClusterData | null>(ACTIVE_CLUSTERS[0]);

  // Filter clusters based on filter state
  const filteredClusters = ACTIVE_CLUSTERS.filter(cluster => {
    if (filters.uf !== 'TODOS' && cluster.ufPrimary !== filters.uf && !cluster.ufsSecondary.includes(filters.uf)) {
      return false;
    }
    if (filters.region !== 'TODOS') {
      const stateObj = BRAZIL_STATES.find(s => s.uf === cluster.ufPrimary);
      if (stateObj && stateObj.region !== filters.region) return false;
    }
    if (filters.resistanceProfile !== 'TODOS' && cluster.resistanceProfile !== filters.resistanceProfile) {
      return false;
    }
    if (filters.lineage !== 'TODOS' && cluster.lineage !== filters.lineage) {
      return false;
    }
    if (filters.setting !== 'TODOS' && cluster.setting !== filters.setting) {
      return false;
    }
    return true;
  });

  // Calculate heatmap color for states
  const getStateFillColor = (state: StateData) => {
    if (filters.uf === state.uf) return 'var(--accent-teal-light)';
    
    if (mapMode === 'heatmap') {
      // Color by MDR rate
      if (state.mdrPercent >= 11) return '#fecdd3'; // light rose
      if (state.mdrPercent >= 8) return '#fef3c7';  // light amber
      return '#e0f2fe';                            // light sky
    }

    if (state.riskLevel === 'Crítico') return '#fff1f2';
    return '#f8fafc';
  };

  return (
    <div className="offwhite-card" style={{ padding: '24px', borderRadius: 'var(--radius-lg)', marginBottom: '24px' }}>
      
      {/* Map Header & Controls */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={20} color="var(--accent-teal)" />
            <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Vigilância Espacial & Clusters Genômicos no Brasil
            </h2>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Identificação em tempo real de micro-surtos de TB (&lt;5 SNPs) e cadeias de transmissão inter-estaduais por WGS.
          </p>
        </div>

        {/* View Mode Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: 'var(--bg-card-subtle)', padding: '4px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
          <button
            onClick={() => setMapMode('clusters')}
            style={{
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              backgroundColor: mapMode === 'clusters' ? 'var(--bg-card)' : 'transparent',
              color: mapMode === 'clusters' ? 'var(--accent-teal-dark)' : 'var(--text-secondary)',
              fontWeight: mapMode === 'clusters' ? 700 : 500,
              fontSize: '0.775rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: mapMode === 'clusters' ? 'var(--shadow-subtle)' : 'none'
            }}
          >
            <Radio size={14} /> Hotspots de Cluster ({filteredClusters.length})
          </button>

          <button
            onClick={() => setMapMode('arcs')}
            style={{
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              backgroundColor: mapMode === 'arcs' ? 'var(--bg-card)' : 'transparent',
              color: mapMode === 'arcs' ? 'var(--accent-indigo)' : 'var(--text-secondary)',
              fontWeight: mapMode === 'arcs' ? 700 : 500,
              fontSize: '0.775rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: mapMode === 'arcs' ? 'var(--shadow-subtle)' : 'none'
            }}
          >
            <GitCommit size={14} /> Rotas Interestaduais ({TRANSMISSION_ARCS.length})
          </button>

          <button
            onClick={() => setMapMode('heatmap')}
            style={{
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              backgroundColor: mapMode === 'heatmap' ? 'var(--bg-card)' : 'transparent',
              color: mapMode === 'heatmap' ? 'var(--accent-amber)' : 'var(--text-secondary)',
              fontWeight: mapMode === 'heatmap' ? 700 : 500,
              fontSize: '0.775rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: mapMode === 'heatmap' ? 'var(--shadow-subtle)' : 'none'
            }}
          >
            <Layers size={14} /> Mapa de Taxa MDR
          </button>
        </div>
      </div>

      {/* Main Grid: SVG Map on Left, Detailed Inspector Sidebar on Right */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 1.4fr) minmax(280px, 1fr)', gap: '24px', alignItems: 'start' }}>
        
        {/* Interactive SVG Brazil Map Container */}
        <div style={{
          backgroundColor: '#fafbfc',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-md)',
          padding: '16px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '440px'
        }}>
          
          <svg viewBox="0 0 600 600" style={{ width: '100%', height: 'auto', maxHeight: '520px' }}>
            
            {/* Draw State Polygons */}
            <g id="states-group">
              {BRAZIL_STATES.map((state) => {
                const isSelected = filters.uf === state.uf;
                const fill = getStateFillColor(state);

                return (
                  <path
                    key={state.uf}
                    d={state.path}
                    className={`state-path ${isSelected ? 'selected' : ''}`}
                    style={{ fill }}
                    onMouseEnter={() => setHoveredState(state)}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => onSelectState(state.uf)}
                  >
                    <title>{`${state.name} (${state.uf}): ${state.totalSequenced} sequenciados | Taxa MDR: ${state.mdrPercent}%`}</title>
                  </path>
                );
              })}
            </g>

            {/* Draw Transmission Arcs when mode is 'arcs' or 'clusters' */}
            {(mapMode === 'arcs' || mapMode === 'clusters') && (
              <g id="transmission-arcs">
                {TRANSMISSION_ARCS.map((arc) => {
                  const x1 = arc.fromCoords[0];
                  const y1 = arc.fromCoords[1];
                  const x2 = arc.toCoords[0];
                  const y2 = arc.toCoords[1];
                  // Control point for smooth curve
                  const cx = (x1 + x2) / 2 - (y2 - y1) * 0.2;
                  const cy = (y1 + y2) / 2 + (x2 - x1) * 0.2;

                  return (
                    <g key={arc.id}>
                      {/* Glow background arc */}
                      <path
                        d={`M${x1},${y1} Q${cx},${cy} ${x2},${y2}`}
                        fill="none"
                        stroke="rgba(79, 70, 229, 0.2)"
                        strokeWidth="5"
                      />
                      {/* Animated dashed transmission line */}
                      <path
                        d={`M${x1},${y1} Q${cx},${cy} ${x2},${y2}`}
                        fill="none"
                        stroke="var(--accent-indigo)"
                        strokeWidth="2.5"
                        className="animate-dash"
                      />
                    </g>
                  );
                })}
              </g>
            )}

            {/* Draw Cluster Hotspots / Pulsing Circles */}
            {(mapMode === 'clusters' || mapMode === 'arcs') && (
              <g id="cluster-hotspots">
                {filteredClusters.map((cluster) => {
                  const [cx, cy] = cluster.coordinates;
                  const isSelected = selectedClusterState?.id === cluster.id;
                  
                  let radius = Math.min(Math.max(cluster.caseCount * 0.35, 8), 18);
                  let color = 'var(--accent-teal)';
                  if (cluster.alertLevel === 'Crítico') color = 'var(--accent-rose)';
                  if (cluster.alertLevel === 'Moderado') color = 'var(--accent-amber)';

                  return (
                    <g 
                      key={cluster.id}
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        setSelectedClusterState(cluster);
                        onSelectCluster(cluster);
                      }}
                      onMouseEnter={() => setHoveredCluster(cluster)}
                      onMouseLeave={() => setHoveredCluster(null)}
                    >
                      {/* Pulsing Ring for Critical Clusters */}
                      {cluster.alertLevel === 'Crítico' && (
                        <circle
                          cx={cx}
                          cy={cy}
                          r={radius + 8}
                          fill="none"
                          stroke={color}
                          strokeWidth="2"
                          className="animate-pulse-ring"
                        />
                      )}

                      {/* Cluster Node Circle */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={radius}
                        fill={color}
                        fillOpacity={isSelected ? 0.95 : 0.75}
                        stroke="#ffffff"
                        strokeWidth={isSelected ? "3" : "1.5"}
                        style={{ transition: 'all 0.2s ease' }}
                      />

                      {/* Case Count Label inside circle */}
                      <text
                        x={cx}
                        y={cy + 4}
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize={radius > 10 ? "11px" : "9px"}
                        fontWeight="800"
                        style={{ pointerEvents: 'none', userSelect: 'none' }}
                      >
                        {cluster.caseCount}
                      </text>
                    </g>
                  );
                })}
              </g>
            )}

            {/* State UF Labels */}
            <g id="state-labels" style={{ pointerEvents: 'none' }}>
              {BRAZIL_STATES.map((st) => (
                <text
                  key={`lbl-${st.uf}`}
                  x={st.center[0]}
                  y={st.center[1]}
                  textAnchor="middle"
                  fontSize="10px"
                  fontWeight="700"
                  fill="var(--text-secondary)"
                  opacity="0.65"
                >
                  {st.uf}
                </text>
              ))}
            </g>

          </svg>

          {/* Map Overlay Floating Hover Tooltip */}
          {hoveredState && !hoveredCluster && (
            <div style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(8px)',
              border: '1px solid var(--border-color)',
              padding: '10px 14px',
              borderRadius: 'var(--radius-sm)',
              boxShadow: 'var(--shadow-card)',
              pointerEvents: 'none',
              fontSize: '0.8rem'
            }}>
              <div style={{ fontWeight: 800, color: 'var(--text-primary)' }}>{hoveredState.name} ({hoveredState.uf})</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', marginTop: '2px' }}>
                Total Sequenciado: <strong>{hoveredState.totalSequenced}</strong> | Cobertura: {hoveredState.wgsCoveragePercent}%
              </div>
              <div style={{ color: 'var(--accent-rose)', fontSize: '0.75rem', fontWeight: 600 }}>
                MDR-TB: {hoveredState.mdrCount} casos ({hoveredState.mdrPercent}%)
              </div>
            </div>
          )}

          {/* Map Legend */}
          <div style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid var(--border-color)',
            padding: '8px 12px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.7rem',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-rose)' }} />
              <span>Alerta Crítico (&lt;2 SNPs)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-amber)' }} />
              <span>Alerta Moderado</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '12px', height: '2px', backgroundColor: 'var(--accent-indigo)' }} />
              <span>Transmissão Interestadual</span>
            </div>
          </div>

        </div>

        {/* Selected Cluster / State Detail Inspector Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {selectedClusterState ? (
            <div className="offwhite-card" style={{ padding: '20px', borderRadius: 'var(--radius-md)', backgroundColor: '#ffffff', border: '1px solid var(--border-color)' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span className={`badge badge-${selectedClusterState.alertLevel.toLowerCase()}`}>
                  <ShieldAlert size={12} />
                  Alerta {selectedClusterState.alertLevel}
                </span>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-muted)' }}>
                  {selectedClusterState.code}
                </span>
              </div>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>
                {selectedClusterState.name}
              </h3>

              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '14px', lineHeight: '1.4' }}>
                {selectedClusterState.description}
              </p>

              {/* Cluster Metadata Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px',
                padding: '12px',
                backgroundColor: 'var(--bg-card-subtle)',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '14px',
                fontSize: '0.775rem'
              }}>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block' }}>Casos Confirmados WGS</span>
                  <strong style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>{selectedClusterState.caseCount} pacientes</strong>
                </div>

                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block' }}>Distância Genômica Máx.</span>
                  <strong style={{ fontSize: '1.1rem', color: 'var(--accent-rose)' }}>{selectedClusterState.snpDistanceMax} SNPs</strong>
                </div>

                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block' }}>Perfil Farmacológico</span>
                  <strong style={{ color: 'var(--accent-amber)' }}>{selectedClusterState.resistanceProfile}</strong>
                </div>

                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block' }}>Ambiente de Origem</span>
                  <strong>{selectedClusterState.setting}</strong>
                </div>
              </div>

              {/* Key Resistance Mutations */}
              <div style={{ marginBottom: '14px' }}>
                <span style={{ fontSize: '0.725rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Mutações de Resistência Identificadas:
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                  {selectedClusterState.keyMutations.map(m => (
                    <span key={m} style={{
                      padding: '3px 8px',
                      borderRadius: '4px',
                      backgroundColor: '#fff1f2',
                      color: 'var(--accent-rose)',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      border: '1px solid rgba(225, 29, 72, 0.2)'
                    }}>
                      {m}
                    </span>
                  ))}
                  {selectedClusterState.keyMutations.length === 0 && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
                      Sem mutações conhecidas (Suscetível)
                    </span>
                  )}
                </div>
              </div>

              {/* Transmission UFs */}
              <div style={{ marginBottom: '16px', fontSize: '0.775rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Foco Primário: </span>
                <strong style={{ color: 'var(--accent-teal-dark)' }}>UF-{selectedClusterState.ufPrimary}</strong>
                {selectedClusterState.ufsSecondary.length > 0 && (
                  <span>
                    {' → '}
                    Disseminação Interestadual para: {' '}
                    <strong>{selectedClusterState.ufsSecondary.join(', ')}</strong>
                  </span>
                )}
              </div>

              <button
                className="btn btn-primary"
                onClick={() => onSelectCluster(selectedClusterState)}
                style={{ width: '100%', fontSize: '0.8rem' }}
              >
                <Crosshair size={14} /> Inspecionar Amostras do Cluster
              </button>

            </div>
          ) : (
            <div className="offwhite-card" style={{ padding: '24px', textAlign: 'center', color: 'var(--text-muted)' }}>
              <Sparkles size={32} style={{ margin: '0 auto 10px', opacity: 0.5 }} />
              <p>Clique em um cluster ou estado no mapa para visualizar a análise epidemiológica detalhada.</p>
            </div>
          )}

          {/* Quick List of Active Clusters */}
          <div className="offwhite-card" style={{ padding: '16px 20px', borderRadius: 'var(--radius-md)' }}>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '10px' }}>
              Principais Surtos sob Monitoramento ({filteredClusters.length})
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '220px', overflowY: 'auto', paddingRight: '4px' }}>
              {filteredClusters.map(c => (
                <div
                  key={c.id}
                  onClick={() => setSelectedClusterState(c)}
                  style={{
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: selectedClusterState?.id === c.id ? 'var(--accent-teal-light)' : 'var(--bg-card-subtle)',
                    border: '1px solid',
                    borderColor: selectedClusterState?.id === c.id ? 'var(--accent-teal)' : 'var(--border-color)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.775rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {c.name}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                      UF-{c.ufPrimary} • {c.caseCount} casos • {c.lineage.split(' ')[0]} {c.lineage.split(' ')[1]}
                    </div>
                  </div>

                  <span className={`badge badge-${c.alertLevel.toLowerCase()}`} style={{ fontSize: '0.675rem', padding: '2px 6px' }}>
                    {c.alertLevel}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

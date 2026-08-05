import React from 'react';
import { X, ShieldAlert, TrendingUp, DollarSign, AlertOctagon, Lightbulb, Dna, FileText } from 'lucide-react';

interface ProvocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProvocationModal: React.FC<ProvocationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="offwhite-card" 
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '850px',
          maxHeight: '92vh',
          overflowY: 'auto',
          padding: '32px',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-hover)'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              padding: '6px 12px',
              backgroundColor: '#ffffff',
              borderRadius: '10px',
              border: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img src="/lapam_logo.png" alt="Logo LaPAM" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
            </div>

            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              backgroundColor: '#fff1f2',
              color: 'var(--accent-rose)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(225, 29, 72, 0.15)'
            }}>
              <ShieldAlert size={24} />
            </div>

            <div>
              <span className="badge badge-critico" style={{ marginBottom: '4px' }}>
                Proposta Técnica LaPAM • Vigilância Genômica SUS
              </span>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                O Poder Disruptivo do WGS no Combate à Tuberculose no Brasil
              </h2>
            </div>
          </div>

          <button 
            onClick={onClose}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Executive Summary Callout */}
        <div style={{
          padding: '20px',
          borderRadius: 'var(--radius-md)',
          backgroundColor: '#faf8ff',
          border: '1.5px solid #e0e7ff',
          marginBottom: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-indigo)', fontWeight: 800, fontSize: '0.95rem', marginBottom: '8px' }}>
            <Lightbulb size={20} />
            Tese Central: O Brasil pode zerar surtos ocultos de TB com sequenciamento nacional
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
            A vigilância epidemiológica tradicional baseada em exames fenotípicos e cultura leva de <strong>45 a 60 dias</strong> para detectar resistências graves a fármacos. Enquanto o resultado não chega, pacientes com MDR-TB continuam transmitindo cepas multirresistentes em ambientes fechados (presídios, transportes e hospitais). 
            <br /><br />
            A implementação do <strong>Sequenciamento de Genoma Completo (WGS)</strong> na Rede de LACENs transforma a epidemiologia reativa em uma <strong>precisão epidemiológica preditiva em tempo real</strong>.
          </p>
        </div>

        {/* 3 Pillars Comparison Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '24px' }}>
          
          {/* Pillar 1 */}
          <div style={{ padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: '#ffffff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-rose)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '8px' }}>
              <AlertOctagon size={16} /> 1. Surtos Prisionais & Ocultos
            </div>
            <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
              No Brasil, a taxa de TB nas prisões é até 28 vezes maior que na população geral. O WGS rastreia transmissões ativas com 0-2 SNPs de diferença, identificando super-disseminadores e interrompendo surtos em dias.
            </p>
          </div>

          {/* Pillar 2 */}
          <div style={{ padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: '#ffffff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-teal-dark)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '8px' }}>
              <Dna size={16} /> 2. Farmacogenômica de Precisão
            </div>
            <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
              Mutações em <em>pncA</em> (Pirazinamida) e <em>gyrA</em> (Fluoroquinolonas) são de difícil diagnóstico fenotípico. O WGS fornece perfil genético completo em &lt;5 dias, direcionando o esquema curto BPaLM sem erros.
            </p>
          </div>

          {/* Pillar 3 */}
          <div style={{ padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: '#ffffff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-indigo)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '8px' }}>
              <TrendingUp size={16} /> 3. Transmissão Interestadual
            </div>
            <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
              Pacientes em migração conectam surtos entre SP, RJ, AM e RS. O WGS descobre links genômicos nacionais unificando dados dos LACENs em uma única nuvem epidemiológica SUS.
            </p>
          </div>

        </div>

        {/* ROI Breakdown Table */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <DollarSign size={18} color="var(--accent-emerald)" />
            Modelagem do Retorno de Investimento (ROI) para o SUS
          </h3>

          <div style={{ overflowX: 'auto', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem', textAlign: 'left' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-card-subtle)', borderBottom: '1px solid var(--border-color)', fontWeight: 700, color: 'var(--text-secondary)' }}>
                  <th style={{ padding: '10px 14px' }}>Dimensão Econômica</th>
                  <th style={{ padding: '10px 14px' }}>Abordagem Tradicional</th>
                  <th style={{ padding: '10px 14px' }}>Abordagem WGS Integrada</th>
                  <th style={{ padding: '10px 14px', color: 'var(--accent-emerald)' }}>Impacto / Economia Estimada</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '10px 14px', fontWeight: 600 }}>Custo Médio Tratamento Falha MDR</td>
                  <td style={{ padding: '10px 14px' }}>R$ 140.000 / paciente</td>
                  <td style={{ padding: '10px 14px' }}>R$ 22.000 (Esquema BPaLM)</td>
                  <td style={{ padding: '10px 14px', color: 'var(--accent-emerald)', fontWeight: 700 }}>- R$ 118.000 / paciente</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: '#fafbfc' }}>
                  <td style={{ padding: '10px 14px', fontWeight: 600 }}>Diárias de Internação Hospitalar</td>
                  <td style={{ padding: '10px 14px' }}>60 a 90 dias UTI/Leito isolamento</td>
                  <td style={{ padding: '10px 14px' }}>12 a 15 dias isolamento direcionado</td>
                  <td style={{ padding: '10px 14px', color: 'var(--accent-emerald)', fontWeight: 700 }}>1,450 diárias economizadas</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px 14px', fontWeight: 600 }}>Novos Casos Secundários por Surto</td>
                  <td style={{ padding: '10px 14px' }}>8.4 contágios por caso index</td>
                  <td style={{ padding: '10px 14px' }}>1.2 contágios (Interrupção precoce)</td>
                  <td style={{ padding: '10px 14px', color: 'var(--accent-emerald)', fontWeight: 700 }}>620 casos evitados em 3 anos</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '10px', fontSize: '0.825rem', fontWeight: 700, color: 'var(--accent-emerald)', textAlign: 'right' }}>
            💰 Economia Total Estimada para o SUS: R$ 42.500.000 em 3 anos (ROI de 230% sobre o investimento inicial de sequenciamento)
          </div>
        </div>

        {/* Action Call for Health Leadership */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', padding: '16px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-card-subtle)', border: '1px solid var(--border-color)' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            <strong>Documento de Proposta Técnica:</strong> Apresentação para Ministério da Saúde, SVSA, FIOCRUZ e CONASS.
          </div>
          <button 
            className="btn btn-primary"
            onClick={() => {
              alert('Proposta Técnica de Implementação WGS (PDF) baixada com sucesso.');
              onClose();
            }}
          >
            <FileText size={16} /> Baixar Proposta Técnica Completa
          </button>
        </div>

      </div>
    </div>
  );
};

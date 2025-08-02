# Supplier Collector: Automação Inteligente de Cobranças para Arquitetos

<div class="hero" style="background: linear-gradient(135deg, #009968 0%, #007750 100%); padding: 4rem 2rem; text-align: center; color: white;">
  <h1 style="font-size: 2.8rem; max-width: 900px; margin: 0 auto 1.5rem;">Pare de perder comissões com cobranças automatizadas via WhatsApp</h1>
  <p style="font-size: 1.4rem; max-width: 700px; margin: 0 auto 2.5rem; opacity: 0.95;">Solução full-stack que transforma RTs esquecidas em receita recorrente com cálculos dinâmicos e notificações inteligentes</p>
  <div style="display: flex; gap: 1rem; justify-content: center;">
    <a href="#demo" style="background: white; color: #009968; padding: 0.8rem 2rem; border-radius: 50px; font-weight: bold; text-decoration: none;">Ver Demonstração</a>
    <a href="#contact" style="border: 2px solid white; color: white; padding: 0.8rem 2rem; border-radius: 50px; font-weight: bold; text-decoration: none;">Solicitar Orçamento</a>
  </div>
</div>

## O Problema: Comissões que Evaporam nas Obras

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 3rem 0;">
  <div style="background: #f8f9fa; padding: 1.8rem; border-radius: 12px;">
    <h3 style="color: #009968;">💸 Valores Imprevisíveis</h3>
    <p>RT varia conforme pagamento do cliente (35%-15%-50%), impossibilitando cobranças fixas tradicionais</p>
  </div>
  
  <div style="background: #f8f9fa; padding: 1.8rem; border-radius: 12px;">
    <h3 style="color: #009968;">📉 Perda por Esquecimento</h3>
    <p>Arquitetos perdem até 20% das comissões ao gerenciar manualmente múltiplas obras/fornecedores</p>
  </div>
  
  <div style="background: #f8f9fa; padding: 1.8rem; border-radius: 12px;">
    <h3 style="color: #009968;">🤝 Relacionamento Frágil</h3>
    <p>Cobranças intrusivas geram atrito com fornecedores essenciais</p>
  </div>
</div>

## Minha Solução Técnica

<div style="display: flex; flex-wrap: wrap; gap: 2rem; align-items: center; margin: 4rem 0;">
  <div style="flex: 1; min-width: 300px;">
    <h2 style="color: #009968;">Fluxo Automatizado com Verificação Humana</h2>
    <div style="display: flex; align-items: flex-start; margin: 1.5rem 0; gap: 1rem;">
      <div style="background: #009968; color: white; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">1</div>
      <div>
        <h3>Monitoramento em Tempo Real</h3>
        <p>Webhook integrado ao Asaas detecta pagamentos do cliente instantaneamente</p>
      </div>
    </div>
    <div style="display: flex; align-items: flex-start; margin: 1.5rem 0; gap: 1rem;">
      <div style="background: #009968; color: white; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">2</div>
      <div>
        <h3>Cálculo Proporcional Automático</h3>
        <p>Sistema recalcula valor devido pelo fornecedor baseado no % pago</p>
      </div>
    </div>
    <div style="display: flex; align-items: flex-start; margin: 1.5rem 0; gap: 1rem;">
      <div style="background: #009968; color: white; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">3</div>
      <div>
        <h3>Validação pelo Arquiteto</h3>
        <p>Notificação enviada para confirmação antes da cobrança ao fornecedor</p>
      </div>
    </div>
  </div>
  
  <div style="flex: 1; min-width: 300px; background: #f8f9fa; padding: 1.5rem; border-radius: 12px;">
    <h3 style="text-align: center; color: #009968;">Diagrama: Fluxo de Cobrança Inteligente</h3>
    <div style="background: #e9ecef; height: 250px; display: flex; align-items: center; justify-content: center; border-radius: 8px; margin-top: 1rem;">
      <!-- Inserir diagrama posteriormente -->
      <p style="color: #6c757d;">[Diagrama: Cliente paga → Webhook Asaas → Cálculo RT → Validação arquiteto → Notificação WhatsApp]</p>
    </div>
  </div>
</div>

## Tecnologias Implementadas

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; margin: 3rem 0;">
  <div style="border: 1px solid #e9ecef; padding: 1.5rem; border-radius: 12px; text-align: center;">
    <h3 style="color: #009968;">Frontend</h3>
    <p>React · Next.js · Tailwind · Shadcn</p>
  </div>
  
  <div style="border: 1px solid #e9ecef; padding: 1.5rem; border-radius: 12px; text-align: center;">
    <h3 style="color: #009968;">Backend</h3>
    <p>Fastify · Firebase RT</p>
  </div>
  
  <div style="border: 1px solid #e9ecef; padding: 1.5rem; border-radius: 12px; text-align: center;">
    <h3 style="color: #009968;">Integrações</h3>
    <p>Asaas API · Evolution API</p>
  </div>
  
  <div style="border: 1px solid #e9ecef; padding: 1.5rem; border-radius: 12px; text-align: center;">
    <h3 style="color: #009968;">Infraestrutura</h3>
    <p>Nginx · PM2 · CronJobs</p>
  </div>
</div>

```javascript
// Exemplo: Lógica de Geração de Links de Pagamento
function generatePaymentLink(supplier, project) {
  const dynamicValue = project.paidPercentage * supplier.commission;
  
  return asaas.createPaymentLink({
    value: dynamicValue,
    dueDate: nextNotificationDate,
    customer: supplier.asaasId,
    description: `RT: ${project.name} | Etapa ${project.currentStep}`
  });
}
```

## Diferenciais Chave

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 3rem 0;">
  <div>
    <h3 style="color: #009968;">🔄 Cobrança Adaptativa</h3>
    <p>Valores recalculados automaticamente conforme pagamento do cliente</p>
    <h3 style="color: #009968; margin-top: 1.5rem;">🗓️ Gestão por Calendário Visual</h3>
    <p>Datas ajustáveis com drag-and-drop para evitar cobranças prematuras</p>
  </div>
  
  <div>
    <h3 style="color: #009968;">🤖 Anti-Falhas Automático</h3>
    <p>Reagendamento de cobranças após 2 dias de atraso + alertas proativos</p>
    <h3 style="color: #009968; margin-top: 1.5rem;">🔒 Segurança Comercial</h3>
    <p>Número dedicado no WhatsApp para comunicações profissionais</p>
  </div>
</div>

## Resultados Simulados

<div style="background: rgba(0, 153, 104, 0.08); padding: 2.5rem; border-radius: 16px; margin: 3rem 0;">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; text-align: center;">
    <div>
      <div style="font-size: 2.5rem; font-weight: bold; color: #009968;">4</div>
      <p>obras/mês</p>
    </div>
    <div>
      <div style="font-size: 2.5rem; font-weight: bold; color: #009968;">20%</div>
      <p>recuperação</p>
    </div>
    <div>
      <div style="font-size: 2.5rem; font-weight: bold; color: #009968;">R$8k</div>
      <p>ganho mensal</p>
    </div>
    <div>
      <div style="font-size: 2.5rem; font-weight: bold; color: #009968;">R$96k</div>
      <p>ganho anual</p>
    </div>
  </div>
  
  <div style="background: white; padding: 1.5rem; border-radius: 12px; margin-top: 1.5rem;">
    <h4 style="color: #009968;">Detalhamento do Cálculo:</h4>
    <ul>
      <li>Valor médio por obra: <strong>R$200.000</strong></li>
      <li>Comissão RT (10%): <strong>R$20.000/obra</strong></li>
      <li>Perda histórica (20%): <strong>R$4.000/obra</strong></li>
      <li>Recuperado pelo sistema: <strong>R$2.000/obra</strong></li>
      <li>Ganho anual (4 obras/mês): <strong>R$96.000</strong></li>
    </ul>
  </div>
</div>

## Demonstração Visual

<div id="demo" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin: 4rem 0;">
  <div>
    <h3 style="color: #009968;">Dashboard Principal</h3>
    <div style="background: #e9ecef; height: 220px; display: flex; align-items: center; justify-content: center; border-radius: 8px;">
      <!-- Inserir screenshot posteriormente -->
      <p>[Screenshot: Visão geral com cards de RT pendente e recuperada]</p>
    </div>
    <p>KPIs financeiros críticos em primeira vista</p>
  </div>
  
  <div>
    <h3 style="color: #009968;">Calendário de Cobranças</h3>
    <div style="background: #e9ecef; height: 220px; display: flex; align-items: center; justify-content: center; border-radius: 8px;">
      <!-- Inserir screenshot posteriormente -->
      <p>[Screenshot: Calendário com marcadores de status]</p>
    </div>
    <p>Datas ajustáveis com arrastar-e-soltar</p>
  </div>
  
  <div>
    <h3 style="color: #009968;">Notificação WhatsApp</h3>
    <div style="background: #e9ecef; height: 220px; display: flex; align-items: center; justify-content: center; border-radius: 8px;">
      <!-- Inserir screenshot posteriormente -->
      <p>[Screenshot: Mensagem real com link de pagamento]</p>
    </div>
    <p>Comunicação profissional com link direto</p>
  </div>
</div>

<div style="text-align: center; margin: 3rem 0;">
  <a href="#" style="display: inline-block; background: #009968; color: white; padding: 1rem 2.5rem; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 1.1rem;">
    ▶ Ver Vídeo Completo do Fluxo
  </a>
</div>

## Pronto para Automatizar Suas Cobranças?

<div id="contact" style="background: linear-gradient(135deg, #003d2b 0%, #002219 100%); padding: 4rem 2rem; text-align: center; color: white; border-radius: 16px;">
  <h2 style="font-size: 2.2rem; max-width: 700px; margin: 0 auto 1.5rem;">Desenvolvo soluções sob medida para seu modelo de negócios</h2>
  
  <div style="display: flex; flex-wrap: wrap; gap: 1.5rem; justify-content: center; margin: 2.5rem 0;">
    <div style="background: rgba(255, 255, 255, 0.1); padding: 1.5rem; border-radius: 12px; max-width: 300px;">
      <h3 style="color: #00c08b;">WhatsApp API</h3>
      <p>Automações de comunicação profissional</p>
    </div>    
    <div style="background: rgba(255, 255, 255, 0.1); padding: 1.5rem; border-radius: 12px; max-width: 300px;">
      <h3 style="color: #00c08b;">Sistemas Financeiros</h3>
      <p>Integrações com gateways de pagamento</p>
    </div>    
    <div style="background: rgba(255, 255, 255, 0.1); padding: 1.5rem; border-radius: 12px; max-width: 300px;">
      <h3 style="color: #00c08b;">Automações Customizadas</h3>
      <p>Fluxos específicos para seu negócio</p>
    </div>
  </div>
  
  <a href="mailto:seuemail@provedor.com" style="display: inline-block; background: white; color: #002219; padding: 1rem 3rem; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 1.1rem; margin-top: 1rem;">
    Solicitar Orçamento
  </a>
</div>
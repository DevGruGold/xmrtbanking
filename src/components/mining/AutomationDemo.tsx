import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, Brain, Zap, CheckCircle, ArrowRight, TrendingUp, Activity } from 'lucide-react';

interface AutomationEvent {
  id: string;
  type: 'governance' | 'liquidity' | 'optimization' | 'analysis';
  message: string;
  agent: string;
  timestamp: Date;
  status: 'processing' | 'completed' | 'pending';
  value?: string;
}

const AutomationDemo = () => {
  const [events, setEvents] = useState<AutomationEvent[]>([]);
  const [stats, setStats] = useState({
    activeAgents: 3,
    decisionsPerHour: 0,
    liquidityOptimized: 0,
    governanceProposals: 0
  });

  const eventTemplates = [
    {
      type: 'governance' as const,
      messages: [
        'Analyzing governance proposal #47 for treasury allocation',
        'Processing community voting data for proposal #48',
        'Executing approved governance decision #46',
        'Evaluating new protocol upgrade proposal',
        'Optimizing governance token distribution'
      ],
      agents: ['ElizaOS Governor', 'LangChain Analyst', 'Governance Agent']
    },
    {
      type: 'liquidity' as const,
      messages: [
        'Optimizing MobileMonero mining pool allocation',
        'Rebalancing treasury liquidity distribution',
        'Executing automated yield farming strategy',
        'Monitoring cross-chain liquidity flows',
        'Adjusting mining difficulty parameters'
      ],
      agents: ['Liquidity Manager', 'DeFi Optimizer', 'Mining Controller']
    },
    {
      type: 'optimization' as const,
      messages: [
        'Analyzing network performance metrics',
        'Optimizing smart contract gas efficiency',
        'Upgrading AI model parameters',
        'Enhancing mining algorithm performance',
        'Streamlining transaction processing'
      ],
      agents: ['Performance Agent', 'LangFlow Optimizer', 'Network Analyzer']
    },
    {
      type: 'analysis' as const,
      messages: [
        'Generating market sentiment analysis report',
        'Analyzing competitor protocol strategies',
        'Evaluating risk exposure across assets',
        'Processing community feedback data',
        'Forecasting revenue projections'
      ],
      agents: ['Market Analyst', 'Risk Assessor', 'Data Processor']
    }
  ];

  useEffect(() => {
    const generateEvent = () => {
      const template = eventTemplates[Math.floor(Math.random() * eventTemplates.length)];
      const message = template.messages[Math.floor(Math.random() * template.messages.length)];
      const agent = template.agents[Math.floor(Math.random() * template.agents.length)];
      
      const newEvent: AutomationEvent = {
        id: Date.now().toString(),
        type: template.type,
        message,
        agent,
        timestamp: new Date(),
        status: 'processing',
        value: template.type === 'liquidity' ? `$${(Math.random() * 10000).toFixed(0)}` : undefined
      };

      setEvents(prev => [newEvent, ...prev.slice(0, 4)]);

      // Update event status after a delay
      setTimeout(() => {
        setEvents(prev => prev.map(event => 
          event.id === newEvent.id ? { ...event, status: 'completed' } : event
        ));
      }, 2000 + Math.random() * 3000);
    };

    // Generate initial events
    generateEvent();
    
    // Set up interval for new events
    const interval = setInterval(generateEvent, 3000 + Math.random() * 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateStats = () => {
      setStats(prev => ({
        activeAgents: 3 + Math.floor(Math.random() * 3),
        decisionsPerHour: prev.decisionsPerHour + Math.floor(Math.random() * 3),
        liquidityOptimized: prev.liquidityOptimized + Math.floor(Math.random() * 1000),
        governanceProposals: prev.governanceProposals + (Math.random() > 0.7 ? 1 : 0)
      }));
    };

    const statsInterval = setInterval(updateStats, 5000);
    return () => clearInterval(statsInterval);
  }, []);

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'governance': return <Brain className="h-4 w-4" />;
      case 'liquidity': return <TrendingUp className="h-4 w-4" />;
      case 'optimization': return <Zap className="h-4 w-4" />;
      case 'analysis': return <Activity className="h-4 w-4" />;
      default: return <Bot className="h-4 w-4" />;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'governance': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'liquidity': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'optimization': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'analysis': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4 text-green-400" />;
      case 'processing': return <div className="h-4 w-4 border-2 border-orange-primary border-t-transparent rounded-full animate-spin" />;
      default: return <div className="h-4 w-4 bg-gray-500 rounded-full" />;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      {/* Real-time Stats */}
      <Card className="bg-white/5 backdrop-blur-sm border-orange-primary/20 p-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Bot className="h-5 w-5 text-orange-primary" />
            <h3 className="text-lg font-semibold text-white">Live AI Operations</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="text-2xl font-bold text-orange-primary animate-pulse">
                {stats.activeAgents}
              </div>
              <div className="text-xs text-gray-400">Active Agents</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-green-400">
                {stats.decisionsPerHour}
              </div>
              <div className="text-xs text-gray-400">Decisions/Hour</div>
            </div>
            <div className="space-y-1">
              <div className="text-sm font-bold text-blue-400">
                ${stats.liquidityOptimized.toLocaleString()}
              </div>
              <div className="text-xs text-gray-400">Liquidity Optimized</div>
            </div>
            <div className="space-y-1">
              <div className="text-sm font-bold text-purple-400">
                {stats.governanceProposals}
              </div>
              <div className="text-xs text-gray-400">Proposals Processed</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Live Activity Feed */}
      <Card className="bg-white/5 backdrop-blur-sm border-orange-primary/20 p-6 lg:col-span-2">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Activity className="h-5 w-5 text-orange-primary animate-pulse" />
            <h3 className="text-lg font-semibold text-white">Autonomous Operations</h3>
            <Badge variant="secondary" className="bg-green-500/20 text-green-300">
              Live
            </Badge>
          </div>
          
          <div className="space-y-3 max-h-32 overflow-y-auto">
            {events.map((event) => (
              <div key={event.id} className="flex items-start space-x-3 animate-fade-in">
                <div className="flex-shrink-0 mt-1">
                  {getStatusIcon(event.status)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <Badge className={`text-xs px-2 py-1 ${getEventColor(event.type)}`}>
                      {getEventIcon(event.type)}
                      <span className="ml-1 capitalize">{event.type}</span>
                    </Badge>
                    <span className="text-xs text-gray-400">{event.agent}</span>
                    {event.value && (
                      <span className="text-xs text-green-400 font-medium">{event.value}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-300 mt-1">{event.message}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-500 flex-shrink-0 mt-1" />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="text-xs text-gray-400">
              AI agents are continuously optimizing operations 24/7
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AutomationDemo;
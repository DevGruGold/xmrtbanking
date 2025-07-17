import React from 'react';
import { Card } from '@/components/ui/card';
import { ArrowRight, Bot, Brain, Coins, TrendingUp, Users, Zap } from 'lucide-react';

const LiquidityEngine = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">AI-Driven Autonomous Governance</h2>
        <p className="text-gray-400">How AI agents orchestrate the XMRT DAO ecosystem</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white/10 backdrop-blur-sm p-6 border-orange-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-orange-primary" />
              <h3 className="text-lg font-semibold text-white">ElizaOS Integration</h3>
            </div>
            <p className="text-white/80 text-sm">
              Advanced AI agents powered by ElizaOS manage autonomous decision-making and governance processes within the DAO.
            </p>
          </div>
        </Card>

        <Card className="bg-white/10 backdrop-blur-sm p-6 border-orange-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Bot className="h-6 w-6 text-orange-primary" />
              <h3 className="text-lg font-semibold text-white">LangChain & LangFlow</h3>
            </div>
            <p className="text-white/80 text-sm">
              Sophisticated AI workflows using LangChain and LangFlow orchestrate complex operations and strategic planning.
            </p>
          </div>
        </Card>

        <Card className="bg-white/10 backdrop-blur-sm p-6 border-orange-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-orange-primary" />
              <h3 className="text-lg font-semibold text-white">Governance Token</h3>
            </div>
            <p className="text-white/80 text-sm">
              XMRT governance tokens enable community participation in AI-assisted decision-making and protocol evolution.
            </p>
          </div>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white/10 backdrop-blur-sm p-6 border-orange-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coins className="h-6 w-6 text-orange-primary" />
              <h3 className="text-lg font-semibold text-white">MobileMonero Engine</h3>
            </div>
            <p className="text-white/80 text-sm">
              Our liquidity engine generates consistent revenue through distributed mobile mining, funding DAO operations and development.
            </p>
          </div>
        </Card>

        <Card className="bg-white/10 backdrop-blur-sm p-6 border-orange-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-orange-primary" />
              <h3 className="text-lg font-semibold text-white">Autonomous Operations</h3>
            </div>
            <p className="text-white/80 text-sm">
              AI agents continuously optimize operations, treasury management, and strategic investments without human intervention.
            </p>
          </div>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-orange-primary/50 to-orange-secondary/50 backdrop-blur-sm p-6 border-orange-primary/30">
        <div className="flex items-center space-x-4">
          <Users className="h-8 w-8 text-orange-primary" />
          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-white">AI-First Autonomous Ecosystem</h3>
            <p className="text-white/80">
              The first fully AI-led DAO where artificial intelligence agents govern, optimize, and evolve the entire ecosystem autonomously while serving the community.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LiquidityEngine;
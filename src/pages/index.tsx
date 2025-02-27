import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Hero, Section, StatCard, PerformanceChart, FeatureCard } from '@/components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Suivi de Livraisons avec IA | PackTrack</title>
        <meta name="description" content="Une solution innovante pour optimiser la gestion des expéditions et améliorer l'expérience client" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        
        <Section id="contexte" title="Contexte et Objectifs">
          <div className="glass-card">
            <p className="text-lg mb-6">
              Ce projet vise à améliorer le suivi des livraisons de colis en intégrant des technologies avancées et de l'intelligence artificielle.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <motion.div 
                className="glass-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-2">Objectifs principaux</h3>
                <ul className="ml-4 list-disc pl-4">
                  <li>Optimiser la gestion des expéditions</li>
                  <li>Anticiper les retards de livraison</li>
                  <li>Automatiser le traitement des remboursements</li>
                  <li>Améliorer l'expérience utilisateur</li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="glass-card"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-2">Résultats attendus</h3>
                <ul className="ml-4 list-disc pl-4">
                  <li>Réduction des délais de livraison</li>
                  <li>Augmentation de la satisfaction client</li>
                  <li>Optimisation des coûts logistiques</li>
                  <li>Prise de décision basée sur les données</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </Section>
        
        <Section id="technologies" title="Technologies Utilisées">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              className="glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap">
                <span className="tech-pill">NestJS</span>
                <span className="tech-pill">GraphQL</span>
                <span className="tech-pill">MySQL</span>
                <span className="tech-pill">Prisma ORM</span>
                <span className="tech-pill">WebSockets</span>
                <span className="tech-pill">JWT</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap">
                <span className="tech-pill">Next.js</span>
                <span className="tech-pill">TailwindCSS</span>
                <span className="tech-pill">Framer Motion</span>
                <span className="tech-pill">Recharts</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Infrastructure</h3>
              <div className="flex flex-wrap">
                <span className="tech-pill">Docker</span>
                <span className="tech-pill">Docker Compose</span>
                <span className="tech-pill">Vercel</span>
                <span className="tech-pill">Railway</span>
                <span className="tech-pill">GitHub Actions</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Intelligence Artificielle</h3>
              <div className="flex flex-wrap">
                <span className="tech-pill">GPT</span>
                <span className="tech-pill">Bolt</span>
                <span className="tech-pill">Synthesia</span>
                <span className="tech-pill">SlidesAI.io</span>
              </div>
            </motion.div>
          </div>
        </Section>
        
        <Section id="architecture" title="Architecture du Projet">
          <div className="glass-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4">Base de Données MySQL</h3>
                <ul className="ml-4 list-disc pl-4">
                  <li><strong>users</strong>: Stockage des utilisateurs</li>
                  <li><strong>packages</strong>: Informations des colis et statuts</li>
                  <li><strong>refund_requests</strong>: Gestion des remboursements</li>
                  <li><strong>performance_metrics</strong>: Suivi des performances</li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4">API GraphQL</h3>
                <ul className="ml-4 list-disc pl-4">
                  <li><code className="bg-white/10 px-2 py-1 rounded">getPackages(userId)</code>: Récupération des colis</li>
                  <li><code className="bg-white/10 px-2 py-1 rounded">updatePackageStatus(packageId, status)</code>: Mise à jour</li>
                  <li><code className="bg-white/10 px-2 py-1 rounded">requestRefund(packageId, reason)</code>: Remboursement</li>
                  <li><code className="bg-white/10 px-2 py-1 rounded">getPerformanceMetrics()</code>: Analyse des livraisons</li>
                </ul>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Interface Utilisateur (Next.js)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass-card">
                  <ul className="ml-4 list-disc pl-4">
                    <li>Tableau de bord interactif</li>
                    <li>Suivi des livraisons en temps réel</li>
                  </ul>
                </div>
                <div className="glass-card">
                  <ul className="ml-4 list-disc pl-4">
                    <li>Système de filtrage des colis</li>
                    <li>Module de gestion des remboursements</li>
                    <li>Visualisation des performances</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>
        
        <Section id="dashboard" title="Tableau de Bord">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <StatCard 
              icon="📦" 
              label="Colis livrés" 
              value="1344" 
              change="+312 ce mois" 
              positive={true} 
              delay={0}
            />
            
            <StatCard 
              icon="⏱️" 
              label="Taux de retard" 
              value="9.6%" 
              change="150 colis en retard" 
              positive={false} 
              delay={0.1}
            />
            
            <StatCard 
              icon="❌" 
              label="Colis annulés" 
              value="69" 
              change="10 ce mois" 
              positive={false} 
              delay={0.2}
            />
            
            <StatCard 
              icon="💰" 
              label="Remboursements" 
              value="46" 
              change="7 approuvés ce mois" 
              positive={true} 
              delay={0.3}
            />
          </div>

          <motion.div 
            className="glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Performance mensuelle</h3>
            <div className="h-[400px]">
              <PerformanceChart />
            </div>
          </motion.div>
        </Section>
        
        <Section id="ia" title="Rôle de l'IA dans le Projet">
          <div className="glass-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard 
                title="Analyse prédictive des retards"
                description="L'IA analyse l'historique des livraisons et les tendances pour prédire les retards potentiels et proposer des solutions préventives."
                delay={0}
              />
              
              <FeatureCard 
                title="Gestion intelligente des remboursements"
                description="Identification automatique des réclamations légitimes et traitement accéléré des demandes de remboursement."
                delay={0.1}
              />
              
              <FeatureCard 
                title="Chatbot IA"
                description="Assistant virtuel pour répondre aux questions des clients concernant leurs colis et résoudre les problèmes courants."
                delay={0.2}
              />
              
              <FeatureCard 
                title="Recommandations d'amélioration"
                description="Suggestions basées sur les données pour optimiser les itinéraires de livraison et réduire les coûts logistiques."
                delay={0.3}
              />
            </div>
            
            <motion.div 
              className="glass-card mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">Recommandations IA</h3>
              <div className="recommendation">
                <p><strong>Analyse des retards :</strong> Les données montrent une tendance à la baisse des retards de livraison. Continuez à optimiser vos itinéraires de livraison pour maintenir cette tendance.</p>
              </div>
            </motion.div>
          </div>
        </Section>
        
        <Section id="processus" title="Processus de Développement">
          <div className="glass-card">
            <div className="space-y-6">
              <motion.div 
                className="phase-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="phase-title">Phase 1 : Planification et Conception</div>
                <div className="phase-content">
                  <ul className="list-disc pl-4">
                    <li>Définition des besoins et des cas d'usage</li>
                    <li>Choix des technologies et création des maquettes</li>
                    <li>Modélisation de la base de données</li>
                  </ul>
                </div>
              </motion.div>
              
              <motion.div 
                className="phase-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="phase-title">Phase 2 : Développement Backend</div>
                <div className="phase-content">
                  <ul className="list-disc pl-4">
                    <li>Mise en place de l'API GraphQL avec NestJS</li>
                    <li>Création des mutations et requêtes pour la gestion des colis</li>
                    <li>Intégration de WebSockets pour les mises à jour en temps réel</li>
                    <li>Tests unitaires et validation des fonctionnalités</li>
                  </ul>
                </div>
              </motion.div>
              
              <motion.div 
                className="phase-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="phase-title">Phase 3 : Développement Frontend</div>
                <div className="phase-content">
                  <ul className="list-disc pl-4">
                    <li>Mise en place de l'interface utilisateur avec Next.js</li>
                    <li>Création du tableau de bord et des pages de suivi des colis</li>
                    <li>Intégration des graphiques interactifs</li>
                    <li>Amélioration UX/UI avec TailwindCSS et Framer Motion</li>
                  </ul>
                </div>
              </motion.div>
              
              <motion.div 
                className="phase-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="phase-title">Phase 4 : Infrastructure et Déploiement</div>
                <div className="phase-content">
                  <ul className="list-disc pl-4">
                    <li>Configuration de Docker pour un environnement reproductible</li>
                    <li>Mise en place du CI/CD avec GitHub Actions</li>
                    <li>Déploiement sur Vercel (frontend) et Railway (backend et base de données)</li>
                    <li>Monitoring avec Sentry et logs d'activité</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </Section>
        
        <Section id="design" title="Design et Expérience Utilisateur">
          <div className="glass-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4">Principes du Glassmorphisme</h3>
                <ul className="list-disc pl-4">
                  <li>Transparence et flou pour un effet moderne</li>
                  <li>Dégradés subtils pour une immersion visuelle</li>
                  <li>Animations fluides pour une meilleure interactivité</li>
                  <li>Icônes et typographie épurées</li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4">Expérience Utilisateur</h3>
                <ul className="list-disc pl-4">
                  <li>Interface intuitive et responsive</li>
                  <li>Temps de chargement optimisés</li>
                  <li>Accessibilité pour tous les utilisateurs</li>
                  <li>Feedback visuel et notifications en temps réel</li>
                </ul>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Éléments d'interface</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="glass-card">
                  <h4 className="font-bold">Cartes statistiques</h4>
                  <p>Affichage clair des métriques clés avec indicateurs de tendance</p>
                </div>
                
                <div className="glass-card">
                  <h4 className="font-bold">Graphiques interactifs</h4>
                  <p>Visualisation des données avec filtres et options de personnalisation</p>
                </div>
                
                <div className="glass-card">
                  <h4 className="font-bold">Tableaux de données</h4>
                  <p>Affichage structuré avec options de tri et de filtrage avancées</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>
        
        <Section id="resultats" title="Résultats et Avantages du Projet">
          <div className="glass-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard 
                title="Optimisation du suivi en temps réel"
                description="Visualisation instantanée de l'état des livraisons et notifications automatiques en cas de problème."
                delay={0}
              />
              
              <FeatureCard 
                title="Amélioration de la satisfaction client"
                description="Augmentation de 27% du taux de satisfaction grâce à une meilleure transparence et communication."
                delay={0.1}
              />
              
              <FeatureCard 
                title="Réduction des délais de remboursement"
                description="Traitement des demandes de remboursement accéléré de 65% grâce à l'automatisation intelligente."
                delay={0.2}
              />
              
              <FeatureCard 
                title="Interface moderne et performante"
                description="Expérience utilisateur fluide et intuitive avec des temps de chargement optimisés."
                delay={0.3}
              />
            </div>
            
            <motion.div 
              className="glass-card mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">Impact sur les performances</h3>
              <ul className="list-disc pl-4">
                <li>Réduction de 15% des retards de livraison</li>
                <li>Diminution de 22% des coûts logistiques</li>
                <li>Augmentation de 35% de la productivité des équipes</li>
                <li>Réduction de 40% du temps de traitement des réclamations</li>
              </ul>
            </motion.div>
          </div>
        </Section>
        
        <Section id="conclusion" title="Conclusion">
          <motion.div 
            className="glass-card text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-xl mb-6">
              Grâce à l'intégration de l'IA, des technologies modernes et d'une infrastructure optimisée, ce projet de suivi des livraisons offre une solution innovante, performante et évolutive.
            </p>
            
            <p className="text-xl mb-10">
              L'IA ne se contente pas d'analyser les données, elle prend des décisions intelligentes, automatise les processus et améliore l'expérience utilisateur.
            </p>
            
            <div className="flex justify-center">
              <a href="https://project-full-ia.vercel.app/" target="_blank" className="glass-button text-lg px-8 py-3">
                Découvrir la démo
              </a>
            </div>
          </motion.div>
        </Section>
      </main>
    </>
  );
}
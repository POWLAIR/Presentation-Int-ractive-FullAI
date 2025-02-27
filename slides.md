---
theme: default
background: none
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
css: unocss
title: Suivi de Livraisons avec IA
---

# Suivi de Livraisons avec IA

<div class="pt-12 opacity-80">
  Une solution innovante pour optimiser la gestion des expéditions
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://project-full-ia.vercel.app/" target="_blank" class="glass-button">
    Voir la démo
  </a>
</div>

<style>
@import './styles/glassmorphism.css';
</style>

---
layout: default
---

# Contexte et Objectifs

<div class="glass-card">
  <p>Ce projet vise à améliorer le suivi des livraisons de colis en intégrant des technologies avancées et de l'intelligence artificielle.</p>
  
  <div class="grid grid-cols-2 gap-4 mt-8">
    <div class="glass-card">
      <h3 class="text-xl font-bold mb-2">Objectifs principaux</h3>
      <ul class="ml-4">
        <li>Optimiser la gestion des expéditions</li>
        <li>Anticiper les retards de livraison</li>
        <li>Automatiser le traitement des remboursements</li>
        <li>Améliorer l'expérience utilisateur</li>
      </ul>
    </div>
    
    <div class="glass-card">
      <h3 class="text-xl font-bold mb-2">Résultats attendus</h3>
      <ul class="ml-4">
        <li>Réduction des délais de livraison</li>
        <li>Augmentation de la satisfaction client</li>
        <li>Optimisation des coûts logistiques</li>
        <li>Prise de décision basée sur les données</li>
      </ul>
    </div>
  </div>
</div>

<style>
@import './styles/glassmorphism.css';
</style>

---
layout: default
---

# Technologies Utilisées

<div class="grid-container">
  <div class="glass-card">
    <h3 class="text-xl font-bold mb-4">Backend</h3>
    <div class="flex flex-wrap">
      <span class="tech-pill">NestJS</span>
      <span class="tech-pill">GraphQL</span>
      <span class="tech-pill">MySQL</span>
      <span class="tech-pill">Prisma ORM</span>
      <span class="tech-pill">WebSockets</span>
      <span class="tech-pill">JWT</span>
    </div>
  </div>
  
  <div class="glass-card">
    <h3 class="text-xl font-bold mb-4">Frontend</h3>
    <div class="flex flex-wrap">
      <span class="tech-pill">Next.js</span>
      <span class="tech-pill">TailwindCSS</span>
      <span class="tech-pill">Framer Motion</span>
      <span class="tech-pill">Recharts</span>
    </div>
  </div>
  
  <div class="glass-card">
    <h3 class="text-xl font-bold mb-4">Infrastructure</h3>
    <div class="flex flex-wrap">
      <span class="tech-pill">Docker</span>
      <span class="tech-pill">Docker Compose</span>
      <span class="tech-pill">Vercel</span>
      <span class="tech-pill">Railway</span>
      <span class="tech-pill">GitHub Actions</span>
    </div>
  </div>
  
  <div class="glass-card">
    <h3 class="text-xl font-bold mb-4">Intelligence Artificielle</h3>
    <div class="flex flex-wrap">
      <span class="tech-pill">GPT</span>
      <span class="tech-pill">Bolt</span>
      <span class="tech-pill">Synthesia</span>
      <span class="tech-pill">SlidesAI.io</span>
    </div>
  </div>
</div>

<style>
@import './styles/glassmorphism.css';
</style>

---
layout: default
---

# Architecture du Projet

<div class="glass-card">
  <div class="grid grid-cols-2 gap-6">
    <div>
      <h3 class="text-xl font-bold mb-4">Base de Données MySQL</h3>
      <ul class="ml-4">
        <li><strong>users</strong>: Stockage des utilisateurs</li>
        <li><strong>packages</strong>: Informations des colis et statuts</li>
        <li><strong>refund_requests</strong>: Gestion des remboursements</li>
        <li><strong>performance_metrics</strong>: Suivi des performances</li>
      </ul>
    </div>
    
    <div>
      <h3 class="text-xl font-bold mb-4">API GraphQL</h3>
      <ul class="ml-4">
        <li><code>getPackages(userId)</code>: Récupération des colis</li>
        <li><code>updatePackageStatus(packageId, status)</code>: Mise à jour</li>
        <li><code>requestRefund(packageId, reason)</code>: Remboursement</li>
        <li><code>getPerformanceMetrics()</code>: Analyse des livraisons</li>
      </ul>
    </div>
  </div>
  
  <div class="mt-6">
    <h3 class="text-xl font-bold mb-4">Interface Utilisateur (Next.js)</h3>
    <div class="grid grid-cols-2 gap-4">
      <div class="glass-card">
        <ul class="ml-4">
          <li>Tableau de bord interactif</li>
          <li>Suivi des livraisons en temps réel</li>
        </ul>
      </div>
      <div class="glass-card">
        <ul class="ml-4">
          <li>Système de filtrage des colis</li>
          <li>Module de gestion des remboursements</li>
          <li>Visualisation des performances</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<style>
@import './styles/glassmorphism.css';
</style>

---
layout: default
---

# Tableau de Bord

<div class="grid-container grid-cols-4">
  <StatCard 
    icon="📦" 
    label="Colis livrés" 
    value="1344" 
    change="+312 ce mois" 
    :positive="true" 
  />
  
  <StatCard 
    icon="⏱️" 
    label="Taux de retard" 
    value="9.6%" 
    change="150 colis en retard" 
    :positive="false" 
  />
  
  <StatCard 
    icon="❌" 
    label="Colis annulés" 
    value="69" 
    change="10 ce mois" 
    :positive="false" 
  />
  
  <StatCard 
    icon="💰" 
    label="Remboursements" 
    value="46" 
    change="7 approuvés ce mois" 
    :positive="true" 
  />
</div>

<div class="glass-card mt-8">
  <h3 class="section-title">Performance mensuelle</h3>
  <PerformanceChart />
</div>

<style>
@import './styles/glassmorphism.css';
</style>

---
layout: default
---

# Rôle de l'IA dans le Projet

<div class="glass-card">
  <div class="grid grid-cols-2 gap-6">
    <div class="glass-card">
      <h3 class="text-xl font-bold mb-2">Analyse prédictive des retards</h3>
      <p>L'IA analyse l'historique des livraisons et les tendances pour prédire les retards potentiels et proposer des solutions préventives.</p>
    </div>
    
    <div class="glass-card">
      <h3 class="text-xl font-bold mb-2">Gestion intelligente des remboursements</h3>
      <p>Identification automatique des réclamations légitimes et traitement accéléré des demandes de remboursement.</p>
    </div>
    
    <div class="glass-card">
      <h3 class="text-xl font-bold mb-2">Chatbot IA</h3>
      <p>Assistant virtuel pour répondre aux questions des clients concernant leurs colis et résoudre les problèmes courants.</p>
    </div>
    
    <div class="glass-card">
      <h3 class="text-xl font-bold mb-2">Recommandations d'amélioration</h3>
      <p>Suggestions basées sur les données pour optimiser les itinéraires de livraison et réduire les coûts logistiques.</p>
    </div>
  </div>
  
  <div class="glass-card mt-6">
    <h3 class="text-xl font-bold mb-2">Recommandations IA</h3>
    <div class="recommendation">
      <p><strong>Analyse des retards :</strong> Les données montrent une tendance à la baisse des retards de livraison. Continuez à optimiser vos itinéraires de livraison pour maintenir cette tendance.</p>
    </div>
  </div>
</div>

<style>
@import './styles/glassmorphism.css';
</style>

---
layout: default
---

# Processus de Développement

<div class="glass-card">
  <div class="phase-card">
    <div class="phase-title">Phase 1 : Planification et Conception</div>
    <div class="phase-content">
      <ul>
        <li>Définition des besoins et des cas d'usage</li>
        <li>Choix des technologies et création des maquettes</li>
        <li>Modélisation de la base de données</li>
      </ul>
    </div>
  </div>
  
  <div class="phase-card">
    <div class="phase-title">Phase 2 : Développement Backend</div>
    <div class="phase-content">
      <ul>
        <li>Mise en place de l'API GraphQL avec NestJS</li>
        <li>Création des mutations et requêtes pour la gestion des colis</li>
        <li>Intégration de WebSockets pour les mises à jour en temps réel</li>
        <li>Tests unitaires et validation des fonctionnalités</li>
      </ul>
    </div>
  </div>
  
  <div class="phase-card">
    <div class="phase-title">Phase 3 : Développement Frontend</div>
    <div class="phase-content">
      <ul>
        <li>Mise en place de l'interface utilisateur avec Next.js</li>
        <li>Création du tableau de bord et des pages de suivi des colis</li>
        <li>Intégration des graphiques interactifs</li>
        <li>Amélioration UX/UI avec TailwindCSS et Framer Motion</li>
      </ul>
    </div>
  </div>
  
  <div class="phase-card">
    <div class="phase-title">Phase 4 : Infrastructure et Déploiement</div>
    <div class="phase-content">
      <ul>
        <li>Configuration de Docker pour un environnement reproductible</li>
        <li>Mise en place du CI/CD avec GitHub Actions</li>
        <li>Déploiement sur Vercel (frontend) et Railway (backend et base de données)</li>
        <li>Monitoring avec Sentry et logs d'activité</li>
      </ul>
    </div>
  </div>
</div>

<style>
@import './styles/glassmorphism.css';
</style>

---
layout: default
---

# Design et Expérience Utilisateur

<div class="glass-card">
  <div class="grid grid-cols-2 gap-6">
    <div>
      <h3 class="text-xl font-bold mb-4">Principes du Glassmorphisme</h3>
      <ul class="ml-4">
        <li>Transparence et flou pour un effet moderne</li>
        <li>Dégradés subtils pour une immersion visuelle</li>
        <li>Animations fluides pour une meilleure interactivité</li>
        <li>Icônes et typographie épurées</li>
      </ul>
    </div>
    
    <div>
      <h3 class="text-xl font-bold mb-4">Expérience Utilisateur</h3>
      <ul class="ml-4">
        <li>Interface intuitive et responsive</li>
        <li>Temps de chargement optimisés</li>
        <li>Accessibilité pour tous les utilisateurs</li>
        <li>Feedback visuel et notifications en temps réel</li>
      </ul>
    </div>
  </div>
  
  <div class="mt-6">
    <h3 class="text-xl font-bold mb-4">Éléments d'interface</h3>
    <div class="grid grid-cols-3 gap-4">
      <div class="glass-card">
        <h4 class="font-bold">Cartes statistiques</h4>
        <p>Affichage clair des métriques clés avec indicateurs de tendance</p>
      </div>
      
      <div class="glass-card">
        <h4 class="font-bold">Graphiques interactifs</h4>
        <p>Visualisation des données avec filtres et options de personnalisation</p>
      </div>
      
      <div class="glass-card">
        <h4 class="font-bold">Tableaux de données</h4>
        <p>Affichage structuré avec options de tri et de filtrage avancées</p>
      </div>
    </div>
  </div>
</div>

<style>
@import './styles/glassmorphism.css';
</style>

---
layout: default
---

# Résultats et Avantages du Projet

<div class="glass-card">
  <div class="grid grid-cols-2 gap-6">
    <div class="glass-card">
      <h3 class="text-xl font-bold mb-2">Optimisation du suivi en temps réel</h3>
      <p>Visualisation instantanée de l'état des livraisons et notifications automatiques en cas de problème.</p>
    </div>
    
    <div class="glass-card">
      <h3 class="text-xl font-bold mb-2">Amélioration de la satisfaction client</h3>
      <p>Augmentation de 27% du taux de satisfaction grâce à une meilleure transparence et communication.</p>
    </div>
    
    <div class="glass-card">
      <h3 class="text-xl font-bold mb-2">Réduction des délais de remboursement</h3>
      <p>Traitement des demandes de remboursement accéléré de 65% grâce à l'automatisation intelligente.</p>
    </div>
    
    <div class="glass-card">
      <h3 class="text-xl font-bold mb-2">Interface moderne et performante</h3>
      <p>Expérience utilisateur fluide et intuitive avec des temps de chargement optimisés.</p>
    </div>
  </div>
  
  <div class="glass-card mt-6">
    <h3 class="text-xl font-bold mb-2">Impact sur les performances</h3>
    <ul class="ml-4">
      <li>Réduction de 15% des retards de livraison</li>
      <li>Diminution de 22% des coûts logistiques</li>
      <li>Augmentation de 35% de la productivité des équipes</li>
      <li>Réduction de 40% du temps de traitement des réclamations</li>
    </ul>
  </div>
</div>

<style>
@import './styles/glassmorphism.css';
</style>

---
layout: center
class: text-center
---

# Conclusion

<div class="glass-card">
  <p class="text-xl mb-6">
    Grâce à l'intégration de l'IA, des technologies modernes et d'une infrastructure optimisée, ce projet de suivi des livraisons offre une solution innovante, performante et évolutive.
  </p>
  
  <p class="text-xl">
    L'IA ne se contente pas d'analyser les données, elle prend des décisions intelligentes, automatise les processus et améliore l'expérience utilisateur.
  </p>
  
  <div class="mt-8">
    <a href="https://project-full-ia.vercel.app/" target="_blank" class="glass-button">
      Découvrir la démo
    </a>
  </div>
</div>

<style>
@import './styles/glassmorphism.css';
</style>
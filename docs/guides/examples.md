---
sidebar_position: 3
---

# Exemples d'utilisation

Cette page présente plusieurs exemples d'utilisation du framework NeuralAgent™ pour résoudre différents types de problèmes. Ces exemples ont été conçus par Yann Coudrah pour illustrer les capacités et la flexibilité du système.

## Assistant de recherche scientifique

Cet exemple montre comment créer un assistant de recherche capable de collecter, analyser et synthétiser des informations scientifiques.

```python
from neural_agent import Agent, Task, Tool
from neural_agent.tools import WebSearchTool, PDFReaderTool, TextAnalysisTool

# Définir les outils nécessaires
search_tool = WebSearchTool(api_key="votre_clé_api")
pdf_reader = PDFReaderTool()
text_analyzer = TextAnalysisTool()

# Créer l'agent
research_assistant = Agent(
    name="research_assistant",
    description="Assistant de recherche scientifique capable de collecter et d'analyser des informations",
    tools=[search_tool, pdf_reader, text_analyzer]
)

# Définir la tâche de recherche
research_task = Task(
    description="Rechercher les dernières avancées en matière d'intelligence artificielle générative et créer un rapport de synthèse",
    parameters={
        "topic": "generative AI",
        "focus": "recent advancements",
        "time_period": "last year",
        "min_sources": 5
    }
)

# Exécuter la tâche
result = research_assistant.execute(research_task)

# Afficher le rapport
print(result.get_output("report"))
```

## Analyste de données

Cet exemple illustre comment utiliser NeuralAgent™ pour analyser des ensembles de données et générer des insights.

```python
from neural_agent import Agent, Task
from neural_agent.tools import DataLoadTool, DataVisualizationTool, StatisticalAnalysisTool
import pandas as pd

# Charger les données
data = pd.read_csv("sales_data.csv")

# Définir les outils d'analyse
data_loader = DataLoadTool()
visualizer = DataVisualizationTool()
stats_analyzer = StatisticalAnalysisTool()

# Créer l'agent analyste
data_analyst = Agent(
    name="data_analyst",
    description="Agent spécialisé dans l'analyse de données et la génération d'insights",
    tools=[data_loader, visualizer, stats_analyzer]
)

# Définir la tâche d'analyse
analysis_task = Task(
    description="Analyser les données de ventes pour identifier les tendances et les anomalies",
    parameters={
        "data": data,
        "dimensions": ["product_category", "region", "date"],
        "metrics": ["revenue", "units_sold", "customer_count"],
        "time_granularity": "monthly"
    }
)

# Exécuter l'analyse
result = data_analyst.execute(analysis_task)

# Afficher les insights
print("Insights clés:")
for insight in result.get_output("insights"):
    print(f"- {insight['description']}")
    
# Sauvegarder les visualisations
visualizations = result.get_output("visualizations")
for i, viz in enumerate(visualizations):
    viz.save(f"visualization_{i}.png")
```

## Assistant de codage

Cet exemple montre comment utiliser NeuralAgent™ pour assister dans le développement de logiciels.

```python
from neural_agent import Agent, Task
from neural_agent.tools import GitTool, CodeAnalysisTool, TestGenerationTool

# Définir les outils de développement
git_tool = GitTool()
code_analyzer = CodeAnalysisTool()
test_generator = TestGenerationTool()

# Créer l'agent développeur
code_assistant = Agent(
    name="code_assistant",
    description="Assistant de codage pour aider au développement et à l'amélioration de code",
    tools=[git_tool, code_analyzer, test_generator]
)

# Définir la tâche de refactoring
refactoring_task = Task(
    description="Analyser le code source, identifier les problèmes potentiels et suggérer des améliorations",
    parameters={
        "repository_url": "https://github.com/example/project",
        "target_files": ["src/main.py", "src/utils.py"],
        "focus_areas": ["performance", "readability", "security"]
    }
)

# Exécuter la tâche
result = code_assistant.execute(refactoring_task)

# Afficher les recommandations
print("Recommandations de refactoring:")
for recommendation in result.get_output("recommendations"):
    print(f"\nFichier: {recommendation['file']}")
    print(f"Problème: {recommendation['issue']}")
    print(f"Suggestion: {recommendation['suggestion']}")
    if 'code_example' in recommendation:
        print("Exemple de code:")
        print(recommendation['code_example'])
```

## Système multi-agent pour la création de contenu

Cet exemple plus complexe montre comment coordonner plusieurs agents spécialisés pour créer du contenu marketing.

```python
from neural_agent import Agent, Workflow, Task
from neural_agent.tools import WebSearchTool, ContentAnalysisTool, ImageGeneratorTool

# Créer les outils
search_tool = WebSearchTool()
content_analyzer = ContentAnalysisTool()
image_generator = ImageGeneratorTool()

# Créer les agents spécialisés
researcher = Agent(
    name="researcher",
    description="Agent spécialisé dans la recherche d'informations pertinentes",
    tools=[search_tool]
)

writer = Agent(
    name="writer",
    description="Agent spécialisé dans la rédaction de contenu",
    tools=[content_analyzer]
)

designer = Agent(
    name="designer",
    description="Agent spécialisé dans la création d'éléments visuels",
    tools=[image_generator]
)

# Créer un workflow pour la création de contenu
content_workflow = Workflow(
    name="content_creation",
    description="Workflow pour la création de contenu marketing"
)

# Ajouter les étapes au workflow
content_workflow.add_step(
    agent=researcher,
    task=Task(description="Rechercher des informations sur {topic} ciblant {audience}"),
    outputs=["research_results"]
)

content_workflow.add_step(
    agent=writer,
    task=Task(description="Créer un article de blog de {word_count} mots sur {topic} basé sur les recherches"),
    inputs=["research_results"],
    outputs=["article"]
)

content_workflow.add_step(
    agent=designer,
    task=Task(description="Créer des images d'illustration pour l'article"),
    inputs=["article"],
    outputs=["images"]
)

# Exécuter le workflow
result = content_workflow.execute(
    parameters={
        "topic": "intelligence artificielle dans le marketing",
        "audience": "marketeurs non techniques",
        "word_count": 1200
    }
)

# Récupérer les résultats
article = result.get_output("article")
images = result.get_output("images")

print(f"Article de {len(article.split())} mots créé")
print(f"{len(images)} images générées")
```

## Agent de surveillance autonome

Cet exemple montre comment créer un agent qui surveille en continu un système et réagit aux événements.

```python
from neural_agent import Agent, Task, Trigger
from neural_agent.tools import SystemMonitorTool, AlertTool, RepairTool
import asyncio

# Créer les outils
monitor = SystemMonitorTool(
    endpoints=["https://api.example.com/status", "https://api.example.com/metrics"]
)
alerter = AlertTool(
    channels=["email", "slack"],
    recipients={"email": ["admin@example.com"], "slack": ["#alerts"]}
)
repairer = RepairTool(
    repair_scripts={
        "high_cpu": "scripts/reduce_load.sh",
        "memory_leak": "scripts/restart_service.sh",
        "disk_full": "scripts/clean_logs.sh"
    }
)

# Créer l'agent de surveillance
monitoring_agent = Agent(
    name="system_monitor",
    description="Agent autonome qui surveille les systèmes et réagit aux problèmes",
    tools=[monitor, alerter, repairer]
)

# Définir un déclencheur pour les alertes de CPU élevé
cpu_trigger = Trigger(
    name="high_cpu_trigger",
    condition=lambda metrics: metrics.get("cpu_usage", 0) > 80,
    cooldown=300  # Secondes entre les déclenchements
)

# Définir un déclencheur pour les alertes de mémoire
memory_trigger = Trigger(
    name="high_memory_trigger",
    condition=lambda metrics: metrics.get("memory_usage", 0) > 90,
    cooldown=300
)

# Ajouter les déclencheurs à l'agent
monitoring_agent.add_trigger(
    trigger=cpu_trigger,
    task=Task(
        description="Analyser et résoudre le problème de CPU élevé",
        parameters={"issue_type": "high_cpu"}
    )
)

monitoring_agent.add_trigger(
    trigger=memory_trigger,
    task=Task(
        description="Analyser et résoudre le problème de mémoire élevée",
        parameters={"issue_type": "memory_leak"}
    )
)

# Fonction pour exécuter l'agent en continu
async def run_monitoring():
    print("Démarrage de la surveillance...")
    while True:
        # L'agent vérifie automatiquement les déclencheurs
        await monitoring_agent.check_triggers()
        await asyncio.sleep(60)  # Vérifier toutes les minutes

# Démarrer la surveillance
asyncio.run(run_monitoring())
```

## Notes d'implémentation

Ces exemples ont été conçus par Yann Coudrah pour illustrer les différentes façons d'utiliser le framework NeuralAgent™. Ils sont basés sur l'implémentation actuelle du système et peuvent nécessiter quelques ajustements en fonction de la version que vous utilisez.

Pour plus d'exemples et d'informations détaillées sur chaque fonctionnalité, consultez la documentation de l'API et les références techniques.

*Dernière mise à jour : 12 juin 2024 par Yann Coudrah*

---
sidebar_position: 1
---

# Guide de démarrage

Ce guide vous aidera à démarrer avec NeuralAgent™, le framework d'agents autonomes. Nous vous guiderons à travers l'installation, la configuration de base et la création de votre premier agent.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

-   Python 3.9 ou supérieur
-   pip (gestionnaire de paquets Python)
-   Un environnement virtuel (recommandé)

## Installation

NeuralAgent™ peut être installé facilement via pip :

```bash
pip install neural-agent
```

Pour les utilisateurs qui souhaitent les fonctionnalités avancées :

```bash
pip install neural-agent[full]
```

## Configuration de base

Après l'installation, vous devez configurer votre environnement NeuralAgent™. Créez un fichier de configuration nommé `neural_agent_config.yaml` dans votre répertoire de travail :

```yaml
# Configuration NeuralAgent
api_key: 'votre_clé_api' # Optionnel si vous utilisez l'API hébergée
log_level: 'info'

# Configuration des modèles
models:
    default: 'neural-agent-v2'
    fallback: 'neural-agent-v1'

# Configuration de la mémoire
memory:
    type: 'local' # Options: local, redis, postgres
    capacity: 1000

# Configuration des outils
tools:
    enabled:
        - search
        - calculator
        - document_processor
```

## Votre premier agent

Voici un exemple simple pour créer et exécuter votre premier agent :

```python
from neural_agent import Agent, Task

# Initialiser l'agent
agent = Agent(name="my_first_agent")

# Définir une tâche simple
task = Task(
    description="Rechercher des informations sur l'IA générative et créer un résumé",
    parameters={
        "topic": "generative AI",
        "sources": 3,
        "max_length": 500
    }
)

# Exécuter la tâche
result = agent.execute(task)

# Afficher le résultat
print(result.output)
```

## Exemple d'utilisation avancée

Voici un exemple plus avancé utilisant plusieurs agents coordonnés :

```python
from neural_agent import Agent, Task, Workflow
from neural_agent.tools import WebSearchTool, TextAnalysisTool

# Créer les outils
search_tool = WebSearchTool()
analysis_tool = TextAnalysisTool()

# Créer les agents spécialisés
researcher = Agent(
    name="researcher",
    description="Agent spécialisé dans la recherche d'informations",
    tools=[search_tool]
)

analyzer = Agent(
    name="analyzer",
    description="Agent spécialisé dans l'analyse de texte",
    tools=[analysis_tool]
)

writer = Agent(
    name="writer",
    description="Agent spécialisé dans la rédaction de contenu"
)

# Créer un workflow
workflow = Workflow(
    name="research_and_summarize",
    description="Recherche, analyse et résume un sujet"
)

# Ajouter les étapes au workflow
workflow.add_step(
    agent=researcher,
    task=Task(description="Rechercher des informations sur {topic}"),
    outputs=["research_results"]
)

workflow.add_step(
    agent=analyzer,
    task=Task(description="Analyser les résultats de recherche et identifier les points clés"),
    inputs=["research_results"],
    outputs=["analysis_results"]
)

workflow.add_step(
    agent=writer,
    task=Task(description="Rédiger un résumé basé sur l'analyse"),
    inputs=["analysis_results"],
    outputs=["final_summary"]
)

# Exécuter le workflow
result = workflow.execute(parameters={"topic": "recent advancements in AI"})

# Afficher le résultat final
print(result.get_output("final_summary"))
```

## Intégration d'outils personnalisés

L'un des aspects les plus puissants de NeuralAgent™ est sa capacité à intégrer des outils personnalisés :

```python
from neural_agent.tools import Tool

# Définir un outil personnalisé
@Tool(
    name="database_query",
    description="Exécute une requête sur une base de données",
    parameters={
        "query": "La requête SQL à exécuter",
        "connection_string": "Chaîne de connexion à la base de données"
    }
)
def query_database(query, connection_string):
    # Implémentation de la connexion à la base de données et de l'exécution de la requête
    # ...
    return results

# Utiliser l'outil personnalisé dans un agent
agent = Agent(
    name="data_analyst",
    tools=[query_database]
)

# Exécuter une tâche utilisant l'outil
task = Task(
    description="Analyser les ventes du dernier trimestre",
    parameters={
        "query": "SELECT * FROM sales WHERE date >= '2024-04-01' AND date <= '2024-06-30'",
        "connection_string": "postgresql://user:password@localhost:5432/sales_db"
    }
)

result = agent.execute(task)
```

## Étapes suivantes

Maintenant que vous avez créé votre premier agent, vous pouvez explorer les fonctionnalités plus avancées :

-   [Architecture détaillée](/docs/architecture/overview)
-   [API Reference](/docs/api/introduction)
-   [Exemples d'utilisation](/docs/guides/examples)

N'hésitez pas à consulter la documentation complète pour découvrir toutes les capacités de NeuralAgent™.

---

_Ce guide a été rédigé par Yann Coudrah, architecte principal de NeuralAgent™, et mis à jour le 10 juin 2024._

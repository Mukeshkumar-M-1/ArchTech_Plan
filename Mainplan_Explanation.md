# Global Architecture Plan: End-to-End Documentation Pipeline

```mermaid
flowchart TD

    %% =========================
    %% INPUT LAYER
    %% =========================

    A[User Uploads Document]

    %% =========================
    %% DATA EXTRACTION PIPELINE
    %% =========================

    A --> B[Phase 1: Data Extraction Pipeline]

    B --> B1[Phase 1.1: Ingest]
    B --> B2[Phase 1.2: Segment]
    B --> B3[Phase 1.3: Detect]
    B --> B4[Phase 1.4: Normalize]
    B --> B5[Phase 1.5: Classify]
    B --> B6[Phase 1.6: Explain]
    B --> B7[Phase 1.7: Score & ID]
    B --> B8[Phase 1.8: Global Dedup]
    B8 --> B9

    B9[Phase 1 Completed: All Data Extracted] --> C[Phase 2: Memory Creation pipeline]
    

    C --> C1[Phase 2.1: Requirements Enrichment]
    C --> C2[Phase 2.2: Category Summaries]
    C --> C3[Phase 2.3: Sub-category Summaries]
    C --> C4[Phase 2.4: Relationship Mapping]
    C --> C5[Phase 2.5: Project Overview]
    C --> C6[Phase 2.6: Update Index]

    C6 --> C7

    C7[Phase 2 Completed: All Memories Created]

    %% =========================
    %% TEMPLATE UNDERSTANDING
    %% =========================
    C7 --> D[Phase 3: Template Understanding]

    D --> E[Template Analysis Agent]
    E --> E1[ Phase 3.1: Parse Template]
    E --> E2[ Phase 3.2: Identify Sections]
    E --> E3[ Phase 3.3: Identify Required Fields]
    E --> E4[ Phase 3.4: Build Dependency Graph]
    E --> E5[ Phase 3.5: Determine Output Types]
    E5 --> E6

    E6[Phase 3 Completed: All Template Understanding]
    E6 --> F

    %% =========================
    %% ARCHITECTURE PLAN
    %% =========================
    F[Phase 4: Template Architecture Planning]

    F --> G[Template Architecture Plan Agent]
    G --> G1[ Phase 4.1: Analyze Template Structure]
    G --> G2[ Phase 4.2: Analyze Template Sections]
    G --> G3[ Phase 4.3: Analyze Template Required Fields]
    G --> G4[ Phase 4.4: Analyze Template Dependency Graph]
    G --> G5[ Phase 4.5: Analyze Template Output Types]
    
    G6[Phase 4 Complete: All Template Architecture]
    G5 -->G6 
    G6 -->H
    %% =========================
    %% CONTENT MAPPING
    %% =========================
    H[Phase 5: Template Content Mapping]
    H --> H1[Template Content Mapping Agent]

    H1 --> H2[ Phase 5.1: Map Template Content to Sections]
    H1 --> H3[ Phase 5.2: Map Template Content to Required Fields]
    H1 --> H4[ Phase 5.3: Map Template Content to Dependency Graph]
    H1 --> H5[ Phase 5.4: Map Template Content to Output Types]

    H5 --> H6[Phase 5 Complete: All Template Content Mapped]
    H6 --> I   

    %% =========================
    %% GAP DETECTION
    %% =========================
    I[Phase 6: Template Gap Detection]

    I --> I1[Template Gap Detection Agent]


    I1 --> I2[ Phase 6.1: Detect Missing Fields]
    I1 --> I3[ Phase 6.2: Detect Incomplete Content]
    I1 --> I4[ Phase 6.3: Detect Missing Dependencies]
    I1 --> I5[ Phase 6.4: Detect Missing Output Types]
    I5 --> I6[Phase 6 Complete: All Template Gap Detection]
    I6 --> I7{Gaps Detected?}
    I7 -->|Yes| J
    I7 -->|No| L

    %% =========================
    %% USER CLARIFICATION
    %% =========================
    J[Phase 7: Template User Clarification]
    J --> J1[Template User Clarification Agent]

    J1 --> J2[ Phase 7.1: Generate Missing Questions]
    J1 --> J3[ Phase 7.2: Ask User]
    J1 --> J4[ Phase 7.3: Collect Answers]
    J4 --> J5[Phase 7 Complete: All Template User Clarification]
    J5 --> K
    %% =========================
    %% MEMORY UPDATE
    %% =========================
    K[Phase 8: Template Memory Update]
    K --> K1[Template Memory Update Agent]

    K1 --> K2[ Phase 8.1: Update Existing Memories]
    K1 --> K3[ Phase 8.2: Create New Memory Files]
    K1 --> K4[ Phase 8.3: Update memory.md Index]
    K1 --> K5[ Phase 8.4: Rebuild Memory files with user inputs]
    K5 --> K6[Phase 8 Complete: All Template Memory Update]

    K6 --> I

    %% =========================
    %% FINAL ASSEMBLY
    %% =========================
    L[Phase 9: Template Final Assembly]
    L --> L1[Template Final Assembly Agent]

    L1 --> L2[ Phase 9.1: Merge Sections]
    L1 --> L3[Phase 9.2: Build TOC]
    L1 --> L4[Phase 9.3: Apply Formatting]
    L1 --> L5[Phase 9.4: Resolve References]
    L1 --> L6[Phase 9.5: Generate Final Document]
    L6 --> L7[Phase 9 Complete: All Template Final Assembly]
    L7 --> M
    %% =========================
    %% OUTPUTS
    %% =========================
    M[Phase 10: Template Outputs]
    M --> M1[Template Final Document with User inputs]
    M1 --> M2[Markdown Export]
    M2 --> M3[Phase 10 Complete: All Template Outputs]
```

This document explains the complete, 10-phase automated document generation pipeline. It describes how raw input specifications are digested, enriched, mapped to targets, and compiled into fully stylized, validated final documents.

---

## Global Pipeline Overview

The system is structured as an interactive multi-agent system. Below is a high-level summary of the 10 phases:

| Phase | Name | Focus | Key Output |
| :--- | :--- | :--- | :--- |
| **1** | **Data Extraction Pipeline** | Page-by-page document ingestion & cleaning | Clean, deduplicated raw requirement list |
| **2** | **Memory Creation Pipeline** | Contextual enrichment and summary building | Enriched Memory Store (Markdown files) |
| **3** | **Template Understanding** | Analyzing target outlines and required blanks | Section outline & DAG dependency graph |
| **4** | **Template Architecture Planning**| Creating target structural execution blueprints | Target document architecture roadmap |
| **5** | **Template Content Mapping** | Binding extracted memories to template slots | Fully mapped template schema |
| **6** | **Template Gap Detection** | Checking for missing information or rules | Checklist of missing fields/unresolved gaps |
| **7** | **Template User Clarification** | Prompting the user to answer missing questions | User feedback & collected answers |
| **8** | **Template Memory Update** | Updating memories with user answers | Refreshed, complete Memory Store (loops back) |
| **9** | **Template Final Assembly** | Compiling, formatting, and linking sections | Integrated final draft document |
| **10**| **Template Outputs** | Formatting and exporting the finished files | Markdown, PDF, and DOCX final files |

---

## Detailed Phase Explanations

### Phase 1: Data Extraction Pipeline (Phases 1.1 - 1.8)
* **Goal:** Convert raw, messy technical specification PDFs or images into normalized, classified requirements.
* **Mechanism:**
  * Extracts raw text and tables using parser tools (Stage 1.1).
  * Chunks text logically, scores and isolates technical statements (Stages 1.2 - 1.3).
  * Standardizes engineering grammar ("shall") and classifies requirements by technical domain (Stages 1.4 - 1.5).
  * Generates descriptive context, assigns unique IDs, and deduplicates identical rules globally (Stages 1.6 - 1.8).

### Phase 2: Memory Creation Pipeline (Phases 2.1 - 2.6)
* **Goal:** Turn the flat requirements catalog into a structured knowledge base (Memory Store).
* **Mechanism:**
  * Rewrites each requirement into a detailed markdown specification sheet (Phase 2.1).
  * Generates high-level summaries by category and subcategory (Phases 2.2 - 2.3).
  * Maps relationships and dependencies between hardware rails, clocks, and software interfaces (Phase 2.4).
  * Compiles a central directory index file (`MEMORY.md`) (Phases 2.5 - 2.6).

### Phase 3: Template Understanding (Phases 3.1 - 3.5)
* **Goal:** Parse blank target templates to understand what the user wants to generate.
* **Mechanism:**
  * Uses the **Template Analysis Agent** to break down the blank template's outline and headings (Phases 3.1 - 3.2).
  * Extracts placeholder variables and builds a Directed Acyclic Graph (DAG) of section dependencies (Phases 3.3 - 3.4).
  * Determines target export output types (Phase 3.5).

### Phase 4: Template Architecture Planning (Phases 4.1 - 4.5)
* **Goal:** Design a blueprint detailing *how* the document will be built.
* **Mechanism:**
  * Uses the **Template Architecture Plan Agent** to analyze the structures, required fields, and DAG dependency graph (Phases 4.1 - 4.4).
  * Schedules the compilation order and defines the layout formatting configurations (Phase 4.5).

### Phase 5: Template Content Mapping (Phases 5.1 - 5.4)
* **Goal:** Map the saved memories to the target template locations.
* **Mechanism:**
  * The **Template Content Mapping Agent** aligns the enriched requirements from Phase 2 with the section variables and placeholders identified in Phase 3.

### Phase 6: Template Gap Detection (Phases 6.1 - 6.4)
* **Goal:** Identify any missing data or broken dependencies before generating text.
* **Mechanism:**
  * The **Template Gap Detection Agent** checks for missing fields, incomplete descriptions, or unfulfilled dependency links.
  * If gaps are found, it sets the `Gaps Detected?` flag to **Yes**, routing the flow to Phase 7. If no gaps exist, it routes to Phase 9.

### Phase 7: Template User Clarification (Phases 7.1 - 7.3)
* **Goal:** Interactively ask the user for missing details.
* **Mechanism:**
  * The **Template User Clarification Agent** compiles all gaps into clear questions, asks the user, and collects their answers.

### Phase 8: Template Memory Update (Phases 8.1 - 8.4)
* **Goal:** Update the knowledge base with the user's answers.
* **Mechanism:**
  * The **Template Memory Update Agent** writes the user's responses into the corresponding memory markdown files, index lists, and vector databases.
  * Once updated, **the pipeline loops back to Phase 6 (Gap Detection)** to verify that all gaps are resolved.

### Phase 9: Template Final Assembly (Phases 9.1 - 9.5)
* **Goal:** Compile all mapped sections into a single draft.
* **Mechanism:**
  * The **Template Final Assembly Agent** merges the individual generated sections, constructs the Table of Contents, applies styling rules, and resolves cross-references.

### Phase 10: Template Outputs (Phases 10.1 - 10.3)
* **Goal:** Export the completed document into final, distribution-ready formats.
* **Mechanism:**
  * Generates the final document with user-clarified parameters and exports it to standard Markdown, DOCX, or PDF formats.

---

## Architectural Best Practices & Mentor Notes

Keep these design principles in mind as you build out the implementation:

### 1. The Closed-Loop Verification Loop
Routing Phase 8 back to Phase 6 prevents incomplete documents from being compiled. In software architecture, this is called **Continuous Validation**. By re-running gap detection after updates, the agent guarantees that the document meets all quality criteria before assembly starts.

### 2. Idempotent State Updates
Because the loop between Phases 6, 7, and 8 can run multiple times, the **Memory Update Agent (Phase 8)** must be idempotent. Every time it writes user inputs to a markdown file, it must overwrite existing keys or append fresh entries without duplicating existing parameters.

### 3. Fail-Fast Planning
Phases 5 and 6 act as early gates. If a system variable is missing, it is much cheaper to find it and ask the user in Phase 7 *before* invoking heavy LLM generation tasks in Phase 9.

# Portfolio V2 Tickets

Stand: 2026-06-04

## Phase 1 - Recruiter Conversion verbessern

- Ticket: Hero und Summary auf klare Recruiter-Positionierung umbauen
- Status: in progress
- Bereits begonnen: `src/components/sections/HeroSection.tsx`, `src/components/ui/HeroIdentity.tsx`, `src/components/layout/SiteHeader.tsx`
- Bereits sichtbar: die rechte Hero-Karte ist schon auf "Engineering Snapshot" umgestellt
- Noch offen: Headline, Rollenbezeichnung, Technologiezeile und Value Proposition gemäß Roadmap ersetzen
- Noch offen: Professional Summary direkt unter dem Hero ergänzen und mobil sauber umbrechen
- Acceptance: innerhalb von 5 Sekunden klar erkennbar, wer Michael ist, welche Technologien er nutzt und für welche Rolle er passt

## Phase 2 - Skills professioneller darstellen

- Ticket: Tech Stack in Engineering-Fokus umstrukturieren
- Status: in progress
- Bereits begonnen: `src/data.ts`
- Bereits sichtbar: `Frontend Engineering`, `Backend Engineering` und `Quality Engineering` existieren schon
- Noch offen: die Liste ist noch zu breit und enthält zusätzliche, nicht geplante Kategorien wie `Databases`, `Testing & Tooling` und `AI-Assisted Development`
- Noch offen: die Skills müssen exakt nach Frontend, Backend und Quality gruppiert werden
- Acceptance: Testing und Backend müssen prominent sichtbar sein, die Darstellung soll Fähigkeiten statt reiner Technologie-Aufzählung transportieren

## Phase 3 - Open Source hervorheben

- Ticket: Eigene Open-Source-Section ergänzen
- Status: completed
- Bereits umgesetzt: eigene Section `OpenSourceSection` mit GitHub-Link und Contributions-Liste
- Bereits umgesetzt: Navigationseintrag `Open Source`
- Hinweis: die Section sitzt aktuell zwischen `Projects` und `Documents`; für mehr Präsenz können wir sie später weiter nach oben ziehen
- Acceptance: eigene Section, GitHub-Link vorhanden, sichtbar vor der Contact Section

## Phase 4 - GitHub Bereich ersetzen

- Ticket: GitHub-Stats durch Engineering Snapshot ersetzen
- Status: completed
- Bereits umgesetzt: der frühere GitHub-Card-Block ist aus dem Hero entfernt
- Bereits umgesetzt: `src/components/ui/HeroIdentity.tsx` zeigt jetzt `Engineering Snapshot`, `Current Learning` und `Focus Areas`
- Hinweis: `src/data.ts` enthält noch ein nicht mehr genutztes `githubProfile`-Objekt
- Acceptance: keine GitHub Stats mehr, Fokus klar auf Engineering

## Phase 5 - Projektseiten aufwerten

- Ticket: Projektkarten in echte Case Studies umwandeln
- Status: completed
- Bereits umgesetzt: `src/components/sections/ProjectsSection.tsx` rendert jetzt eine einheitliche Case-Study-Struktur
- Bereits umgesetzt: Problem, Solution, Architecture, Challenges und Learnings sind pro Projekt sichtbar
- Bereits umgesetzt: die Projekte sind weiterhin als Karten im bestehenden Design eingebettet
- Acceptance: technische Herausforderungen und Lernkurve müssen pro Projekt sichtbar sein

## Phase 6 - Instagram Clone hinzufügen

- Ticket: Neues Featured Project als Backend-lastige Case Study ergänzen
- Status: skipped
- Hinweis: Projekt wurde nicht fertig umgesetzt und wird auf Wunsch vorerst ausgelassen
- Acceptance: GitHub-Link, Live-Demo, Screenshots und Architekturdiagramm vorhanden

## Phase 7 - Testing sichtbar machen

- Ticket: Eigene Testing-&-Quality-Section ergänzen
- Status: completed
- Bereits umgesetzt: eigene `TestingSection` mit Qualitäts-Story und dediziertem Schwerpunkt auf Test- und Delivery-Praktiken
- Bereits umgesetzt: Navigationseintrag `Testing`
- Bereits umgesetzt: `Quality Engineering` wird als sichtbarer Fokusblock mit Skills und `Recent work` erzählt
- Acceptance: nicht nur Skill-Liste, sondern eigene Sektion mit echtem inhaltlichem Gewicht

## Phase 8 - Architecture Diagrams

- Ticket: Architekturdiagramme für Hauptprojekte ergänzen
- Status: not started
- Noch offen: keine SVG- oder Mermaid-Diagramme im Repo gefunden
- Noch offen: mindestens `Instagram Clone`, `FlowVid` und `Compass` brauchen eine Architektur-Visualisierung
- Acceptance: responsive, dark-mode-tauglich und technisch lesbar

## Phase 9 - Dokumente optimieren

- Ticket: Dokumentensektion auf Kernmaterial reduzieren
- Status: completed
- Bereits umgesetzt: nur drei Dokumentkarten sind direkt sichtbar
- Bereits umgesetzt: zusätzliche Dokumente und Preview sind hinter einem `Show more` / `Show less` Toggle versteckt
- Acceptance: weniger visuelle Last, mehr Fokus auf die wichtigsten Nachweise

## Phase 10 - How I Build Software

- Ticket: Engineering-Philosophy-Section ergänzen
- Status: completed
- Bereits umgesetzt: eigene visuell hervorgehobene `BuildProcessSection`
- Bereits umgesetzt: die sechs Schritte Understand Requirements, Design APIs, Write Tests, Implement Features, Refactor, Automate with CI/CD sind als klare Reihenfolge sichtbar
- Bereits umgesetzt: Navigationseintrag `How I Build`
- Acceptance: senioreres Auftreten durch einen klaren Arbeitsprozess statt nur einzelner Skills

## Priorisierte Reihenfolge aus der Roadmap

- Woche 1: Phase 1, Phase 2, Phase 3, Phase 4
- Woche 2: Phase 5, Phase 6, Phase 7
- Woche 3: Phase 8, Phase 10, Phase 9

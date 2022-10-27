# code de base pour TP (et future SAE 301)

- **Nom : Steib--Audy**
- **Prénom : Victoria**
- **URL maquette Figma: https://www.figma.com/file/uimP2loQtZpg2Lis1T9z7W/SAE-301?node-id=6%3A43**
- **URL publique du site : http://tiktak.steib-audy.fr**
- **URL projet Supabase : https://app.supabase.com/project/udwvwkwyjocruqjlcwth**
  - [x] Avez-vous invité abdallah.makhoul@univ-fcomte.fr dans votre 'Organisation' Supabase ?

# Auto-évaluation

## R313 | Dev Back (Abdallah Makhoul : [AC 2404](https://moodle.univ-fcomte.fr/mod/assign/view.php?id=612670) et [AC 2402](https://moodle.univ-fcomte.fr/mod/assign/view.php?id=612669))

Vous avez rendu à la racine du projet :

- [x] Le modèle conceptuel de données (nom : [MCD.png](/MCD.png) ou [MCD.pdf](/MCD.pdf) [^1])
- [x] Et compléter le fichier [bdd.sql](/bdd.sql) détaillant le code pour la création des tables, vues et policies créées
- [x] Avez-vous bien invité abdallah.makhoul@univ-fcomte.fr dans votre 'Organisation' Supabase comme développeur ?

## R312 | Intégrer ([Pierre Pracht : AC 2401](https://moodle.univ-fcomte.fr/mod/assign/view.php?id=612668))

Pour les liens :
[vers des fichiers](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes#relative-links-and-image-paths-in-readme-files) ou page d'un commit sur Github.

Noté sur 40.

- [README](/README.md) bien rempli (0-2-4pts)
  - Ne cochez que ce que vous avez fait.
- Fonctionnalités "avancées" du site (0-2-4pts)
- Intégration du site (0-2-4-6pts)
- Code et Commit (0-2-4-6pts)
- Code HTML spécifiquement sémantique et accessible (0-1-2pts)

- [x] usage de Classes utilitaires (1pt)
  - https://tailwindcss.com/docs/adding-custom-styles#adding-custom-utilities
  - [liens vers classes utilitaitres](/src/index.css#L5)
  https://github.com/MMI-SAE-301/sae-301-2022-Steib-Audy-Victoria/commit/ccb70d893e9fb4fa89c96ddb3c6a06f86bfeb239
- [x] Composants graphiques (0-1-2pts)
  - [liens vers le bouton connexion](/src/components/btnConnexion.vue)
  [liens vers le bouton inscription](/src/components/btnInscription.vue)
  [liens vers le bouton personnalisation](/src/components/btnPersonnalisation.vue)
  https://github.com/MMI-SAE-301/sae-301-2022-Steib-Audy-Victoria/commit/4e2a0d3ee8414e222e93d8b931961828a881107d
  [liens vers le formulaire de personnalisation](/src/components/FormMontreC.vue)
  [liens vers la liste form kit pour les couleurs](/src/components/FormKitListColors.vue)
- Technique CSS (0-1-2pts)
  - Quelles techniques (Eg. Styles graphiques (répétés) tous ajoutés par CSS et/ou
    config. Tailwind (eg. before/after avec content, background...))
    - ...
  - liens
- Mise en page CSS (0-1-2pts)
  - Quelles techniques (Grilles Flex...)
    - Grid, Flex
  - [liens vers grid](/src/pages/index.vue#L13)
  [liens vers grid](/src/pages/montrecarree/personnaliser.vue#L9)
  [liens vers grid](/src/pages/connexion.vue#L14)

  [liens vers flex](/src/pages/index.vue#L14)
  [liens vers flex](/src/pages/index.vue#L29)
  [liens vers flex](/src/pages/connexion.vue#L9)
  - [x] Mise en page fluide
- [ ] Mobile First (0-1-2pts)
  - [ ] Plusieurs tailles
    - sm, md, lg, xl
- [x] Dark Mode (0-1-2pts)
  - [x] Simple usage de 'dark:'
  - [ ] Mise en place avec usage de custom property pour les couleurs. Ou usage de DaisyUI AVEC thèmes perso
    - [liens vers bouton darkmode](/src/App.vue#L9)
    [liens vers dark:](/src/pages/index.vue#L10)
- "tailwin.config.js" (0-1-2pts)
  - [x] usage basique couleurs/fonts
  - [ ] Comporte des données supplémentaires (utilisées !). Eg: "content-xxx", "bg-xxx", "grid-cols-xxx"...
    - [liens](/tailwind.config.js#L7)
- Composants "accessibles" (0-1-2pts)
  - [ ] textes "accessibles" (eg. 'sr-only')
  - [ ] Contenu accessible ET Usage de composants étudié pour accessibilité (Eg. HeadlessUI)

[^1]: Supprimez les mentions inutiles.

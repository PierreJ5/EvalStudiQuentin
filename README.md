# Evaluation en Cours de Formation / DEVELOPPER LA PARTIE FRONT-END D'UNE APPLICATION WEB

Référence : GDDWWMECFENTRIII1A_301575_20221123225723

Projet de site web complet pour un photographe, Charles Cantin, qui présente ses réalisations, tarifs, et permet de le contacter via un formulaire.

Voir le [Site en Ligne](https://charles-cantin-photographee.netlify.app)

### Intégrations :

- 4 pages entièrement responsive
  - accueil
  - galerie
  - tarifs
  - contact
- Barre de navigation sur chaque page avec les icônes Facebook et instagram intégrée. 
- Image de fond sur toute la largeur et hauteur de la page d'accueil.
- Fonctionnalité sur la page Galerie pour trier les photos à afficher sans avoir à recharger la page
- Formulaire de Contact avec [Netlify Form](https://www.netlify.com/products/forms/)
- Contenu modifiable avec un CMS Headless : [Decap CMS](https://decapcms.org/)
- Site web hébergé avec [netlify](https://www.netlify.com/)

## Déploiement Local

### Cloner le repo Git sur votre ordinateur :

> git clone https://github.com/Mltss/EvalStudiQuentin.git

_Si vous ne possédez pas Node.js et npm, vous pouvez l'installer [ici](https://nodejs.org/en/download) et vous référer à la [documentation](https://nodejs.org/en/docs)_  
_Si vous possédez npm, entrez les commande suivante dans un terminal :_

> npm init -y  
> npm install @11ty/eleventy --save-dev

### Vérifiez le bon fonctionnement d'Eleventy en entrant la commande:

> npx @11ty/eleventy

_Si Eleventy vous demande d'installer des dépendances supplémentaires, tapez y et appuyez sur la touche Entrée; Re entrez la dernière commande_

_Si deux fichiers ont été copier, tout fonctionne parfaitement_
### Vous pouvez à présent consulter le site en local :

> npx @11ty/eleventy --serve

le site est disponible en faisant un control + clique sur le lien dans la console, ou dans votre navigateur à l'adresse : http://localhost:8080/

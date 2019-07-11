## SkillC_Outil_Dev

**Timeline**  / **(timeline-data.php**)

La timeline fonctionne sur le principe suivant : chaque progress bar est dans une `div`. La valeur de cette progress bar est exprimée avec un principe de classe : 
Il y'a 5 niveaux de hauteur définis actuellement : 

Pour l'équipe A :  
 
```css
 value-05 / value-10 / value-15 / value-20 / value-25
```
Pour l'équipe B :  
 
```css
 value--05 / value--10 / value--15 / value--20 / value--25
```

Il suffit de remplacer la classe pour utiliser une valeur de l'équipe, exemple : 
```html
 <div class="progress-bar-content">
   <div class="progress-bar value-20"><span class="progress-bar-bg"></span></div>
  </div>
```
Pour un fait de jeu nécessitant un picto (cartons, but, changement...) la structure ne change pas, il suffit de générer la balise `img` qui peut prendre deux classes aux choix : `icon-time-line-top` ou `icon-time-line-bottom`,  la première classe placera le picto au-dessus, la deuxième en-dessous, exemple : 

```html
    <div class="progress-bar-content">
       <div class="progress-bar value-20"><span class="progress-bar-bg"></span></div>
       <img src="../assets/icons/card-yellow.svg" class="icon-time-line-top">
    </div>
```
      
**Statistique** / (**stats.php)**

L'écran statistique fonctionne sur le principe suivant :
Chaque ligne de stats à une `div` stat-bar, qui comprend la valeur (span) et la progress bar (graph). 
```html
 <div class="stat-bar">
   <span>2</span>
    <div class="graph">
      <div class="graph-value-a graph-value graph-value-20"></div>
     </div>
 </div>
```

Même principe que pour la timeline, cette valeur s'exprime avec un principe de classe, il suffit de la remplacer  : 
```css
 graph-value-10 
 graph-value-20 
 graph-value-30 
 graph-value-40 
 graph-value-50 
 graph-value-60 
 graph-value-70 
 graph-value-80 
 graph-value-90 
 graph-value-100
```

Pour les cartons, il suffit d'ajouter la classe `red` ou `yellow` pour en activer un, exemple : 
```html
  <div class="card-bar">
    <span>8</span>
      <div class="cards-content">
        <div class="card-a card red"></div>
        <div class="card-a card"></div>
        <div class="card-a card"></div>
        <div class="card-a card"></div>
        <div class="card-a card"></div>
       </div>
  </div>
```
**Match Sheet** / **(match-sheet.php)**

L'écran Match Sheet fonctionne sur le principe suivant :
Les joueurs sont listés dans un `ul`, avec des `li`. Pour chaque paramètres (cartons, changement, but) il faut ajouter un span avec un principe de classe :<br> `picto-change` `card-yellow` `card-red` `goal`. Les paramètres sont cumulables, il suffit de génèrer plusieurs `span` pour ça exemple : 
```html
 <li>R. Neya
   <span class="picto-match-sheet goal">2</span>
   <span class="picto-match-sheet card-yellow"></span>
   <span class="picto-match-sheet icon-change"></span>
 </li>
```

Pour l'option but, le span doit toujour avoir une valeur définit (1 par défaut). 

```html
  <li>J. Lopez<span class="goal">X1</span></li>
```

**Les noms de joueurs ont un caractère max à ne pas dépasser :**

Sans picto = 12 caractères<br>
1 picto = 11 caractères<br>
2 pictos = 10 caractères<br>
1 picto + 1 but = 9 caractères<br>
2 pictos + 1 but = 7 caractères<br>

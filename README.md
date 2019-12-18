![](https://nsa40.casimages.com/img/2019/12/18/19121810445295212.png)

* Par Nicolas Congard
* Projet fullstack by Simplon.co
* Decembre 2019

## Description du site

Le site qui référence les ligues présentes dans l'univers DC Comics !

 L'utilisateur peut voir le nombre de membres et leur noms pour chacune d'entre elles ainsi qu'un visuel qui les accompagne.
 A chaque instant il est possible d'ajouter soi-même une ligue en précisant son nom et son nombre de membres obligatoirement et les noms des
 membres ainsi que l'url pour l'image de manière facultative.
 Une fois la ligue selectionnée, une seconde option s'ouvre à l'utilisateur : la possibilité de modifier son contenu en cliquant sur l'icone
 "crayon" (il est préférable de séparer les noms des membres par une virgule pour un meilleur affichage ensuite).
 Si l'utilisateur ne veut plus qu'une certaine ligue soit référencée, il peut simplement la supprimer de la base de données via l'icone "poubelle".
 
 Les informations complètes d'une ligue sont disponibles en format JSON en cliquant sur le bouton "informations".
 
## Diagramme

![](https://nsa40.casimages.com/img/2019/12/18/191218014249426034.png)

## Liste des endpoints

* **/dc/title**

Affichage du titre du site.
* **/dc/league**

Affichage d'une ligue précise selon son id.
* **/dc/leagues**

Affichage de la totalité des ligues.
* **/dc/newLeague**

Création d'une ligue en précisant "nom", "nbMembre", "members" et "url". 

*Note : pas besoin d'indiquer l'id, la valeur est auto-incrémentée*
* **/dc/updateLeague**

Modification d'une ligue en précisant "id", "nom", "nbMembre", "members" et "url".
* **/dc/deleteLeague**

Supression d'une ligue précise selon son id.

## Exemples

```
http://localhost:8080/dc/leagues
```

```
[
    {
        "id": 1,
        "nom": "Justice League",
        "nbMembre": 6,
        "membres": "Superman,Batman,WonderWoman,Flash,Green Lantern,Aquaman",
        "url": "https://media.melty.fr/article-2804634-head/justice-league-dc-comics-warner-bros-green.jpg"
    },
    {
        "id": 2,
        "nom": "Justice Society of America",
        "nbMembre": 8,
        "membres": "StarGirl,Catwoman,Martian Manhunter,Green Arrow,Atom,Cyclone,Dr Fate,Huntress",
        "url": "https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Justice_Society_of_America-vol3-1.jpg/220px-Justice_Society_of_America-vol3-1.jpg"
    },
    {
        "id": 3,
        "nom": "Justice League Dark",
        "nbMembre": 4,
        "membres": "Constantine,Deadman,SwampThing,Zatanna",
        "url": "https://cdna.artstation.com/p/assets/images/images/011/155/258/large/matias-laborde-2017-09-09-justice-league-dark-finalllll.jpg?1528131952\r\n"
    },
    {
        "id": 4,
        "nom": "Suicide Squad",
        "nbMembre": 6,
        "membres": "Harley Quinn,Deadshot,Black Manta,Killercroc,Captain Boomerang,Katanna\r\n",
        "url": "http://www.comicsblog.fr//images/galerie/bigimage/Suicide-Squad-Y0-fin.jpg\r\n"
    },
    {
        "id": 5,
        "nom": "Doom Patrol",
        "nbMembre": 5,
        "membres": "Chef,Elasti-Girl,Robotman,Negative Man,Beast Boy",
        "url": "https://cdn-s-www.bienpublic.com/images/5B0B1AE8-CDF3-4999-BF3A-91E56B2D860D/MF_contenu/doom-patrol-volume-1-1572200135.jpg"
    }
]
```

---

```
http://localhost:8080/dc/newLeague?nom=Syndicat Du Crime&nbMembre=6&membres=Ultraman,SuperWoman,Owlman,Power Ring,Johnny Quick,Barracuda&url=https://www.actuabd.com/local/cache-vignettes/L400xH299/foreverevil01-9c9ef.jpg?1554016629
```

```
{
    "id": 35,
    "nom": "Syndicat Du Crime",
    "nbMembre": 6,
    "membres": "Ultraman,SuperWoman,Owlman,Power Ring,Johnny Quick,Barracuda",
    "url": "https://www.actuabd.com/local/cache-vignettes/L400xH299/foreverevil01-9c9ef.jpg?1554016629"
}
```

## Ecran principal

![](https://nsa40.casimages.com/img/2019/12/18/191218074500627716.gif) 

------
Bonne visite !
 
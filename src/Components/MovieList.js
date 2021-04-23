import React from 'react'
import  TheOccupant  from '../Assets/TheOccupant.jpg';
import  Instinct  from '../Assets/Instinct.jpg';
import  Badboys  from '../Assets/Badboys.jpg';
import  Tenet  from '../Assets/Tenet.jpg';
import  Mercy  from '../Assets/Mercy.jpeg';
import  Gentlemen  from '../Assets/Gentlemen.jpg';

const MovieList = [

    {
        Id: Math.random(),
        Image : Mercy ,
        Title: "JUST MERCY" ,
        Descriptions: "Biopic Drame" ,
        Des : "Après ses études à l'université de Harvard, Bryan Stevenson aurait pu se lancer dans une carrière des plus lucratives. Il décide pourtant de se rendre en Alabama pour défendre ceux qui ont été condamnés à tort, avec le soutien d'une militante locale, Eva Ansley. Un de ses premiers cas - le plus incendiaire - est celui de Walter McMillian qui, en 1987, est condamné à mort pour le meurtre retentissant d'une jeune fille de 18 ans. Et ce en dépit d'un grand nombre de preuves attestant de son innocence et d'un unique témoignage à son encontre provenant d'un criminel aux motivations douteuses...",
        lien : "https://www.youtube.com/embed/dVJxMUqCUxs",
        rate: 5,
      },
  
      {
        Id: Math.random(),
        Image : TheOccupant ,
        Title: "THE OCCUPANT" ,
        Descriptions: "Thrillers" ,
        Des : "Quand un publicitaire au chômage décide d'espionner les nouveaux occupants de son ancien domicile, la situation tourne vite au cauchemar.",
        lien : "https://www.youtube.com/embed/DsHcN40GhCI",
        rate: 3,
      },
  
      {
        Id: Math.random(),
        Image : Instinct ,
        Title: "THE SHALLOWS" ,
        Descriptions: "Thrillers" ,
        Des : "Nancy surfe en solitaire sur une plage isolée lorsqu’elle est attaquée par un grand requin blanc. Elle se réfugie sur un rocher, hors de portée du squale. Elle a moins de 200 mètres à parcourir à la nage pour être sauvée, mais regagner la terre ferme sera le plus mortel des combats…",
        lien :"https://www.youtube.com/embed/vPOpE-_42as" ,
        rate: 2,
      },
  
      {
        Id: Math.random(),
        Image : Badboys ,
        Title: "BAD BOYS" ,
        Descriptions: "Action Comédie" ,
        Des : "Les Bad Boys Mike Lowrey et Marcus Burnett se retrouvent pour résoudre une ultime affaire...",
        lien :"https://www.youtube.com/embed/jKCj3XuPG8M" ,
        rate: 4,
      },
  
      {
        Id: Math.random(),
        Image : Gentlemen ,
        Title: "THE GENTLEMEN" ,
        Descriptions: "Policier, Action" ,
        Des : "Quand Mickey Pearson, baron de la drogue à Londres, laisse entendre qu’il pourrait se retirer du marché, il déclenche une guerre explosive : la capitale anglaise devient le théâtre de tous les chantages, complots, trahisons, corruptions et enlèvements… Dans cette jungle où l’on ne distingue plus ses alliés de ses ennemis, il n’y a de la place que pour un seul roi !",
        lien :"https://www.youtube.com/embed/KlXsguV9g0E" ,
        rate: 3,
      },
    
      { 
        Id: Math.random(),
        Image : Tenet ,
        Title: "TENET" ,
        Descriptions: "Science fiction" ,
        Des : "Muni d'un seul mot – Tenet – et décidé à se battre pour sauver le monde, notre protagoniste sillonne l'univers crépusculaire de l'espionnage international. Sa mission le projettera dans une dimension qui dépasse le temps. Pourtant, il ne s'agit pas d'un voyage dans le temps, mais d'un renversement temporel…",
        lien :"https://www.youtube.com/embed/LdOM0x0XDMo" ,
        rate: 3,
      },
]

export default MovieList

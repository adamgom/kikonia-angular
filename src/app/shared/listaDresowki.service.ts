import { Material } from '../shared/material.model';

export class ListaDresowkiService {

  private listaDresowki: Material[] = [
    { nazwa: 'balony w chmurach', imgPath: 'balony w chmurach.jpg' },
    { nazwa: 'chmurki na białym', imgPath: 'chmurki na bialym.jpg' },
    { nazwa: 'cytryny', imgPath: 'cytryny.jpg' },
    { nazwa: 'flamingi pastelowe', imgPath: 'flamingi pastelowe.jpg' },
    { nazwa: 'forest', imgPath: 'forest.jpg' },
    { nazwa: 'geometric 05 trójkąty turkus szary', imgPath: 'geometric 05 trojkaty turkus szary.jpg' },
    { nazwa: 'geometric 07 trójkąty róż czarny', imgPath: 'geometric 07 trojkaty roz czarny.jpg' },
    { nazwa: 'geometric etniczny', imgPath: 'geometric etniczny.jpg' },
    { nazwa: 'jabłuszka', imgPath: 'jabluszka.jpg' },
    { nazwa: 'jednorożce na różu', imgPath: 'jednorozce na rozu.jpg' },
    { nazwa: 'jednorożce na szarym', imgPath: 'jednorozce na szarym.jpg' },
    { nazwa: 'jelenie kolorowe na czarnym', imgPath: 'jelenie kolorowe na czarnym.jpg' },
    { nazwa: 'koliberki i róże', imgPath: 'koliberki i roze.jpg' },
    { nazwa: 'kolibry i róże', imgPath: 'kolibry i roze.jpg' },
    { nazwa: 'kot batman', imgPath: 'kot batman.jpg' },
    { nazwa: 'koziołki pętelka', imgPath: 'koziolki petelka.jpg' },
    { nazwa: 'krzyżyki', imgPath: 'krzyzyki.jpg' },
    { nazwa: 'łapacze snów', imgPath: 'lapacze snow.jpg' },
    { nazwa: 'leniwce', imgPath: 'leniwce.jpg' },
    { nazwa: 'leśne zwierzątka na białym', imgPath: 'lesne zwierzatka na bialym.jpg' },
    { nazwa: 'liski geometryczne', imgPath: 'liski geometryczne.jpg' },
    { nazwa: 'lisy w lesie na szarym', imgPath: 'lisy w lesie na szarym.jpg' },
    { nazwa: 'los geometryczny', imgPath: 'los geometryczny.jpg' },
    { nazwa: 'łowicz czarny', imgPath: 'lowicz czarny.jpg' },
    { nazwa: 'łowicz na białym', imgPath: 'lowicz na bialym.jpg' },
    { nazwa: 'malowane motyle', imgPath: 'malowane motyle.jpg' },
    { nazwa: 'malowane ptaszki', imgPath: 'malowane ptaszki.jpg' },
    { nazwa: 'misie gumisie', imgPath: 'misie gumisie.jpg' },
    { nazwa: 'niedźwiedzie geometryczne', imgPath: 'niedzwiedzie geometryczne.jpg' },
    { nazwa: 'pandy geometryczne', imgPath: 'pandy geometryczne.jpg' },
    { nazwa: 'papugi i arbuzy', imgPath: 'papugi i arbuzy.jpg' },
    { nazwa: 'pepitka z niebieskim', imgPath: 'pepitka z niebieskim.jpg' },
    { nazwa: 'pepitka z różowym', imgPath: 'pepitka z rozowym.jpg' },
    { nazwa: 'pingwiny', imgPath: 'pingwiny.jpg' },
    { nazwa: 'piórka', imgPath: 'piorka.jpg' },
    { nazwa: 'pioruny na białym', imgPath: 'pioruny na bialym.jpg' },
    { nazwa: 'ptaszki i klatki na miecie', imgPath: 'ptaszki i klatki na miecie.jpg' },
    { nazwa: 'strzałki na musztardowym', imgPath: 'strzalki na musztardowym.jpg' },
    { nazwa: 'szalone sowy', imgPath: 'szalone sowy.jpg' },
    { nazwa: 'szop Indianin', imgPath: 'szop indianin.jpg' },
    { nazwa: 'słodycze', imgPath: 'slodycze.jpg' },
    { nazwa: 'trójkąciki na białym', imgPath: 'trojkaciki na bialym.jpg' },
    { nazwa: 'wzór etniczny', imgPath: 'wzor etniczny.jpg' },
    { nazwa: 'zajączki na granacie', imgPath: 'zajaczki na granacie.jpg' }
  ];

  pobierzDersowke() {
    return this.listaDresowki.slice();
  }
}
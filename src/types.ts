export interface Montre {
  bracelet?: string;
  boitier?: string;
  ecran?: string;
  texte?: string

}

export const colors = {
  "#FFFFFF": "Blanc",
  "#000000": "Noir",
  "#FF0000": "Rouge",
  "#FF7A00": "Orange",
  "#FFA800": "Orange clair",
  "#FFFF00": "Jaune",
  "#8FFF00": "Vert",
  "#00FF47": "Vert flash",
  "#00FFA3": "Vert bleu",
  "#00FFF0": "Cyan",
  "#00A3FF": "Bleu",
  "#0029FF": "Bleu foncé",
  "#5200FF": "Violet",
  "#9E00FF": "Magenta",
  "#FF00F5": "Rose",
  "#FF005C": "Rose rouge",
  "#E0E0E0": "Gris clair",
  "#ACACAC": "Gris",
  "#636363": "Gris foncé",
};

export const matBoitier = [
  {
    value: "c3ccff6e-cc31-4d6e-b379-4920a865b742",
    label: "Aluminium"
  },
  {
    value: "c641d987-3489-47e6-90aa-e1b68940d6c4",
    label: "Acier inoxydable"
  },
  {
    value: "b3266081-5e90-449c-8a7c-d85af2b93b2f",
    label: "Titane"
  }
]
// export const matBoitier = {
//   "Aluminium": "Aluminium",
//   "Acier inoxydable": "Acier inoxydable",
//   "Titane": "Titane"
// }

export const matBracelet = [
  {
    value: "0a6589ee-e8c5-450d-9c9d-dc4221cfd5c3",
    label: "Caoutchouc"
  },
  {
    value: "6582c78e-4b2c-40fb-8cf9-efcff6010680",
    label: "Tissu"
  },
  {
    value: "6a04978f-0f62-4671-a3d0-d7282844447e",
    label: "Cuir"
  },
  {
    value: "c641d987-3489-47e6-90aa-e1b68940d6c4",
    label: "Acier inoxydable"
  },
]
// export const matBracelet = {
//   "Caoutchouc": "Caoutchouc",
//   "Tissu": "Tissu",
//   "Cuir": "Cuir",
//   "Acier inoxydable": "Acier inoxydable",
// }
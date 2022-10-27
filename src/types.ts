export interface Montre {
  bracelet?: string;
  boitier?: string;
  ecran?: string;
  texte?: string

}

export const colors = {
  "#000000": "Noir",
  "#FFFFFF": "Blanc",
  "#FF0000": "Rouge",
  "#00FF00": "Vert",
  "#0000FF": "Bleu",
  "#FFFF00": "Jaune",
  "#FF00FF": "Magenta",
  "#00FFFF": "Cyan",
  "#C0C0C0": "Gris clair",
  "#808080": "Gris",
  "#800000": "Marron",
  "#808000": "Olive",
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
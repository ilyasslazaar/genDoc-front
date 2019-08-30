import { connected } from "../constants/defaultValues";

export default function () {
  if (!connected) {
    return [];
  } else {
    return [
      {
        title: "Générer un Doc",
        htmlBefore: '<i class="material-icons">edit</i>',
        to: "/generate-doc"
      },
      {
        title: "Ajouter un type",
        htmlBefore: '<i class="material-icons">note_add</i>',
        to: "/add-type"
      },
      {
        title: "Afficher les types",
        htmlBefore: '<i class="material-icons">table_chart</i>',
        to: "/show-types"
      },
      {
        title: "Afficher les docs",
        htmlBefore: '<i class="material-icons">view_module</i>',
        to: "/show-docs"
      }
    ];
  }
}
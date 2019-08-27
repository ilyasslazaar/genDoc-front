export default function () {
  return [
    {
      title: "Générer un Doc",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/generate-doc"
    },
    {
      title: "Ajouter un type",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-type"
    },
    {
      title: "Afficher les docs",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/show-docs"
    },
    {
      title: "Afficher les types",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/show-types"
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }
  ];
}

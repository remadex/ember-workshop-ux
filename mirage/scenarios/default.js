export default function (server) {
  const ingredients = server.createList('ingredient', 10);

  server.createList('recipe', 10, { ingredients: [...ingredients] });
}

import type { Element } from "@kitajs/html/jsx";
import { Header } from "../components/header";
export const BaseHtml = ({children}: Element) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="/public/css/main.css" />
  <title>Frosty</title>
</head>
<body>
  ${Header()}
  <main>
    ${children}
  </main>
</body>
</html>
`;
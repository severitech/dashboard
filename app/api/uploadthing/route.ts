import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core"; // Asegúrate de que la ruta sea correcta

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});

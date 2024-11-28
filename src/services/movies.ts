// // src/pages/api/revalidate.ts
// import type { NextApiRequest, NextApiResponse } from "next";
// import { fetchMockMovies } from "./mockApi";

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
//         return res.status(401).json({ message: "Invalid token" });
//     }

//     const path = req.query.path as string;

//     if (!path) {
//         return res.status(400).json({ message: "Path is required" });
//     }

//     try {
//         // Simular la actualización de datos
//         const movies = await fetchMockMovies(); // Podrías modificar la función para simular cambios en los datos

//         console.log("Mock data updated:", movies);

//         // Revalidar la ruta específica
//         await res.revalidate(path);

//         return res.json({ revalidated: true, path, updatedMovies: movies });
//     } catch (error) {
//         console.error("Error revalidating:", error);
//         return res.status(500).json({ message: "Error revalidating", error });
//     }
// }

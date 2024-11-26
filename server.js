// AIzaSyCdodphuS56ozG_H4Z0NWS4CmTbacrimzs
// Olokomeu1!
// 
import express from "express";
import routes from "./src/routes/postRoutes.js";
const app = express();
app.use(express.static("uploads"))
routes(app);

app.listen(3000, () => {
    console.log("Servidor escutando!");
});






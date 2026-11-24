// server.js

import express from "express";
import dotenv from "dotenv";

import path from "path";

import admissionRoutes from "./routes/admissionRoutes.js";


const router = express.Router();

router.get("/",(req,res)=>{
    res.render("svic.ejs")
});
router.get("/navbar", (req, res) => {
    res.render("partials/header.ejs");
});
router.get("/admission", (req, res) => {
    res.render("admissionfrom.ejs");
});
router.get("/apply", (req, res) => {
    res.render("apply.ejs");
});
router.get("/b.pharma", (req, res) => {
    res.render("b.pharma.ejs");
});
router.get("/d.pharma", (req, res) => {
    res.render("d.pharma.ejs");
});
router.get("/login", (req, res) => {
    res.render("login.ejs");
});
router.get("/notice", (req, res) => {
    res.render("notice.ejs");
});

router.get("/procedure", (req, res) => {
    res.render("Procedure.ejs");
});
router.get("/register", (req, res) => {
    res.render("register.ejs");
});
router.get("/contact", (req, res) => {
    res.render("pharmacy-contact.ejs");
});
router.get("/about", (req, res) => {
    res.render("pharmacyabout.ejs");
});

// router.get("/teacher", (req, res) => {
//     res.render("contact.ejs");
// });

router.use("/", admissionRoutes);


export default router;
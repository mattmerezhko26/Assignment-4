/********************************************************************************
*  WEB322 – Assignment 04
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name:Matvii Merezhko  Student ID:127769230 Date: 2024-11-14
*
*  Published URL: assignment-4-rho-six.vercel.app
*
********************************************************************************/


const projectData = require("./modules/projects");
const path = require("path");

const express = require('express');
const app = express();

const HTTP_PORT = process.env.PORT || 8080;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');


app.get('/', (req, res) => {
  res.render("home");
});

app.get('/about', (req, res) => {
  res.render("about");
});

app.get("/solutions/projects", async (req, res) => {
  try {
    let projects;
    if (req.query.sector) {
      projects = await projectData.getProjectsBySector(req.query.sector);
      if (projects.length === 0) {
        return res.status(404).render("404", { message: `No projects found for sector: ${req.query.sector}` });
      }
    } else {
      projects = await projectData.getAllProjects();
    }
    res.render("projects", { projects });
  } catch (err) {
    res.status(404).render("404", { message: "An error occurred while fetching projects." });
  }
});

app.get("/solutions/projects/:id", async (req, res) => {
  try {
    const project = await projectData.getProjectById(req.params.id);
    if (!project) {
      return res.status(404).render("404", { message: `Project with ID ${req.params.id} not found.` });
    }
    res.render("project", { project });
  } catch (err) {
    res.status(404).render("404", { message: "An error occurred while fetching the project." });
  }
});

app.use((req, res, next) => {
  res.status(404).render("404", {message: "I'm sorry, we're unable to find what you're looking for"})
});


projectData.initialize().then(()=>{
  app.listen(HTTP_PORT, () => { console.log(`server listening on: ${HTTP_PORT}`) });
});
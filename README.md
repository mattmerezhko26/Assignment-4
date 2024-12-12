**Project Title:** Climate Solutions App with EJS

**Project Description:**

This project builds upon PetProjectV2 by refactoring the application to use the EJS template engine. This enhances the presentation of data by rendering HTML views directly from the server, improving user experience and maintainability. 

Key enhancements include:

* **EJS Integration:** 
    * Refactored all views (.html files) to use the .ejs extension.
    * Implemented EJS templating for dynamic content rendering.
    * Created a reusable "navbar.ejs" partial view for consistent navigation.
* **Project Data Rendering:** 
    * Rendered project data in tabular format on the "/solutions/projects" page.
    * Implemented detailed project views on "/solutions/projects/:id" pages.
* **Improved Error Handling:** 
    * Enhanced 404 error handling with custom error messages based on the type of error encountered.
* **Enhanced User Interface:** 
    * Refined the navbar with improved navigation links and removed the redundant "Sector" dropdown.
    * Incorporated a random quote from the DummyJSON API on the project detail pages.

**Technologies Used:**

* **Node.js:** The runtime environment for executing JavaScript outside of a web browser.
* **Express.js:** A popular web framework for building Node.js applications.
* **JavaScript:** The primary programming language used throughout the project.
* **JSON:** Data format used for storing and exchanging data between the server and client.
* **EJS:** A simple templating language that helps generate HTML dynamically.
* **Tailwind CSS:** A utility-first CSS framework for rapidly building custom user interfaces.
* **DaisyUI:** A set of pre-built components for Tailwind CSS, simplifying the development process.

**Key Features:**

* **Dynamic Content Rendering:** 
    * Utilizes EJS to dynamically generate HTML for all views, including project lists, individual project details, and the "About" page.
* **Improved User Experience:** 
    * Enhanced navigation with a streamlined navbar.
    * Provides a more informative and user-friendly 404 error page.
* **Data-Driven Views:** 
    * Displays project data in a clear and concise table format.
    * Presents detailed project information with images, summaries, and external links.

**Getting Started:**

1. **Clone the repository:** 
   ```bash
   git clone <repository_url> 
   ```
2. **Install dependencies:**
   ```bash
   cd <project_directory>
   npm install 
   ```
3. **Build Tailwind CSS:**
   ```bash
   npm run build 
   ```
4. **Run the server:**
   ```bash
   npm start 
   ```

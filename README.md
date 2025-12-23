# Portfolio (Munem Shahriar Khan)

This is a React portfolio site scaffolded and styled with Tailwind CSS. It uses React Router for navigation and includes components for Hero, About, Skills, Experience, Education, Projects, Contact, and Footer.

Quick start

1. Install dependencies:

```bash
cd portfolio
npm install
```

2. Start development server:

```bash
npm start
```

Notes
- Tailwind is configured via `tailwind.config.js` and the PostCSS setup.
- To enable email sending in the contact form, set these environment variables in a `.env` file at the `portfolio/` root:

```
REACT_APP_EMAILJS_USER_ID=your_user_id
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
```

Replace images in `public/images/` with your real profile and project images. Update `src/data/data.json` to change content.

Theme persistence
- The site stores the selected theme in `localStorage` under the `theme` key.
- The initial theme follows your previous choice (if any) or your OS preference.
# Portfolio Template - A Fully Customizable React.js Portfolio Website  

 

Welcome to **Portfolio Template**, a sleek and fully customizable portfolio website built with **React.js** and **Bootstrap**. This template is designed to help developers, designers, and creatives showcase their work effortlessly. With a simple JSON-based configuration, you can personalize the entire website without touching a single line of code.  

👉 **Live Preview:** [View Demo](https://portfolio-mu-sepia-18.vercel.app/)  

---

## Features  

- **Fully Customizable:** Edit the `data.json` file to update all sections of the portfolio.  
- **Responsive Design:** Built with Bootstrap for seamless responsiveness across devices.  
- **Easy to Use:** No coding required—just update the JSON file and deploy.  
- **Modern UI:** Clean and professional design to showcase your skills and projects.  
- **Dynamic Typing Effect:** Utilizes `react-simple-typewriter` for an engaging hero section.  

---

## Sections  

✔️ **Hero Section** - A dynamic typing effect to introduce yourself.  
✔️ **Summary and About Me** - Share your story and upload your profile picture.  
✔️ **Skills** - Highlight your expertise with customizable icons.  
✔️ **Projects** - Showcase your work with project details and links.  
✔️ **Contact** - Provide a way for visitors to connect with you.  

---

## Getting Started  

Follow these steps to set up and customize your portfolio:  

### Prerequisites  

Ensure you have the following installed on your machine:  
- [Git](https://git-scm.com)  
- [Node.js](https://nodejs.org/en/download/) (includes npm)  
- **For Windows Users:** Install [VS Code](https://code.visualstudio.com/download) for the build environment.

## How To Use

1. Fork this repoistory and clone it to your local machine.

```bash
$ git clone https://github.com/Munem333/Portfolio.git
```

2. Go into the repository

```bash
$ cd portfolio
```

3. Install dependencies

```bash
$ npm install
```

4. Start project in Local Server

```bash
$ npm start 
```

5. Edit and Customize Project 

- **Open the `data/data.json` file** and edit the details to personalize your portfolio.  
- **To update the logo**, navigate to `public/images/logo/` and replace `logo.png` with your own logo.  
- **Add icons** in `public/images/icons/` and update the paths in `data.json`.  
- **To change the "About Me" image**, replace `public/images/about/pp.png` with your picture.  
- Simply **edit the details in `data.json`** according to your needs, and your portfolio website will be updated.  
- Deploy your website anywhere you want!

6. Build Production App

```bash
$ npm run build
```

## Technologies Used

- [React.js](https://react.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [react-simple-typewriter](https://www.npmjs.com/package/react-simple-typewriter)

## Icons

Icon8 Icons are used in skill section. You can find all the icons here: [Icon8](https://icons8.com/icons).


## Author

👤 **Vandit Shah**
- Website: https://github.com/Munem333/Portfolio.git
- Github: [Munem333](https://github.com/Munem333)
- LinkedIn: [Munem Shahriar Khan](https://www.linkedin.com/in/munem-shahriar-khan-5596a12b6/)

## Show your support

Use this Project and Customize it according to your need for free

Just Give a ⭐️ if this project helped you!

Made with ❤️ and ☕ by [Munem Shahriar Khan](https://github.com/Munem333)

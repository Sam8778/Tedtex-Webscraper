<p align="center">
  <h2 align="center">
   <a href="https://tedtex-scraper.vercel.app/">
  Tedtex Webscraper
   </a>
 </h2>
</p>

### Hi there 👋 I'm [Sam George]
> Software Engineer


<img src="https://komarev.com/ghpvc/?username=Sam8778" alt="Sam George" />

<div>
 <p>
Tedtex-Webscraper allows users to easily scrape publicly available data from any page on Amazon, such as reviews, pricing, product information, and more. If you're interested in testing out this powerful tool, you can check out the website.
  Tedtex leverages the power of bright data to scrape data.
</p>
</div>

### Programming Languages Used🌐

| [<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" alt="ReactJs" width="24">](https://getreact.com/) |  [<img src="https://logowik.com/content/uploads/images/nextjs7685.logowik.com.webp" alt="Nextjs" width="24">](https://getnextjs.com/) | [<img src="https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp" alt="Tailwind" width="24">](https://gettailwind.com/) | [<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="Javascript" width="24">](https://javascript.com/) | [<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" alt="typescript" width="24">](https://typescript.com/)
|---|---|---|---|---|
 
### Tools 🛠️

| [<img src="https://seeklogo.com/images/B/brightdata-logo-0B731D9F1F-seeklogo.com.png" alt="brightdata" width="24">](https://www.brightdata.com/) | [<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png" alt="mysql" width="24">](https://www.mysql.com/) |  [<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png" alt="firebase" width="24">](https://firebase.google.com/) | [<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png" alt="vscode" width="24">](https://code.visualstudio.com/)
|---|---|---|---|

### How to run the Code 🤷
- Clone the Project using Git Clone
- Change values in .env file
- Create an account in Bright Data and put the automation script in.
- Create an account in Firebase and connect it.
- After all the env values are updated launch the project with the npm run dev command.

### BrightData code example 🧑‍💻

In the code example below, we make a request to retrieve the Amazon product page for any product.

```javascript
settings({ country: input.country || "us" });
navigate(`https://www.amazon.com/s?k=${input.search}`);
let max_page = parse().max_page;
let final_page = Math.min(input.pages || 0, max_page) || 1;
for (let i = 1; i <= final_page; i++) {
  let url = `https://www.amazon.com/s?k=${input.search}`;
  if (i > 1) url += `&page=${i}`;
  next_collector({ url, country: input.country, search: input.search });
}
```

Can modify this script to run scraper on other websites

### Github Stats

[![Sam George GitHub Stats](https://github-readme-stats.vercel.app/api?username=Sam8778&show_icons=true&count_private=true)](https://github.com/Sam8778)

### Github Repos
[![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=Sam8778&repo=Tedtex-Webscraper&show_owner=true)](https://github.com/Sam8778/Tedtex-Webscraper) 

<h3> 🤝🏻 Connect with Me </h3>

<p align="center">
<a href="https://portfolio-sam8778.vercel.app/" target="_blank"><img alt="Website" src="https://img.shields.io/badge/Website-www.samgeorge.com-blue?style=flat&logo=google-chrome"></a>
<a href="https://www.linkedin.com/in/sam-george-264618166/" target="_blank"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-@samgeorge-blue?style=flat&logo=linkedin"></a>
<a href="mailto:devsamgeorge@gmail.com"><img alt="Email" src="https://img.shields.io/badge/Email-devsamgeorge@gmail.com-blue?style=flat&logo=gmail"></a>
</p>


⭐️ From [@Sam George](https://github.com/Sam8778)


<h1>How to setup project</h1>


<h2>run docker compose build</h2>

```bash

docker compose build --no-cache

```


<h2>run docker compose up </h2>

```bash
docker compose up -d 

```

<h1>Assumptions</h1>
<ol>
  <li>
    
It was not clear wheather the web app is for a single restaurant or many, so i have assumed that it is for many restuarnts each having a menu and a list of dishes.
  </li>

<li>
Assume each menu has there own categories and can be anything.
  
</li>

</ol>

<h1>
  Info
</h1>
<p>
 There is some restaurants with tag (no menu), they dont have a menu and are there for showcasing infinte scroll loading, and loactions for the map.
</p>

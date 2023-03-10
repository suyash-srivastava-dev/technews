# News Feed

#### react site: https://suyash-srivastava-dev.github.io/technews 

This react app fetches the news feeds from the https://techcrunch.com

It uses axios to fetch data from API [https://techcrunch.com/wp-json/wp/v2/posts?per_page=20]

which is then mapped to the required fields and rendered as a card.

Each card would redirect to the original news blog post.

# Fields 

curPost - Object of each post

|Field|Mapping|
|-|-|
|Date|curPost.modified_gmt|
|Link|curPost.link|
|Title |curPost.title.rendered|
|Excerpt| curPost.excerpt.rendered|
|Image| curPost.parselyMeta["parsely-image-url"]|
|Creator | curPost.parselyMeta["parsely-author"]|
|Category| curPost.primary_category.name|

# Screenshots
|Images||
|-|-|
|![image](https://user-images.githubusercontent.com/68404906/224100320-60eefe37-69b7-4af6-b333-c988eb9d7c26.png) |![image](https://user-images.githubusercontent.com/68404906/224100604-8c22f518-ef53-44e6-8272-3473766bdadd.png)|


# gh-pages

**Steps to create static page for react app:** [refer: https://
create-react-app.dev/docs/deployment/]

1. `npm install --save gh-pages`
2. Add the following scripts in your package.json:
    ```  
    "scripts": {
    +   "predeploy": "npm run build",
    +   "deploy": "gh-pages -d build",
        "start": "react-scripts start",
        "build": "react-scripts build",
    ```
    **or** (if have created gh-pages branch for static page serving)

     ```  
    "scripts": {
    +   "predeploy": "npm run build",
    +   "deploy": "gh-pages -b gh-pages -d build",
        "start": "react-scripts start",
        "build": "react-scripts build",
    ```
3. If you are deploying to a GitHub user page instead of a project page you'll need to make one additional modification:

    ```
        "scripts": {
        "predeploy": "npm run build",
    -   "deploy": "gh-pages -d build",
    +   "deploy": "gh-pages -b master -d build",

    ```
4. Deploy the site by running npm run deploy

    ```
    npm run deploy
    ```
5.  Check if GitHub Pages option in your GitHub project settings is set to use the gh-pages branch


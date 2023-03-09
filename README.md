# News Feed

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

![image](https://user-images.githubusercontent.com/68404906/224100320-60eefe37-69b7-4af6-b333-c988eb9d7c26.png)
![image](https://user-images.githubusercontent.com/68404906/224100604-8c22f518-ef53-44e6-8272-3473766bdadd.png)



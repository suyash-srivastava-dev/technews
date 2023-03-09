import React from "react";
import { useGlobalContext } from "../Context/Context";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
const Post = () => {
    const { isLoading, hits } = useGlobalContext();
    if (isLoading) {
        return (
            <>
                <h1>Loading.....</h1>
            </>
        );
    }

    return (
        <>

            <div className="stories-div">

                {
                    hits.map((curPost) => {
                        const link  = curPost.link;
                        const date = curPost.modified_gmt;
                        const titleDate = new Date(date);
                        const dateString = titleDate.toUTCString();
                        const author = "@" + curPost.parselyMeta["parsely-author"];
                        const imgUrl = curPost.parselyMeta["parsely-image-url"];
                        let category = curPost.primary_category.name
                        category = category.replaceAll("&amp;", "&")

                        let title = curPost.title.rendered;
                        title = title.replaceAll("&#8217;", "'").replaceAll("&amp;", "&").replaceAll("&#8216;"," ")

                        let excerpt = curPost.excerpt.rendered
                        excerpt = excerpt.replaceAll("&#8217;", "'")
                        excerpt = excerpt.substring(3, excerpt.length - 15)
                        excerpt = excerpt + "...more"


                        return (
                            <>
                                <Card sx={{ maxWidth: 600, maxHeight: 600 }}>
                                    <CardHeader
                                        title={title}
                                        subheader={dateString}
                                    />
                                    <a href={link}>  <CardMedia
                                        component="img"
                                        height="300"
                                        image={imgUrl}
                                        alt={imgUrl}
                                    />
                                    </a>
                                    <CardContent>
                                        <Typography variant="h5" color="text.secondary">
                                            {excerpt}
                                        </Typography>
                                    </CardContent>
                                    <CardHeader
                                        title={author}
                                        action={
                                            <p>#{category}</p>
                                        }
                                    />
                                </Card>
                            </>
                        );
                    })}

            </div>

        </>
    );
};


export default Post;
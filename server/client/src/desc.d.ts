declare module "react-lazyload";
declare module "animejs/lib/anime.es.js";
//typescript ignores cloudinar-react because it has no type definition files"
//no npm @type;
declare module "*.mp4" {
    const src: string;
    export default src;
}

//Added because there's a bug where typescript can't recognize
//imported mp4 videos
//https://github.com/facebook/create-react-app/issues/6822

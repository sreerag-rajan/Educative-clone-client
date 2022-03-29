
const reviews = [
    {
        review:"These are high-quality courses. Trust me. I own around 10 and the price is worth it for the content quality. @EducativeInc came at the right time in my career. I'm understanding topics better than with any book or online video tutorial I've done. Truly made for developers. Thanks https://t.co/EeKruv5hxM",
        author:"Anthony Walker",
        handle:"@_webarchitect_" 
    },
    {
        review:"For those asking, I'm taking the Systems Design course by @EducativeInc and loving it so far! https://t.co/zbvj680omo",
        author:"Emma Bostian",
        handle:"@EmmaBostian"
    },
    {
        review:"Just finished my first full #ML course: Machine learning for Software Engineers from Educative, Inc. ... Highly recommend!",
        author:"Evan Dunbar",
        handle:"ML Engineer"
    },
    {
        review:"You guys are the gold standard of crash-courses... Narrow enough that it doesn't need years of study or a full blown book to get the gist, but broad enough that an afternoon of Googling doesn't cut it.",
        author:"Carlos Matias La Borde",
        handle:"Software Developer"
    },
    {
        review:"I spend my days and nights on Educative. It is indispensable. It is such a unique and reader-friendly site, resources available for learners on Educative is well organized and deep, it helps break down tricky programming concepts into simple chunks and exercises for practice to solidify the learning experience.",
        author:"Souvik Kundu",
        handle:"Front-end Developer"
    },
    {
        review:"Your courses are simply awesome, the depth they go into and the breadth of coverage is so good that I don't have to refer to 10 different websites looking for interview topics and content.",
        author:"Vinay Krishnaiah",
        handle:"Software Developer"
    },
    {
        review:"I've tried probably 5-7 different sites and Educative is easily the best. It perfectly blends explanation with interactivity ... On other sites like Codecademy, I often feel like they're asking me to do such a specific task to build such a specific product that if I were to move on to building my own from scratch, I'd be lost. I don't feel like that at all with Educative. Bravo!",
        author:"Eric Downs",
        handle:"Musician/Entrepeneur"
    },
    {
        review:"Thank you for finally making such a platform, where I can just read the useful information and execute the code for a challenge and get real hands-on experience without watching videos for hours.",
        author:"Kenan Eyvazov",
        handle:"DevOps Engineer"
    }
]




export const Part4 = ()=>{
    return(
        <div>
            <h1>What our users are saying</h1>
            <div className="flex">
                <button>&#60;</button>
                <div className="reviews">
                    {reviews.map((el)=>{
                        return <div>
                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-gray-A400 dark:text-gray-600 fill-current"><path d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z" fill="current"></path></svg>
                        <p>{el.review}</p>
                        <h3>{el.author}</h3>
                        <p>{el.handle}</p>
                    </div>
                    })}
                </div>

                <button>&#62;</button>

            </div>
        </div>
    )
}
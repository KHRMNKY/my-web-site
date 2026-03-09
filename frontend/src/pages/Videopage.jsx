import VideoFunc from "../components/VİdeoComp";


const videos = 
[
    {
        id : 1,
        title: "Örnek Video",
        description: "Bu, örnek bir video açıklamasıdır.",
        url: "https://www.youtube.com/watch?v=EdX5xJc9ZIY",
        date: "2024-06-01"
    }, 

    {
        id : 2,
        title: "İkinci Video",
        description: "Bu, ikinci örnek video açıklamasıdır.",
        url: "https://www.youtube.com/watch?v=G_ZWB4Znx9s",
        date: "2024-06-02"
    }
]



function Videopage(){
    return (
        <div className="video-page">
            <h1 >Videos</h1>
            {videos.map((video) => (
                <VideoFunc video={video} />
            ))}
        </div>
    )
}




export default Videopage;
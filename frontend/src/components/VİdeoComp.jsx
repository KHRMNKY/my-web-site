function VideoFunc({video}) {
    return (
            <div className="video-card">
                <h1 className="video-title">{video.title}</h1>
                <p className="video-description">{video.description}</p>
                <video className="video-player" controls>
                    <source src={video.url} />
                </video>
                <p className="video-date"> {video.date}</p>
            </div>
    )
}

export default VideoFunc;
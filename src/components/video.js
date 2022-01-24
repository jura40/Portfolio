import ReactPlayer from 'react-player';

function VideoArea() {
    return(
        <div className='VideoArea'>
            <div className='Sidebar'>
            <div className='Videos'>
                <div className='Video'>
                    <ReactPlayer
                    url="https://www.youtube.com/watch?v=N3AkSS5hXMA"
                    height = "170px"
                    width = "280px"
                    controls
                    />

                </div>

            </div>
            </div>

        </div>
    )
}
export default VideoArea
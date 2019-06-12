import React, { Component } from 'react'

class Index extends Component {
    handleSubmitClick = () => {
        const { name, theme, url, artist, album } = this;
        const postObject = {
            name: name.value,
            theme: theme.value,
            url: url.value,
            artist: artist.value,
            album: album.value
        }
    }

    render() {
        return(
            <div>
                <input type="text" placeholder="Playlist name" ref={input => this.name = input} />
                <input type="text" placeholder="Playlist theme" ref={input => this.theme = input} />
                <input type="text" placeholder="Spotify url" ref={input => this.url = input} />
                <input type="text" placeholder="Artist/Band Name" ref={input => this.artist = input} />
                <input type="text" placeholder="Album Title" ref={input => this.album = input} />
                <button type="submit" onClick={this.handleSubmitClick}>Create Entry</button>
            </div>
        )
    }
}

export default Index
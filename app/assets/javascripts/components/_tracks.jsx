var Tracks = React.createClass({
	render() {
		var showTracks = (track) => <Track name={track.name} artist={track.artist} key={track.id}/>;
		return <ul>{this.props.tracks.map(showTracks)}</ul>;
	}
});

var Tracks = React.createClass({
	render() {
		var showTracks = (track) => <Track name={track.name} artist={track.artist} key={track.id} id={track.id}/>;
		return <ul id="results_container">{this.props.tracks.map(showTracks)}</ul>;
	}
});

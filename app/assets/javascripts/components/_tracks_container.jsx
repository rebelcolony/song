var TracksContainer = React.createClass({

	searchTracks(event) {
		$.ajax({
			// get the input from seach box and add it to /search?query=
			url: this.props.searchPath+"?query="+event.target.value,
		  success: function(data) {
		    this.setState({tracks: data});
		  }.bind(this)
		});
	}, // searchTracks

	getInitialState() {
		return { tracks: [] };
	},

	render() {
		return (
			<div>
				<TracksSearch searchPath={this.props.searchPath} submitPath={this.searchTracks} />
				<Tracks tracks={this.state.tracks} />
			</div>
		);
	}

}); // TracksContainer

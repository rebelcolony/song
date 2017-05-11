var TracksContainer = React.createClass({

	componentWillMount() {
		// this.fetchTracks();
		return { tracks: [] };
	},

	// fetchTracks() {
	// 	$.ajax({
	//       url: this.props.tracksPath,
	//       dataType: 'json',
	//       success: function(data) {
	//         this.setState({tracks: data});
	//       }.bind(this),
	//       error: function(data) {
	//       	this.setState({tracks: []});
	//       }.bind(this)
	//     });
	// },

	searchTracks(event) {
		if (event.target.value) {
			$.ajax({
		      url: this.props.searchPath+"?query="+event.target.value,
		      dataType: 'json',
		      success: function(data) {
		        this.setState({tracks: data});
		      }.bind(this),

		    });
		}
		// else{
		// 	// this.fetchTracks();
		// }

	},

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
});

var TracksSearch = React.createClass({
	render () {
		return (
			<div>
				<form ref="form" action={ this.props.searchPath } acceptCharset="UTF-8" method="get">
					<input ref="query" className="search" autoComplete="off" name="query" placeholder="Search here" onChange={ this.props.submitPath } />
				</form>
			</div>
			);
	}
});

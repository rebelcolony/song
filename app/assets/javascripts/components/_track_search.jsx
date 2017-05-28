var TracksSearch = React.createClass({
	render () {
		return (
			<div>
				<form ref="form" acceptCharset="UTF-8">
					<input ref="query" className="search" autoComplete="off" name="query" placeholder="Search tracks or artists..." onChange={ this.props.submitPath } />
				</form>
			</div>
		);
	}
});

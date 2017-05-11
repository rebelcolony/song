var TracksSearch = React.createClass({
	render () {
		return (
			<div>
				<form ref="form" acceptCharset="UTF-8">
					<input ref="query" className="search" autoComplete="off" name="query" placeholder="Start typing..." onChange={ this.props.submitPath } />
				</form>
			</div>
			);
	}
});

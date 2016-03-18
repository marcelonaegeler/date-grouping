var e = [
	{
		date: '2016-03-18T17:25:54.574Z'
		, title: 'Marcelo'
	}
	, {
		date: '2016-03-18T17:30:54.574Z'
		, title: 'Cleito'
	}
	, {
		date: '2016-03-19T17:30:54.574Z'
		, title: 'Luana'
	}
];

var Transform = ( function () {
	var toLabel = function ( d, m ) {
		return d + '_' + m;
	};

	return {
		toLabel: toLabel
	};
})();

( function ( events ) {
	if ( !events.length ) { return; }

	var group = [];

	for ( var i = 0, l = events.length; i < l; i++ ) {
		var d = new Date( events[ i ].date );
		var t = Transform.toLabel( d.getDate(), d.getMonth() );

		if ( !group[ t ] ) {
			group[ t ] = [ events[ i ] ];
		} else {
			group[ t ].push( events[ i ] );
		}
	}

	console.log( group );


})( e );

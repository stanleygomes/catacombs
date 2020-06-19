const height = 120;

export default listCard = {
	image: {
		width: null,
		height: height,
		resizeMode: 'cover'
	},
	contentPadding: {
		padding: 10
	},
	captionImage: {
		position: 'absolute',
		top: height / 2,
		left: 0,
		right: 0,
		flex: 1,
		fontSize: 22,
		color: '#fff',
		fontWeight: 'bold',
		flexDirection: 'column',
		textAlign: 'center',
		marginTop: -10
	}
};
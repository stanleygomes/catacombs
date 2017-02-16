const font = 'Avenir Next';

export default swiper = {
    wrapper: {
        flex: 1
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15
    },
    image: {
        width: 150,
        height: 150,
        marginTop: -30
    },
    text: {
        color: '#333',
        fontSize: 30,
        fontWeight: 'normal',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
        fontFamily: font
    },
    textButton: {
        fontSize: 16,
    },
    textTopButton: {
        position: 'absolute',
        zIndex: 1,
        top: 15,
        right: 15,
    },
    textTop: {
        color: '#333',
        fontSize: 16,
        fontWeight: 'normal',
        fontFamily: font
    },
    button: {
        marginTop: 15
    },
    colorText: {
        color: '#777',
        fontSize: 18
    },
    paginationStyle: {
        position: 'absolute',
        bottom: 50
    }
};

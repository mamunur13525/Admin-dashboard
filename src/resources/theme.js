const color = {
    brightBlue: '#3498db',
    darkGrayishBlue: '#8b8d94',
    darkRed: '#a90000',
    grayishBlue: '#FFFFFF',
    grayishBlue2: '#9fa2b4',
    grayishBlue3: '#bdc3c7',
    lightBlue: '#3751FF',
    lightGrayishBlue: '#F7F8FC', // background color
    lightGrayishBlue2: '#DFE0EB',
    paleBlue: '#DDE2FF',
    paleBlueTransparent: 'rgba(221, 226, 255, 0.08)',
    veryDarkGrayishBlue: '#0B0E66',
    gray: '#373a47',
    pisblack: 'rgb(46, 50, 56)',
    buttonBlue: {
        background: '#5333ED',
        border: '1px solid #d9d9d9',
        color: 'white',
        margin: '0px 5px',
        textAlign: 'center',
        justifyContent: 'center',
        padding: '0 12px',
        width: '150px',
        '&:hover': {
        background: '#5333ED',
            borderColor: '#492CD3',
            boxShadow: 'rgb(83 51 237 / 32%) 0px 4px 8px 0px',
            backgroundImage:
                'linear-gradient(99deg, rgb(51, 106, 237) 0%, rgb(83, 51, 237) 50%, rgb(83, 51, 237) 100%)'
        },
        fontSize: '1rem',
        borderRadius: '80px',
        height: '40px',
        outline: 'none',
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        transition: 'all 0.25s ease 0s',
        backgroundPosition: 'right center',
        backgroundSize: '200%',
        display: 'flex',
        alignItems: 'center'
    },
    buttonTransparent:{
        display: 'inline-flex',
        WebkitBoxAlign: 'center',
        alignItems: 'center',
        WebkitBoxPack: 'center',
        justifyContent: 'center',
        borderRadius: '80px',
        height: '40px',
        padding: '0px 32px',
        outline: 'none',
        border: '1px solid rgb(209, 214, 223)',
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        transition: 'all 0.25s ease 0s',
        backgroundColor: 'transparent',
        fontWeight: 'bold',

        '&:hover': {
            borderColor: 'rgb(83, 51, 237)',
            color: 'rgb(83, 51, 237)'
        }
    },
    cancelBtn:{
        border: 'none',
        color: 'white',
        background: '#E43C3C!important',
        borderColor: 'red!important',
        borderRadius: '80px',
        height: '40px',
        fontWeight: 'bold',
        padding: '0px 32px',
        '&:hover': {
            boxShadow: 'rgb(231 64 64 / 24%) 0px 4px 8px 0px',
            color: 'white!important',
            cursor:'pointer'
        }
    },
    icon:{
        fontSize:'1rem'
    },
    infoSec: {
        padding: '2.5rem 2rem',
        borderTop: '2px  solid rgb(242, 244, 249)'
    },
    infoSecTitle: {
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        color: 'rgb(46, 50, 56)',
        margin: '0px',
        marginBottom:'1rem'
    },
    infoSecTitleTextBtn: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems:'center',
        '@media (max-width: 800px)': {
            flexDirection: 'column',
            alignItems: 'start'
        }
    },
    infoSecTitleText: {
        color: 'rgb(143, 151, 163)',
        fontSize: '14px',
        width:'70%',
        '@media (max-width: 800px)': {
            width: '100%'
        }
    }
};

const typography = {
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 19,
        lineHeight: '24px',
        letterSpacing: '0.4px'
    },
    smallSubtitle: {
        fontSize: 12,
        lineHeight: '16px',
        letterSpacing: '0.1px'
    },
    link: {
        fontWeight: '600',
        fontSize: 14,
        lineHeight: '20px',
        letterSpacing: '0.2px',
        color: color.lightBlue,
        textAlign: 'right',
        cursor: 'pointer',
        textDecoration: 'underline',
        '&:hover': {
            color: color.grayishBlue
        }
    },
    itemTitle: {
        fontWeight: 600,
        fontSize: 14,
        lineHeight: '20px',
        letterSpacing: 0.2
    },
    title: {
        fontWeight: 'bold',
        fontSize: 32,
        lineHeight: '30px',
        letterSpacing: 0.3
    }
};

const divSection ={
    main: {
        display: 'flex',
        justifyContent: 'space-between',
        '@media (max-width: 884px)': {
            flexDirection:'column'
         },
    },
    firstDiv: {
        width: '160px',
        '@media (max-width: 884px)': {
            width:'100%'
          },
    },
    secondDiv: {
        width: '100%',
        boxSizing: 'border-box',
        color: 'rgb(46, 50, 56)',
        fontSize: '12px',
        transition: 'all 0.3s ease 0s',
        boxShadow: 'rgb(16 7 104 / 8%) 0px 1px 6px 0px',
        borderRadius: '4px',
        height: 'fit-content'
    },
    ul: {
        margin: '0px',
        listStyle: 'none',
        '@media (max-width: 884px)': {
            display:'flex',
            justifyContent:'space-between',
            marginTop:'0px!important'
         },
        '@media (max-width: 535px)': {
            display:'block',
            width:'100%',
         },
    },
    li: {
        color: 'rgb(152 152 152)',
        cursor: 'pointer',
        padding: '0.8rem',
        fontSize: '0.9rem',
        paddingLeft: '0px',
        fontWeight: 600,
        '&:hover': {
            color: 'rgb(90, 99, 114)'
        },
        '@media (max-width: 535px)': {
          float:'left'
         },
       
    }
}

export default {
    // https://www.colorhexa.com/A4A6B3
    color,
    typography,
    divSection
};

export const menuItemStyles = {
    subMenuContent: {
        backgroundColor: 'rgba(0,0,0,0)', 
    },
    button: {
        fontSize: 'var(--h2-font-size)', 
        fontWeight: 'var(--font-semi-bold)', 
        fontFamily: 'var(--body-font)',
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0)', 
            color: 'var(--first-color)', 
            transition: 'color 0.4s'
        }
    }
};

export const divStyle = {
    display: 'flex', 
    height: '100%', 
    direction: 'rtl', 
    position: "sticky", 
    top: '60px', 
    width: '10%',
    fontSize: 'auto',
    right: '0',
};

export const root = {
    color: 'var(--title-color)', 
};

export const back = 'rgba(0,0,0,0)';
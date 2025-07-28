export const ButtonStyle1 = {
    width: "auto",
    paddingLeft: "1em",
    paddingTop: "0.3em",
    paddingRight: "1em",
    paddingBottom: "0.3em",
    borderRadius: "0.33em",
    background: 'linear-gradient(to right, #1d2922, #183815)',
    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)",
    transition: "all 0.3s ease-in",
    border: '2px solid',
    borderColor: 'transparent',
    '&:hover': {
        borderColor: 'green',
    }
}

export const ButtonStyle2 = {
    width: "auto",
    paddingLeft: "1em",
    paddingRight: "1em",
    textTransform: "none",
    color: "white",
    fontWeight: "bold",
    fontSize: "1em",
    background: 'linear-gradient(to right, #1d2922, #183815)',
    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)",
    transition: "all 0.3s ease-in",
    border: '2px solid',
    borderColor: 'transparent',
    '&:hover': {
        borderColor: 'green',
    },
}

export const ImageButtonStyle = {
    backgroundColor: "#333333",
    color: "#ffffff",
    textTransform: "none",    // Disable uppercase text
    transition: "all 0.3s ease-in",
    '&:hover': {
        borderColor: 'green',
        borderWidth: '2px',
    },
}
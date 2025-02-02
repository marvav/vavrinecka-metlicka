const commonStyle = {
    color: "white"
}


export const TypographyStyle1 = {
    ...commonStyle,
    fontSize: 16,
    textShadow: '0 0 5px #000000, 0 0 1px #000000, 0 0 20px #000000, 0 0 50px #000000',
}

export const TypographyStyle2 = {
    ...commonStyle,
    fontWeight: "bold",
    fontSize: {
        ms: 32,
        sm: 28,
        xs: 26
    },
    textShadow: '0 0 5px #000000, 0 0 1px #000000, 0 0 20px #000000, 0 0 50px #000000',
}

export const TypographyBreadCrumbStyle = {
    color: "#727bff",
    width: "auto",
    fontWeight: "bold",
    transition: "all 0.1s ease-in",
    textShadow: '0 0 5px #000000, 0 0 1px #000000, 0 0 20px #000000, 0 0 50px #000000',
    '&:hover': {
        color: "#4652ff",
    }
}

export const TypographyLinkStyle = {
    color: "#8a91ff",
    width: "auto",
    textDecoration: "underline",
    transition: "all 0.1s ease-in",
    textShadow: '0 0 5px #000000, 0 0 1px #000000, 0 0 20px #000000, 0 0 50px #000000',
    '&:hover': {
        color: "#4652ff",
    }
}
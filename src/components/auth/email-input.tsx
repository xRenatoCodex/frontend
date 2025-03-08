'use client'
import { styled, TextField } from "@mui/material";

const CssTextField = styled(TextField)({
    color: '#A0AAB4',
    fontWeight: "bold",
    fontSize: '14px',
    '& label': {
        color: '#82888f',
        fontSize: '14px'
    },
    '& label.Mui-focused': {
        color: '#A0AAB4'
    },
    '& .MuiOutlinedInput-root': {
        color: '#82888f',
        '& input': {
            color: 'white',
            '&:-webkit-autofill': {
                WebkitBoxShadow: '0 0 0 1000px #141a21 inset',
                WebkitTextFillColor: 'white',
            },
        },
        '& fieldset': {
            borderColor: '#82888f',
            borderRadius: '12px',
        },
        '&:hover fieldset': {
            borderColor: '#82888f',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#A0AAB4',
        },
    }
});

export default CssTextField
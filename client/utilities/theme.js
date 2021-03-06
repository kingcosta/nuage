const palette = {
    primary: '#9AD1ED',
    secondary: '#466372',
    emphasis: '#375160',
    error: '#ff0000',
    text: '#6f6f6f'
}


let _theme = {
    colors: palette,
    space: {
        normal: '10px',
        big: '20px'
    },
    effects: {
        hover: '#f5f5f5',
        selected: '#c5e2f1',
        shadow_small: 'rgba(0, 0, 0, 0.14) 2px 2px 2px 0px',
        shadow: 'rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px, rgba(0, 0, 0, 0.2) 0px 2px 4px -1px',
        shadow_large: 'rgba(158, 163, 172, 0.3) 0px 19px 60px, rgba(158, 163, 172, 0.22) 0px 15px 20px'
    },
    component: {
        breadcrumb: {bg: 'white', color: rgba(palette.text, 0.8), last: palette.text}
    }
}

export const theme = _theme;

function rgba(color, alpha){
    const bigint = parseInt(color.replace(/^\#/, ''), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return "rgba("+r+","+g+","+b+","+alpha+")";
}
export const to_rgba = rgba;

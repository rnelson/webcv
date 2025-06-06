﻿import {ChangeEvent, useState, useEffect} from "react";
import {styled} from "@mui/material";
import Switch from "@mui/material/Switch";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg width="100%" height="100%" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><g transform="matrix(1.13272,0,0,1.13272,-70.0631,-87.8652)"><g transform="matrix(1,0,0,1,14.5889,10.6101)"><path d="M248.665,472.977C225.646,433.108 213.528,387.881 213.528,341.844C213.528,197.094 331.046,79.576 475.796,79.576C620.545,79.576 738.064,197.094 738.064,341.844C738.064,387.881 725.945,433.108 702.926,472.977" style="fill:rgb(229,242,95);stroke:black;stroke-width:12.54px;"/></g><path d="M262.234,481.615C262.234,481.615 318.302,599.469 323.607,628.647C328.912,657.825 320.955,600.796 330.239,660.477C339.523,720.159 339.523,724.138 338.196,746.684C336.87,769.231 337.951,779.446 337.951,779.446L344.453,771.576C344.453,771.576 353.453,757.531 372.535,758.001C400.902,758.7 442.775,758.14 485.548,758.062C541.499,757.959 598.937,758.011 627.04,758.053C631.614,758.06 639.148,761.117 644.69,765.683C650.925,770.82 654.937,777.497 655.122,776.791C655.17,776.608 656.341,772.307 656.386,772.115C657.192,768.705 657.588,763.925 658.293,755.974C658.619,752.31 658.428,747.779 658.751,742.816C660.211,720.369 656.964,698.364 663.758,648.088C664.846,640.038 689.152,546.077 717.373,483.994" style="fill:rgb(229,242,95);stroke:black;stroke-width:12.54px;"/></g><g transform="matrix(1.13272,0,0,3.17459,-70.8332,-1704.03)"><path d="M658.769,792.361L658.769,818.197C658.769,825.326 642.547,831.114 622.566,831.114L373.393,831.114C353.412,831.114 337.19,825.326 337.19,818.197L337.19,792.361C337.19,785.232 353.412,779.444 373.393,779.444L622.566,779.444C642.547,779.444 658.769,785.232 658.769,792.361Z" style="fill:rgb(230,230,230);stroke:black;stroke-width:5.96px;"/></g><g transform="matrix(3.07501,0,0,1.13272,145.635,-105.578)"><path d="M65.385,919.471L160.94,919.535L151.336,950.64L75.009,950.64L65.385,919.471Z" style="fill:rgb(230,230,230);stroke:black;stroke-width:6.13px;"/></g><g transform="matrix(1.12167,0.000966869,0.000966869,1.13263,-67.1388,-88.121)"><path d="M658.816,793.917L336.481,822.113" style="fill:none;stroke:black;stroke-width:12.6px;"/></g><g transform="matrix(1.11816,0.0012738,0.0012738,1.13261,-65.8162,-58.6303)"><path d="M658.816,793.917L336.481,822.113" style="fill:none;stroke:black;stroke-width:12.61px;"/></g><g transform="matrix(1.11936,0.00116841,0.00116841,1.13262,-64.5577,-31.3962)"><path d="M658.816,793.917L336.481,822.113" style="fill:none;stroke:black;stroke-width:12.61px;"/></g><g transform="matrix(1.13272,0,0,1.13272,-68.0917,-78.0079)"><path d="M509.305,936.61L509.305,940.961C509.305,942.162 508.33,943.137 507.129,943.137L484.938,943.137C483.737,943.137 482.762,942.162 482.762,940.961L482.762,936.61C482.762,935.409 483.737,934.435 484.938,934.435L507.129,934.435C508.33,934.435 509.305,935.409 509.305,936.61Z" style="fill:none;stroke:black;stroke-width:9.43px;"/></g></svg>')`,
                backgroundSize: '60%'
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: 'var(--color-sky-300)',
                ...theme.applyStyles('dark', {
                    backgroundColor: 'var(--color-sky-300)',
                }),
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: 'var(--color-sky-800)',
        width: 32,
        height: 32,
        '&::before': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg width="100%" height="100%" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><g transform="matrix(1.13272,0,0,1.13272,-70.0631,-87.8652)"><g transform="matrix(1,0,0,1,14.5889,10.6101)"><path d="M248.665,472.977C225.646,433.108 213.528,387.881 213.528,341.844C213.528,197.094 331.046,79.576 475.796,79.576C620.545,79.576 738.064,197.094 738.064,341.844C738.064,387.881 725.945,433.108 702.926,472.977" style="fill:white;stroke:black;stroke-width:12.54px;"/></g><path d="M262.234,481.615C262.234,481.615 318.302,599.469 323.607,628.647C328.912,657.825 320.955,600.796 330.239,660.477C339.523,720.159 339.523,724.138 338.196,746.684C336.87,769.231 337.951,779.446 337.951,779.446L344.453,771.576C344.453,771.576 353.453,757.531 372.535,758.001C400.902,758.7 442.775,758.14 485.548,758.062C541.499,757.959 598.937,758.011 627.04,758.053C631.614,758.06 639.148,761.117 644.69,765.683C650.925,770.82 654.937,777.497 655.122,776.791C655.17,776.608 656.341,772.307 656.386,772.115C657.192,768.705 657.588,763.925 658.293,755.974C658.619,752.31 658.428,747.779 658.751,742.816C660.211,720.369 656.964,698.364 663.758,648.088C664.846,640.038 689.152,546.077 717.373,483.994" style="fill:white;stroke:black;stroke-width:12.54px;"/></g><g transform="matrix(1.13272,0,0,3.17459,-70.8332,-1704.03)"><path d="M658.769,792.361L658.769,818.197C658.769,825.326 642.547,831.114 622.566,831.114L373.393,831.114C353.412,831.114 337.19,825.326 337.19,818.197L337.19,792.361C337.19,785.232 353.412,779.444 373.393,779.444L622.566,779.444C642.547,779.444 658.769,785.232 658.769,792.361Z" style="fill:rgb(230,230,230);stroke:black;stroke-width:5.96px;"/></g><g transform="matrix(3.07501,0,0,1.13272,145.635,-105.578)"><path d="M65.385,919.471L160.94,919.535L151.336,950.64L75.009,950.64L65.385,919.471Z" style="fill:rgb(230,230,230);stroke:black;stroke-width:6.13px;"/></g><g transform="matrix(1.12167,0.000966869,0.000966869,1.13263,-67.1388,-88.121)"><path d="M658.816,793.917L336.481,822.113" style="fill:none;stroke:black;stroke-width:12.6px;"/></g><g transform="matrix(1.11816,0.0012738,0.0012738,1.13261,-65.8162,-58.6303)"><path d="M658.816,793.917L336.481,822.113" style="fill:none;stroke:black;stroke-width:12.61px;"/></g><g transform="matrix(1.11936,0.00116841,0.00116841,1.13262,-64.5577,-31.3962)"><path d="M658.816,793.917L336.481,822.113" style="fill:none;stroke:black;stroke-width:12.61px;"/></g><g transform="matrix(1.13272,0,0,1.13272,-68.0917,-78.0079)"><path d="M509.305,936.61L509.305,940.961C509.305,942.162 508.33,943.137 507.129,943.137L484.938,943.137C483.737,943.137 482.762,942.162 482.762,940.961L482.762,936.61C482.762,935.409 483.737,934.435 484.938,934.435L507.129,934.435C508.33,934.435 509.305,935.409 509.305,936.61Z" style="fill:none;stroke:black;stroke-width:9.43px;"/></g></svg>')`,
            backgroundSize: '60%'
        },
        ...theme.applyStyles('dark', {
            backgroundColor: 'var(--color-sky-800)',
        }),
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: 'var(--color-zinc-300)',
        borderRadius: 20 / 2,
        ...theme.applyStyles('dark', {
            backgroundColor: 'var(--color-zinc-300)',
        }),
    },
}));

const useLocalStorage = ({key, initialValue}: { key: string, initialValue: boolean }) => {
    const [value, setValue] = useState<boolean>((): boolean => {
        const storedValue = localStorage.getItem(key) === "true";
        return storedValue || initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));

        const root = window.document.documentElement;
        if (localStorage.darkMode === "true") {
            root.classList.remove("light");
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
            root.classList.add("light");
        }
    }, [initialValue, key, value]);

    return [value, setValue];
};

const DarkModeSwitch = () => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [localStorageValue, setLocalStorageValue] = useLocalStorage({key: "darkMode", initialValue: prefersDark});

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (typeof(setLocalStorageValue) === 'function') {
            setLocalStorageValue(event.target.checked);
        }

        const [theme, otherTheme] = event.target.checked ? ["dark", "light"] : ["light", "dark"];
        const root = window.document.documentElement;
        root.classList.remove(otherTheme);
        root.classList.add(theme);
    };

    return (
        <div className="dark-mode-switch fixed right-2 lg:right-8 top-2 lg:top-8">
            {typeof(localStorageValue) === 'boolean' && (<MaterialUISwitch
                checked={localStorageValue}
                onChange={handleChange}
            />)}
        </div>
    )
};

export default DarkModeSwitch;

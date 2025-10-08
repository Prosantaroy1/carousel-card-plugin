import ThemeOne from './ThemeOne';
import ThemeTwo from './ThemeTwo';

export const ThemeSwitch = ({ attributes, setAttributes }) => {
    const { theme = "themeOne" } = attributes;

    return <ThemeChange theme={theme} {...{ attributes, setAttributes }} />
};

const ThemeChange = ({ theme, attributes, setAttributes }) => {
    switch (theme) {
        case 'themeTwo':
            return <ThemeTwo {...{ attributes, setAttributes }} />

        default:
            return <ThemeOne {...{ attributes, setAttributes }} />;

    }
}

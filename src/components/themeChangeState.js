import {ref, watch} from 'vue';

const isDarkTheme = ref(false);

export function themeChangeState() {
    watch(isDarkTheme, (newValue) => {
        const html = document.querySelector('#appTheme');
        if(newValue) {
            html.classList.add('make-me-dark');
        } else {
            html.classList.remove('make-me-dark');
        }
    });

    const toggleTheme = () => {
        isDarkTheme.value = !isDarkTheme.value;
    };

    return {
        isDarkTheme, toggleTheme
    };
}
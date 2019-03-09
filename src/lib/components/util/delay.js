
const delay = duration =>
    new Promise((resolve: () => mixed) => {
        setTimeout(() => {
            resolve();
        }, duration);
    });

export default delay;

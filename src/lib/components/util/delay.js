
const delay = duration =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, duration);
    });

export default delay;

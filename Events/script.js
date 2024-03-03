let bt1 = document.querySelector('#bt1');
let body = document.querySelector('body');
let mode = 'light';

bt1.addEventListener('click', () => {
    if(mode === 'light') {
        mode = 'dark';
        body.classList.remove('light');
        body.classList.add('dark');
    } else {
        mode = 'light';
        body.classList.remove('dark');
        body.classList.add('light');
    }
})





// bt1.onclick  = (e) => {
//     console.log(e)
// }

// const handler2 =  (e) => {
//     console.log('bt1 clicked 2')
// } 

// bt1.addEventListener('click', (e) => {
//     console.log('clicked')
// })

// bt1.addEventListener('click', handler2)

// bt1.removeEventListener('click', handler2)


// let box = document.querySelector('#box');
// box.onmouseover = () => {
//     console.log('in div')
// }
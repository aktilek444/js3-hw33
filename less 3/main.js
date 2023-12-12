// let myPromise = new Promise((res, rej) => {
//     console.log('clent has reqest to get data');
//     setTimeout(() => {
//         res("data get sucsses")
//     }, 2000)
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })





// function getData() {
//     return new Promise ((res, rej) => {
//         setTimeout(() => {
//             res('sucsses')
//         }, 1500)

//     })
// }

// getData().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
const container = document.getElementById('res');
let url = 'https://63d304794abff88834170d21.mockapi.io/ss';

fetch(url)
    .then((response) => {
        if (!response.ok) {
            console.log('error');
        }
        return response.json()
    })
    .then((data) => {
        data.forEach(item => {
            container.innerHTML += `<div class="block">
                <p>${item.name}<p/> <p>${item.age}<p/>
                <img src="${item.avatar}" />
                <p>${item.desprition}<p/>
                <p>${item.id}<p/>
                <p>${item.adress}<p/>
                <div/>`;
        });
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

function search() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const blocks = document.querySelectorAll('.block p:first-of-type');

    blocks.forEach(block => {
        const name = block.textContent.toLowerCase();
        const parentBlock = block.parentElement;

        if (name.includes(searchInput)) {
            parentBlock.style.display = 'flex';
        } else {
            parentBlock.style.display = 'none';
        }
    });
}
document.addEventListener('alpine:init',() =>{
    Alpine.data('products', () =>({
        items :[
            { id : 1, name: 'Wedding', img:'4a.jpg', lain:'Package'},
            { id : 2, name: 'Engagement', img:'6b.jpg', lain:'Package'},
            { id : 3, name: 'Prewedding', img:'7a.jpg', lain:'Package'},
            { id : 4, name: 'Traditional Event', img:'9b.jpg', lain:'Package'},

        ],
    }));
});
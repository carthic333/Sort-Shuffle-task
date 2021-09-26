const cards = [
    { text:1, class: 'cardColor1' },
    { text:2, class: 'cardColor2' },
    { text:3, class: 'cardColor3' },
    { text:4, class: 'cardColor2' },
    { text:5, class: 'cardColor3' },
    { text:6, class: 'cardColor4' },
    { text:7, class: 'cardColor4' },
    { text:8, class: 'cardColor1' },
    { text:9, class: 'cardColor3' }
];

const shuffleAndUpdateHTML = () => {
    cards.forEach((card, index) => {
        let suffleIndex = Math.floor(Math.random() * 9);
        cards[index] = cards[suffleIndex];
        cards[suffleIndex] = card;
    })
    updateHtml(cards);
}

const sortAndUpdateHtml = () => {
    cards.sort((a, b) => a.text - b.text);
    updateHtml(cards);
}

const updateHtml = (arr) => {
    document.getElementById('shuffle').innerHTML = '';
    arr.forEach(cardEle => {
        let cardDiv = document.createElement("div");
		let valueDiv = document.createElement("div");
		cardDiv.className = "col-md-4 col-sm-4 col-xs-12 square card disp-inline-block "+ cardEle.class;
		valueDiv.className = "value";

		valueDiv.innerHTML = cardEle.text;
		cardDiv.appendChild(valueDiv);

		document.getElementById("shuffle").appendChild(cardDiv);
    });
}
window.onload = () => { sortAndUpdateHtml(); }
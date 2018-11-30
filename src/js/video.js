import "../css/main.css";
import "../css/video.css";

import videoList from "./data/video.js";

const plist=document.getElementById('videoList');

function temp(data){
	const item=document.createElement('div');

	item.classList.add('video');

	item.innerHTML=[
		`<div class="pic">`,
			`<img src="${data.img}"/>`,
		`</div>`,
		`<div class="info">`,
			`<p class="title">${data.name}</p>`,
			`<p class="date">${data.date}</p>`,
			`<p class="des">${data.description}</p>`,
		`</div>`
	].join('');

	return item;
}


function render(){
	Object.keys(videoList).forEach((id)=>{
		plist.append(temp(videoList[id]));
	});
}

render();
import "../css/main.css";
import "../css/projects.css";

// data here
import projectsList from "./data/projects.js";

const plist=document.getElementById('projectsList');

// <div class="project">
// 	<div class="pic">
// 		<img src=""/>
// 	</div>
// 	<div class="info">
// 		<p class="title">name</p>
// 		<p class="date">time</p>
// 		<p class="des">description</p>
// 	</div>
// </div>


function temp(data){
	const item=document.createElement('div');

	item.classList.add('project');

	item.innerHTML=[
		`<div class="pic">`,
			`<a href="${data.link}"><img src="${data.img}"/></a>`,
		`</div>`,
		`<div class="info">`,
			`<a href="${data.link}"><p class="title">${data.name}</p></a>`,
			`<a href="${data.link}"><p class="date">${data.date}</p></a>`,
			`<a href="${data.link}"><p class="des">${data.description}</p></a>`,
		`</div>`
	].join('');

	return item;
}


function render(){
	Object.keys(projectsList).forEach((id)=>{
		plist.append(temp(projectsList[id]));
	});
}

render();
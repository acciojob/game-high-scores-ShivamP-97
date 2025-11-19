// complete the JS code
const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");

// Save score to Local Storage
function saveScore() {
	const name=nameInput.value.trim();
	const score=scoreInput.value.trim();

	if(name==="" || score==="") return;

	let storedScores=JSON.parse(localStorage.getItem("scores"))||[];
	storedScores.push({
		name: name,
		score: Number(score)
	});

	localStorage.setItem("scores", JSON.stringify(storedScores));
	nameInput.value="";
	scoreInput.value="";
	showScores();
}

// Show scores in div
function showScores() {
	let storedScores=JSON.parse(localStorage.getItem("scores"))||[];
	if(storedScores.length===0){
		scores.innerHTML="<p>No scores yet</p>";
		return;
	}
	let table=`
		<table>
		<tr>
		<th>Name</th>
		<th>Score</th>
		</tr>
		`;
	storedScores.forEach(entry=>{
		table+=`
		<tr>
		<td>${entry.name}</td>
		<td>${entry.score}</td>
		</tr>
		`;
	});
	table+="</table>";
	scores.innerHTML=table;
}

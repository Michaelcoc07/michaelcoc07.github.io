const answers = {
    	1:'flag{48bb6e862e54f2a795ffc4e541caed4d}',
	2:'flag{7e8a05d33e27fb018d4d98fdd3c4abfe}',
	3:'flag{89b74318a1fd483115a1d7795bbe9b55}',
	4:'flag{bb89a6733018abaea1439857dd665fd1}',
	5:'flag{2c1b4ff4f0a3c3acdf07c04311201a1c}',
	6:'flag{d5cae307b2b46f4a9be62ea8a2b8dc4a}',
	7:'flag{c2f3e72ec771f20d84118daa6b1c4aff}',
	8:'flag{72fa3460181c59be5ae5a13d4ef85cc1}',
	9:'flag{18758c54e740081f5d24ea908e1bd7d8}',
	10:'flag{043c25667d01ed88bad1cecba636d66b}',
	11:'flag{a5a0a86df237a37d681ae6b2f47553fc}',
	12:'flag{953cd532385ae83332fab713981847eb}',
	13:'flag{e9c857ce79eed414f021b598b3b01505}',
	14:'flag{81c46c7f5972e69254e6fa2f0ef9bdb6}',
	15:'flag{6bac30439b1e3b9db7061515097c2fdc}',
	16:'flag{d87f88119309abc5f5b61bed1470f555}',
	17:'flag{fb8ff038dcd6e42e14222a568a4dcad4}',
	18:'flag{50827598dda12181323ada9a755652e6}',
	19:'flag{2ec663afc8dbf334546f3e758a069cd4}',
	20:'flag{8f3be022ec0582c60d56a8bd2907f06c}'	
};

function checkAnswer(level) {
    const input = document.getElementById(`input${level-1}`).value;
    const feedback = document.getElementById(`feedback${level-1}`);

    if (input === answers[level]) {
        feedback.textContent = "Correct! Moving to the next level...";
        feedback.style.color = "lime";

        // Move to the next level after a brief delay
        setTimeout(() => {
            document.getElementById(`level${level-1}`).style.display = "none";
            document.getElementById(`level${level }`).style.display = "block";
        }, 1000);
    } else {
        feedback.textContent = "Incorrect. Try again.";
        feedback.style.color = "red";
    }
}


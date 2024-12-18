let resultInput = document.getElementById('result');
let historyDiv = document.getElementById('history');

document.addEventListener('keydown', function(event) { 
    const key = event.key; 

    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) { 
        appendToResult(key); 
    } else if (key === 'Enter') { 
        calculateResult(); 
    } else if (key === 'Backspace') { 
        resultInput.value = resultInput.value.slice(0, -1); 
    } else if (key === 'Escape') { 
        clearResult(); 
    } 
}); 

function appendToResult(value) { 
    resultInput.value += value; 
} 

function calculateResult() { 
    try { 
        let result = eval(resultInput.value);
        historyDiv.innerHTML += `<p>${resultInput.value} = ${result}</p>`;
        resultInput.value = result; 
    } catch (e) { 
        alert('Erreur dans le calcul. Vérifiez votre saisie.'); 
        resultInput.value = 'Error'; 
    } 
} 

function clearResult() { 
    resultInput.value = ''; 
} 

function calculateSquareRoot() { 
    try { 
        let result = Math.sqrt(eval(resultInput.value)); 
        historyDiv.innerHTML += `<p>√(${resultInput.value}) = ${result}</p>`;
        resultInput.value = result; 
    } catch (e) { 
        alert('Erreur dans le calcul. Vérifiez votre saisie.'); 
        resultInput.value = 'Error'; 
    } 
} 

function calculateSquare() { 
    try { 
        let result = Math.pow(eval(resultInput.value), 2); 
        historyDiv.innerHTML += `<p>(${resultInput.value})² = ${result}</p>`;
        resultInput.value = result; 
    } catch (e) { 
        alert('Erreur dans le calcul. Vérifiez votre saisie.'); 
        resultInput.value = 'Error'; 
    } 
} 

function calculatePercentage() { 
    try { 
        let result = eval(resultInput.value) / 100; 
        historyDiv.innerHTML += `<p>${resultInput.value}% = ${result}</p>`;
        resultInput.value = result; 
    } catch (e) { 
        alert('Erreur dans le calcul. Vérifiez votre saisie.'); 
        resultInput.value = 'Error'; 
    } 
}
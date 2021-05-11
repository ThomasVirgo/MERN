const loginForm = document.getElementById('login form');
loginForm.addEventListener('submit', logUserIn);


async function logUserIn(event){
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const result = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    })
    const data = await result.json();
    
    if (data.status === 'ok'){alert('Successful Post')}
    else {alert(result.error)};


}





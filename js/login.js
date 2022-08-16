// Step-1: add click event handler with the submit button

document.getElementById('btn-submit').addEventListener('click',function(){
    // Step-2: get the email address inside the email input field
    // always remember to use .value to get text form an input filed
    const emailFiled = document.getElementById('user-email');
    const email = emailFiled.value;
    // Step-3: get password
    // 3.a: set id on the html element 
    // 3.b: get the element 
    // 3.c: get the value form the element 
    const passwordFiled = document.getElementById('user-password');
    const password = passwordFiled.value;

    console.log(email, password);


                    // ei vabe use kora valid noy
                    // ei vabe use kora valid noy
                    // ei vabe use kora valid noy

    //DANGER: DO NOT VERYFY email password on the client site
    // step-4: veryfy email and password and check wheter user or not
    if (email === 'yousuf@gmail.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user');
    }

})
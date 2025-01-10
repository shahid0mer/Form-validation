let signUpForm = document.getElementById('handle-form')
let userNameError = document.getElementById('error-name')
let phoneError = document.getElementById('error-phone')
let errorAge = document.getElementById('error-age')
let addressError = document.getElementById('error-address')
let errorGender = document.getElementById('error-gender')






signUpForm.addEventListener('submit',(event) => {
    event.preventDefault()
  
    
    let Name = signUpForm['username'].value
    
    let Email = signUpForm['email'].value

    let Phone = signUpForm['phone'].value
    

    let Age = signUpForm['age'].value

    let Address = signUpForm['address'].value



    // Name Validation

    if(Name.length < 3 || Name.length > 50 || Name.trim() === '')
    {
        userNameError.textContent =  "Invalid username. It must be 3-50 characters long"
        userNameError.classList.remove('hidden')
        return
    }

    userNameError.textContent = ""
    userNameError.classList.add('hidden')


    // Phone Validation

    if(Phone.length < 10 || Phone.length > 14)
    {
        phoneError.textContent = "Phone number should have minimum length of 10 and maximum  length of 14"
        phoneError.classList.remove('hidden')
        return
    }
    
    if(isNaN(Phone) || Phone.trim() === "" ){
        phoneError.textContent = "Phone number must contain only numeric characters.";
        phoneError.classList.remove('hidden');
        return;
    }

    phoneError.textContent = ""
    phoneError.classList.add('hidden')
    

    if(Age < 12 || Age > 100)
    {
        errorAge.textContent = "Age must be between 12 and 100"
        errorAge.classList.remove('hidden')
        return
    }

    if (isNaN(Age) || Age.trim() === '')
    {
        errorAge.textContent="age cannot be empty"
        errorAge.classList.remove('hidden')
        return
    }

    errorAge.textContent = ''
    errorAge.classList.add('hidden')


    if (Address.trim() !== "" && Address.length > 50) 
    {
        addressError.textContent = "Address cannot exceed 50 characters.";
        addressError.classList.remove('hidden');
        return;
    } 

    else if (Address.trim() !== "" && Address.length < 5) 

    {
        addressError.textContent = "Address must be at least 5 characters long.";
        addressError.classList.remove('hidden');
        return;
    }

    if(isValid)
    {
        signUpForm.reset()
    }

} )


class EmailValid{
    constructor(){
        this.inputSubmit = document.querySelector('.hero__submit-button');
        this.input = document.querySelector('.hero__input');
        this.errorMsg = document.querySelector('.hero__error-msg');
        this.errorImg = document.querySelector('.hero__input-error');
        this.events();
    }

    events(){
        this.inputSubmit.addEventListener("click", (event) => {
            event.stopPropagation();
            event.preventDefault();

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.input.value))
            {
                return true;
            }
        else
            {
                this.errorImg.style.display = "inline-block";
                this.errorMsg.style.display = "block";
            }
        })
    }
}

export default EmailValid;
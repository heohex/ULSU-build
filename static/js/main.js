const FloatLabel = (() => {
    const handleFocus = (e) => {
        const target = e.target;
        target.parentNode.classList.add('active');
    };
    const handleBlur = (e) => {
        const target = e.target;
        if (!target.value) {
            target.parentNode.classList.remove('active');
        }
    };
    const bindEvents = (element) => {
        const floatField = element.querySelector('input');
        floatField.addEventListener('focus', handleFocus);
        floatField.addEventListener('blur', handleBlur);
    };
    const init = () => {
        const floatContainers = document.querySelectorAll('.float-container');
        floatContainers.forEach((element) => {
            if (element.querySelector('input').value) {
                element.classList.add('active');
            }
            bindEvents(element);
        });
    };
    return {
        init: init
    };
})();
FloatLabel.init();


document.addEventListener(
    "click",
    ({target: {dataset: {id = ""}}}) => {
        if (id.length > 0) {
            document.querySelectorAll('.tab-button').forEach((t) => t.classList.remove("active-button"));
            document.querySelector(`[data-id="${id}"]`).classList.add("active-button");
            document.querySelectorAll(".tab").forEach((t) => t.classList.add("hidden-tab"));
            document.querySelector(`#${id}`).classList.remove("hidden-tab");
        }
    }
);



document.querySelector('.openModalFeedbackJS').addEventListener('click',  function (e) {
    e.preventDefault();
    const modal = document.querySelector('.feedbackModalJS')
        modal.setAttribute("style", "display: block");
});

document.querySelector('.modal__close').addEventListener('click',  function () {
    const parentModal = this.closest(".modal");
    parentModal.removeAttribute("style");
});
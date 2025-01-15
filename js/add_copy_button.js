{
    function get_description_content() {
        const description_content = document.querySelector('.flexlayout__tab div.elfjS');
        const description_content_copy = description_content.cloneNode(true);
        /**@type {HTMLElement[]} */
        const codes_array = [...description_content_copy.querySelectorAll('code')];
        codes_array.forEach(element => {
            element.textContent = `\`${element.textContent}\``;
        });
        const text = description_content_copy.innerText;
        return text;
    };

    function button_click() {
        const text = get_description_content();
        navigator.clipboard.writeText(text);
    }

    const button = document.createElement("button");
    button.className = "fixed-button font-medium items-center whitespace-nowrap focus:outline-none select-none px-3 py-1.5 text-green-60 dark:text-green-60";
    button.innerText = "Copy Text";
    button.addEventListener("click", button_click);
    
    document.body.insertAdjacentElement("afterbegin", button);
}
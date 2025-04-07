{
    function button_click() {
        /**@type {HTMLAnchorElement[]} */
        const links_array = [...document.querySelectorAll('div.flex.cursor-pointer.items-center.justify-between.gap-1.px-4.py-3')];
        links_array.forEach(element => {
            element.click();
        });
    }

    const button = document.createElement("button");
    button.className = "fixed-button font-medium items-center whitespace-nowrap focus:outline-none select-none px-3 py-1.5 text-green-60 dark:text-green-60";
    button.innerText = "Open Questions";
    button.addEventListener("click", button_click);
    
    document.body.insertAdjacentElement("afterbegin", button);
}
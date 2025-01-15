{
    function button_click() {
        /**@type {HTMLAnchorElement[]} */
        const links_array = [...document.querySelectorAll('li.list-group-item > a')];
        links_array.forEach(element => {
            const link = element.href;
            window.open(link);
        });
    }

    const button = document.createElement("button");
    button.className = "fixed-button font-medium items-center whitespace-nowrap focus:outline-none select-none px-3 py-1.5 text-green-60 dark:text-green-60";
    button.innerText = "Open Questions";
    button.addEventListener("click", button_click);
    
    document.body.insertAdjacentElement("afterbegin", button);
}
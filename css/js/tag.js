const colors = {
    p: '#B33771',
    div: '#1B9CFC',
    span: '#FC427B',
    ul: '#2C3A47',
    ol: '#82589F',
    form: '#ffd32a',
    section: '#05c46b',
    header: '#f53b57',
    nav: '#575fcf',
    footer: '#00d8d6',
    main: '#ef5777',
    body: '#1289A7',
    default: '#EE5A24',

    get(tag) {
        return this[tag] ? this[tag] : this[this.default]
    }
}

document.querySelectorAll('.tag').forEach(box => {
    const tagName = box.tagName.toLowerCase()

    box.style.borderColor = colors.get(tagName)

    if (!box.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        box.insertBefore(label, box.childNodes[0])
    }
})
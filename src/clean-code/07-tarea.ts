(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';

    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,
        ) { }
    }

    class InputEvents  {
        constructor() {}
        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    class inputElement{
        private htmlElment: HtmlElement;
        private attributes: InputAttributes;
        private events: InputEvents;
        constructor(value,placeholder,id) {
            this.htmlElment = new HtmlElement(id,'input');
            this.attributes = new InputAttributes(value,placeholder);
            this.events = new InputEvents();
        }
    }

    //const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');
    const newField = new inputElement('Fernando','Enter first name','txtNewName');

    console.log(newField);



})()
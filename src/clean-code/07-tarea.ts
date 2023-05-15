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
        ) {
        }
    }

    class InputEvents  {
        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    class inputElement{
        private htmlElment: HtmlElement;
        private inputAttributes: InputAttributes;
        private inputEvents: InputEvents;
        constructor(value,placeholder,id) {
            this.inputAttributes = new InputAttributes(value,placeholder);
            this.htmlElment = new HtmlElement(id,'input');
            this.inputEvents = new InputEvents();
        }
    }

    //const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');
    const newField = new inputElement('Fernando','Enter first name','txtNewName');

    console.log(newField);



})()
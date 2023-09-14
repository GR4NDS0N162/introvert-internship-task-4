widgetKvnukovIntr = function () {
    const widget = this;
    this.code = null;

    this.bind_actions = function () {
    };

    this.render = function () {
        const $tipItems = $(`.linked-form__field.linked-form__field-pei .js-linked-with-actions.js-linked-has-actions.js-linked-has-value[data-pei-code='phone'] .tips__inner.custom-scroll.js-tip-items, .linked-form__field.linked-form__field-pei .js-linked-with-actions.js-linked-has-actions.js-linked-has-value[data-pei-code='email'] .tips__inner.custom-scroll.js-tip-items`);
        const $tipInputs = $(`.linked-form__field.linked-form__field-pei .control-wrapper.control--suggest input.text-input.control--suggest--input.js-control--suggest--input.control--suggest--input-inline.linked-form__cf.js-linked-pei`);
        const inputValues = this.getInputValues($tipInputs);

        const count = $tipItems.length;

        for (let i = 0; i < count; i++) {
            const tipItem = $tipItems[i];
            const inputValue = inputValues[i];

            const div = document.createElement('div');
            div.className = "tips-item js-tips-item js-cf-actions-item tips-item-kvnukov123";
            div['data-type'] = "google";
            div.innerHTML = `<span class="tips-icon-container"><svg class="list-top-search__icon svg-icon svg-common--filter-search-dims" style="top: 10px; left: 16px;"><use xlink:href="#common--filter-search"></use></svg></span>Нагуглить`;
            div.onclick = function (e) {
                e.preventDefault();
                window.open(`http://letmegooglethat.com/?q=${inputValue}`);
                window.open(`https://yandex.ru/search/?text=${inputValue}`);
            };

            tipItem.append(div);
        }
    };

    this.getInputValues = function ($tipInputs) {
        return Object.keys($tipInputs).map(function (k) {
            return $tipInputs[k].value
        });
    };

    this.init = function () {
    };

    this.bootstrap = function (code) {
        widget.code = code;
        const status = 1; // yadroFunctions.getSettings(code).frontend_status;

        if (status) {
            widget.init();
            widget.render();
            widget.bind_actions();
            $(document).on('widgets:load', function () {
                widget.render();
            });
        }
    }
}

yadroWidget.widgets['kvnukov123-widget'] = new widgetKvnukovIntr();
yadroWidget.widgets['kvnukov123-widget'].bootstrap('kvnukov123-widget');

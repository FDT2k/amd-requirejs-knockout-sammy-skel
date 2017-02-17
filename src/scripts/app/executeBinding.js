define("executeBinding", ["knockout"], function(ko) {
    ko.bindingHandlers.execute = {
        init: function(element, valueAccessor, allBindings, data) {
            var action = valueAccessor();

            if (typeof action === "function") {
                //could call it right away
                action.call(data, element, data);

                //or could wait until other bindings are done
                //setTimeout(action.bind(data, element, data), 0);
            }
        }
    };
});

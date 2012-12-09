define(['jquery'], function ($) {
    return ModuleDiv;

    function ModuleDiv(moduleDescription, githubLink) {
        var moduleDiv, captionDiv;

        moduleDiv = $('<div>');
        moduleDiv.addClass('module');

        captionDiv = $('<div>');
        captionDiv.addClass('module_caption');
        captionDiv.html(moduleDescription);

        gitCatDiv = $('<div style="float: right;">');
        gitCatDiv.html(
            '<a href="https://github.com/valera-rozuvan/javascript-experiments/blob/master/' + githubLink + '">' +
                '<img src="images/git_cat_icon.png" />' +
            '</a>'
        );
        gitCatDiv.appendTo(captionDiv);

        moduleDiv.addCaption = addCaption;
        moduleDiv.appendToPage =  appendToPage;
        moduleDiv.appendToSelector =  appendToSelector;

        return moduleDiv;

        function addCaption() {
            captionDiv.appendTo(moduleDiv);
        }

        function appendToPage() {
            this.appendTo('.page');
        }

        function appendToSelector(divSelector) {
            this.appendTo(divSelector);
        }
    }
});

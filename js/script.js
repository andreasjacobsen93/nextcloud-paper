(function (OC, window, $, undefined) {
    'use strict';

$(document).ready(function () {

    //var tmpl = $.templates("#myTemplate");
    //var person = {name: "Jim"};
    //var html = tmpl.render(person);
    //$("#here").html(html);

    // this notes object holds all our notes
    var Papers = function (baseUrl) {
        this._baseUrl = baseUrl;
        this._papers = [];
        this._activePaper = undefined;
    };

    Papers.prototype = {
        load: function (id) {
            var self = this;
            this._papers.forEach(function (paper) {
                if (paper.id === id) {
                    paper.active = true;
                    self._activeNote = paper;
                } else {
                    paper.active = false;
                }
            });
        },
        getActive: function () {
            return this._activePaper;
        },
        getAll: function () {
            return this._papers;
        },
        loadAll: function () {
            var deferred = $.Deferred();
            var self = this;
            $.get(this._baseUrl).done(function (papers) {
                self._activePaper = undefined;
                self._papers = papers;
                deferred.resolve();
            }).fail(function () {
                deferred.reject();
            });
            return deferred.promise();
        }
    };

    // this will be the view that is used to update the html
    var View = function (papers) {
        this._papers = papers;
    };

    View.prototype = {
        renderContent: function () {
        },
        renderList: function () {
        },
        renderNavigation: function () {
        },
        render: function () {
            this.renderContent();
            this.renderList();
            this.renderNavigation();
        }
    };

    var papers = new Papers(OC.generateUrl('/apps/paper/papers'));
    //var view = new View(papers);
    papers.loadAll().done(function () {
        //view.render();
    }).fail(function () {
        alert('Could not load papers');
    });
});

})(OC, window, jQuery);
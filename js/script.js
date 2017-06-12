(function (OC, window, $, undefined) {
    'use strict';

$(document).ready(function () {

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
                    self._activePaper = paper;
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
        },
        create: function (paper) {
            var deferred = $.Deferred();
            var self = this;
            $.ajax({
                url: this._baseUrl,
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(paper)
            }).done(function (paper) {
                self._papers.push(paper);
                self._activePaper = paper;
                self.load(paper.id);
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
            if (this._papers.getActive() === undefined)
                return;

            var tmpl = $.templates("#content-template");
            var paper = { content: this._papers.getActive().content };
            var html = tmpl.render(paper);
            $("#paper-reader").html(html);
        },
        renderList: function () {
            var tmpl = $.templates("#list-template");
            var papers = {papers: this._papers.getAll()};
            var html = tmpl.render(papers);
            $("#paper-list").find("ul").html(html);

            var self = this;
            $('.paper-item > .paper-item-title').click(function () {
                var id = parseInt($(this).parent().data('id'), 10);
                self._papers.load(id);
                self.render();
            });
        },
        renderNavigation: function () {
            var self = this;
            $('#add_button').click(function () {
                var paper = {
                    url: $('#add_url').val()
                };

                self._papers.create(paper).done(function() {
                    self.render();
                    $('#add_url').val('');
                }).fail(function () {
                    alert('Could not add new paper');
                });
            });
        },
        render: function () {
            this.renderContent();
            this.renderList();
            this.renderNavigation();
        }
    };

    var papers = new Papers(OC.generateUrl('/apps/paper/papers'));
    var view = new View(papers);
    papers.loadAll().done(function () {
        view.render();
    }).fail(function () {
        alert('Could not load papers');
    });
});

})(OC, window, jQuery);
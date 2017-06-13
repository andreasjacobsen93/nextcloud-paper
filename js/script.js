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
        removeActive: function () {
            var index;
            var deferred = $.Deferred();
            var id = this._activePaper.id;
            this._papers.forEach(function (paper, counter) {
                if (paper.id === id) {
                    index = counter;
                }
            });

            if (index !== undefined) {
                // delete cached active note if necessary
                if (this._activePaper === this._papers[index]) {
                    delete this._activePaper;
                }

                this._papers.splice(index, 1);

                $.ajax({
                    url: this._baseUrl + '/' + id,
                    method: 'DELETE'
                }).done(function () {
                    deferred.resolve();
                }).fail(function () {
                    deferred.reject();
                });
            } else {
                deferred.reject();
            }
            return deferred.promise();
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
                //self.loadAll();
                self._papers.push(paper);
                self._activePaper = paper;
                self.load(paper.id);
                deferred.resolve();
            }).fail(function () {
                deferred.reject();
            });
            return deferred.promise();
        },
        updateActive: function (title, description) {
            var paper = this.getActive();
            paper.title = title;
            paper.description = description;

            return $.ajax({
                url: this._baseUrl + '/' + paper.id,
                method: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify(paper)
            });
        }
    };

    // this will be the view that is used to update the html
    var View = function (papers) {
        this._papers = papers;
    };

    View.prototype = {
        renderContent: function () {
            if (this._papers.getActive() === undefined)
            {
                $("#paper-reader").html("");
            }
            else
            {
                var tmpl = $.templates("#content-template");
                var paper = { content: this._papers.getActive().content };
                var html = tmpl.render(paper);
                $("#paper-reader").html(html);

                var self = this;
                $("#paper-delete").click(function () {
                    self._papers.removeActive().done(function () {
                        self.render();
                    }).fail(function () {
                        alert('Could not delete note, not found');
                    });
                });
            }
        },
        renderList: function () {
            var tmpl = $.templates("#list-template");
            var papers = {papers: this._papers.getAll()};
            var html = tmpl.render(papers);
            $("#paper-list").find("ul").html(html);

            var self = this;
            $('.paper-item').click(function () {
                var id = parseInt($(this).data('id'), 10);
                self._papers.load(id);
                self.render();
            });
        },
        renderNavigation: function () {
            var self = this;
            $('#add_button').click(function () {
                var url_field = $('#add_url');

                if (url_field.val() === '')
                    return;

                var paper = {
                    url: url_field.val()
                };
                url_field.val('');

                self._papers.create(paper).done(function() {
                    self.render();
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
/**
 *
 * Charmap plugin for Redactor v9.0.3
 *
 * Copyright (c) 2013, Pakalo Evgeniy <evgeniy.pakalo@gmail.com>
 * Version 0.1
 *
 */
(function ($) {

    'use strict';

    if (typeof window.RedactorPlugins === 'undefined') {
        window.RedactorPlugins = {};
    }

    window.RedactorPlugins.charmap = {

        chars: [
        /*  HTML-Code       Char name   */
            ['&nbsp;',      'space'],
            ['&amp;',       'ampersand'],
            ['&cent;',      'cent'],
            ['&euro;',      'euro'],
            ['&pound;',     'sterling'],
            ['&yen;',       'yen'],
            ['&lt;',        'lessthan'],
            ['&gt;',        'greaterthan'],
            ['&copy;',      'copyright'],
            ['&reg;',       'registered'],
            ['&trade;',     'trademark'],
            ['&sect;',      'section'],
            ['&mdash;',     'emdash'],
            ['&iexcl;',     'exclamation'],
            ['&iquest;',    'questionmark'],
            ['&para;',      'pilcrow'],
            ['&plusmn;',    'plusminus'],
            ['&divide;',    'divide'],
            ['&micro;',     'micron'],
            ['&middot;',    'middledot'],
            ['&ldquo;',     'leftdouble'],
            ['&rdquo;',     'rightdouble'],
            ['&laquo;',     'guillemetsl'],
            ['&raquo;',     'guillemetsr']
        ],

        init: function () {
            $.extend(this, $.Redactor.fn);

            this.initLangOpt();
            this.addButtonInToolbar();
        },

        initLangOpt: function () {
            // English
            this.setLangParam('en', 'button_title', 'Inserting special characters');
            this.setLangParam('en', 'modal_title', 'Select the special character');

            // Russian
            this.setLangParam('ru', 'button_title', 'Специальные символы');
            this.setLangParam('ru', 'modal_title', 'Выберите специальный символ');
        },

        setLangParam: function (lang, name, value) {
            if (typeof this.opts.langs[lang] === 'undefined') {
                this.opts.langs[lang] = {};
            }
            this.opts.langs[lang]['plugin_charmap_' + name] = value;
        },

        getLangParam: function (name) {
            return this.opts.langs[this.opts.lang]['plugin_charmap_' + name];
        },

        addButtonInToolbar: function () {
            this.buttonAdd(
                'charmap',
                this.getLangParam('button_title'),
                function () {
                    this.startPlugin();
                }
            );
            this.buttonSetLeft('charmap');
        },

        startPlugin: function () {
            var callback = $.proxy(function () {
                this.selectionSave();
                this.modalCharItem_Click();
                this.modalCloseButton_Click();
            }, this);

            this.modalInit(
                this.getLangParam('modal_title'),
                this.generateModalContent(),
                500,
                callback
            );
        },

        generateModalContent: function () {
            var i,
                charmapWrapper = $('<div>', {
                    'id': 'redactor_charmap_wrapper'
                }),
                charmapButton = $('<button>', {
                    'class': 'redactor_modal_btn'
                });

            for (i in this.chars) {
                if (this.chars.hasOwnProperty(i)) {
                    charmapWrapper.append(
                        charmapButton.clone().data('number', i).html(this.chars[i][0])
                    );
                }
            }

            return $('<div>').append(charmapWrapper.clone()).html();
        },

        modalCharItem_Click: function () {
            $(document).ready(
                $.proxy(function () {
                    $('#redactor_charmap_wrapper > button').on('click',
                        $.proxy(function (event) {
                            this.insertHtml($(event.target).text());
                            this.buttonInactive('charmap');
                            this.modalClose();
                        }, this));
                }, this)
            );
        },

        modalCloseButton_Click: function () {
            $('#redactor_modal_close').on('click',
                $.proxy(function () {
                    this.buttonInactive('charmap');
                }, this));
        }
    };

}) (jQuery);
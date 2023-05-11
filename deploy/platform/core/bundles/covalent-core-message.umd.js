(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/icon'), require('@covalent/core/common')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/message', ['exports', '@angular/core', '@angular/common', '@angular/material/icon', '@covalent/core/common'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.message = {}), global.ng.core, global.ng.common, global.ng.material.icon, global.covalent.core.common));
}(this, (function (exports, core, common, icon, common$1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdMessageContainerDirective = /** @class */ (function () {
        function TdMessageContainerDirective(viewContainer) {
            this.viewContainer = viewContainer;
        }
        TdMessageContainerDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdMessageContainer]',
                    },] }
        ];
        /** @nocollapse */
        TdMessageContainerDirective.ctorParameters = function () { return [
            { type: core.ViewContainerRef }
        ]; };
        return TdMessageContainerDirective;
    }());
    if (false) {
        /** @type {?} */
        TdMessageContainerDirective.prototype.viewContainer;
    }
    var TdMessageComponent = /** @class */ (function () {
        function TdMessageComponent(_renderer, _changeDetectorRef, _elementRef) {
            this._renderer = _renderer;
            this._changeDetectorRef = _changeDetectorRef;
            this._elementRef = _elementRef;
            this._opened = true;
            this._hidden = false;
            this._animating = false;
            this._initialized = false;
            /**
             * icon?: string
             *
             * The icon to be displayed before the title.
             * Defaults to `info_outline` icon
             */
            this.icon = 'info_outline';
            this._renderer.addClass(this._elementRef.nativeElement, 'td-message');
        }
        Object.defineProperty(TdMessageComponent.prototype, "collapsedAnimation", {
            /**
             * Binding host to tdCollapse animation
             */
            get: /**
             * Binding host to tdCollapse animation
             * @return {?}
             */
            function () {
                return { value: !this._opened, duration: 100 };
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdMessageComponent.prototype, "hidden", {
            /**
             * Binding host to display style when hidden
             */
            get: /**
             * Binding host to display style when hidden
             * @return {?}
             */
            function () {
                return this._hidden ? 'none' : undefined;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdMessageComponent.prototype, "color", {
            get: /**
             * @return {?}
             */
            function () {
                return this._color;
            },
            /**
             * color?: primary | accent | warn
             *
             * Sets the color of the message.
             * Can also use any material color: purple | light-blue, etc.
             */
            set: /**
             * color?: primary | accent | warn
             *
             * Sets the color of the message.
             * Can also use any material color: purple | light-blue, etc.
             * @param {?} color
             * @return {?}
             */
            function (color) {
                this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
                this._renderer.removeClass(this._elementRef.nativeElement, 'bgc-' + this._color + '-100');
                this._renderer.removeClass(this._elementRef.nativeElement, 'tc-' + this._color + '-700');
                if (color === 'primary' || color === 'accent' || color === 'warn') {
                    this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + color);
                }
                else {
                    this._renderer.addClass(this._elementRef.nativeElement, 'bgc-' + color + '-100');
                    this._renderer.addClass(this._elementRef.nativeElement, 'tc-' + color + '-700');
                }
                this._color = color;
                this._changeDetectorRef.markForCheck();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdMessageComponent.prototype, "opened", {
            get: /**
             * @return {?}
             */
            function () {
                return this._opened;
            },
            /**
             * opened?: boolean
             *
             * Shows or hiddes the message depending on its value.
             * Defaults to 'true'.
             */
            set: /**
             * opened?: boolean
             *
             * Shows or hiddes the message depending on its value.
             * Defaults to 'true'.
             * @param {?} opened
             * @return {?}
             */
            function (opened) {
                if (this._initialized) {
                    if (opened) {
                        this.open();
                    }
                    else {
                        this.close();
                    }
                }
                else {
                    this._opened = opened;
                }
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Detach element when close animation is finished to set animating state to false
         * hidden state to true and detach element from DOM
         */
        /**
         * Detach element when close animation is finished to set animating state to false
         * hidden state to true and detach element from DOM
         * @return {?}
         */
        TdMessageComponent.prototype.animationDoneListener = /**
         * Detach element when close animation is finished to set animating state to false
         * hidden state to true and detach element from DOM
         * @return {?}
         */
        function () {
            if (!this._opened) {
                this._hidden = true;
                this._detach();
            }
            this._animating = false;
            this._changeDetectorRef.markForCheck();
        };
        /**
         * Initializes the component and attaches the content.
         */
        /**
         * Initializes the component and attaches the content.
         * @return {?}
         */
        TdMessageComponent.prototype.ngAfterViewInit = /**
         * Initializes the component and attaches the content.
         * @return {?}
         */
        function () {
            var _this = this;
            Promise.resolve(undefined).then((/**
             * @return {?}
             */
            function () {
                if (_this._opened) {
                    _this._attach();
                }
                _this._initialized = true;
            }));
        };
        /**
         * Renders the message on screen
         * Validates if there is an animation currently and if its already opened
         */
        /**
         * Renders the message on screen
         * Validates if there is an animation currently and if its already opened
         * @return {?}
         */
        TdMessageComponent.prototype.open = /**
         * Renders the message on screen
         * Validates if there is an animation currently and if its already opened
         * @return {?}
         */
        function () {
            if (!this._opened && !this._animating) {
                this._opened = true;
                this._attach();
                this._startAnimationState();
            }
        };
        /**
         * Removes the message content from screen.
         * Validates if there is an animation currently and if its already closed
         */
        /**
         * Removes the message content from screen.
         * Validates if there is an animation currently and if its already closed
         * @return {?}
         */
        TdMessageComponent.prototype.close = /**
         * Removes the message content from screen.
         * Validates if there is an animation currently and if its already closed
         * @return {?}
         */
        function () {
            if (this._opened && !this._animating) {
                this._opened = false;
                this._startAnimationState();
            }
        };
        /**
         * Toggles between open and close depending on state.
         */
        /**
         * Toggles between open and close depending on state.
         * @return {?}
         */
        TdMessageComponent.prototype.toggle = /**
         * Toggles between open and close depending on state.
         * @return {?}
         */
        function () {
            if (this._opened) {
                this.close();
            }
            else {
                this.open();
            }
        };
        /**
         * Method to set the state before starting an animation
         */
        /**
         * Method to set the state before starting an animation
         * @private
         * @return {?}
         */
        TdMessageComponent.prototype._startAnimationState = /**
         * Method to set the state before starting an animation
         * @private
         * @return {?}
         */
        function () {
            this._animating = true;
            this._hidden = false;
            this._changeDetectorRef.markForCheck();
        };
        /**
         * Method to attach template to DOM
         */
        /**
         * Method to attach template to DOM
         * @private
         * @return {?}
         */
        TdMessageComponent.prototype._attach = /**
         * Method to attach template to DOM
         * @private
         * @return {?}
         */
        function () {
            this._childElement.viewContainer.createEmbeddedView(this._template);
            this._changeDetectorRef.markForCheck();
        };
        /**
         * Method to detach template from DOM
         */
        /**
         * Method to detach template from DOM
         * @private
         * @return {?}
         */
        TdMessageComponent.prototype._detach = /**
         * Method to detach template from DOM
         * @private
         * @return {?}
         */
        function () {
            this._childElement.viewContainer.clear();
            this._changeDetectorRef.markForCheck();
        };
        TdMessageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-message',
                        template: "<div tdMessageContainer></div>\n<ng-template>\n  <div class=\"td-message-wrapper\">\n    <mat-icon class=\"td-message-icon\">{{ icon }}</mat-icon>\n    <div class=\"td-message-labels\">\n      <div *ngIf=\"label\" class=\"td-message-label\">{{ label }}</div>\n      <div *ngIf=\"sublabel\" class=\"td-message-sublabel\">{{ sublabel }}</div>\n    </div>\n    <ng-content select=\"[td-message-actions]\"></ng-content>\n  </div>\n</ng-template>\n",
                        animations: [common$1.tdCollapseAnimation],
                        styles: [":host{display:block}:host .td-message-wrapper{padding:8px 16px;min-height:52px;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host .td-message-wrapper .td-message-labels{-webkit-box-flex:1;-ms-flex:1;flex:1}.td-message-icon{margin-right:16px}::ng-deep [dir=rtl] .td-message-icon{margin-left:16px;margin-right:0}"]
                    }] }
        ];
        /** @nocollapse */
        TdMessageComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef }
        ]; };
        TdMessageComponent.propDecorators = {
            _childElement: [{ type: core.ViewChild, args: [TdMessageContainerDirective, { static: true },] }],
            _template: [{ type: core.ViewChild, args: [core.TemplateRef,] }],
            collapsedAnimation: [{ type: core.HostBinding, args: ['@tdCollapse',] }],
            hidden: [{ type: core.HostBinding, args: ['style.display',] }],
            label: [{ type: core.Input }],
            sublabel: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            color: [{ type: core.Input, args: ['color',] }],
            opened: [{ type: core.Input, args: ['opened',] }],
            animationDoneListener: [{ type: core.HostListener, args: ['@tdCollapse.done',] }]
        };
        return TdMessageComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdMessageComponent.prototype._color;
        /**
         * @type {?}
         * @private
         */
        TdMessageComponent.prototype._opened;
        /**
         * @type {?}
         * @private
         */
        TdMessageComponent.prototype._hidden;
        /**
         * @type {?}
         * @private
         */
        TdMessageComponent.prototype._animating;
        /**
         * @type {?}
         * @private
         */
        TdMessageComponent.prototype._initialized;
        /** @type {?} */
        TdMessageComponent.prototype._childElement;
        /** @type {?} */
        TdMessageComponent.prototype._template;
        /**
         * label: string
         *
         * Sets the label of the message.
         * @type {?}
         */
        TdMessageComponent.prototype.label;
        /**
         * sublabel?: string
         *
         * Sets the sublabel of the message.
         * @type {?}
         */
        TdMessageComponent.prototype.sublabel;
        /**
         * icon?: string
         *
         * The icon to be displayed before the title.
         * Defaults to `info_outline` icon
         * @type {?}
         */
        TdMessageComponent.prototype.icon;
        /**
         * @type {?}
         * @private
         */
        TdMessageComponent.prototype._renderer;
        /**
         * @type {?}
         * @private
         */
        TdMessageComponent.prototype._changeDetectorRef;
        /**
         * @type {?}
         * @private
         */
        TdMessageComponent.prototype._elementRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_MESSAGE = [TdMessageComponent, TdMessageContainerDirective];
    var CovalentMessageModule = /** @class */ (function () {
        function CovalentMessageModule() {
        }
        CovalentMessageModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, icon.MatIconModule],
                        declarations: [TD_MESSAGE],
                        exports: [TD_MESSAGE],
                    },] }
        ];
        return CovalentMessageModule;
    }());

    exports.CovalentMessageModule = CovalentMessageModule;
    exports.TdMessageComponent = TdMessageComponent;
    exports.TdMessageContainerDirective = TdMessageContainerDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-message.umd.js.map

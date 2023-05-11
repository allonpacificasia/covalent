/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { mixinDisabled } from '@covalent/core/common';
var TdFileDropBase = /** @class */ (function () {
    function TdFileDropBase() {
    }
    return TdFileDropBase;
}());
export { TdFileDropBase };
/* tslint:disable-next-line */
/** @type {?} */
export var _TdFileDropMixinBase = mixinDisabled(TdFileDropBase);
var TdFileDropDirective = /** @class */ (function (_super) {
    __extends(TdFileDropDirective, _super);
    function TdFileDropDirective(_renderer, _element) {
        var _this = _super.call(this) || this;
        _this._renderer = _renderer;
        _this._element = _element;
        _this._multiple = false;
        /**
         * fileDrop?: function
         * Event emitted when a file or files are dropped in host element after being validated.
         * Emits a [FileList | File] object.
         */
        _this.fileDrop = new EventEmitter();
        return _this;
    }
    Object.defineProperty(TdFileDropDirective.prototype, "multiple", {
        /**
         * multiple?: boolean
         * Sets whether multiple files can be dropped at once in host element, or just a single file.
         * Can also be 'multiple' native attribute.
         */
        set: /**
         * multiple?: boolean
         * Sets whether multiple files can be dropped at once in host element, or just a single file.
         * Can also be 'multiple' native attribute.
         * @param {?} multiple
         * @return {?}
         */
        function (multiple) {
            this._multiple = coerceBooleanProperty(multiple);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TdFileDropDirective.prototype, "multipleBinding", {
        /**
         * Binds native 'multiple' attribute if [multiple] property is 'true'.
         */
        get: /**
         * Binds native 'multiple' attribute if [multiple] property is 'true'.
         * @return {?}
         */
        function () {
            return this._multiple ? '' : undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TdFileDropDirective.prototype, "disabledBinding", {
        /**
         * Binds native 'disabled' attribute if [disabled] property is 'true'.
         */
        get: /**
         * Binds native 'disabled' attribute if [disabled] property is 'true'.
         * @return {?}
         */
        function () {
            return this.disabled ? '' : undefined;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Listens to 'drop' host event to get validated transfer items.
     * Emits the 'fileDrop' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
     * Stops event propagation and default action from browser for 'drop' event.
     */
    /**
     * Listens to 'drop' host event to get validated transfer items.
     * Emits the 'fileDrop' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
     * Stops event propagation and default action from browser for 'drop' event.
     * @param {?} event
     * @return {?}
     */
    TdFileDropDirective.prototype.onDrop = /**
     * Listens to 'drop' host event to get validated transfer items.
     * Emits the 'fileDrop' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
     * Stops event propagation and default action from browser for 'drop' event.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.disabled) {
            /** @type {?} */
            var transfer = ((/** @type {?} */ (event))).dataTransfer;
            /** @type {?} */
            var files = transfer.files;
            if (files.length) {
                /** @type {?} */
                var value = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
                this.fileDrop.emit(value);
            }
        }
        this._renderer.removeClass(this._element.nativeElement, 'drop-zone');
        this._stopEvent(event);
    };
    /**
     * Listens to 'dragover' host event to validate transfer items.
     * Checks if 'multiple' attr exists in host to allow multiple file drops.
     * Stops event propagation and default action from browser for 'dragover' event.
     */
    /**
     * Listens to 'dragover' host event to validate transfer items.
     * Checks if 'multiple' attr exists in host to allow multiple file drops.
     * Stops event propagation and default action from browser for 'dragover' event.
     * @param {?} event
     * @return {?}
     */
    TdFileDropDirective.prototype.onDragOver = /**
     * Listens to 'dragover' host event to validate transfer items.
     * Checks if 'multiple' attr exists in host to allow multiple file drops.
     * Stops event propagation and default action from browser for 'dragover' event.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var transfer = ((/** @type {?} */ (event))).dataTransfer;
        transfer.dropEffect = this._typeCheck(transfer.types);
        if (this.disabled ||
            (!this._multiple && ((transfer.items && transfer.items.length > 1) || ((/** @type {?} */ (transfer))).mozItemCount > 1))) {
            transfer.dropEffect = 'none';
        }
        else {
            transfer.dropEffect = 'copy';
        }
        this._stopEvent(event);
    };
    /**
     * Listens to 'dragenter' host event to add animation class 'drop-zone' which can be overriden in host.
     * Stops event propagation and default action from browser for 'dragenter' event.
     */
    /**
     * Listens to 'dragenter' host event to add animation class 'drop-zone' which can be overriden in host.
     * Stops event propagation and default action from browser for 'dragenter' event.
     * @param {?} event
     * @return {?}
     */
    TdFileDropDirective.prototype.onDragEnter = /**
     * Listens to 'dragenter' host event to add animation class 'drop-zone' which can be overriden in host.
     * Stops event propagation and default action from browser for 'dragenter' event.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.disabled) {
            this._renderer.addClass(this._element.nativeElement, 'drop-zone');
        }
        this._stopEvent(event);
    };
    /**
     * Listens to 'dragleave' host event to remove animation class 'drop-zone'.
     * Stops event propagation and default action from browser for 'dragleave' event.
     */
    /**
     * Listens to 'dragleave' host event to remove animation class 'drop-zone'.
     * Stops event propagation and default action from browser for 'dragleave' event.
     * @param {?} event
     * @return {?}
     */
    TdFileDropDirective.prototype.onDragLeave = /**
     * Listens to 'dragleave' host event to remove animation class 'drop-zone'.
     * Stops event propagation and default action from browser for 'dragleave' event.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._renderer.removeClass(this._element.nativeElement, 'drop-zone');
        this._stopEvent(event);
    };
    /**
     * Validates if the transfer item types are 'Files'.
     */
    /**
     * Validates if the transfer item types are 'Files'.
     * @private
     * @param {?} types
     * @return {?}
     */
    TdFileDropDirective.prototype._typeCheck = /**
     * Validates if the transfer item types are 'Files'.
     * @private
     * @param {?} types
     * @return {?}
     */
    function (types) {
        /** @type {?} */
        var dropEffect = 'none';
        if (types &&
            ((((/** @type {?} */ (types))).contains && ((/** @type {?} */ (types))).contains('Files')) ||
                (((/** @type {?} */ (types))).indexOf && ((/** @type {?} */ (types))).indexOf('Files') !== -1))) {
            dropEffect = 'copy';
        }
        return dropEffect;
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    TdFileDropDirective.prototype._stopEvent = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    TdFileDropDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdFileDrop]',
                    inputs: ['disabled'],
                },] }
    ];
    /** @nocollapse */
    TdFileDropDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    TdFileDropDirective.propDecorators = {
        multiple: [{ type: Input, args: ['multiple',] }],
        fileDrop: [{ type: Output }],
        multipleBinding: [{ type: HostBinding, args: ['attr.multiple',] }],
        disabledBinding: [{ type: HostBinding, args: ['attr.disabled',] }],
        onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }],
        onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
        onDragEnter: [{ type: HostListener, args: ['dragenter', ['$event'],] }],
        onDragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }]
    };
    return TdFileDropDirective;
}(_TdFileDropMixinBase));
export { TdFileDropDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdFileDropDirective.prototype._multiple;
    /**
     * fileDrop?: function
     * Event emitted when a file or files are dropped in host element after being validated.
     * Emits a [FileList | File] object.
     * @type {?}
     */
    TdFileDropDirective.prototype.fileDrop;
    /**
     * @type {?}
     * @private
     */
    TdFileDropDirective.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    TdFileDropDirective.prototype._element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1kcm9wLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2ZpbGUvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2ZpbGUtZHJvcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFOUQsT0FBTyxFQUFlLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRW5FO0lBQUE7SUFBNkIsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQUE5QixJQUE4Qjs7OztBQUc5QixNQUFNLEtBQU8sb0JBQW9CLEdBQUcsYUFBYSxDQUFDLGNBQWMsQ0FBQztBQUVqRTtJQUl5Qyx1Q0FBb0I7SUFvQzNELDZCQUFvQixTQUFvQixFQUFVLFFBQW9CO1FBQXRFLFlBQ0UsaUJBQU8sU0FDUjtRQUZtQixlQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVUsY0FBUSxHQUFSLFFBQVEsQ0FBWTtRQW5DOUQsZUFBUyxHQUFZLEtBQUssQ0FBQzs7Ozs7O1FBaUJ6QixjQUFRLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDOztJQW9CeEYsQ0FBQztJQTlCRCxzQkFDSSx5Q0FBUTtRQU5aOzs7O1dBSUc7Ozs7Ozs7O1FBQ0gsVUFDYSxRQUFpQjtZQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELENBQUM7OztPQUFBO0lBWUQsc0JBQ0ksZ0RBQWU7UUFKbkI7O1dBRUc7Ozs7O1FBQ0g7WUFFRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FB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dGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbmltcG9ydCB7IElDYW5EaXNhYmxlLCBtaXhpbkRpc2FibGVkIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuZXhwb3J0IGNsYXNzIFRkRmlsZURyb3BCYXNlIHt9XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGNvbnN0IF9UZEZpbGVEcm9wTWl4aW5CYXNlID0gbWl4aW5EaXNhYmxlZChUZEZpbGVEcm9wQmFzZSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZEZpbGVEcm9wXScsXG4gIGlucHV0czogWydkaXNhYmxlZCddLFxufSlcbmV4cG9ydCBjbGFzcyBUZEZpbGVEcm9wRGlyZWN0aXZlIGV4dGVuZHMgX1RkRmlsZURyb3BNaXhpbkJhc2UgaW1wbGVtZW50cyBJQ2FuRGlzYWJsZSB7XG4gIHByaXZhdGUgX211bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIG11bHRpcGxlPzogYm9vbGVhblxuICAgKiBTZXRzIHdoZXRoZXIgbXVsdGlwbGUgZmlsZXMgY2FuIGJlIGRyb3BwZWQgYXQgb25jZSBpbiBob3N0IGVsZW1lbnQsIG9yIGp1c3QgYSBzaW5nbGUgZmlsZS5cbiAgICogQ2FuIGFsc28gYmUgJ211bHRpcGxlJyBuYXRpdmUgYXR0cmlidXRlLlxuICAgKi9cbiAgQElucHV0KCdtdWx0aXBsZScpXG4gIHNldCBtdWx0aXBsZShtdWx0aXBsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX211bHRpcGxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KG11bHRpcGxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBmaWxlRHJvcD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBhIGZpbGUgb3IgZmlsZXMgYXJlIGRyb3BwZWQgaW4gaG9zdCBlbGVtZW50IGFmdGVyIGJlaW5nIHZhbGlkYXRlZC5cbiAgICogRW1pdHMgYSBbRmlsZUxpc3QgfCBGaWxlXSBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCkgZmlsZURyb3A6IEV2ZW50RW1pdHRlcjxGaWxlTGlzdCB8IEZpbGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlTGlzdCB8IEZpbGU+KCk7XG5cbiAgLyoqXG4gICAqIEJpbmRzIG5hdGl2ZSAnbXVsdGlwbGUnIGF0dHJpYnV0ZSBpZiBbbXVsdGlwbGVdIHByb3BlcnR5IGlzICd0cnVlJy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5tdWx0aXBsZScpXG4gIGdldCBtdWx0aXBsZUJpbmRpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlwbGUgPyAnJyA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kcyBuYXRpdmUgJ2Rpc2FibGVkJyBhdHRyaWJ1dGUgaWYgW2Rpc2FibGVkXSBwcm9wZXJ0eSBpcyAndHJ1ZScuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGlzYWJsZWQnKVxuICBnZXQgZGlzYWJsZWRCaW5kaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgPyAnJyA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbnMgdG8gJ2Ryb3AnIGhvc3QgZXZlbnQgdG8gZ2V0IHZhbGlkYXRlZCB0cmFuc2ZlciBpdGVtcy5cbiAgICogRW1pdHMgdGhlICdmaWxlRHJvcCcgZXZlbnQgd2l0aCBhIFtGaWxlTGlzdF0gb3IgW0ZpbGVdIGRlcGVuZGluZyBpZiAnbXVsdGlwbGUnIGF0dHIgZXhpc3RzIGluIGhvc3QuXG4gICAqIFN0b3BzIGV2ZW50IHByb3BhZ2F0aW9uIGFuZCBkZWZhdWx0IGFjdGlvbiBmcm9tIGJyb3dzZXIgZm9yICdkcm9wJyBldmVudC5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxuICBvbkRyb3AoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICBjb25zdCB0cmFuc2ZlcjogRGF0YVRyYW5zZmVyID0gKDxEcmFnRXZlbnQ+ZXZlbnQpLmRhdGFUcmFuc2ZlcjtcbiAgICAgIGNvbnN0IGZpbGVzOiBGaWxlTGlzdCA9IHRyYW5zZmVyLmZpbGVzO1xuICAgICAgaWYgKGZpbGVzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCB2YWx1ZTogRmlsZUxpc3QgfCBGaWxlID0gdGhpcy5fbXVsdGlwbGUgPyAoZmlsZXMubGVuZ3RoID4gMSA/IGZpbGVzIDogZmlsZXNbMF0pIDogZmlsZXNbMF07XG4gICAgICAgIHRoaXMuZmlsZURyb3AuZW1pdCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Ryb3Atem9uZScpO1xuICAgIHRoaXMuX3N0b3BFdmVudChldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyB0byAnZHJhZ292ZXInIGhvc3QgZXZlbnQgdG8gdmFsaWRhdGUgdHJhbnNmZXIgaXRlbXMuXG4gICAqIENoZWNrcyBpZiAnbXVsdGlwbGUnIGF0dHIgZXhpc3RzIGluIGhvc3QgdG8gYWxsb3cgbXVsdGlwbGUgZmlsZSBkcm9wcy5cbiAgICogU3RvcHMgZXZlbnQgcHJvcGFnYXRpb24gYW5kIGRlZmF1bHQgYWN0aW9uIGZyb20gYnJvd3NlciBmb3IgJ2RyYWdvdmVyJyBldmVudC5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSlcbiAgb25EcmFnT3ZlcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0cmFuc2ZlcjogRGF0YVRyYW5zZmVyID0gKDxEcmFnRXZlbnQ+ZXZlbnQpLmRhdGFUcmFuc2ZlcjtcbiAgICB0cmFuc2Zlci5kcm9wRWZmZWN0ID0gdGhpcy5fdHlwZUNoZWNrKHRyYW5zZmVyLnR5cGVzKTtcbiAgICBpZiAoXG4gICAgICB0aGlzLmRpc2FibGVkIHx8XG4gICAgICAoIXRoaXMuX211bHRpcGxlICYmICgodHJhbnNmZXIuaXRlbXMgJiYgdHJhbnNmZXIuaXRlbXMubGVuZ3RoID4gMSkgfHwgKDxhbnk+dHJhbnNmZXIpLm1vekl0ZW1Db3VudCA+IDEpKVxuICAgICkge1xuICAgICAgdHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdub25lJztcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdjb3B5JztcbiAgICB9XG4gICAgdGhpcy5fc3RvcEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvICdkcmFnZW50ZXInIGhvc3QgZXZlbnQgdG8gYWRkIGFuaW1hdGlvbiBjbGFzcyAnZHJvcC16b25lJyB3aGljaCBjYW4gYmUgb3ZlcnJpZGVuIGluIGhvc3QuXG4gICAqIFN0b3BzIGV2ZW50IHByb3BhZ2F0aW9uIGFuZCBkZWZhdWx0IGFjdGlvbiBmcm9tIGJyb3dzZXIgZm9yICdkcmFnZW50ZXInIGV2ZW50LlxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ2VudGVyJywgWyckZXZlbnQnXSlcbiAgb25EcmFnRW50ZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkcm9wLXpvbmUnKTtcbiAgICB9XG4gICAgdGhpcy5fc3RvcEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvICdkcmFnbGVhdmUnIGhvc3QgZXZlbnQgdG8gcmVtb3ZlIGFuaW1hdGlvbiBjbGFzcyAnZHJvcC16b25lJy5cbiAgICogU3RvcHMgZXZlbnQgcHJvcGFnYXRpb24gYW5kIGRlZmF1bHQgYWN0aW9uIGZyb20gYnJvd3NlciBmb3IgJ2RyYWdsZWF2ZScgZXZlbnQuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdkcmFnbGVhdmUnLCBbJyRldmVudCddKVxuICBvbkRyYWdMZWF2ZShldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkcm9wLXpvbmUnKTtcbiAgICB0aGlzLl9zdG9wRXZlbnQoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBpZiB0aGUgdHJhbnNmZXIgaXRlbSB0eXBlcyBhcmUgJ0ZpbGVzJy5cbiAgICovXG4gIHByaXZhdGUgX3R5cGVDaGVjayh0eXBlczogUmVhZG9ubHlBcnJheTxzdHJpbmc+IHwgRE9NU3RyaW5nTGlzdCk6IFwibm9uZVwiIHwgXCJjb3B5XCIgfCBcImxpbmtcIiB8IFwibW92ZVwiIHtcbiAgICBsZXQgZHJvcEVmZmVjdDogXCJub25lXCIgfCBcImNvcHlcIiB8IFwibGlua1wiIHwgXCJtb3ZlXCIgPSAnbm9uZSc7XG4gICAgaWYgKFxuICAgICAgdHlwZXMgJiZcbiAgICAgICgoKHR5cGVzIGFzIGFueSkuY29udGFpbnMgJiYgKHR5cGVzIGFzIGFueSkuY29udGFpbnMoJ0ZpbGVzJykpIHx8XG4gICAgICAgICgodHlwZXMgYXMgYW55KS5pbmRleE9mICYmICh0eXBlcyBhcyBhbnkpLmluZGV4T2YoJ0ZpbGVzJykgIT09IC0xKSlcbiAgICApIHtcbiAgICAgIGRyb3BFZmZlY3QgPSAnY29weSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRyb3BFZmZlY3Q7XG4gIH1cblxuICBwcml2YXRlIF9zdG9wRXZlbnQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuIl19
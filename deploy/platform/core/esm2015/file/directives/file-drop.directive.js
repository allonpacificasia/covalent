/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { mixinDisabled } from '@covalent/core/common';
export class TdFileDropBase {
}
/* tslint:disable-next-line */
/** @type {?} */
export const _TdFileDropMixinBase = mixinDisabled(TdFileDropBase);
export class TdFileDropDirective extends _TdFileDropMixinBase {
    /**
     * @param {?} _renderer
     * @param {?} _element
     */
    constructor(_renderer, _element) {
        super();
        this._renderer = _renderer;
        this._element = _element;
        this._multiple = false;
        /**
         * fileDrop?: function
         * Event emitted when a file or files are dropped in host element after being validated.
         * Emits a [FileList | File] object.
         */
        this.fileDrop = new EventEmitter();
    }
    /**
     * multiple?: boolean
     * Sets whether multiple files can be dropped at once in host element, or just a single file.
     * Can also be 'multiple' native attribute.
     * @param {?} multiple
     * @return {?}
     */
    set multiple(multiple) {
        this._multiple = coerceBooleanProperty(multiple);
    }
    /**
     * Binds native 'multiple' attribute if [multiple] property is 'true'.
     * @return {?}
     */
    get multipleBinding() {
        return this._multiple ? '' : undefined;
    }
    /**
     * Binds native 'disabled' attribute if [disabled] property is 'true'.
     * @return {?}
     */
    get disabledBinding() {
        return this.disabled ? '' : undefined;
    }
    /**
     * Listens to 'drop' host event to get validated transfer items.
     * Emits the 'fileDrop' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
     * Stops event propagation and default action from browser for 'drop' event.
     * @param {?} event
     * @return {?}
     */
    onDrop(event) {
        if (!this.disabled) {
            /** @type {?} */
            const transfer = ((/** @type {?} */ (event))).dataTransfer;
            /** @type {?} */
            const files = transfer.files;
            if (files.length) {
                /** @type {?} */
                const value = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
                this.fileDrop.emit(value);
            }
        }
        this._renderer.removeClass(this._element.nativeElement, 'drop-zone');
        this._stopEvent(event);
    }
    /**
     * Listens to 'dragover' host event to validate transfer items.
     * Checks if 'multiple' attr exists in host to allow multiple file drops.
     * Stops event propagation and default action from browser for 'dragover' event.
     * @param {?} event
     * @return {?}
     */
    onDragOver(event) {
        /** @type {?} */
        const transfer = ((/** @type {?} */ (event))).dataTransfer;
        transfer.dropEffect = this._typeCheck(transfer.types);
        if (this.disabled ||
            (!this._multiple && ((transfer.items && transfer.items.length > 1) || ((/** @type {?} */ (transfer))).mozItemCount > 1))) {
            transfer.dropEffect = 'none';
        }
        else {
            transfer.dropEffect = 'copy';
        }
        this._stopEvent(event);
    }
    /**
     * Listens to 'dragenter' host event to add animation class 'drop-zone' which can be overriden in host.
     * Stops event propagation and default action from browser for 'dragenter' event.
     * @param {?} event
     * @return {?}
     */
    onDragEnter(event) {
        if (!this.disabled) {
            this._renderer.addClass(this._element.nativeElement, 'drop-zone');
        }
        this._stopEvent(event);
    }
    /**
     * Listens to 'dragleave' host event to remove animation class 'drop-zone'.
     * Stops event propagation and default action from browser for 'dragleave' event.
     * @param {?} event
     * @return {?}
     */
    onDragLeave(event) {
        this._renderer.removeClass(this._element.nativeElement, 'drop-zone');
        this._stopEvent(event);
    }
    /**
     * Validates if the transfer item types are 'Files'.
     * @private
     * @param {?} types
     * @return {?}
     */
    _typeCheck(types) {
        /** @type {?} */
        let dropEffect = 'none';
        if (types &&
            ((((/** @type {?} */ (types))).contains && ((/** @type {?} */ (types))).contains('Files')) ||
                (((/** @type {?} */ (types))).indexOf && ((/** @type {?} */ (types))).indexOf('Files') !== -1))) {
            dropEffect = 'copy';
        }
        return dropEffect;
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    _stopEvent(event) {
        event.preventDefault();
        event.stopPropagation();
    }
}
TdFileDropDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdFileDrop]',
                inputs: ['disabled'],
            },] }
];
/** @nocollapse */
TdFileDropDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1kcm9wLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2ZpbGUvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2ZpbGUtZHJvcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU5RCxPQUFPLEVBQWUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFbkUsTUFBTSxPQUFPLGNBQWM7Q0FBRzs7O0FBRzlCLE1BQU0sT0FBTyxvQkFBb0IsR0FBRyxhQUFhLENBQUMsY0FBYyxDQUFDO0FBTWpFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxvQkFBb0I7Ozs7O0lBb0MzRCxZQUFvQixTQUFvQixFQUFVLFFBQW9CO1FBQ3BFLEtBQUssRUFBRSxDQUFDO1FBRFUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFVLGFBQVEsR0FBUixRQUFRLENBQVk7UUFuQzlELGNBQVMsR0FBWSxLQUFLLENBQUM7Ozs7OztRQWlCekIsYUFBUSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztJQW9CeEYsQ0FBQzs7Ozs7Ozs7SUE5QkQsSUFDSSxRQUFRLENBQUMsUUFBaUI7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7OztJQVlELElBQ0ksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBS0QsSUFD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QSxVQUFVLEdBQUcsTUFBTSxDQUFDO1NBQ3JCO1FBRUQsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7Ozs7O0lBRU8sVUFBVSxDQUFDLEtBQVk7UUFDN0IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7WUE1SEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUM7YUFDckI7Ozs7WUFiK0MsU0FBUztZQUFyQixVQUFVOzs7dUJBc0IzQyxLQUFLLFNBQUMsVUFBVTt1QkFVaEIsTUFBTTs4QkFLTixXQUFXLFNBQUMsZUFBZTs4QkFRM0IsV0FBVyxTQUFDLGVBQWU7cUJBYzNCLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7eUJBbUIvQixZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDOzBCQW1CbkMsWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQzswQkFZcEMsWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7OztJQTlGckMsd0NBQW1DOzs7Ozs7O0lBaUJuQyx1Q0FBd0Y7Ozs7O0lBa0I1RSx3Q0FBNEI7Ozs7O0lBQUUsdUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhvc3RMaXN0ZW5lciwgSG9zdEJpbmRpbmcsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuaW1wb3J0IHsgSUNhbkRpc2FibGUsIG1peGluRGlzYWJsZWQgfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5leHBvcnQgY2xhc3MgVGRGaWxlRHJvcEJhc2Uge31cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkRmlsZURyb3BNaXhpbkJhc2UgPSBtaXhpbkRpc2FibGVkKFRkRmlsZURyb3BCYXNlKTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkRmlsZURyb3BdJyxcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRkRmlsZURyb3BEaXJlY3RpdmUgZXh0ZW5kcyBfVGRGaWxlRHJvcE1peGluQmFzZSBpbXBsZW1lbnRzIElDYW5EaXNhYmxlIHtcbiAgcHJpdmF0ZSBfbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogbXVsdGlwbGU/OiBib29sZWFuXG4gICAqIFNldHMgd2hldGhlciBtdWx0aXBsZSBmaWxlcyBjYW4gYmUgZHJvcHBlZCBhdCBvbmNlIGluIGhvc3QgZWxlbWVudCwgb3IganVzdCBhIHNpbmdsZSBmaWxlLlxuICAgKiBDYW4gYWxzbyBiZSAnbXVsdGlwbGUnIG5hdGl2ZSBhdHRyaWJ1dGUuXG4gICAqL1xuICBASW5wdXQoJ211bHRpcGxlJylcbiAgc2V0IG11bHRpcGxlKG11bHRpcGxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXVsdGlwbGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkobXVsdGlwbGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIGZpbGVEcm9wPzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIGEgZmlsZSBvciBmaWxlcyBhcmUgZHJvcHBlZCBpbiBob3N0IGVsZW1lbnQgYWZ0ZXIgYmVpbmcgdmFsaWRhdGVkLlxuICAgKiBFbWl0cyBhIFtGaWxlTGlzdCB8IEZpbGVdIG9iamVjdC5cbiAgICovXG4gIEBPdXRwdXQoKSBmaWxlRHJvcDogRXZlbnRFbWl0dGVyPEZpbGVMaXN0IHwgRmlsZT4gPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVMaXN0IHwgRmlsZT4oKTtcblxuICAvKipcbiAgICogQmluZHMgbmF0aXZlICdtdWx0aXBsZScgYXR0cmlidXRlIGlmIFttdWx0aXBsZV0gcHJvcGVydHkgaXMgJ3RydWUnLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLm11bHRpcGxlJylcbiAgZ2V0IG11bHRpcGxlQmluZGluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aXBsZSA/ICcnIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmRzIG5hdGl2ZSAnZGlzYWJsZWQnIGF0dHJpYnV0ZSBpZiBbZGlzYWJsZWRdIHByb3BlcnR5IGlzICd0cnVlJy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5kaXNhYmxlZCcpXG4gIGdldCBkaXNhYmxlZEJpbmRpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCA/ICcnIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyB0byAnZHJvcCcgaG9zdCBldmVudCB0byBnZXQgdmFsaWRhdGVkIHRyYW5zZmVyIGl0ZW1zLlxuICAgKiBFbWl0cyB0aGUgJ2ZpbGVEcm9wJyBldmVudCB3aXRoIGEgW0ZpbGVMaXN0XSBvciBbRmlsZV0gZGVwZW5kaW5nIGlmICdtdWx0aXBsZScgYXR0ciBleGlzdHMgaW4gaG9zdC5cbiAgICogU3RvcHMgZXZlbnQgcHJvcGFnYXRpb24gYW5kIGRlZmF1bHQgYWN0aW9uIGZyb20gYnJvd3NlciBmb3IgJ2Ryb3AnIGV2ZW50LlxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXG4gIG9uRHJvcChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IHRyYW5zZmVyOiBEYXRhVHJhbnNmZXIgPSAoPERyYWdFdmVudD5ldmVudCkuZGF0YVRyYW5zZmVyO1xuICAgICAgY29uc3QgZmlsZXM6IEZpbGVMaXN0ID0gdHJhbnNmZXIuZmlsZXM7XG4gICAgICBpZiAoZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlOiBGaWxlTGlzdCB8IEZpbGUgPSB0aGlzLl9tdWx0aXBsZSA/IChmaWxlcy5sZW5ndGggPiAxID8gZmlsZXMgOiBmaWxlc1swXSkgOiBmaWxlc1swXTtcbiAgICAgICAgdGhpcy5maWxlRHJvcC5lbWl0KHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZHJvcC16b25lJyk7XG4gICAgdGhpcy5fc3RvcEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvICdkcmFnb3ZlcicgaG9zdCBldmVudCB0byB2YWxpZGF0ZSB0cmFuc2ZlciBpdGVtcy5cbiAgICogQ2hlY2tzIGlmICdtdWx0aXBsZScgYXR0ciBleGlzdHMgaW4gaG9zdCB0byBhbGxvdyBtdWx0aXBsZSBmaWxlIGRyb3BzLlxuICAgKiBTdG9wcyBldmVudCBwcm9wYWdhdGlvbiBhbmQgZGVmYXVsdCBhY3Rpb24gZnJvbSBicm93c2VyIGZvciAnZHJhZ292ZXInIGV2ZW50LlxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ292ZXInLCBbJyRldmVudCddKVxuICBvbkRyYWdPdmVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHRyYW5zZmVyOiBEYXRhVHJhbnNmZXIgPSAoPERyYWdFdmVudD5ldmVudCkuZGF0YVRyYW5zZmVyO1xuICAgIHRyYW5zZmVyLmRyb3BFZmZlY3QgPSB0aGlzLl90eXBlQ2hlY2sodHJhbnNmZXIudHlwZXMpO1xuICAgIGlmIChcbiAgICAgIHRoaXMuZGlzYWJsZWQgfHxcbiAgICAgICghdGhpcy5fbXVsdGlwbGUgJiYgKCh0cmFuc2Zlci5pdGVtcyAmJiB0cmFuc2Zlci5pdGVtcy5sZW5ndGggPiAxKSB8fCAoPGFueT50cmFuc2ZlcikubW96SXRlbUNvdW50ID4gMSkpXG4gICAgKSB7XG4gICAgICB0cmFuc2Zlci5kcm9wRWZmZWN0ID0gJ25vbmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2Zlci5kcm9wRWZmZWN0ID0gJ2NvcHknO1xuICAgIH1cbiAgICB0aGlzLl9zdG9wRXZlbnQoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbnMgdG8gJ2RyYWdlbnRlcicgaG9zdCBldmVudCB0byBhZGQgYW5pbWF0aW9uIGNsYXNzICdkcm9wLXpvbmUnIHdoaWNoIGNhbiBiZSBvdmVycmlkZW4gaW4gaG9zdC5cbiAgICogU3RvcHMgZXZlbnQgcHJvcGFnYXRpb24gYW5kIGRlZmF1bHQgYWN0aW9uIGZyb20gYnJvd3NlciBmb3IgJ2RyYWdlbnRlcicgZXZlbnQuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdkcmFnZW50ZXInLCBbJyRldmVudCddKVxuICBvbkRyYWdFbnRlcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Ryb3Atem9uZScpO1xuICAgIH1cbiAgICB0aGlzLl9zdG9wRXZlbnQoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbnMgdG8gJ2RyYWdsZWF2ZScgaG9zdCBldmVudCB0byByZW1vdmUgYW5pbWF0aW9uIGNsYXNzICdkcm9wLXpvbmUnLlxuICAgKiBTdG9wcyBldmVudCBwcm9wYWdhdGlvbiBhbmQgZGVmYXVsdCBhY3Rpb24gZnJvbSBicm93c2VyIGZvciAnZHJhZ2xlYXZlJyBldmVudC5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIFsnJGV2ZW50J10pXG4gIG9uRHJhZ0xlYXZlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Ryb3Atem9uZScpO1xuICAgIHRoaXMuX3N0b3BFdmVudChldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGlmIHRoZSB0cmFuc2ZlciBpdGVtIHR5cGVzIGFyZSAnRmlsZXMnLlxuICAgKi9cbiAgcHJpdmF0ZSBfdHlwZUNoZWNrKHR5cGVzOiBSZWFkb25seUFycmF5PHN0cmluZz4gfCBET01TdHJpbmdMaXN0KTogXCJub25lXCIgfCBcImNvcHlcIiB8IFwibGlua1wiIHwgXCJtb3ZlXCIge1xuICAgIGxldCBkcm9wRWZmZWN0OiBcIm5vbmVcIiB8IFwiY29weVwiIHwgXCJsaW5rXCIgfCBcIm1vdmVcIiA9ICdub25lJztcbiAgICBpZiAoXG4gICAgICB0eXBlcyAmJlxuICAgICAgKCgodHlwZXMgYXMgYW55KS5jb250YWlucyAmJiAodHlwZXMgYXMgYW55KS5jb250YWlucygnRmlsZXMnKSkgfHxcbiAgICAgICAgKCh0eXBlcyBhcyBhbnkpLmluZGV4T2YgJiYgKHR5cGVzIGFzIGFueSkuaW5kZXhPZignRmlsZXMnKSAhPT0gLTEpKVxuICAgICkge1xuICAgICAgZHJvcEVmZmVjdCA9ICdjb3B5JztcbiAgICB9XG5cbiAgICByZXR1cm4gZHJvcEVmZmVjdDtcbiAgfVxuXG4gIHByaXZhdGUgX3N0b3BFdmVudChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG4iXX0=